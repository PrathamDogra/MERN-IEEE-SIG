const express = require("express");

const app = express();

app.get("/app", (req, res) => {
  res.status(200).json("This is an App");
});

// app.post("/app", (req, res)=>{
//   const body = req.body;
  
// })

// app.put("/app", (req, res)=>{
//   res.status(200).json("Data is updated")
// })

const port = 5000;
app.listen(port, () => {
  console.log(`The Server is running at ${port}`);
});
