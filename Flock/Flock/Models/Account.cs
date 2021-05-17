using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flock.Models
{
    public abstract class Account
    {
        public int id { get; set; } //non editable

        public String email { get; set; } //non editable

        public String password { get; set; }

        public int type { get; set; } //non editable

        public int numOfCamps {get; set; } //non editable

        public int numOfConts { get; set; } //non editable

        public int numOfSent { get; set; } //non editable

        public abstract Object getFields();

        public Object getBasicInfo() {

            return new { numOfCamps=numOfCamps, numOfConts=numOfConts, numOfSent=numOfSent};
        }

    }
}
