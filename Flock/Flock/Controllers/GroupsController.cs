﻿using Flock.Models;
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
    public class GroupsController : ControllerBase
    {

        public GroupsController() {
            /*groups.Add(new Group { id=1, name="group1"});
            groups.Add(new Group { id = 2, name = "group2" });
            groups.Add(new Group { id = 3, name = "group3" });
            groups.Add(new Group { id = 4, name = "group4" });
            groups.Add(new Group { id = 5, name = "group5" });*/
        }
        [HttpGet]
        public List<Group> Get()
        {
            return null;
        }

        // GET apis/<GroupsController>/5
        [HttpGet("{id}")]
        public List<Group> Get(int id)
        {
            List<Group> group = new List<Group>();
            using var cmd = new MySqlCommand();
            cmd.Connection = new DBConnection().connect();
            cmd.Connection.Open();

            cmd.CommandText = "getAllGroups(" + id + ")";

            MySqlDataReader reader = cmd.ExecuteReader();

            while (reader.Read())
            {

                group.Add(new Group
                {
                    id = (int)reader.GetValue(0),
                    name = reader.GetValue(1).ToString()
                });

            }

            cmd.Connection.Close();
            return group;
        }

        // POST apis/<GroupsController>/5
        [HttpPost("{id}")]
        public void Post(Group gr, int id)
        {
            using var cmd = new MySqlCommand();
            cmd.Connection = new DBConnection().connect();
            cmd.Connection.Open();

            cmd.CommandText = String.Format("call addGroup({0}, '{1}')", id, gr.name);
            MySqlDataReader reader = cmd.ExecuteReader();


            cmd.Connection.Close();
        }

        // PUT api/<GroupsController>/5
        [HttpPut("{id}")]
        public void Put(Group gr, int id)
        {
        }

        // DELETE api/<GroupsController>/5
        [HttpDelete("{id}")]
        public void Delete(Group gr, int id)
        {
            using var cmd = new MySqlCommand();
            cmd.Connection = new DBConnection().connect();
            cmd.Connection.Open();

            cmd.CommandText = String.Format("call deleteGroup({0}, {1})", gr.id, id);
            MySqlDataReader reader = cmd.ExecuteReader();


            cmd.Connection.Close();
        }
    }
}
