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
    public class CompaniesController : ControllerBase
    {
        List<Company> companies = new List<Company>();

        public CompaniesController() {
            companies.Add(new Company { name="pp", phone=(long)306969696969, country="ppstan", zip="56625", phyAddress="yeeeNo" });
            companies.Add(new Company { name = "pp2", phone = (long)306969696969, country = "ppst22an", zip = "5662225", phyAddress = "yeeeNo" });
            companies.Add(new Company { name = "pp3", phone = (long)306969696969, country = "pps2313tan", zip = "56625", phyAddress = "yee123eNo" });
            companies.Add(new Company { name = "pp4", phone = (long)306969696969, country = "ppst123an", zip = "56625", phyAddress = "yeeeNo" });
        }

        // GET: apis/<CompanyController>
        [HttpGet]
        public List<Company> Get()
        {
            return companies;
        }

        // GET apis/<CompanyController>/5
        [HttpGet("{id}")]
        public Company Get(int id)
        {
            return companies.Where(x => x.id == id).FirstOrDefault();
        }

        // POST api/<CompanyController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CompanyController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CompanyController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
