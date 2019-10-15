const express = require("express");

const app = express();

app.get("/app", (req, res) => {
  res.status(200).json("This is an App");
});

const port = 5000;
app.listen(port, () => {
  console.log(`The Server is running at ${port}`);
});
