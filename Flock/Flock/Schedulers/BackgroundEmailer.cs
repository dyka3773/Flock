using Flock.Models;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using SendEmail;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Flock.Schedulers
{
    public class BackgroundEmailer : BackgroundService
    {
        private readonly ILogger<BackgroundEmailer> logger;
        private List<EmailService> emails = new List<EmailService>();

        public void addEmail(EmailService email)
        {
            emails.Add(email);
        }

        public BackgroundEmailer(ILogger<BackgroundEmailer> logger)
        {
            this.logger = logger;

        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            await DoRealWork(stoppingToken);
        }

        private async Task DoRealWork(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {

                logger.LogInformation("30 seconds");
                EmailerHelper.sendEmails();
                await Task.Delay(30000, stoppingToken);



            }

        }
    }

    public static class EmailerHelper
    {
        private static List<EmailService> service = new List<EmailService>();
       
        
        public static void sendEmails()
        {
            foreach (EmailService em in service)
            {
                double freq;
                if (em.getFrequency() == "30")
                    freq = 30;
                else if (em.getFrequency() == "80")
                    freq = 80;
                else {
                    return;
                }

                DateTime prevDat = em.getPreviousSend();
                DateTime timeNow = DateTime.Now;

                

                double timeDiff = (timeNow - prevDat).TotalSeconds;

                Debug.WriteLine("in background Emailer and time has passed, " +
                    "timeDiff is:"+timeDiff+
                    " EmailService is:"+ em.ToString());

                if (timeDiff >= freq) {
                    em.setPreviousSend(timeNow);
                    em.mailSender();
                }
                    
            }

        }


        public static void addEmail(EmailService ems)
        {
            service.Add(ems);
        }

    }
}

