const express = require("express");

//set up express app
const app = express();

//get request
app.get("/", (req, res) => {
  res.send({description: "Hello"});
});

//listen for requests
app.listen(4000, () => {
  console.log("listening for request");
});