require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.get("/ping", (req, res) => {
    res.send("Hello world!");
})


module.exports = app;