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
        private int groupId { get; }
        private String groupName { get; }
        private List<Contact> contacts { get; }
        private Campaign camp  { get; }

        public EmailService(int campaignId, int aid) { 
            //Receives campaignId and the coresponding aid and sends the campaign contents to the
            //group (specified in camp.groupId) of the account (known by the aid)
            List<Campaign> camps = new CampaignsController().Get(aid);

            camp = camps.Find((c)=> c.id == campaignId);
            
            Debug.WriteLine(camp.ToString());

            groupId = camp.groupId;
            
            List<Group> groups = new GroupsController().Get(aid);

            groupName = groups.Find((g) => g.id == groupId).name;

            contacts = new GroupsController().GetContacts(aid, groupName);

            mailSender();
        }
        

        
        

        public void mailSender()
        {

            foreach (Contact c in contacts)
            {
                Debug.WriteLine(c.ToString());
                string address = getUserName();
                string password = getPass();
                SmtpClient client = new SmtpClient("smtp.gmail.com", 587);
                client.UseDefaultCredentials = false;
                client.Credentials = new System.Net.NetworkCredential(address, password);
                client.EnableSsl = true;
                client.DeliveryMethod = SmtpDeliveryMethod.Network;

                

                MailMessage mailMessage = new MailMessage();
                mailMessage.From = new MailAddress(getUserName());

                mailMessage.To.Add(c.email);


                mailMessage.Body = camp.text;
                mailMessage.Subject = camp.subject;
                customSend(client, mailMessage);
                
            }

        }

        public async void customSend(SmtpClient client,MailMessage mailMessage) {

            Random rnd = new Random();
            await client.SendMailAsync(mailMessage);
            
        }


        public string getUserName()
        {
            return "flockflockflockflockflock@gmail.com";
        }
        public string getPass()
        {
            return "flock69a!";
        }
 
    }
}
