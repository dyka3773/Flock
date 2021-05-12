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
        public ActionResult GetNumOfPages(int aid, string query, int numOfRows, int gid)
        {
            List<Contact> contacts = new List<Contact>();
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
                    cmd.CommandText = String.Format("call numOfPagesInConts({0}, null, {1}, null)", aid, numOfRows);
                }
                else if (query == null)
                {
                    cmd.CommandText = String.Format("call numOfPagesInConts({0}, null, {1}, {2})", aid, numOfRows, gid);
                }
                else if (gid == 0)
                {
                    cmd.CommandText = String.Format("call numOfPagesInConts({0}, '{1}', {2}, null)", aid, query, numOfRows);
                }
                else
                {
                    cmd.CommandText = String.Format("call numOfPagesInConts({0}, '{1}', {2}, {3})", aid, query, numOfRows, gid);
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
            catch (Exception ex)
            {
                result = BadRequest(ex.ToString());
            }
            cmd.Connection.Close();
            return result;

        }


        [HttpGet("{aid}/{pageNum}/{numOfRows}/{gid?}/{query?}")]
        public ActionResult Get(int aid, int pageNum, int numOfRows, string query, int gid) 
        {
            int offset = numOfRows * pageNum;

            ActionResult result = BadRequest();
            List<Contact> contacts = new List<Contact>();
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
                    cmd.CommandText = String.Format("call getContacts({0}, null, {1}, {2}, null)", aid, offset, numOfRows);
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
                    cmd.CommandText = String.Format("call getContacts({0}, '{1}', {2}, {3}, {4})", aid, query, offset, numOfRows, gid);
                } 

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

                result = Ok(contacts);

                
            }
            catch (MySqlException msql)
            {
                result = BadRequest(msql.ToString());
            }
            catch (GeneralException ex)
            {
                result = BadRequest(ex.ToString());
            }
            catch (Exception ex)
            {
                result = BadRequest(ex.ToString());
            }
            cmd.Connection.Close();
            return result;
        }

        // POST api/<ContacsController>/5
        [HttpPost("{aid}")]
        public ActionResult Post(Contact cont, int aid)
        {
            using var cmd = new MySqlCommand();
            ActionResult result = BadRequest();
            try
            {
                if (aid < 0)
                {
                    throw new GeneralException("Wrong parameters");
                }

                cmd.Connection = new DBConnection().connect();
                cmd.Connection.Open();

                cmd.CommandText = String.Format("call addContact('{0}', '{1}', {2}, {3})", cont.fullName, cont.email, aid, "null");
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
            catch (Exception ex)
            {
                result = BadRequest(ex.ToString());
            }
            cmd.Connection.Close();
            return result;
        }

        // POST api/<ContacsController>/5 for not null
        [HttpPost("{aid}/{gid}")]
        public ActionResult Post(Contact cont, int aid, int gid)
        {
            using var cmd = new MySqlCommand();
            ActionResult result = BadRequest();
            try
            {
                if (aid < 0 || gid < 0)
                {
                    throw new GeneralException("Wrong parameters");
                }
                cmd.Connection = new DBConnection().connect();
                cmd.Connection.Open();

                cmd.CommandText = String.Format("call addContact('{0}', '{1}', {2}, {3})", cont.fullName, cont.email, aid, gid);
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
            catch (Exception ex)
            {
                result = BadRequest(ex.ToString());
            }
            cmd.Connection.Close();
            return result;
        }

        // POST api/<ContacsController>/5 for not null
        [HttpPost("multiplePost/{aid}/{gid}")]
        public ActionResult multiplePost(List<Contact> contacts, int aid, int gid)
        {
            String WrongCred = "";
            bool Check = false;
            using var cmd = new MySqlCommand();
            ActionResult result = BadRequest();
            try
            {
                if (aid < 0 || gid < 0)
                {
                    throw new GeneralException("Wrong parameters");
                }

                foreach (Contact i in contacts)
                {

                    cmd.Connection = new DBConnection().connect();
                    cmd.Connection.Open();
                    cmd.CommandText = String.Format("call addContact('{0}', '{1}', {2}, {3})", i.fullName, i.email, aid, gid);
                    try
                    {
                        custom(cmd);
                    }
                    catch (Exception e)
                    {
                        Check = true;
                        WrongCred = String.Concat(i.fullName + ", ", WrongCred);  
                    }
                }
                if (Check == true)
                {
                    return Ok("These Contacts were not added: " + WrongCred);
                }
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
            catch (MultiplePostException ex)
            {
                result = BadRequest(ex.ToString());
            }
            catch (Exception ex)
            {
                result = BadRequest(ex.ToString());
            }
            return result;
             
        }

        private async void custom(MySqlCommand cmd) {

            await cmd.ExecuteReaderAsync().ContinueWith((asd) => {

                //Debug.WriteLine("donezo");

                cmd.Connection.Close();
            });

        }

        // PUT api/<ContacsController>/5
        [HttpPut("{aid}")]
        public ActionResult Put(Contact cont, int aid)
        {
            using var cmd = new MySqlCommand();
            ActionResult result = BadRequest();
            try
            {
                if (aid < 0)
                {
                    throw new GeneralException("Wrong parameters");
                }
                cmd.Connection = new DBConnection().connect();
                cmd.Connection.Open();

                cmd.CommandText = String.Format("call editContact({0}, {1}, '{2}', '{3}')", cont.id, aid, cont.fullName, cont.email);
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
            catch (Exception ex)
            {
                result = BadRequest(ex.ToString());
            }
            cmd.Connection.Close();
            return result;

        }
        //cont.getEditable();
        //cmd.CommandText = "editContact(" cont.id + cont[0] + cont[1] + cont[2]")";


        // DELETE api/<ContacsController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(Contact cont, int id)
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

                cmd.CommandText = String.Format("call deleteContact({0}, {1})", cont.id, id);
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
            catch (Exception ex)
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

                String CIDS = "";
                foreach (int cont in C)
                {
                    CIDS = String.Concat(cont + "|", CIDS);
                }

                
                cmd.Connection = new DBConnection().connect();
                cmd.Connection.Open();
                cmd.CommandText = String.Format("call deleteManyContacts('{0}', {1})", CIDS, aid);
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
            catch (Exception ex)
            {
                result = BadRequest(ex.ToString());
            }
            cmd.Connection.Close();
            return result;
        }
    }
}

