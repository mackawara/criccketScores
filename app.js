const express = require("express");
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5007;
//const fetch = import("node-fetch");
const { json } = require("express/lib/response");

//Mongds/mongoose setup
const mongoose=require("mongoose")
const mongodb=require("mongodb")
const mongooseURL=process.env.MONGOOSEURL

mongoose.Connection()

app.listen(PORT, () => {
  console.log("Server listenting on port " + PORT);
});
app.get("/", (req, res) => {
  res.sendStatus("200").send(`${json}`);
});
