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
    public class ContactsController : ControllerBase
    {
        

        public ContactsController() {
            /*contacts.Add(new Contact { id = 1,fullName="Petros Petras", email="petraras@gmail.com"});
            contacts.Add(new Contact { id = 2, fullName = "Makhs Makos", email = "makarena69@gmail.com" });
            contacts.Add(new Contact { id = 3, fullName = "Anastashs Anastasiadis", email = "anastasi@gmail.com" });
            contacts.Add(new Contact { id = 4, fullName = "AAAAAAAAAA", email = "petrawwadwaras@gmail.com" });
            contacts.Add(new Contact { id = 5, fullName = "BBBBBBBBBB", email = "AAAAAAAAAA@gmail.com" });*/
        }



        // GET: api/<ContacsController>
        [HttpGet]
        public List<Contact> Get()
        {
            return null;
        }

        // GET api/<ContacsController>/5
        [HttpGet("{id}")]
        public List<Contact> Get(int id)
        {
            List<Contact> contacts = new List<Contact>();
            using var cmd = new MySqlCommand();
            cmd.Connection = new DBConnection().connect();
            cmd.Connection.Open();

            cmd.CommandText = "getContacts("+id+",NULL)";

            MySqlDataReader reader = cmd.ExecuteReader();

            while (reader.Read())
            {

                contacts.Add(new Contact { id = (int)reader.GetValue(0), fullName = reader.GetValue(1).ToString(), email = reader.GetValue(2).ToString() });

            }

            cmd.Connection.Close();
            return contacts;
        }

        // POST api/<ContacsController>
        [HttpPost]
        public List<Contact> Post(Contact cont) 
        {
            return null;
        }

        // PUT api/<ContacsController>/5
        [HttpPut("{id}")]
        public void Put(Contact cont)
        {
            //cont.getEditable();
            //cmd.CommandText = "editContact(" cont.id + cont[0] + cont[1] + cont[2]")";

        }

        // DELETE api/<ContacsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
