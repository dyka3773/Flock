using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flock.Models
{
    public class Campaign
    {
        public int id { get; set; } //non editable

        public string subject { get; set; }

        public string text { get; set; }

        public DateTime startDate { get; set; }//non editable

        public DateTime endDate { get; set; }

        public DateTime creationDate { get; set; }//non editable

        public string name { get; set; }

        public string frequency { get; set; }

        public uint numOfContacts { get; set; } //non editable

        public int GID { get; set; } //non editable

        public int AID { get; set; } //non editable

        public override String ToString() {
            return "id " + id + " text " + text + " frequency " + frequency + " subject " + subject;
        }
    }
}
