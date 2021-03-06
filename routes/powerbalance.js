/* Used in balancing the family by updating the same power accross all the families
*/const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");
const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//To get all the availble user details from the multiverse
Router.put("/",(req, res)=>{
    var familyDetail = [req.body.power,req.body.family,req.body.family_id]
    mysqlQuery = "UPDATE multiverse SET power = ? WHERE (family = ?) and (family_id  = ? )";
    mysqlConnection.query(mysqlQuery,familyDetail,(err, rows, fields)=>{
        if(!err){
            res.send(req.body.family+"'s power changed to "+req.body.power)
        }
        else{
            res.send("Error in changing the power, please provide correct details")
        }
    })
})
module.exports = Router;