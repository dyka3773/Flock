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
    public class CampaignsController : ControllerBase
    {


        public CampaignsController() {
            /*campaigns.Add(new Campaign { id=1, subject="new penis enlargement procedure", text="get it while its hot", creationDate= new DateTime(3000, 8, 18, 16, 32, 18, 500), endDate = new DateTime(2010, 8, 18, 16, 32, 18, 500), startDate = new DateTime(2010, 8, 18, 16, 32, 18, 500), name="idk", frequency="lol", numOfContacts=300 });
            campaigns.Add(new Campaign { id = 2, subject = "222222222222222222", text = "22222222222222222", creationDate = new DateTime(2010, 8, 18, 16, 32, 18, 500), endDate = new DateTime(2010, 8, 18, 16, 32, 18, 500), startDate = new DateTime(2010, 8, 18, 16, 32, 18, 500), name = "id22k", frequency = "lol22", numOfContacts = 302 });
            campaigns.Add(new Campaign { id = 3, subject = "33333333333333", text = "333333333333333", creationDate = new DateTime(2010, 8, 18, 16, 32, 18, 500), endDate = new DateTime(2010, 8, 18, 16, 32, 18, 500), startDate = new DateTime(2010, 8, 18, 16, 32, 18, 500), name = "idk", frequency = "lol", numOfContacts = 300 });
            campaigns.Add(new Campaign { id = 4, subject = "4444444444444444444", text = "44444444444444444", creationDate = new DateTime(2010, 8, 18, 16, 32, 18, 500), endDate = new DateTime(2010, 8, 18, 16, 32, 18, 500), startDate = new DateTime(2010, 8, 18, 16, 32, 18, 500), name = "idk", frequency = "lol", numOfContacts = 300 });*/


        }

        // GET: api/<CampaignsController>
        [HttpGet]
        public List<Campaign> Get()
        {
            return null;
        }

        // GET api/<CampaignsController>/5
        [HttpGet("{id}")]
        public List<Campaign> Get(int id)
        {
            List<Campaign> campaigns = new List<Campaign>();
            using var cmd = new MySqlCommand();
            cmd.Connection = new DBConnection().connect();
            cmd.Connection.Open();

            cmd.CommandText = "getCamps(" + id + ",NULL)";

            MySqlDataReader reader = cmd.ExecuteReader();

            while (reader.Read())
            {

                campaigns.Add(new Campaign
                {
                    id = (int)reader.GetValue(0),
                    subject = reader.GetValue(1).ToString(),
                    text = reader.GetValue(2).ToString(),
                    creationDate = (DateTime)reader.GetValue(3),
                    startDate = (DateTime)reader.GetValue(4),
                    endDate = (DateTime)reader.GetValue(5),
                    name = reader.GetValue(6).ToString(),
                    frequency = reader.GetValue(7).ToString(),
                    numOfContacts = (int)reader.GetValue(8)
                });

            }

            cmd.Connection.Close();
            return campaigns;
        }

        // POST api/<CampaignsController>
        [HttpPost("{id}/{gid}")]
        public void Post(Campaign camp, int id, int gid)
        {
            using var cmd = new MySqlCommand();
            cmd.Connection = new DBConnection().connect();
            cmd.Connection.Open();

            cmd.CommandText = String.Format("call addCampaign('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}', {7}, {8}, {9})", camp.subject, camp.text, camp.startDate, camp.endDate, camp.creationDate, camp.name, camp.frequency, camp.numOfContacts, id, gid);
            MySqlDataReader reader = cmd.ExecuteReader();


            cmd.Connection.Close();
        }

        // PUT api/<CampaignsController>/5
        [HttpPut("{id}")]
        public void Put(int id, Campaign camp)
        {
            using var cmd = new MySqlCommand();
            cmd.Connection = new DBConnection().connect();
            cmd.Connection.Open();

            cmd.CommandText = String.Format("call editCampaign({0}, '{1}', {2}, '{3}', '{4}', '{5}', '{6}')", camp.id, camp.name, id, camp.subject, camp.text, camp.endDate, camp.frequency);
            MySqlDataReader reader = cmd.ExecuteReader();


            cmd.Connection.Close();


        }

        // DELETE api/<CampaignsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id, Campaign camp)
        {
            using var cmd = new MySqlCommand();
            cmd.Connection = new DBConnection().connect();
            cmd.Connection.Open();

            cmd.CommandText = String.Format("call deleteCamp({0}, {1})", camp.id, id);

            MySqlDataReader reader = cmd.ExecuteReader();

            
            
        }
    }
}
