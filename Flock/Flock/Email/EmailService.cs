using Flock.Controllers;
using Flock.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Net;
using System.Net.Mail;
using System.Threading;
using System.Threading.Tasks;

namespace SendEmail
{
    class EmailService
    {
        private List<Contact> contacts;
        private Campaign camp;
        private string frequency;

        public String getFrequency() {
            return frequency;
        }

        public EmailService(int campaignId) { 
            //Receives campaignId and the coresponding aid and sends the campaign contents to the
            //group (specified in camp.groupId) of the account (known by the aid)
            camp = new CampaignsController().getCampFromCaid(campaignId);

            frequency = camp.frequency;
            
            Debug.WriteLine(camp.ToString());

            contacts = new GroupsController().GetContacts(camp.AID, camp.GID);

        }

        public void mailSender()
        {
            foreach (Contact c in contacts)
            {
                Debug.WriteLine(c.ToString());
                
                customSend(userClient(c),mail(c));
            }
        }
        //uses contacts (list object) field to send a predeterminded message to the specified adresses 

        public async void customSend(SmtpClient client,MailMessage mailMessage) {

            Random rnd = new Random();
            await client.SendMailAsync(mailMessage);
        }
        //sends asynchronously a message with a fixed client

        public MailMessage mail(Contact c) 
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

        public SmtpClient userClient(Contact c) 
        {
            SmtpClient client = new SmtpClient("something.com", 587);
            client.UseDefaultCredentials = false;
            client.Credentials = new System.Net.NetworkCredential( getUserName(), getPass() );
            client.EnableSsl = false;
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            return client;
        }
        //creates a client based on the users credentials

        public string getUserName()
        {
            return "imanemail@something.com";
        }
        //gets the adress of the sender

        public string getPass()
        {
            return "852456";
        }
        //gets the password of the sender
    }
}
