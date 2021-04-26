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
            camp = new CampaignsController().Get(campaignId);
            groupId = camp.groupId;
            groupName = new GroupsController().Get(groupId).name;
            contacts = new GroupsController().GetContacts(aid, groupName);
        }
        

        
        

        public void mailSender()
        {

            foreach (Contact c in contacts)
            {
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


                mailMessage.Body = "o skulos mou einai gkey";
                mailMessage.Subject = "a1wadaAAAAAAAAAAAAAAAAAAAAAAAAAwdwd11";
                customSend(client, mailMessage);
                
            }

        }

        public async void customSend(SmtpClient client,MailMessage mailMessage) {

            Random rnd = new Random();
            int ran = rnd.Next(5000, 10000);  

            await Task.Delay(ran);

            await client.SendMailAsync(mailMessage);
            Console.WriteLine("ads"+ran);
        }


        public string getUserName()
        {
            return "flockflockflockflockflock@gmail.com";
        }
        public string getPass()
        {
            return "flock69a!";
        }

       /* public static SmtpClient userClientCreation()
        {


            //getUserCredentialsFromDB();//returns user //token //


            








            //return client;



        }*/

        public void getCotnacts()
        {

        }

























































        /*SmtpClient client = new SmtpClient
           {
               DeliveryMethod = SmtpDeliveryMethod.Network,
               UseDefaultCredentials = false,
               EnableSsl = true,
               Host = "smtp.gmail.com",
               Port = 587,
               Credentials = new NetworkCredential(host, pwd)
           };*/


        /*//'emgamrqicxlewzgf'
        public static MailMessage MailCreation(string from, string to)
        {
          

            
            string subject = "Using the new SMTP client.";
            string body = @"Using this new feature, you can send an email message from an application very easily.";
            MailMessage message = new MailMessage(from, to, subject, body);

            return message;
        }

        public static void MailSender(SmtpClient user, List<String> contactList)
        {
            //multithreads
            foreach (string str in contactList) //Contact =adress,username 
            {
                MailMessage msg = MailCreation("flockflockflockflockflock@gmail.com", str);
                Sender(user, msg);
            }
        }

       

        public static void Sender(SmtpClient user, MailMessage msg)
        {
            try
            {
                Console.WriteLine("Sending mail...");
                Task.Run(()=>customSend(user, msg));
                


            }
            catch (SmtpException e)
            {
                Console.WriteLine(e);
            }
        }

        static async Task customSend(SmtpClient user, MailMessage msg)
        {
            
           // Random rnd = new Random();
            //int delay  = rnd.Next(200, 5000);

            await Task.Run(()=> user.Send(msg));
            Console.WriteLine("Done " + msg.To+"\n");

        }



        /* public static void SendEmail(string fromAddress, string pwd)
         {
             SmtpClient client = new SmtpClient
             {
                 DeliveryMethod = SmtpDeliveryMethod.Network,
                 UseDefaultCredentials = false,
                 EnableSsl = true,
                 Host = "smtp.gmail.com",
                 Port = 587,
                 Credentials = new NetworkCredential("haxemaniac1999@gmail.com", "emgamrqicxlewzgf")
             };

             string subject = "test mail";
             string body = "Omae wa moo,shindei rou.....NANI?";

             try
             {
                 Console.WriteLine("Sending mail...");
                 client.Send("haxemaniac1999@gmail.com", "stefetoufe@gmail.com", subject, body);
                 Console.WriteLine("Done");
             }
             catch (SmtpException e)
             {
                 Console.WriteLine(e);
             }

         }*/
    }
}
