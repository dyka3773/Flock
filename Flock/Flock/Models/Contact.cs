using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flock.Models
{
    public class Contact
    {
        public int id { get; set; } //non editable

        public String fullName { get; set; }

        public String email { get; set; }

        //public getEditable List(return editableFields);

    }
}
