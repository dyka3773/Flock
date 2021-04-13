using Flock.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Flock.Controllers
{
    [Route("apis/[controller]")]
    [ApiController]
    public class CampaignsController : ControllerBase
    {
        List<Campaign> campaigns = new List<Campaign>();

        public CampaignsController() {
            campaigns.Add(new Campaign { id=1, subject="new penis enlargement procedure", text="get it while its hot", creationDate= new DateTime(3000, 8, 18, 16, 32, 18, 500), endDate = new DateTime(2010, 8, 18, 16, 32, 18, 500), startDate = new DateTime(2010, 8, 18, 16, 32, 18, 500), name="idk", frequency="lol", numOfContacts=300 });
            campaigns.Add(new Campaign { id = 2, subject = "222222222222222222", text = "22222222222222222", creationDate = new DateTime(2010, 8, 18, 16, 32, 18, 500), endDate = new DateTime(2010, 8, 18, 16, 32, 18, 500), startDate = new DateTime(2010, 8, 18, 16, 32, 18, 500), name = "id22k", frequency = "lol22", numOfContacts = 302 });
            campaigns.Add(new Campaign { id = 3, subject = "33333333333333", text = "333333333333333", creationDate = new DateTime(2010, 8, 18, 16, 32, 18, 500), endDate = new DateTime(2010, 8, 18, 16, 32, 18, 500), startDate = new DateTime(2010, 8, 18, 16, 32, 18, 500), name = "idk", frequency = "lol", numOfContacts = 300 });
            campaigns.Add(new Campaign { id = 4, subject = "4444444444444444444", text = "44444444444444444", creationDate = new DateTime(2010, 8, 18, 16, 32, 18, 500), endDate = new DateTime(2010, 8, 18, 16, 32, 18, 500), startDate = new DateTime(2010, 8, 18, 16, 32, 18, 500), name = "idk", frequency = "lol", numOfContacts = 300 });


        }

        // GET: api/<CampaignsController>
        [HttpGet]
        public List<Campaign> Get()
        {
            return campaigns;
        }

        // GET api/<CampaignsController>/5
        [HttpGet("{id}")]
        public Campaign Get(int id)
        {
            return campaigns.Where(x => x.id == id).FirstOrDefault();
        }

        // POST api/<CampaignsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CampaignsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CampaignsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
