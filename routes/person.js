const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

Router.get("/",(req, res)=>{
    mysqlConnection.query("SELECT * from multiverse",(err, rows, fields)=>{
        if(!err){
            if(rows.length != 0){
                res.send(rows);
            }
            else{
                res.send("Thanos destroyed everyone");
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