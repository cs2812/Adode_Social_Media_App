const userCollection = require("../models/user.model");
const postCollection = require("../models/post.model");
const express = require("express");
const analyticsRoutes = express.Router();

// Retrieve the total number of users
analyticsRoutes.get("/users", async (req, res) => {
  try {
    const data = await userCollection.find().sort({_id:-1});
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Retrieve the top 5 most active users, based on the number of posts.
analyticsRoutes.get("/users/top-active", async (req, res) => {
  try {
    const activeUsers = await userCollection.aggregate([
      {
        $lookup: {
          from: "posts",
          localField: "_id",
          foreignField: "user_id",
          as: "posts",
        },
      }, //it will return array of object
      { $project: { name: 1, email: 1, numPosts: { $size: "$posts" } } }, //it will modify returned array of object
      { $sort: { numPosts: -1 } },
      { $limit: 5 },
    ]);
    res.json(activeUsers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// Retrieve the total number of posts.
analyticsRoutes.get("/posts", async (req, res) => {
  try {
    const data = await postCollection.find().sort({_id:-1});
    res.send(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Retrieve the top 5 most liked posts.
analyticsRoutes.get("/posts/top-liked", async (req, res) => {
  try {
    const posts = await postCollection.find().sort({ likes: -1 }).limit(5);
    res.json(posts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = { analyticsRoutes };
