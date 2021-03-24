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
            myConnection = "SERVER=localhost;Port=3333;DATABASE=Library;UID=root;PASSWORD=dyka3773";
            //Until we deploy the site in users, we have to connect through ssh with the db !!!
            //ssh -L3333:/home/student/it/2018/it185200/mysql/run/mysql.sock it185200@users.iee.ihu.gr
            //password : It185200@197358426
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
