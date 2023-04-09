const express = require("express");
const postRoutes = express.Router();
const postCollection = require("../models/post.model");

// Create a new post
postRoutes.post("/", async (req, res) => {
  try {
    const post = new postCollection({
      user_id: req.body.user_id,
      content: req.body.content,
      likes: 0, // set initial like count to 0
    });
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Retrieve a post by id
postRoutes.get("/:id", async (req, res) => {
  try {
    const post = await postCollection.findById(req.params.id);
    if (!post) {
      throw Error("Post not found");
    }
    res.json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Update a post's content by id
postRoutes.put("/:id", async (req, res) => {
  try {
    const post = await postCollection.findById(req.params.id);
    if (!post) {
      throw Error("Post not found");
    }
    post.content = req.body.content;
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a post by id
postRoutes.delete("/:id", async (req, res) => {
  try {
    const post = await postCollection.findById(req.params.id);
    if (!post) throw Error("Post not found");
    await postCollection.findByIdAndDelete(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Increment the like count of a post by id
postRoutes.post("/:id/like", async (req, res) => {
  try {
    const post = await postCollection.findById(req.params.id);
    if (!post) throw Error("Post not found");
    post.likes++;
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Decrement the like count of a post by id. The count should not go below 0.
postRoutes.post("/:id/unlike", async (req, res) => {
  try {
    const post = await postCollection.findById(req.params.id);
    if (!post) throw Error("Post not found");
    if (post.likes > 0) {
      post.likes--;
    }
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = { postRoutes };
