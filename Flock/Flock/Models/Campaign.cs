using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flock.Models
{
    public class Campaign
    {
        public int id { get; set; }

        public String subject { get; set; }

        public String text { get; set; }

        public DateTime startDate { get; set; }

        public DateTime endDate { get; set; }

        public DateTime creationDate { get; set; }

        public String name { get; set; }

        public String frequency { get; set; }

        public int numOfContacts { get; set; }
    }
}
