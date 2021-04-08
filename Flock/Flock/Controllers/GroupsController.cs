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
    public class GroupsController : ControllerBase
    {
        List<Group> groups = new List<Group>();

        public GroupsController() {
            groups.Add(new Group { id=1, name="group1"});
            groups.Add(new Group { id = 2, name = "group2" });
            groups.Add(new Group { id = 3, name = "group3" });
            groups.Add(new Group { id = 4, name = "group4" });
            groups.Add(new Group { id = 5, name = "group5" });
        }
        [HttpGet]
        public List<Group> Get()
        {
            return groups;
        }

        // GET apis/<GroupsController>/5
        [HttpGet("{id}")]
        public Group Get(int id)
        {
            return groups.Where(x => x.id == id).FirstOrDefault();
        }

        // POST apis/<GroupsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<GroupsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<GroupsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
