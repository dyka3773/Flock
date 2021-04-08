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
    public class BusinessPersonalsController : ControllerBase
    {

        List<BusinessPersonal> businessPersonals = new List<BusinessPersonal>();

        public BusinessPersonalsController() {
            businessPersonals.Add(new BusinessPersonal { fName="bigcoorporate", lName="dudeBro", phone=(long)6969696969696,gender="helicopter",country="alwaysland",zip="zipzoop"});
            businessPersonals.Add(new BusinessPersonal { fName = "bigcoorporate", lName = "dudeBro", phone = (long)69611196969696, gender = "Man", country = "alwaysland", zip = "zipzoop" });
            businessPersonals.Add(new BusinessPersonal { fName = "smallblogger", lName = "dudeBro", phone = (long)6969612369696, gender = "yes", country = "alwaysland", zip = "zipzoop" });
            businessPersonals.Add(new BusinessPersonal { fName = "smaawwdllblogger", lName = "dudeBro", phone = (long)6969612369696, gender = "yes", country = "alwaysland", zip = "zipzoop" });
        }

        // GET: api/<BusinessPersonalController>
        [HttpGet]
        public List<BusinessPersonal> Get()
        {
            return businessPersonals;
        }

        // GET api/<BusinessPersonalController>/5
        [HttpGet("{id}")]
        public BusinessPersonal Get(int id)
        {
            return businessPersonals.Where(x => x.id == id).FirstOrDefault();
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
