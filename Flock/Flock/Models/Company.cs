using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flock.Models
{
    public class Company : Account
    {
        public String name { get; set; } //non editable

        public long phone { get; set; }

        public String country { get; set; }

        public String zip { get; set; } 

        public String phyAddress { get; set; }
    }
}
