import express from 'express'; // Importing express
import mongoose from 'mongoose'; // Importing mongoose
import Trail from './trails.js';
import bodyParser from 'body-parser'; // Importing bodyParser
import { fileURLToPath } from 'url'; // Importing fileURLToPath
import { join, dirname } from 'path'; // Importing join and dirname
import { connect, Schema, model } from 'mongoose'; // Importing mongoose methods
import session from 'express-session'; // Importing express-session
import passport from 'passport'; // Importing passport
import passportLocalMongoose from 'passport-local-mongoose'; // Importing passport-local-mongoose
import dotenv from 'dotenv'; // Importing dotenv for environment variables

dotenv.config(); // Loading environment variables

const app = express(); // Creating the express app
const __dirname = dirname(fileURLToPath(import.meta.url)); // Resolving current directory
const port = 3000; // Port for the server

// Your other setup code here...


// host static resources, like js and css
app.use(express.static(join(__dirname, "public")));

// configure express to access variables in req.body object when submitting forms
app.use(express.urlencoded({ extended: true })); //  helps extract data from forms submitted 
app.use(express.json()); //used to parse JSON request bodies
app.set('view engine', 'ejs');

// 2. Create a session. The secret is used to sign the session ID.
// app.use(session({
//   secret: process.env.SECRET,
//   resave: false,
//   saveUninitialized: false
// }));

// app.use (passport.initialize());
// app.use (passport.session());
//////////////////////////////////////////////////////////////////////////////////////

// Simple server operation
app.listen(port, () => {
  // template literal
  console.log(`Server is running on http://localhost:${port}`);
});

// POST route to save trail data into the database
app.post('/api/trails', async (req, res) => {
  try {
    const trailData = req.body;

    // Save the trail data to MongoDB
    const newTrail = new Trail(trailData);
    await newTrail.save();

    res.status(200).json({ message: 'Trail data saved successfully', trail: newTrail });
  } catch (error) {
    console.error('Error saving trail data:', error);
    res.status(500).json({ message: 'Failed to save trail data' });
  }
});


import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://my_user:wtdRaHadvzXSbC6A@sktrails.pzhno.mongodb.net/";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
    const db = client.db('SkTrailsDB');
    // Further operations
    
  } catch (e) {
    console.error(e);
  }
}

connectDB();














connectDB().catch(console.error);