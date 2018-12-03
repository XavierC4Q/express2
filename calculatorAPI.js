const express = require("express");

const app = express();

app.get("/add/:num1/:num2", (req, res) => {
  let result = parseInt(req.params.num1) + parseInt(req.params.num2);
  let obj = {
    num1: req.params.num1,
    num2: req.params.num2,
    result: result
  };
  res.send(obj);
});
app.get("/sub/:num1/:num2", (req, res) => {
  let result = parseInt(req.params.num1) - parseInt(req.params.num2);
  let obj = {
    num1: req.params.num1,
    num2: req.params.num2,
    result: result
  };
  res.send(obj);
});
app.get("/mul/:num1/:num2", (req, res) => {
  let result = parseInt(req.params.num1) * parseInt(req.params.num2);
  let obj = {
    num1: req.params.num1,
    num2: req.params.num2,
    result: result
  };
  res.send(obj);
});
app.get("/div/:num1/:num2", (req, res) => {
  let result = parseInt(req.params.num1) / parseInt(req.params.num2);
  let obj = {
    num1: req.params.num1,
    num2: req.params.num2,
    result: result
  };
  res.send(obj);
});

app.listen(8000, () => {
  console.log("port 800 onnnn");
});
