const { MongoClient } = require("mongodb");

let db;

async function connectToDb(uri) {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  db = client.db("codeSnippetGenerator");
  console.log("Connected to MongoDB");
}

function getDb() {
  return db;
}

module.exports = { connectToDb, getDb };
