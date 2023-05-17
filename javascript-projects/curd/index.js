const connection = require('./connection');
const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json())

/*Fetching all the data from database*/
app.get('/employees',(req,res)=>{
    connection.query('SELECT * FROM javascript.employee',(err,rows)=>{
        if(err){
            console.log(err);
            
        }else{
            //console.log(rows);
            res.send(rows);
        }
    });
})
/*Fetching data with id*/
app.get('/employees/:id',(req,res)=>{
    connection.query(
        'SELECT * FROM javascript.employee WHERE emp_id=?',[req.params.id],(err,rows)=>{
            if(err){
                res.send(err);
            }else{
                res.send(rows);
            }
        }
    )
})
app.listen(3000,()=>console.log('express is running on port 3000'));