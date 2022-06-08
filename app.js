const express = require("express");
const app = express();
const dotenv = require("dotenv");
const ejs = require("ejs");

const PORT = process.env.PORT || 5007;
//const fetch = import("node-fetch");
const { json } = require("express/lib/response");

//Mongds/mongoose setup
const mongoose = require("mongoose");
const mongodb = require("mongodb");
const mongooseURL = process.env.MONGOOSEURL;
const fetchFromOffset = require("./cricketdata");

//mongoose.Connection

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://mkawara:<password>@hand2hand.4pnao.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

/// Middleware
app.set("view engine", `ejs`);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log("Server listenting on port " + PORT);
});
app.get("/", (req, res) => {
  fetchFromOffset(0)
    .then(function (data) {
      res.send(data);
    })
    .catch((e) => console.log);
});
