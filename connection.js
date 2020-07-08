const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Ironman3000",
    database : "Marvel",
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
