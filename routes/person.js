const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

Router.get("/",(req, res)=>{
    mysqlConnection.query("SELECT * from multiverse",(err, rows, fields)=>{
        if(!err){
            res.send(rows);
            console.log("People fetch completed");
        }
        else{
            console.log("Thanos destroyed everyone",err);
        }
    })
})

module.exports = Router;