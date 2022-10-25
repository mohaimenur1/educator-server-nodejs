const express = require("express");
const cors = require("cors");
const programsData = require("./data/programs.json");

// calling express app
const app = express();

// use cors
app.use(cors());

app.get("/", (req, res) => {
  res.send("api running");
});

app.get("/programs", (req, res) => {
  res.send(programsData);
});

app.get("/programs/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const programD = programsData.find((predicate) => predicate.id === id);

  res.send(programD);
  console.log(programD);
});

// console.log(programDetails);

const port = 5000;

app.listen(port, () => {
  console.log("port running successfully on " + port);
});
