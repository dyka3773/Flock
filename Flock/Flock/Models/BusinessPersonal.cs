using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flock.Models
{
    public class BusinessPersonal : Account
    {
        public String fName { get; set; } 

        public String lName { get; set; } 

        public String phone { get; set; }

        public String gender { get; set; }

        public String country { get; set; }

        public String zip { get; set; }

        public override Object getFields()
        {
            return new { fName = fName, lName = lName, phone=phone,gender=gender,country=country,zip=zip,email=email, type=type};
        }
    }
}
