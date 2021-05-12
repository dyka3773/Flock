using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using System.Diagnostics;

namespace Flock.Exceptions
{
    public class GeneralException : Exception
    {
        public GeneralException(string messageA) : base(messageA)
        {

        }   
    }

    public class MultiplePostException : Exception
    {
        public MultiplePostException(string messageB) : base(messageB)
        {

        }
    }

    public class CampaignIsNullException : Exception
    {
        public CampaignIsNullException(string messageB) : base(messageB)
        {

        }
    }


}
