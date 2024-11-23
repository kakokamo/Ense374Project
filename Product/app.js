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
////////////////////////////////////////////////////////////////////

// Simple server operation
app.listen(port, () => {
  // template literal
  console.log(`Server is running on http://localhost:${port}`);
});


import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://my_user:<db_password>@sktrails.pzhno.mongodb.net/";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
    const db = client.db('SkTrailsDB');
    // Further operations
    async function createUser() {
        const user = {
          user_id: "1",
          email: "user@example.com",
          first_name: "John",
          last_name: "Doe",
          username: "john_doe",
          password: "hashed_password",
          dob: "1990-01-01",
          profile_picture: "link_to_image",
          favorite_trails: ["Trail 1", "Trail 2"]
        };
        
        const result = await db.collection('users').insertOne(user);
        console.log("User created with ID:", result.insertedId);
    }

      async function createPost() {
        const post = {
          post_id: "1001",
          user_id: "1",  // Reference to user
          title: "Best Trail Experience",
          content: "This was an amazing experience hiking in the Rockies!",
          image: "link_to_image",
          upvotes: 5,
          downvotes: 1
        };
        
        const result = await db.collection('posts').insertOne(post);
        console.log("Post created with ID:", result.insertedId);
      }
      async function createComment() {
        const comment = {
          comment_id: "5001",
          post_id: "1001",  // Reference to post
          user_id: "1",  // Reference to user
          timestamp: new Date(),
          content: "I agree, this trail is amazing!",
          upvotes: 3,
          downvotes: 0
        };
        
        const result = await db.collection('comments').insertOne(comment);
        console.log("Comment created with ID:", result.insertedId);
      }
      createUser();
      createPost();
      createComment();
  } catch (e) {
    console.error(e);
  }
}

connectDB();














connectDB().catch(console.error);