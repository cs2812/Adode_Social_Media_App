const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
{
  name: { type: String, required: true, maxlength: 50 },
  email: { type: String, required: true, unique: true },
  bio: { type: String, maxlength: 200 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
},
{
    versionKey: false,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
});

const userCollection = mongoose.model("User",userSchema)
module.exports= userCollection;