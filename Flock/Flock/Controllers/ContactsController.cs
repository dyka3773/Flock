using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Flock.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Flock.Controllers
{
    [Route("apis/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        List<Contact> contacts = new List<Contact>();

        public ContactsController() {
            contacts.Add(new Contact { id = 1,fullName="Petros Petras", email="petraras@gmail.com"});
            contacts.Add(new Contact { id = 2, fullName = "Makhs Makos", email = "makarena69@gmail.com" });
            contacts.Add(new Contact { id = 3, fullName = "Anastashs Anastasiadis", email = "anastasi@gmail.com" });
            contacts.Add(new Contact { id = 4, fullName = "AAAAAAAAAA", email = "petrawwadwaras@gmail.com" });
            contacts.Add(new Contact { id = 5, fullName = "BBBBBBBBBB", email = "AAAAAAAAAA@gmail.com" });
        }


        // GET: api/<ContacsController>
        [HttpGet]
        public List<Contact> Get()
        {
            return contacts;
        }

        // GET api/<ContacsController>/5
        [HttpGet("{id}")]
        public Contact Get(int id)
        {
            return contacts.Where(x => x.id == id).FirstOrDefault();
        }

        // POST api/<ContacsController>
        [HttpPost]
        public List<Contact> Post(Contact cont) 
        {
            contacts.Add(cont);
            return contacts;
        }

        // PUT api/<ContacsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ContacsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
