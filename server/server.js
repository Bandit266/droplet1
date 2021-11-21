const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

//...
app.use(bodyParser.json());
app.post("/hook", (req, res) => {
  console.log(req.body); // Call your action on the request here
  res.status(200).end(); // Responding is important
});
//...

app.get("/api/greeting", (req, res) => {
  const name = req.query.name || "World";
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get("/api/auth", (req, res) => {
  const name = req.query.name || "AUTHORIZATION HERE";
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Work on ${name}!` }));
});

app.get("/api/endpointone", (req, res) => {
  const name = req.query.name || "World";
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Hello ${name}! endpoint` }));
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
