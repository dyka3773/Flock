using Flock.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using SendEmail;
using System.Diagnostics;
using Flock.Exceptions;
using System.Data.Common;
using System.Net.Http;
using System.Net;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Flock.Controllers
{
    [Route("apis/[controller]")]
    [ApiController]
    public class CampaignsController : ControllerBase
    {


        public CampaignsController() { }

        // GET: api/<CampaignsController>
        [HttpPost("sendCampaign/{caid}")]
        public ActionResult sendCampaign(int caid)
        {
            try
            {
                if (caid < 0)
                {
                    throw new GeneralException("Wrong Parameters");
                }
                EmailService email = new EmailService(caid);

                string fr = email.getFrequency();


                email.mailSender();
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

        // GET api/<CampaignsController>/5
        [HttpGet("GetNumOfPages/{aid}/{numOfRows}/{gid?}/{query?}")]
        public ActionResult GetNumOfPages(int aid, string query, int numOfRows, int gid)
        {
            List<Campaign> campaigns = new List<Campaign>();
            using var cmd = new MySqlCommand();
            cmd.Connection = new DBConnection().connect();
            cmd.Connection.Open();

            try
            {
                if (numOfRows <= 0 || aid < 0 || gid < 0)
                {
                    throw new GeneralException("Wrong parameters");
                }

                if (gid == 0 && query == null)
                {
                    cmd.CommandText = String.Format("call numOfPagesInCamps({0}, null, {1}, null)", aid, numOfRows);
                }
                else if (query == null)
                {
                    cmd.CommandText = String.Format("call numOfPagesInCamps({0}, {1}, null, {2})", aid, numOfRows, gid);
                }
                else if (gid == 0)
                {
                    cmd.CommandText = String.Format("call numOfPagesInCamps({0}, '{1}', {2}, null)", aid, query, numOfRows);
                }
                else
                {
                    cmd.CommandText = String.Format("call numOfPagesInCamps({0}, '{1}', {2}, {3})", aid, query, numOfRows, gid);
                }

                MySqlDataReader reader = cmd.ExecuteReader();
                reader.Read();
                decimal dec = (decimal)reader.GetValue(0);

                if (dec == 0)
                {
                    throw new GeneralException("Number of pages is 0");
                }

                return Ok(dec);
            }
            catch (MySqlException msql)
            {
                return BadRequest(msql.ToString());
            }
            catch (GeneralException ex)
            {
                return BadRequest(ex.ToString());
            }




        }

        // GET api/<CampaignsController>/5
        [HttpGet("{aid}/{pageNum}/{numOfRows}/{gid?}/{query?}")]
        public ActionResult Get(int aid, int pageNum, string query, int numOfRows, int gid)
        {
            int offset = numOfRows * pageNum;

            List<Campaign> campaigns = new List<Campaign>();
            using var cmd = new MySqlCommand();
            cmd.Connection = new DBConnection().connect();
            cmd.Connection.Open();

            try
            {
                if (offset < 0 || aid < 0 || gid < 0)
                {
                    throw new GeneralException("Wrong parameters");
                }

                if (gid == 0 && query == null)
                {
                    cmd.CommandText = String.Format("call getCamps({0}, null, {1}, {2}, null)", aid, offset, numOfRows);
                }
                else if (query == null)
                {
                    cmd.CommandText = String.Format("call getCamps({0}, null, {1}, {2}, {3})", aid, offset, numOfRows, gid);
                }
                else if (gid == 0)
                {
                    cmd.CommandText = String.Format("call getCamps({0},'{1}', {2}, {3}, null)", aid, query, offset, numOfRows);
                }
                else
                {
                    cmd.CommandText = String.Format("call getCamps({0}, '{1}', {2}, {3}, {4})", aid, query, offset, numOfRows, gid);
                }

                MySqlDataReader reader = cmd.ExecuteReader();


                while (reader.Read())
                {

                    campaigns.Add(new Campaign
                    {
                        id = (int)reader.GetValue(0),
                        subject = reader.GetValue(1).ToString(),
                        text = reader.GetValue(2).ToString(),
                        startDate = reader.GetValue(3).ToString(),
                        endDate = reader.GetValue(4).ToString(),
                        creationDate = reader.GetValue(5).ToString(),
                        name = reader.GetValue(6).ToString(),
                        frequency = reader.GetValue(7).ToString(),
                        numOfContacts = (uint)reader.GetValue(8),
                        AID = (int)reader.GetValue(10),
                        GID = (int)reader.GetValue(11)
                    });
                }

                cmd.Connection.Close();
                return Ok(campaigns);
            }
            catch (MySqlException msql)
            {
                return BadRequest(msql.ToString());
            }
            catch (GeneralException ex)
            {
                return BadRequest(ex.ToString());
            }


        }


        public ActionResult getCampFromCaid(int caid)
        {
            try
            {
                if (caid < 0)
                {
                    throw new GeneralException("Wrong Parameters");
                }
                Campaign campaign;
                using var cmd = new MySqlCommand();
                cmd.Connection = new DBConnection().connect();
                cmd.Connection.Open();

                cmd.CommandText = "getCampFromCAID(" + caid + ")";

                MySqlDataReader reader = cmd.ExecuteReader();

                reader.Read();

                campaign = new Campaign
                {
                    id = (int)reader.GetValue(0),
                    subject = reader.GetValue(1).ToString(),
                    text = reader.GetValue(2).ToString(),
                    startDate = reader.GetValue(3).ToString(),
                    endDate = reader.GetValue(4).ToString(),
                    creationDate = reader.GetValue(5).ToString(),
                    name = reader.GetValue(6).ToString(),
                    frequency = reader.GetValue(7).ToString(),
                    numOfContacts = (uint)reader.GetValue(8),
                    AID = (int)reader.GetValue(10),
                    GID = (int)reader.GetValue(11)
                };
                cmd.Connection.Close();
                return Ok(campaign);
            }
            catch (MySqlException msql)
            {
                return BadRequest(msql.ToString());
            }
            catch (GeneralException ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    




        // POST api/<CampaignsController>
        [HttpPost("{aid}/{gid}")]
        public ActionResult Post(Campaign camp, int aid, int gid)
        {
            try
            {
                if (gid < 0 || aid < 0)
                {
                    throw new GeneralException("Wrong Parameters");
                }
                using var cmd = new MySqlCommand();
                cmd.Connection = new DBConnection().connect();
                cmd.Connection.Open();

                cmd.CommandText = String.Format("call addCampaign('{0}', '{1}', '{2}', '{3}','{4}', '{5}','{6}', {7} , {8} )",
                    camp.subject, camp.text, camp.startDate, camp.endDate, camp.name, camp.frequency, null, aid, gid);
                MySqlDataReader reader = cmd.ExecuteReader();

                cmd.Connection.Close();
                return Ok();
            }
            catch (MySqlException msql)
            {
                return BadRequest(msql.ToString());
            }
            catch (GeneralException ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        // PUT api/<CampaignsController>/5
        [HttpPut("{aid}")]
        public ActionResult Put(int aid, Campaign camp)
        {
            try
            {
                if (aid < 0)
                {
                    throw new GeneralException("Wrong Parameters");
                }
                using var cmd = new MySqlCommand();
                cmd.Connection = new DBConnection().connect();
                cmd.Connection.Open();

                cmd.CommandText = String.Format("call editCampaign({0}, '{1}', {2}, '{3}', '{4}', '{5}', '{6}')", camp.id, camp.name, aid, camp.subject, camp.text, camp.endDate, camp.frequency);
                MySqlDataReader reader = cmd.ExecuteReader();


                cmd.Connection.Close();
                return Ok();
            }
            catch (MySqlException msql)
            {
                return BadRequest(msql.ToString());
            }
            catch (GeneralException ex)
            {
                return BadRequest(ex.ToString());
            }

        }

        // DELETE api/<CampaignsController>/5
        [HttpDelete("{id}/{cid}")]
        public ActionResult Delete(int id, Campaign camp)
        {
            try
            {
                if (id < 0)
                {
                    throw new GeneralException("Wrong parameters");
                }
                using var cmd = new MySqlCommand();
                cmd.Connection = new DBConnection().connect();
                cmd.Connection.Open();

                cmd.CommandText = String.Format("call deleteCamp({0}, {1})", camp.id, id);

                MySqlDataReader reader = cmd.ExecuteReader();
                cmd.Connection.Close();
                return Ok();
            }
            catch (MySqlException msql)
            {
                return BadRequest(msql.ToString());
            }
            catch (GeneralException ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpDelete("multipleDelete/{id}")]
        public ActionResult multipleDelete(List<String> C, int id)
        {
            try
            {
                if (id < 0)
                {
                    throw new GeneralException("Wrong parameters");
                }

                String CAIDS = "";
                foreach (String cont in C)
                {
                    CAIDS = String.Concat(cont + "|", CAIDS);
                }

                using var cmd = new MySqlCommand();
                cmd.Connection = new DBConnection().connect();
                cmd.Connection.Open();
                cmd.CommandText = String.Format("call deleteManyCamps('{0}', {1})", CAIDS, id);
                                
                return Ok();
            }
            catch (MySqlException msql)
            {
                return BadRequest(msql.ToString());
            }
            catch (GeneralException ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}

