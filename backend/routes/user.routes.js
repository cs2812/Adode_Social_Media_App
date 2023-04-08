const express = require("express");
const userRoutes = express.Router();
const userCollection = require("../models/user.model");

// Create new user
userRoutes.post("/", async (req, res) => {
  try {
    const user = new userCollection(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Retrieve a user by id
userRoutes.get("/:id", async (req, res) => {
  try {
    const user = await userCollection.findById(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete a user by id
userRoutes.delete("/:id", async (req, res) => {
  try {
    const user = await userCollection.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Update a user's name or bio by id
userRoutes.put("/:id", async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["name", "bio"];
    const isValidUpdate = updates.every((update) =>
      allowedUpdates.includes(update)
    );
    if (!isValidUpdate) {
      return res.status(400).send({ error: "Invalid updates" });
    }
    const user = await userCollection.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = { userRoutes };
