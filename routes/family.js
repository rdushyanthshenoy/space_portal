/*
Listing families of a given universe
*/
const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");
const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

Router.get("/",(req, res)=>{
    console.log(req.query.universe)
    mysqlQuery = "SELECT distinct family_id,family from multiverse where universe=?"
    mysqlConnection.query(mysqlQuery,req.query.universe,(err, rows, fields)=>{
        if(!err){
            if(rows.length != 0){
                res.send(rows);
            }
            else{
                res.send("No data found"+err);
            }
            console.log("query executed sucessfully");
        }
        else{
            res.send("Cannot connect to Marvel Identity Management System")
            console.log("Database connectivity error",err);
        }
    })
})
module.exports = Router;