const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://my_user:<db_password>@sktrails.pzhno.mongodb.net/";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
    const db = client.db('SocialAppDB');
    // Further operations
  } catch (e) {
    console.error(e);
  }
}

connectDB();