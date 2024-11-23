import express, {urlencoded, json } from 'express'; //to create a server and handle HTTP requests
import fs from 'fs'; //(File System) is used to read from and write to files

import { fileURLToPath } from 'url';
import { join, dirname } from 'path'; //used to work with file and directory paths
import { connect, Schema, model } from "mongoose";
import session from "express-session";
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";
import dotnev from 'dotenv';
dotnev.config();
// this is a canonical alias to make your life easier, like jQuery to $.
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
// a common localhost test port
const port = 3000;

// host static resources, like js and css
app.use(express.static(join(__dirname, "public")));

// configure express to access variables in req.body object when submitting forms
app.use(urlencoded({ extended: true })); //  helps extract data from forms submitted 
app.use(json()); //used to parse JSON request bodies
app.set('view engine', 'ejs');

// 2. Create a session. The secret is used to sign the session ID.
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use (passport.initialize());
app.use (passport.session());
//////////////////////////////////////////////////////////////////////////////////////

// Simple server operation
app.listen(port, () => {
  // template literal
  console.log(`Server is running on http://localhost:${port}`);
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