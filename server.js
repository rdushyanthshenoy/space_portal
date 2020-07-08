const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");

const PersonRoutes = require("./routes/person");

var app = express();

app.use(bodyParser.json());

app.use("/person", PersonRoutes);




app.listen(3000);