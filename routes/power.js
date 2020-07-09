/*
Used to check if the family is balanced or unbalanced by compared the powers of same family
*/
const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");
const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

Router.get("/",(req, res)=>{
    console.log(req.query.family)
    mysqlQuery = "SELECT count(power) as power FROM Marvel.multiverse where family =?"
    mysqlConnection.query(mysqlQuery,req.query.family,(err, rows, fields)=>{
        if(!err){
            var powerCount = rows[0].power
            if(powerCount == 0){
                res.send("Family not found");
            }
            else if(powerCount == 1){
                res.send(req.query.family+" is a balanced family");
            }else if(powerCount > 1){
                res.send(req.query.family+" is a unbalanced family");
            }else{
                res.send("Error! Not found");
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