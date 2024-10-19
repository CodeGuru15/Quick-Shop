const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.BACKEND_SERVER_PORT;

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
