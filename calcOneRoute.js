const express = require("express");

const app = express();

app.get("/:op/:num1/:num2", (req, res) => {
  function oneRoute(op) {
    if (req.params.op === "add") {
      let result = parseInt(req.params.num1) + parseInt(req.params.num2);
      let obj = {
        num1: req.params.num1,
        num2: req.params.num2,
        result: result
      };
      console.log(result);
      res.send(obj);
    } else if (op === "sub") {
      let result = parseInt(req.params.num1) - parseInt(req.params.num2);
      let obj = {
        num1: req.params.num1,
        num2: req.params.num2,
        result: result
      };

      res.send(obj);
    } else if (op === "mul") {
      let result = parseInt(req.params.num1) * parseInt(req.params.num2);
      let obj = {
        num1: req.params.num1,
        num2: req.params.num2,
        result: result
      };
      console.log(result);
      res.send(obj);
    } else if (op === "div") {
    }
  }
  oneRoute(req.params.op);
});

app.listen(8000, () => {
  console.log("port 80000 onnnn");
});
