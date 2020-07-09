const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");

const PersonRoutes = require("./routes/person");
const FamilyRoutes = require("./routes/family");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/person", PersonRoutes);
app.use("/family",FamilyRoutes);



app.listen(3000);