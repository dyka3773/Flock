using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using System.Diagnostics;

namespace Flock.Exceptions
{
    public class Except
    {
        public void Fussa(int except)
        {
            try
            {
                String.IsNullOrEmpty(except.ToString());
            }            
            catch (DirectoryNotFoundException ex)
            {
                Debug.WriteLine($"The directory was not found: '{ex}'");
            }
            catch (FileNotFoundException ex)
            {
                Debug.WriteLine($"The file was not found: '{ex}'");
            }            
            catch (IOException ex)
            {
                Debug.WriteLine($"The file could not be opened: '{ex}'");
            }
            catch (ArgumentException ex)
            {
                Debug.WriteLine($"The argument that passed is invalid: '{ex}'");
            }
        }

    }
}
