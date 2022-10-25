const express = require("express");
const cors = require("cors");
const programs = require("./data/programs.json");

// calling express app
const app = express();

// use cors
app.use(cors());

app.get("/", (req, res) => {
  res.send("api running");
});

app.get("/programs", (req, res) => {
  res.send(programs);
});

const port = 5000;

app.listen(port, () => {
  console.log("port running successfully on " + port);
});
