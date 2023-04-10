const port = 8080;
require("dotenv").config();
const { connection } = require("./configs/db");
const app = require("./app");

app.listen(process.env.PORT || port, async () => {
  await connection;
  console.log("server is running on", `${process.env.PORT || port}`);
});
