using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flock.Models
{
    public class Account
    {
        public int id { get; set; }

        public String email { get; set; }

        public String password { get; set; }

        public int type { get; set; }

        public int numOfCamps {get; set;}

        public int numOfConts { get; set; }

        public int numOfSent { get; set; }
    }
}
