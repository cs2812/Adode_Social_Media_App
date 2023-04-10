const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const PostCollection = require("../models/post.model");
require("dotenv").config();

describe("POST /posts", () => {
    beforeAll(async () => {
     await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    });

    afterAll(async () => {
      await mongoose.connection.close();
    });

  afterEach(async () => {
    await PostCollection.deleteMany();
  });

  it("should just pass", async () => {
    const res = await request(app).get("/");
    expect(res.text).toEqual("Jai Shree Ganesh");
  });

  it("should create a new post", async () => {
    const userId = "c348fj57f7rgj57fj57"
    const res = await request(app).post("/posts").send({
      user_id: userId,
      content: "This is a new post.",
    });
    expect(res.body.user_id).toEqual(userId);
    expect(res.body.content).toEqual("This is a new post.");
  });

  //   it('should return an error if user_id is missing', async () => {
  //     const res = await request(app)
  //       .post('/posts')
  //       .send({
  //         content: 'This post is missing a user_id.'
  //       });
  //       console.log(res)
  //     // expect(res.statusCode).toEqual(400);
  //     // expect(res.body).toHaveProperty('error');
  //     // expect(res.body.error).toEqual('user_id is required');
  //   });
});