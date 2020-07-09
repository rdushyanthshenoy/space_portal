/*
Used in gettng all the unbalanced families
*/
const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");
const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

Router.get("/",(req, res)=>{
    mysqlQuery = "select family,family_id from multiverse group by power,family,family_id having count(family)>1"
    mysqlConnection.query(mysqlQuery,(err, rows, fields)=>{
        if(!err){
            res.send(rows)
        }
        else{
            res.send("Cannot connect to Marvel Identity Management System")
            console.log("Database connectivity error",err);
        }
    })
})
module.exports = Router;