const express = require("express");
const { userRoutes } = require("./routes/user.routes");
const { postRoutes } = require("./routes/post.routes");
const { analyticsRoutes } = require("./routes/analytics.routes");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/analytics", analyticsRoutes);

app.get("/", (req, res) => {
  res.send("Jai Shree Ganesh");
});

module.exports = app;