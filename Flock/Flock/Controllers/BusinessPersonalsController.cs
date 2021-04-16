using Flock.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Flock.Models;
using MySql.Data.MySqlClient;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Flock.Controllers
{

    

    [Route("apis/[controller]")]
    [ApiController]
    public class BusinessPersonalsController : ControllerBase
    {


        public BusinessPersonalsController() {
            /*businessPersonals.Add(new BusinessPersonal { fName="bigcoorporate", lName="dudeBro", phone=(long)6969696969696,gender="helicopter",country="alwaysland",zip="zipzoop"});
            businessPersonals.Add(new BusinessPersonal { fName = "bigcoorporate", lName = "dudeBro", phone = (long)69611196969696, gender = "Man", country = "alwaysland", zip = "zipzoop" });
            businessPersonals.Add(new BusinessPersonal { fName = "smallblogger", lName = "dudeBro", phone = (long)6969612369696, gender = "yes", country = "alwaysland", zip = "zipzoop" });
            businessPersonals.Add(new BusinessPersonal { fName = "smaawwdllblogger", lName = "dudeBro", phone = (long)6969612369696, gender = "yes", country = "alwaysland", zip = "zipzoop" });*/
        }

        // GET: api/<BusinessPersonalController>
        [HttpGet]
        public List<BusinessPersonal> Get()
        {
            return null;
        }

        // GET api/<BusinessPersonalController>/5
        [HttpGet("{id}")]
        public List<BusinessPersonal> Get(int id)
        {
            List<BusinessPersonal> bp = new List<BusinessPersonal>();
            using var cmd = new MySqlCommand();
            cmd.Connection = new DBConnection().connect();
            cmd.Connection.Open();

            cmd.CommandText = "getAccDetails(" + id + ")";

            MySqlDataReader reader = cmd.ExecuteReader();

            while (reader.Read())
            {

                bp.Add(new BusinessPersonal
                {
                    email = reader.GetValue(0).ToString(),
                    password = reader.GetValue(1).ToString(),
                    type = (int)reader.GetValue(2),
                    numOfCamps = (int)reader.GetValue(3),
                    numOfConts = (int)reader.GetValue(4),
                    numOfSent = (int)reader.GetValue(5),
                    fName = reader.GetValue(7).ToString(),
                    id = (int)reader.GetValue(6),
                    lName = reader.GetValue(8).ToString(),
                    phone = reader.GetValue(9).ToString(),
                    gender = reader.GetValue(10).ToString(),
                    country = reader.GetValue(11).ToString(),
                    zip = reader.GetValue(12).ToString()
                    
                });

            }

            cmd.Connection.Close();
            return bp;
        }

        // POST api/<BusinessPersonalController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<BusinessPersonalController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<BusinessPersonalController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
