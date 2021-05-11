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
    public class BackgroundEmailerFiveSeconds : BackgroundService
    {
        private readonly ILogger<BackgroundEmailerFiveSeconds> logger;
       

        public BackgroundEmailerFiveSeconds(ILogger<BackgroundEmailerFiveSeconds> logger)
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

                logger.LogInformation("1 minute");
                EmailerFiveSecondsHelper.sendEmails();
                await Task.Delay(60000, stoppingToken);
                 
                
                
            }
        }
    }


    public static class EmailerFiveSecondsHelper {
        private static List<EmailService> service = new List<EmailService>();
        public static void sendEmails() {
            foreach (EmailService em in service) {
                Debug.WriteLine(em.camp.ToString());
                em.mailSender();
            }
        
        }

        public static void addEmail(EmailService ems)
        {
            service.Add(ems);
        }

    }
}
