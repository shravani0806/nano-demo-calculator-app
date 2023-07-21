// const express = require('express');
// const app = express();

// const PORT = process.env.PORT || 8080;

// const baseUrl = '/calculator'

// app.use(express.json());

// const baseRouter = express.Router();

// baseRouter.get('/greeting', (req, res) => {
//     return res.send('Hii');
// });

// baseRouter.post('/add', (req, res) => {
//     res.json({ "": null });
// });


// baseRouter.post('/subtract', (req, res) => {
//     res.json({ "": null });
// });

// app.use(baseUrl, baseRouter);
// app.listen(PORT, () => {
//     console.log("Server running at PORT", PORT);
// });

const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = "/calculator";

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get("/greeting", (req, res) => {
  return res.send("Hello---Gunjan");
});

baseRouter.post("/add", (req, res) => {
  const { num1, num2 } = req.body;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: "Invalid input. Please provide valid numbers." });
  }
  const result = num1 + num2;
  res.json({ result });
});

baseRouter.post("/subtract", (req, res) => {
  const { num1, num2 } = req.body;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: "Invalid input. Please provide valid numbers." });
  }
  const result = num1 - num2;
  res.json({ result });
});

app.use(baseUrl, baseRouter);

app.listen(PORT, () => {
  console.log("Server running at PORT", PORT);
});