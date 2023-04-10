const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    user_id: { type: String, ref: 'User', required: true },
    content: { type: String, required: true, maxlength: 300 },
    likes: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
})

const postCollection= mongoose.model("Post",postSchema);
module.exports = postCollection