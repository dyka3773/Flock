using Flock.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Flock.Exceptions;

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

       
        [HttpPost]
        public ActionResult Post(BusinessPersonal bp)
        {
            try
            { 
                using var cmd = new MySqlCommand();
                cmd.Connection = new DBConnection().connect();
                cmd.Connection.Open();

                cmd.CommandText = 
                    String.Format(
                        "call addBusiness_Personal('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}', '{7}')", 
                         bp.email, bp.password, bp.fName, bp.lName, bp.phone, bp.gender, bp.country, bp.zip
                         );

                MySqlDataReader reader = cmd.ExecuteReader();


                cmd.Connection.Close();
                return Ok();
            }

            catch (MySqlException msql)
            {
                return BadRequest(msql.ToString());
            }
        }

        
        [HttpPut("{aid}")]
        public ActionResult Put(int aid, BusinessPersonal bp)
        {
            try
            {
                if (aid < 0)
                {
                    throw new GeneralException("Wrong parameters");
                }
                using var cmd = new MySqlCommand();
                cmd.Connection = new DBConnection().connect();
                cmd.Connection.Open();

                cmd.CommandText = String.Format(
                    "call editBP({0}, '{1}', '{2}', '{3}', '{4}', '{5}', '{6}', '{7}')",
                    aid, bp.password, bp.fName, bp.lName, bp.phone, bp.gender, bp.country, bp.zip);
                MySqlDataReader reader = cmd.ExecuteReader();
                cmd.Connection.Close();
                return Ok();
            }
            catch (GeneralException ex)
            {
                return BadRequest(ex.ToString());
            }
            catch (MySqlException msql)
            {
                return BadRequest(msql.ToString());
            }
        }

        
        [HttpDelete("{id}")]
        public void Delete(int id)
        {}
    }
}
