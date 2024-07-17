
// const mongodb = require('mongodb')
// const { MongoClient, ServerApiVersion } = require('mongodb'); //mongodb wasnt working
// const uri = "mongodb+srv://john:2025Ad69563@nodeexpressprojects.dvz4bvx.mongodb.net/?appName=NodeExpressProjects";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// const mongoose = require('mongoose')

// const connectDB = (url) => {
//   return mongoose.connect(url, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
// }

// module.exports = connectDB

const config = require('config.json');
const mongoose = require('mongoose');
const maybe = mongoose.connect(process.env.MONGO_URI || config.connectionString);
const connectDB = (url) => {
  return maybe
}

module.exports = connectDB
