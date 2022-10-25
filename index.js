const express = require("express");
const programs = require("./data/programs.json");

// calling express app
const app = express();

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
