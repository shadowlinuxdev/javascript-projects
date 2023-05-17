const mysql = require('mysql');
var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'nodeMachine',
    database:'javascript'
});
mysqlConnection.connect((err)=>{
    if(err){
        console.log("Unable to connect database connection " +JSON.stringify(err,undefined,2));
    }
    else{
        console.log("DB conncetion successful!");
    }
});
module.exports=mysqlConnection;