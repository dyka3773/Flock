using Flock.Controllers;
using Flock.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Net;
using System.Net.Mail;
using System.Threading;
using System.Threading.Tasks;

namespace SendEmail
{
    public class EmailService
    {
        public List<Contact> contacts;
        public Campaign camp;
        public long frequency;

        public long getFrequency() {
            return frequency;
        }

        public EmailService(Contact cont, Campaign camp, long frequency) {

            this.contacts = new List<Contact>();
            this.contacts.Add(cont);

            this.camp = camp;

            this.frequency = frequency;
            
            
            //Receives campaignId and the coresponding aid and sends the campaign contents to the
            //group (specified in camp.groupId) of the account (known by the aid)
           /* ActionResult actionResult = new CampaignsController().getCampFromCaid(campaignId);

            var contentResult = actionResult as OkObjectResult;
            Object toBeCamp = contentResult.Value;
            try
            {
                camp = (Campaign)toBeCamp;
            }
            catch (Exception e) {
                return;
            }

             frequency = camp.frequency;

            

            actionResult = new GroupsController().GetContacts(camp.AID, camp.GID);

            contentResult = actionResult as OkObjectResult;
            Object toBeCont = contentResult.Value;
            try
            {
                contacts = (List<Contact>)toBeCont;
            }
            catch (Exception e)
            {
                return;
            }

            Debug.WriteLine("campaign: "+camp.ToString()+" contacts: "+contacts.ToString());*/

        }

        public void  mailSender()
        {
            foreach (Contact c in contacts)
            {
                Debug.WriteLine(c.ToString());
                
                customSend(userClient(c),mail(c));
            }
        }
        //uses contacts (list object) field to send a predeterminded message to the specified adresses 

        private async void customSend(SmtpClient client,MailMessage mailMessage) {

            Random rnd = new Random();
            await client.SendMailAsync(mailMessage);
        }
        //sends asynchronously a message with a fixed client

        private MailMessage mail(Contact c) 
        {
            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress(getUserName());
            mailMessage.To.Add(c.email);
            mailMessage.Body = camp.text;
            mailMessage.Subject = camp.subject;
            return mailMessage;
        }
        //creates a mail message based on the recipient 
        //each time this method is called a new message is constructed with fixed sender and content but the recipient varies

        private SmtpClient userClient(Contact c) 
        {
            SmtpClient client = new SmtpClient("smtp.gmail.com", 587);
            client.UseDefaultCredentials = false;
            client.Credentials = new System.Net.NetworkCredential( getUserName(), getPass() );
            client.EnableSsl = true;
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            return client;
        }
        //creates a client based on the users credentials

        private string getUserName()
        {
            return "flockflockflockflockflock@gmail.com";
        }
        //gets the adress of the sender

        private string getPass()
        {
            return "flock69a!";
        }
        //gets the password of the sender
    }
}
