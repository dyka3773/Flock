using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace Flock.Controllers
{
    public class DBConnection
    {
        private string myConnection;

        private MySqlConnection connection;
        //private MySqlConnectionStringBuilder properties;
        

        public DBConnection()
        {
            myConnection = "SERVER=localhost;Port=3333;DATABASE=Flock;UID=root;PASSWORD=dyka3773;Convert Zero Datetime=True;";
            //Until we deploy the site in users, we have to connect through ssh with the db !!!
        }

        public MySqlConnection connect()
        {
            if (connection == null)
            {
                try
                {
                    connection = new MySqlConnection(myConnection);
                   
                }
                catch (Exception) { throw; }
            }
            return connection;
        }

        public void disconnect()
        {
            if(connection != null)
            {
                try
                {
                    connection.Close();
                    connection = null;
                }
                catch (Exception) { throw; }
            }
        }
    }
}
