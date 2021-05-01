using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flock.Models
{
    public class Company : Account
    {
        public String name { get; set; } //non editable

        public String phone { get; set; }

        public String country { get; set; }

        public String zip { get; set; }

        public String phyAddress { get; set; }

        public override Object getFields()
        {
            return new {name = name,phone=phone,
                zip = zip, country=country, phyAddress= phyAddress,email=email};
        }
    }
}
