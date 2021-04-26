using Flock.Models;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Flock.Controllers
{
    [Route("apis/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {

        List<Account> accs = new List<Account>();

        public AccountsController()
        {
            //accs.Add(new Company { id = 1, name="pp", phone=(long)00306969696969, country="ppstan", zip="56625", phyAddress="yeeeNo", email="emailcomp", password="123123", type=1, numOfCamps=123, numOfConts=2, numOfSent=4 });
            //accs.Add(new Company { id = 2, name = "pp", phone = (long)00306969696969, country = "ppstan", zip = "56625", phyAddress = "yeeeNo", email = "emailcomp", password = "123123", type = 1, numOfCamps = 123, numOfConts = 2, numOfSent = 4 });
            //accs.Add(new BusinessPersonal { id = 3, fName = "pp3", lName = "Lpp3", phone = (long)00306969696969, country = "pps2313tan",gender="helicopterio", zip = "56625", email = "emailBusiness", password = "123123", type = 0, numOfCamps = 123, numOfConts = 2, numOfSent = 4 });
            //accs.Add(new BusinessPersonal { id = 3, fName = "pp4", lName = "Lpp4", phone = (long)00306969696969, country = "pps2313tan", gender = "helicopterio4", zip = "56625", email = "emailBusiness", password = "123123", type = 0, numOfCamps = 123, numOfConts = 2, numOfSent = 4 });
        }


        // GET: api/<AccountsController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<AccountsController>/6
        [HttpGet("getFields/{id}")]
        public Object GetFields(int id)
        {
            Account account;
            using var cmd = new MySqlCommand();
            cmd.Connection = new DBConnection().connect();
            cmd.Connection.Open();

            cmd.CommandText = "getAccDetails(" + id + ")";

            MySqlDataReader reader = cmd.ExecuteReader();
            reader.Read();
            
            account = getAccountFactory(reader, id);

            cmd.Connection.Close();

            return account.getFields();
        }

        
        public Account Get(int id)
        {
            Account account;
            using var cmd = new MySqlCommand();
            cmd.Connection = new DBConnection().connect();
            cmd.Connection.Open();

            cmd.CommandText = "getAccDetails(" + id + ")";

            MySqlDataReader reader = cmd.ExecuteReader();
            reader.Read();

            account = getAccountFactory(reader, id);

            cmd.Connection.Close();

            return account;
           
        }


        public Account getAccountFactory(MySqlDataReader reader, int id)
        {

            int type = (int)reader.GetValue(2);

            Account returnAcc;


            //business pers
            if (type == 0)
            {
                returnAcc = new BusinessPersonal
                {
                    email = reader.GetValue(0).ToString(),
                    password = reader.GetValue(1).ToString(),
                    type = (int)reader.GetValue(2),
                    numOfCamps = (int)reader.GetValue(3),
                    numOfConts = (int)reader.GetValue(4),
                    numOfSent = (int)reader.GetValue(5),
                    fName = reader.GetValue(6).ToString(),
                    lName = reader.GetValue(7).ToString(),
                    phone = reader.GetValue(8).ToString(),
                    gender = reader.GetValue(9).ToString(),
                    country = reader.GetValue(10).ToString(),
                    zip = reader.GetValue(11).ToString(),
                    id = id
                };
            }
            else if (type == 1) //company
            {
                returnAcc = new Company
                {
                    email = reader.GetValue(0).ToString(),
                    password = reader.GetValue(1).ToString(),
                    type = (int)reader.GetValue(2),
                    numOfCamps = (int)reader.GetValue(3),
                    numOfConts = (int)reader.GetValue(4),
                    numOfSent = (int)reader.GetValue(5),
                    name = reader.GetValue(6).ToString(),
                    phone = reader.GetValue(8).ToString(),
                    country = reader.GetValue(7).ToString(),
                    zip = reader.GetValue(10).ToString(),
                    phyAddress = reader.GetValue(9).ToString(),
                    id = id,
                };

            }
            else return null;


            return returnAcc;



        }
    }
}
