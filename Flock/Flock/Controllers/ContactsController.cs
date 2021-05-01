using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using Flock.Models;
using MySql.Data.MySqlClient;
using System.Net.Http;
using System.Net;
using System.Diagnostics;
using System.Threading;
using System.Threading.Tasks;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Flock.Controllers
{
    [Route("apis/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {


        public ContactsController()
        {
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
        [HttpGet("{aid}")]
        public List<Contact> Get(int aid)
        {
            List<Contact> contacts = new List<Contact>();
            using var cmd = new MySqlCommand();
            cmd.Connection = new DBConnection().connect();
            cmd.Connection.Open();

            cmd.CommandText = "getContacts(" + aid + ",NULL)";

            MySqlDataReader reader = cmd.ExecuteReader();

            while (reader.Read())
            {

                contacts.Add(new Contact
                {
                    id = (int)reader.GetValue(0),
                    fullName = reader.GetValue(1).ToString(),
                    email = reader.GetValue(2).ToString()
                });



            }

            cmd.Connection.Close();
            return contacts;
        }

        // POST api/<ContacsController>/5
        [HttpPost("{aid}")]
        public void Post(Contact cont, int aid)
        {
            using var cmd = new MySqlCommand();
            cmd.Connection = new DBConnection().connect();
            cmd.Connection.Open();

            cmd.CommandText = String.Format("call addContact('{0}', '{1}', {2}, {3})", cont.fullName, cont.email, aid, "null");
            MySqlDataReader reader = cmd.ExecuteReader();


            cmd.Connection.Close();
        }

        // POST api/<ContacsController>/5 for not null
        [HttpPost("{aid}/{gid}")]
        public void Post(Contact cont, int aid, int gid)
        {
            using var cmd = new MySqlCommand();
            cmd.Connection = new DBConnection().connect();
            cmd.Connection.Open();

            cmd.CommandText = String.Format("call addContact('{0}', '{1}', {2}, {3})", cont.fullName, cont.email, aid, gid);
            MySqlDataReader reader = cmd.ExecuteReader();


            cmd.Connection.Close();
        }

        // POST api/<ContacsController>/5 for not null
        [HttpPost("multiplePost/{aid}/{gid}")]
        public HttpResponseMessage multiplePost(List<Contact> contacts, int aid, int gid)
        {


            foreach (Contact i in contacts) {

                


                using var cmd = new MySqlCommand();
                cmd.Connection = new DBConnection().connect();
                cmd.Connection.Open();
                cmd.CommandText = String.Format("call addContact('{0}', '{1}', {2}, {3})", i.fullName, i.email, aid, gid);

                custom(cmd);

            }

            
            HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
            return response;
        }

        private async void custom(MySqlCommand cmd) {

            await cmd.ExecuteReaderAsync().ContinueWith((asd) => {

                //Debug.WriteLine("donezo");

                cmd.Connection.Close();
            });

        }

        // PUT api/<ContacsController>/5
        [HttpPut("{id}")]
        public void Put(Contact cont, int id)
        {
            using var cmd = new MySqlCommand();
            cmd.Connection = new DBConnection().connect();
            cmd.Connection.Open();

            cmd.CommandText = String.Format("call editContact({0}, {1}, '{2}', '{3}')", cont.id, id, cont.fullName, cont.email);
            MySqlDataReader reader = cmd.ExecuteReader();


            cmd.Connection.Close();

        }
        //cont.getEditable();
        //cmd.CommandText = "editContact(" cont.id + cont[0] + cont[1] + cont[2]")";


        // DELETE api/<ContacsController>/5
        [HttpDelete("{id}")]
        public void Delete(Contact cont, int id)
        {
            using var cmd = new MySqlCommand();
            cmd.Connection = new DBConnection().connect();
            cmd.Connection.Open();

            cmd.CommandText = String.Format("call deleteContact({0}, {1})", cont.id, id);
            MySqlDataReader reader = cmd.ExecuteReader();


            cmd.Connection.Close();
        }
    }
}

