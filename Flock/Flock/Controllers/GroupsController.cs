using Flock.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using System.Diagnostics;
using Flock.Exceptions;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Flock.Controllers
{
    [Route("apis/[controller]")]
    [ApiController]
    public class GroupsController : ControllerBase
    {

        public GroupsController() {
          /*groups.Add(new Group { id=1, name="group1"});
            groups.Add(new Group { id = 2, name = "group2" });
            groups.Add(new Group { id = 3, name = "group3" });
            groups.Add(new Group { id = 4, name = "group4" });
            groups.Add(new Group { id = 5, name = "group5" });*/
        }
      

        // GET apis/<GroupsController>/5
        [HttpGet("{aid}")]
        public ActionResult Get(int aid)
        {
            try
            {
                if (aid < 0)
                {
                    throw new GeneralException("Wrong parameters");
                }
                List<Group> group = new List<Group>();
                using var cmd = new MySqlCommand();
                cmd.Connection = new DBConnection().connect();
                cmd.Connection.Open();

                cmd.CommandText = "getAllGroups(" + aid + ")";

                MySqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read()) {
                    group.Add(new Group
                    {
                        id = (int)reader.GetValue(0),
                        name = reader.GetValue(1).ToString()
                    }); 

                }

            cmd.Connection.Close();
            return Ok(group);
            }
            catch (MySqlException msql)
            {
                return BadRequest(msql.ToString());
            }
            catch (GeneralException ex)
            {
                return BadRequest(ex.ToString());
            }
        }

       
        public ActionResult GetContacts(int aid, int gid )
        {
            try
            {
                if (aid < 0 || gid < 0)
                {
                    throw new GeneralException("Wrong Parameters");
                }
                Console.WriteLine("awdawd");
                List<Contact> contacts = new List<Contact>();
                using var cmd = new MySqlCommand();
                cmd.Connection = new DBConnection().connect();
                cmd.Connection.Open();

                Debug.WriteLine("Gid: " + gid);
                cmd.CommandText = String.Format("call getContactsInGroup({0}, {1})", aid, gid);


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
                return Ok(contacts);
            }
            catch (MySqlException msql)
            {
                return BadRequest(msql.ToString());
            }
            catch (GeneralException ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        // POST apis/<GroupsController>/5
        [HttpPost("{aid}/{gname}")]
        public ActionResult Post(int aid, string gname )
        {
            try
            {
                if (aid < 0 || aid < 0)
                {
                    throw new GeneralException("Wrong Parameters");
                }
                using var cmd = new MySqlCommand();
                cmd.Connection = new DBConnection().connect();
                cmd.Connection.Open();

                cmd.CommandText = String.Format("call addGroup({0}, '{1}')", aid, gname);
                MySqlDataReader reader = cmd.ExecuteReader();


                cmd.Connection.Close();

                return Ok();
            }
            catch (MySqlException msql)
            {
                return BadRequest(msql.ToString());
            }
            catch (GeneralException ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        // PUT api/<GroupsController>/5
        [HttpPut("{id}")]
        public ActionResult Put(Group gr, int aid)
        {
            try
            {
                if (aid< 0 || aid< 0)
                {
                    throw new GeneralException("Wrong Parameters");
                }
                using var cmd = new MySqlCommand();
                cmd.Connection = new DBConnection().connect();
                cmd.Connection.Open();

                cmd.CommandText = String.Format("call editGroup({0}, {1}, '{2}')", gr.id, aid, gr.name);
                MySqlDataReader reader = cmd.ExecuteReader();


                cmd.Connection.Close();

                return Ok();
            }
            catch (MySqlException msql)
            {
                return BadRequest(msql.ToString());
            }
            catch (GeneralException ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        // DELETE api/<GroupsController>/5
        [HttpDelete("{gid}/{aid}")]
        public ActionResult Delete(int gid, int aid)
        {
            try
            {
                if (aid< 0 || aid< 0)
                {
                    throw new GeneralException("Wrong Parameters");
                }
                using var cmd = new MySqlCommand();
                cmd.Connection = new DBConnection().connect();
                cmd.Connection.Open();

                cmd.CommandText = String.Format("call deleteGroup({0}, {1})", gid, aid);
                MySqlDataReader reader = cmd.ExecuteReader();


                cmd.Connection.Close();

                return Ok();
            }
            catch (MySqlException msql)
            {
                return BadRequest(msql.ToString());
            }
            catch (GeneralException ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
