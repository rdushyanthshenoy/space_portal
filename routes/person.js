const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");
const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//To get all the availble user details from the multiverse
Router.get("/",(req, res)=>{
    mysqlConnection.query("SELECT * from multiverse",(err, rows, fields)=>{
        if(!err){
            if(rows.length != 0){
                res.send(rows);
            }
            else{
                res.send("Thanos destroyed everyone");
                //Send error if there is no users in the database
            }
            console.log("query executed sucessfully");
        }
        else{
            res.send("Cannot connect to Marvel Identity Management System");
            console.log("Database connectivity error ",err);
        }
    })
})

//To insert new user universe
Router.post("/",(req,res)=>{
    var PersonData=req.body;
    //Checking the payload if it has all the required parameters to create a user
    if(PersonData.id && PersonData.universe && PersonData.family_id && PersonData.power && PersonData.family){
        mysqlConnection.query("INSERT INTO Marvel.multiverse SET ?",PersonData,(err, rows, fields)=>{
            if(!err){
                res.send("ID "+PersonData.id+" added to Marvel Identity Management System")
            }
            else{
                res.send("Invalid details")
                console.log("Database connectivity error",err);
            }
        })
    }
    else{
        res.send("Please send all details of the person")
        console.log("INSERT request rejected due to the missing of manditory params");
    }
})

module.exports = Router;