using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flock.Models
{
    public class Campaign
    {
        public int id { get; set; } //non editable

        public String subject { get; set; }

        public String text { get; set; }

        public String startDate { get; set; }//non editable

        public String endDate { get; set; }

        public String creationDate { get; set; }//non editable

        public String name { get; set; }

        public String frequency { get; set; }

        public uint numOfContacts { get; set; } //non editable

        public int groupId { get; set; } //non editable

        public override String ToString() {
            return "id " + id + " name " + name + " groupId " + groupId;
        }
    }
}
