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
using System.IO;
using Flock.Exceptions;


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

   
        [HttpGet("GetNumOfPages/{aid}/{numOfRows}/{gid?}/{query?}")]
        public decimal GetNumOfPages(int aid, string query, int numOfRows, int gid)
        {
            List<Campaign> campaigns = new List<Campaign>();
            using var cmd = new MySqlCommand();
            cmd.Connection = new DBConnection().connect();
            cmd.Connection.Open();

            if (gid == 0 && query == null)
            {
                cmd.CommandText = String.Format("call numOfPagesInConts({0}, {1}, null, null)", aid, numOfRows);
            }
            else if (query == null)
            {
                cmd.CommandText = String.Format("call numOfPagesInConts({0}, {1}, null, {2})", aid, numOfRows, gid);
            }
            else if (gid == 0)
            {
                cmd.CommandText = String.Format("call numOfPagesInConts({0}, {1}, null, null)", aid, numOfRows, query);
            }
            else
            {
                cmd.CommandText = String.Format("call numOfPagesInConts({0}, {1}, {2}, {3})", aid, query, numOfRows, gid);
            }

            try
            {
                MySqlDataReader reader = cmd.ExecuteReader();
                reader.Read();
                return (decimal)reader.GetValue(0);
            }
            catch (MySqlException sqle)
            {

                Debug.WriteLine("AAAAAAAAAAAAAAAAAAAAAAAAA");
                return 0;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
                return 0;

            }

            
            

        }


        [HttpGet("{aid}/{pageNum}/{numOfRows}/{gid?}/{query?}")]
        public List<Contact> Get(int aid, int pageNum, int numOfRows, string query, int gid) 
        {
            int offset = numOfRows * pageNum;


            List<Contact> contacts = new List<Contact>();
            using var cmd = new MySqlCommand();
            cmd.Connection = new DBConnection().connect();
            cmd.Connection.Open();

            if (gid == 0 && query == null)
            {
                cmd.CommandText = String.Format("call getContacts({0}, null,{1}, {2}, null)", aid, offset, numOfRows);
            }
            else if (query == null)
            {
                cmd.CommandText = String.Format("call getContacts({0}, null, {1}, {2}, {3})", aid, offset, numOfRows, gid);
            }
            else if (gid == 0)
            {
                cmd.CommandText = String.Format("call getContacts({0},'{1}', {2}, {3}, null)", aid, query, offset, numOfRows);
            }
            else
            {
                cmd.CommandText = String.Format("call getContacts({0}, '{1}', {2}, {3},{4})", aid, query, offset, numOfRows, gid);
            }

            try
            {
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

            }
            catch (MySqlException sqle) {

                Debug.WriteLine("AAAAAAAAAAAAAAAAAAAAAAAAA");
                return null;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
                return null;

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
        [HttpPut("{aid}")]
        public void Put(Contact cont, int aid)
        {
            using var cmd = new MySqlCommand();
            cmd.Connection = new DBConnection().connect();
            cmd.Connection.Open();

            cmd.CommandText = String.Format("call editContact({0}, {1}, '{2}', '{3}')", cont.id, aid, cont.fullName, cont.email);
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

        [HttpDelete("multipleDelete/{id}")]
        public HttpResponseMessage multipleDelete(List<String> C, int id)
        {
            String CIDS = "";
            foreach (String cont in C)
            {
                CIDS = String.Concat(cont, "|");
            }

            using var cmd = new MySqlCommand();
            cmd.Connection = new DBConnection().connect();
            cmd.Connection.Open();
            cmd.CommandText = String.Format("call deleteManyContacts({0}, {1})", CIDS, id);

            HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
            return response;
        }
    }
}

