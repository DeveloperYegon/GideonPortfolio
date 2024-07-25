const express= require("express");
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');   

//running server
app.listen(3001, () => {
    console.log('Server is running on port 3001');
})

app.use(cors());
app.use(express.json());
dotenv.config();

//database connection
const db=mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD
});

//test db connecion
db.connect((err)=>{
     //if connection does not work
     if(err){
        console.log(`error connecting to mysql: ${err}`);
    }
    else{
        console.log('Mysql Connected',db.threadId);
    }
    });

    db.query(`CREATE DATABASE IF NOT EXISTS GideonDB`, (err,result)=>{
        //error creating db
        if(err){
            console.log(`error creating database: ${err}`);
        }else{
            console.log('expensesTrace Database created successfully');
        }

        //use the database
        db.changeUser({database:"GideonDB"},(err,result)=>{

            //if error changing db
            if(err){
                console.log(`error changing database: ${err}`);
            }else
            {
                console.log('Database changed to GideonDB');
            }

            //create table
            const createTable=`CREATE TABLE IF NOT EXISTS Requests(
                id int auto_increment primary key,
                Name varchar(100) not null unique ,
                Email varchar(100) not null,
                Message varchar(255)  not null)`;


            db.query(createTable,(err,result)=>{
                if(err){
                    console.log(`error creating table: ${err}`);
                }else{
                    console.log('Table created successfully');
                }
                //displaying data
            app.get('/requests',(req,res)=>{
                db.query('SELECT * FROM Requests',(err,result)=>{
                        if(err){
                            console.log(`error fetching data: ${err}`);
                        }else{
                            console.log("Data fetched successfully");
                            res.json(result);   
                        }
                });
            }); 

            //countig data
            app.get('/requests/count',(req,res)=>{
                db.query('SELECT COUNT(*) FROM Requests',(err,result)=>{
                        if(err){
                            console.log(`error counting data: ${err}`);
                        }else{
                            console.log("Data counted successfully");
                            res.json(result);   
                        }
                });
            });
            //submiting data
            
        });
    });
});

///registering admin


///login admin

