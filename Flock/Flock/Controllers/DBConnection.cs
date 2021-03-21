using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flock.Controllers
{
    public class DBConnection
    {
        private string collectionName;
        public FirestoreDb fireStoreDb;

        public DBConnection(string CollectionName)
        {
            string filepath = "./flock-adopse-firebase-adminsdk-f7byo-29221649c9.json";

            Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", filepath);

            fireStoreDb = FirestoreDb.Create("what-is-this");
            collectionName = CollectionName;
        }
    }
}
