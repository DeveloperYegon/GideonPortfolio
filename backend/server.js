const express= require("express");
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');   

//running server
app.listen(3002, () => {
    console.log('Server is running on port 3002');
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
                    console.log('Requests Table created successfully');
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
            //creating admins table
            const createAdminsTable=`CREATE TABLE IF NOT EXISTS Admins(
                id int auto_increment primary key,
                name varchar(100) not null,
                email varchar(100) not null unique,
                password varchar(255) not null)`;
            db.query(createAdminsTable,(err,result)=>{
                if(err){
                    console.log(`error creating table: ${err}`);
                }else{
                    console.log('Admins Table created successfully');
                }
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

            app.post('/requests',(req,res)=>{
                const name=req.body.name;
                const email=req.body.email;
                const message=req.body.message;
                db.query('INSERT INTO Requests(Name,Email,Message) VALUES(?,?,?)',[name,email,message],(err,result)=>{
                    if(err){
                        res.status(400).send(`Error submitting data ${err}`);
                        console.log(`error submitting data: ${err}`);
                    }else{
                        console.log("Data submitted successfully");
                        res.json(result);   
                    }
                });
            });
            
        });
    });
});

///Register admin
app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        db.query(
            "INSERT INTO Admins (name, email, password) VALUES (?,?,?)",
            [name, email, hashedPassword],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send("Values Inserted");
                }
            }
        );
    } catch (err) {
        console.log(err);
    }
});


///login admin
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        db.query(
            "SELECT * FROM Admins WHERE email = ?",
            email,
            async (err, result) => {
                if (err) {
                    res.send({ err: err });
                }
                if (result.length > 0) {
                    // const compare = await bcrypt.compare(password, result[0].password);
                    if (password) {
                        res.send(result);
                    } else {
                        res.send({ message: "Wrong email or password!" });
                    }
                } else {
                    res.send({ message: "User not registered!" });
                }
            }
        );
    } catch (err) {
        console.log(err);
    }
})
