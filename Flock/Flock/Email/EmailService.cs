using Flock.Controllers;
using Flock.Exceptions;
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
        private List<Contact> contacts;
        private Campaign camp;
        private DateTime previousSend;
        private int caid;

        public String getFrequency() {
            return camp.frequency;
        }

        public DateTime getStartDate()
        {
            return camp.startDate;
        }

        public DateTime getPreviousSend() {
            return previousSend;
        
        }

        public override String ToString() {
            return "camp name" + camp.name;
        }

        public void setPreviousSend(DateTime newD)
        {
            this.previousSend = newD;
        }

        public EmailService(int caid) {
            /*
            this.contacts = new List<Contact>();
            this.contacts.Add(cont);

            this.camp = camp;

            this.frequency = frequency;*/


            //Receives campaignId and the coresponding aid and sends the campaign contents to the
            //group (specified in camp.groupId) of the account (known by the aid)
            try
            {
                camp = new CampaignsController().getCampFromCaid(caid);
                if (camp == null) throw new CampaignIsNullException("getCampFromCaid returned null");
            }
            catch (CampaignIsNullException e)
            {
                Debug.WriteLine(e.Message);
                return;
            }

            previousSend = camp.startDate;


            ActionResult actionResult = new GroupsController().GetContacts(camp.AID, camp.GID);

            var contentResult = actionResult as OkObjectResult;
            Object toBeCont = contentResult.Value;
            try
            {
                contacts = (List<Contact>)toBeCont;
            }
            catch (Exception e)
            {
                return;
            }
            this.caid = caid;
         

        }

        public async void mailSender()
        {

            try
            {
                camp = new CampaignsController().getCampFromCaid(caid);
                if (camp == null) throw new CampaignIsNullException("getCampFromCaid returned null");
            }
            catch (CampaignIsNullException e)
            {
                Debug.WriteLine(e.Message);
                return;
            }

            previousSend = camp.startDate;


            ActionResult actionResult = new GroupsController().GetContacts(camp.AID, camp.GID);

            var contentResult = actionResult as OkObjectResult;
            Object toBeCont = contentResult.Value;
            try
            {
                contacts = (List<Contact>)toBeCont;
            }
            catch (Exception e)
            {
                return;
            }

            Debug.WriteLine("campaign: " + camp.ToString() + " contacts: " + contacts.ToString());
            Debug.WriteLine("in mailSender");
            foreach (Contact c in contacts)
            {
                Debug.WriteLine(c.ToString());
                
                await customSend(userClient(c),mail(c));
            }
        }
        //uses contacts (list object) field to send a predeterminded message to the specified adresses 

        private async Task customSend(SmtpClient client,MailMessage mailMessage) {

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
