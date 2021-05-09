using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using System.Diagnostics;

namespace Flock.Exceptions
{
    public class CustomException : Exception
    {
        public CustomException(string messageA) : base(messageA)
        {

        }   
    }

    public class IOException : Exception
    {
        public IOException(string messageA) : base(messageA)
        {

        }
    }
}
