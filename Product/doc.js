{
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