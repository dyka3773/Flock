
using ExcelDataReader;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.IO;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Flock.excelParsing
{
    [Route("api/[controller]")]
    [ApiController]
    public class csvParseController : ControllerBase
    {
        // GET: api/<csvParseController>
        [HttpGet]
        public string Get()
        {
            using (var stream = System.IO.File.Open("C:/Users/stef/Documents/GitHub/Flock/Flock/Flock/csvParsing/AAA.csv", FileMode.Open, FileAccess.Read))
            {
                System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);
                // Auto-detect format, supports:
                //  - Binary Excel files (2.0-2003 format; *.xls)
                //  - OpenXml Excel files (2007 format; *.xlsx, *.xlsb)
                using (var reader = ExcelReaderFactory.CreateCsvReader(stream))
                {
                    // Choose one of either 1 or 2:

                    // 1. Use the reader methods
                    do
                    {
                        while (reader.Read())
                        {
                            // reader.GetDouble(0);
                        }
                    } while (reader.NextResult());

                    // 2. Use the AsDataSet extension method
                    string result = JsonConvert.SerializeObject(reader.AsDataSet(), Formatting.Indented) ;

                    // The result of each spreadsheet is in result.Tables

                    return result;
                }
            }
        }

        // GET api/<csvParseController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<csvParseController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<csvParseController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<csvParseController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
