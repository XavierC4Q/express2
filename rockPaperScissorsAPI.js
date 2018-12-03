/////////////////////ROCK PAPER SCISSORS API//////////////

const express = require("express");

const app = express();

const rock = [
  { user: "rock", ai: "rock", result: "tie" },
  { user: "rock", ai: "paper", result: "lose" },
  { user: "rock", ai: "scissors", result: "win" }
];
const paper = [
  { user: "paper", ai: "rock", result: "win" },
  { user: "paper", ai: "paper", result: "tie" },
  { user: "paper", ai: "scissors", result: "lose" }
];
const scissors = [
  { user: "scissors", ai: "rock", result: "lose" },
  { user: "scissors", ai: "paper", result: "win" },
  { user: "scissors", ai: "scissors", result: "tie" }
];

function rps(arr) {
  return arr[Math.floor(Math.random() * 3)];
}
////
// function rps() {
//   app.get(`/:${arr}`, (req, res) => {
//     res.send(arr[Math.floor(Math.random() * 3)]);
//   });
//
// }
// rps()
///////
app.get("/rock", (req, res) => {
  res.send(rps(rock));
});
app.get("/paper", (req, res) => {
  res.send(rps(paper));
});
app.get("/scissors", (req, res) => {
  res.send(rps(scissors));
});

app.listen(8000, () => {
  console.log("port 800 onnnn");
});
