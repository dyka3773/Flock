using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Net;
using System.Net.Mail;
using System.Threading;
using System.Threading.Tasks;

namespace SendEmail
{
    class Program
    {

        static void Main(string[] args)
        {
            //userClientCreation() a client based on user crendetials
            //ContactListOfRecipientsCreation() the list of recipients
            //MailCreation() a method that sets subject and body for a mail
            //Sender(client,msg,list) sends mail
            //

            Debug.WriteLine(true, "Sending mail...");
            justDoIt();

            Thread.Sleep(int.MaxValue);
            //SendEmail("a","");  

        }



        public static void justDoIt()
        {

            //SmtpClient client = userClientCreation();
            List<String> contacts = ContactListOfRecipientsCreation();
            mailSender(contacts);

            //gets user's credential data from db and creates a client based on that
            //SmtpClient userClient =

            //This method creates a Mail massage with content from frontend to fill subject and body
            //field (To) is empty
            //MailSender(userClient,contacts);
            //
        }

        public static void mailSender(List<String> contacts)
        {

            foreach (string str in contacts)
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


                mailMessage.To.Add(str);


                mailMessage.Body = "h11aAAAAAAAAAAAAAAAAAAAwaad1";
                mailMessage.Subject = "a1wadaAAAAAAAAAAAAAAAAAAAAAAAAAwdwd11";
                customSend(client, mailMessage);
                
            }

        }

        public static async void customSend(SmtpClient client,MailMessage mailMessage) {

            Random rnd = new Random();
            int ran = rnd.Next(5000, 10000);  

            await Task.Delay(ran);

            await client.SendMailAsync(mailMessage);
            Console.WriteLine("ads"+ran);
        }

        public static List<String> ContactListOfRecipientsCreation()
        {
            //getFromDBContacts();//prepei na milhsw me ton 8anno na dw to api
            List<String> contacts = new List<String>();

            //fetch cnioataxdw
            contacts.Add("stefetoufe@gmail.com");
            contacts.Add("skarlatosstratos2@gmail.com");
            contacts.Add("thanos.psarras3@gmail.com");
            return contacts;
        }

        public static string getUserName()
        {
            return "flockflockflockflockflock@gmail.com";
        }
        public static string getPass()
        {
            return "flock69a!";
        }

       /* public static SmtpClient userClientCreation()
        {


            //getUserCredentialsFromDB();//returns user //token //


            








            //return client;



        }*/

        public static void getCotnacts()
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
