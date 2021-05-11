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
using Flock.Schedulers;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Flock.Controllers
{
    [Route("apis/[controller]")]
    [ApiController]
    public class CampaignsController : ControllerBase
    {


        

        [HttpPost("temp/{select}")]
        public void temp(int select)
        {

            switch (select) {
                case 1:
                    EmailService ems1 = new EmailService(
                        new Contact { fullName = "stef", email = "stefetoufe@gmail.com" },
                        new Campaign { text = "every 1.0 minutes ems1", subject = "1.0 minutes ems1" },
                        60000
                        ); EmailerHelper.addEmail(ems1); 
                    break;

                case 2:
                    EmailService ems2 = new EmailService(
                        new Contact { fullName = "stef", email = "stefetoufe@gmail.com" },
                        new Campaign { text = "every 3.0 minutes ems2", subject = "3.0 minutes ems2" },
                         60000 * 3
                        ); EmailerFiveSecondsHelper.addEmail(ems2); 
                    break;

                case 3:
                    EmailService ems3 = new EmailService(
                        new Contact { fullName = "stef", email = "stefetoufe@gmail.com" },
                        new Campaign { text = "every 3.0 minutes ems3", subject = "3.0 minutes ems3" },
                        60000 * 3
                        );
                    EmailerFiveSecondsHelper.addEmail(ems3);
                    break;

                case 4:
                    EmailService ems4 = new EmailService(
                        new Contact { fullName = "stef", email = "stefetoufe@gmail.com" },
                        new Campaign { text = "every 1.0 minutes ems4", subject = "1.0 minutes ems4" },
                        60000
                        );
                    EmailerHelper.addEmail(ems4);
                    break;

            }
           
        }



        [HttpPost("sendCampaign/{caid}")]
        public ActionResult sendCampaign(int caid)
        {
            try
            {
                if (caid < 0)
                {
                    throw new GeneralException("Wrong Parameters");
                }
                //EmailService email = new EmailService(caid);

                //string fr = email.getFrequency();


                //email.mailSender();
                
            }
            catch (GeneralException ex)
            {
                return BadRequest(ex.ToString());
            }
            catch (MySqlException msql)
            {
                return BadRequest(msql.ToString());
            }
            return Ok();
        }

        // GET api/<CampaignsController>/5
        [HttpGet("GetNumOfPages/{aid}/{numOfRows}/{gid?}/{query?}")]
        public ActionResult GetNumOfPages(int aid, string query, int numOfRows, int gid)
        {
            List<Campaign> campaigns = new List<Campaign>();
            using var cmd = new MySqlCommand();
            ActionResult result = BadRequest();
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
                    cmd.CommandText = String.Format("call numOfPagesInCamps({0}, null, {1}, {2})", aid, numOfRows, gid);
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
                result = Ok(dec);


            }
            catch (MySqlException msql)
            {
                result = BadRequest(msql.ToString());
            }
            catch (GeneralException ex)
            {
                result = BadRequest(ex.ToString());
            }
            return result;




        }

        
        [HttpGet("{aid}/{pageNum}/{numOfRows}/{gid?}/{query?}")]
        public ActionResult Get(int aid, int pageNum, string query, int numOfRows, int gid)
        {
            int offset = numOfRows * pageNum;
            ActionResult result = BadRequest();
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
                    Campaign cam = new Campaign
                    {
                        id = (int)reader.GetValue(0),
                        subject = reader.GetValue(1).ToString(),
                        text = reader.GetValue(2).ToString(),
                        startDate = DateTime.Parse(reader.GetValue(3).ToString()).ToShortDateString(),
                        endDate = DateTime.Parse(reader.GetValue(4).ToString()).ToShortDateString(),
                        creationDate = DateTime.Parse(reader.GetValue(5).ToString()).ToShortDateString(),
                        name = reader.GetValue(6).ToString(),
                        frequency = reader.GetValue(7).ToString(),
                        numOfContacts = (uint)reader.GetValue(8),
                        AID = (int)reader.GetValue(10),
                        GID = (int)reader.GetValue(11)
                    };
                    campaigns.Add(cam);

                    Debug.WriteLine($" In Debug {cam.startDate}");

                }
                result = Ok(campaigns);


            }
            catch (MySqlException msql)
            {
                result = BadRequest(msql.ToString());
            }
            catch (GeneralException ex)
            {
                result = BadRequest(ex.ToString());
            }
            cmd.Connection.Close();
            return result;


        }


        public ActionResult getCampFromCaid(int caid)
        {
            using var cmd = new MySqlCommand();
            ActionResult result = BadRequest();
            try
            {
                if (caid < 0)
                {
                    throw new GeneralException("Wrong Parameters");
                }
                Campaign campaign;
                
                cmd.Connection = new DBConnection().connect();
                cmd.Connection.Open();

                cmd.CommandText = "getCampFromCAID(" + caid + ")";

                MySqlDataReader reader = cmd.ExecuteReader();

                reader.Read();

                campaign = new Campaign
                {
                    id = (int)reader.GetValue(0),
                    subject = reader.GetValue(1).ToString(),
                    text =reader.GetValue(2).ToString(),
                    startDate = DateTime.Parse(reader.GetValue(3).ToString()).ToShortDateString(),
                    endDate = DateTime.Parse(reader.GetValue(4).ToString()).ToShortDateString(),
                    creationDate = DateTime.Parse(reader.GetValue(5).ToString()).ToShortDateString(),
                    name = reader.GetValue(6).ToString(),
                    frequency = reader.GetValue(7).ToString(),
                    numOfContacts = (uint)reader.GetValue(8),
                    AID = (int)reader.GetValue(10),
                    GID = (int)reader.GetValue(11)
                };
                result = Ok(campaign);

            }
            catch (MySqlException msql)
            {
                result = BadRequest(msql.ToString());
            }
            catch (GeneralException ex)
            {
                result = BadRequest(ex.ToString());
            }
            cmd.Connection.Close();
            return result;
        }
    




        // POST api/<CampaignsController>
        [HttpPost("{aid}/{gid}")]
        public ActionResult Post(Campaign camp, int aid, int gid)
        {
            using var cmd = new MySqlCommand();
            ActionResult result = BadRequest();
            try
            {
                if (gid < 0 || aid < 0)
                {
                    throw new GeneralException("Wrong Parameters");
                }
                
                cmd.Connection = new DBConnection().connect();
                cmd.Connection.Open();

                cmd.CommandText = String.Format("call addCampaign('{0}', '{1}', '{2}', '{3}','{4}', '{5}','{6}', {7} , {8} )",
                    camp.subject, camp.text, camp.startDate, camp.endDate, camp.name, camp.frequency, null, aid, gid);
                MySqlDataReader reader = cmd.ExecuteReader();

                result = Ok();

                
            }
            catch (MySqlException msql)
            {
                result = BadRequest(msql.ToString());
            }
            catch (GeneralException ex)
            {
                result = BadRequest(ex.ToString());
            }
            cmd.Connection.Close();
            return result;
        }

        // PUT api/<CampaignsController>/5
        [HttpPut("{aid}")]
        public ActionResult Put(int aid, Campaign camp)
        {
            using var cmd = new MySqlCommand();
            ActionResult result = BadRequest();
            try
            {
                if (aid < 0)
                {
                    throw new GeneralException("Wrong Parameters");
                }
                
                cmd.Connection = new DBConnection().connect();
                cmd.Connection.Open();

                cmd.CommandText = String.Format("call editCampaign({0}, '{1}', {2}, '{3}', '{4}', '{5}', '{6}')", camp.id, camp.name, aid, camp.subject, camp.text, camp.endDate, camp.frequency);
                MySqlDataReader reader = cmd.ExecuteReader();

                result = Ok();

            }
            catch (MySqlException msql)
            {
                result = BadRequest(msql.ToString());
            }
            catch (GeneralException ex)
            {
                result = BadRequest(ex.ToString());
            }
            cmd.Connection.Close();
            return result;

        }

        // DELETE api/<CampaignsController>/5
        [HttpDelete("{id}/{cid}")]
        public ActionResult Delete(int id, Campaign camp)
        {
            using var cmd = new MySqlCommand();
            ActionResult result = BadRequest();
            try
            {
                if (id < 0)
                {
                    throw new GeneralException("Wrong parameters");
                }
                
                cmd.Connection = new DBConnection().connect();
                cmd.Connection.Open();

                cmd.CommandText = String.Format("call deleteCamp({0}, {1})", camp.id, id);

                MySqlDataReader reader = cmd.ExecuteReader();

                result = Ok();
            }
            catch (MySqlException msql)
            {
                result = BadRequest(msql.ToString());
            }
            catch (GeneralException ex)
            {
                result = BadRequest(ex.ToString());
            }
            cmd.Connection.Close();
            return result;
        }

        [HttpDelete("multipleDelete/{aid}")]
        public ActionResult multipleDelete(List<int> C, int aid)
        {
            using var cmd = new MySqlCommand();
            ActionResult result = BadRequest();
            try
            {
                if (aid < 0)
                {
                    throw new GeneralException("Wrong parameters");
                }

                String CAIDS = "";
                foreach (int id in C)
                {
                    CAIDS = String.Concat(id + "|", CAIDS);
                }

                cmd.Connection = new DBConnection().connect();
                cmd.Connection.Open();
                cmd.CommandText = String.Format("call deleteManyCamps('{0}', {1})", CAIDS, aid);
                cmd.ExecuteReader();


                result = Ok();

            }
            catch (MySqlException ex)
            {
                result = BadRequest(ex.ToString());
            }
            catch (GeneralException ex)
            {
                result = BadRequest(ex.ToString());
            }

            cmd.Connection.Close();
            return result;

        
        }
    }
}

