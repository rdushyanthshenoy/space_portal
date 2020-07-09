/* This file is used to configure the database details*/
const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
    host : "localhost", //Hostname of the DB
    user : "root",  //Username of DB
    password : "xxxxxxx", //Password of the DB
    database : "Marvel", // DB name
    multipleStatements : true
})

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Connected to Marvel's identity management database");
    }
    else{
        console.log("Failed to establish database connection")
    }
})

module.exports = mysqlConnection;
