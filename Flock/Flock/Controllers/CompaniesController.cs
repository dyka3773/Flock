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
    public class CompaniesController : ControllerBase
    {
        public CompaniesController() {
            /*companies.Add(new Company { id = 1, name="pp", phone=(long)306969696969, country="ppstan", zip="56625", phyAddress="yeeeNo" });
            companies.Add(new Company { id = 2, name = "pp2", phone = (long)306969696969, country = "ppst22an", zip = "5662225", phyAddress = "yeeeNo" });
            companies.Add(new Company { id = 3, name = "pp3", phone = (long)306969696969, country = "pps2313tan", zip = "56625", phyAddress = "yee123eNo" });
            companies.Add(new Company { id = 4, name = "pp4", phone = (long)306969696969, country = "ppst123an", zip = "56625", phyAddress = "yeeeNo" });*/
        }

        // GET: apis/<CompanyController>
        [HttpGet]
        public List<Company> Get()
        {
            return null;
        }

        // POST api/<CompanyController>
        [HttpPost]
        public ActionResult Post(Company c)
        {
            using var cmd = new MySqlCommand();
            ActionResult result = BadRequest();
            try
            {
                
                cmd.Connection = new DBConnection().connect();
                cmd.Connection.Open();

                cmd.CommandText = 
                    String.Format(
                        "call addCompany('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}')"
                        , c.email, c.password, c.name, c.phone, c.country, c.zip, c.phyAddress
                        );
                MySqlDataReader reader = cmd.ExecuteReader();
                result = Ok();

            }

            catch (MySqlException msql)
            {
                result = BadRequest(msql.ToString());
            }
            cmd.Connection.Close();
            return result;
        }

        // PUT api/<CompanyController>/5
        [HttpPut("{aid}")]
        public ActionResult Put(int aid, Company c)
        {
            using var cmd = new MySqlCommand();
            ActionResult result = BadRequest();
            try
            {
                if (aid < 0)
                {
                    throw new GeneralException("Wrong parameters");
                }

                cmd.Connection = new DBConnection().connect();
                cmd.Connection.Open();

                cmd.CommandText =
                    String.Format(
                        "call editCompany({0}, '{1}', '{2}', '{3}', '{4}', '{5}', '{6}')"
                        , aid, c.password, c.name, c.phone, c.country, c.zip, c.phyAddress
                        );
                MySqlDataReader reader = cmd.ExecuteReader();
                result = Ok();
            }
            catch (GeneralException ex)
            {
                result = BadRequest(ex.ToString());
            }
            catch (MySqlException msql)
            {
                result = BadRequest(msql.ToString());
            }
            cmd.Connection.Close();
            return result;
        }

        // DELETE api/<CompanyController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
