const express = require("express");
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5007;
const fetch = require("node-fetch");
const rapidapiKEY = process.env.RAPIDAPIKEY;
const rapidapiHOST = process.env.RAPIDAPIHOST;

const circUrl = "https://cricket-live-scores4.p.rapidapi.com/api";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": rapidapiHOST,
    "X-RapidAPI-Key": rapidapiKEY,
  },
};

fetch(circUrl, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));

app.listen(PORT, () => {
  console.log("Server listenting on port " + PORT);
});
app.get("/", (req, res) => {
  fetch(circUrl, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
  res.sendStatus("200").send("SUCCESSFULY");
});
