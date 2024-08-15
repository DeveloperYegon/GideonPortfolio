const express= require("express");
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');   
const morgan = require("morgan"); // Logging middleware


//middlewares
app.use(cors());
app.use(express.json());
dotenv.config();
app.use(morgan('combined')); // Use morgan for logging


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

// create database and switch to it
db.query(`CREATE DATABASE IF NOT EXISTS GideonDB`, (err,result)=>{
        //error creating db
        if(err){
            console.log(`Error creating database GideonDB: ${err}`);
        }else{
            console.log('GideonDB Database created successfully');
            //use the database
            db.changeUser({database:"GideonDB"},(err,result)=>{
    
                //if error changing db
                if(err){
                    console.log(`Error changing database: ${err}`);
                }else
                {
                    console.log('Database changed to GideonDB');
                    initializeTables();
    
                }
            });
        }
}); 



// Initialize tables
function initializeTables() {
     //create table
     const createRequestsTable=`CREATE TABLE IF NOT EXISTS Request(
        id int auto_increment primary key,
        Name varchar(100) not null,
        Email varchar(100) not null,
        Message varchar(255)  not null,
        country varchar(255) not null,
        created_at timestamp default current_timestamp)`;


        //creating admins table
        const createAdminsTable=
        `CREATE TABLE IF NOT EXISTS Admin(
            id int auto_increment primary key,
            name varchar(100) not null,
            email varchar(100) not null unique,
            password varchar(255) not null,
            created_at timestamp default current_timestamp,
            updated_at timestamp default current_timestamp on update current_timestamp)`;

        //creating projects table
        const createProjectsTable=
        `CREATE TABLE IF NOT EXISTS Project (
            id int auto_increment primary key,
            title varchar(100) not null,
            image BLOB not null,
            description varchar(255) not null,
            created_at timestamp default current_timestamp,
            updated_at timestamp default current_timestamp on update current_timestamp)`;
            
        //creating blogs table
        const createBlogsTable=
        `CREATE TABLE IF NOT EXISTS Blog(
            id int auto_increment primary key,
            title varchar(100) not null,
            image blob not null,
            description varchar(255) not null,
            created_at timestamp default current_timestamp,
            updated_at timestamp default current_timestamp on update current_timestamp)`;

            db.query(createRequestsTable,(err,result)=>{
                if(err){
                    console.log(`Error creating Request table: ${err}`);
                }else{
                    console.log('Request Table created successfully');
                }
          
            }); 
            db.query(createAdminsTable,(err,result)=>{
                if(err){
                    console.log(`Error creating Admin table: ${err}`);
                }else{
                    console.log('Admin Table created successfully');
                }
            });

            db.query(createBlogsTable,(err,result)=>{
                if(err){
                    console.log(`Error creating  Blog table: ${err}`);
                }else{
                    console.log('Blog Table created successfully');
                }
            });

            db.query(createProjectsTable,(err,result)=>{
                if(err){
                    console.log(`Error creating  Project table: ${err}`);
                }else{
                    console.log('Project Table created successfully');
                }
            });

};
// Routes
app.get('/requests',(req,res)=>{
    db.query('SELECT * FROM Request',(err,result)=>{
            if(err){
                console.log(`Error fetching data: ${err}`);
                res.status(500).send('Error fetching data');
            }else{
                //console.log("Data fetched successfully");
                res.json(result);   
            }
    });
});

//countig data
app.get('/requests/count',(req,res)=>{
    db.query('SELECT COUNT(*) FROM Request',(err,result)=>{
            if(err){
                console.log(`error counting data: ${err}`);
                res.status(500).send('Error counting data');
            }else{
                //console.log("Data counted successfully");
                res.json(result);   
            }
    });
});
           
//submiting requests
app.post('/requests',(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const message=req.body.message;
    const country= req.body.country;
    db.query('INSERT INTO Request(Name,Email,Message,country) VALUES(?,?,?,?)',[name,email,message,country],(err,result)=>{
        if(err){
            console.log(`Error submitting data: ${err}`);
            res.status(400).send(`Error submitting data ${err}`);
        }else{
            //console.log("Data submitted successfully");
            res.json(result);   
        }
    });
});
//submitting blogs
app.post('/blogs',(req,res)=>{
    const title=req.body.title;
    const image=req.body.image;
    const description=req.body.description;
    db.query('INSERT INTO Blog(title,image,description) VALUES(?,?,?)',[title,image,description],(err,result)=>{
        if(err){
            console.log(`Error submitting data: ${err}`);
            res.status(400).send(`Error submitting data ${err}`);
        }else{
            //console.log("Data submitted successfully");
            res.json(result);   
        }
    });
});
          

///Register admin
app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body; 
        const hashedPassword = await bcrypt.hash(password, 10);
        db.query(
            "INSERT INTO Admin(name, email, password) VALUES (?,?,?)",
            [name, email, hashedPassword],
            (err, result) => {
                if (err) {
                    console.error(`Error registering admin: ${err}`);
                    res.status(400).send('Error registering admin');
                } else {
                    res.status(201).send('Admin registered successfully');
                }
            });
    } catch (err) {
        console.error(`Error in registration: ${err}`);
        res.status(500).send('Internal Server Error');
    }
});



///login admin
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        db.query(
            "SELECT * FROM Admin WHERE email = ?",
            email,
            async (err, result) => {
                if (err) {
                    console.error(`Error during login: ${err}`);
                    return res.status(500).send('Internal Server Error');
                }
                else if (result.length > 0) {
                        const storedPassword = result[0].password;
                        if (typeof password === 'string' && typeof storedPassword === 'string') {
                            const compare = await bcrypt.compare(password, storedPassword);
                            if (compare) {
                                return res.json(result);
                            } else {
                               return res.status(401).send('Wrong email or password');
                            }
                         }else{

                            return res.status(400).send({ message: "Invalid data types provided!" });
                         }
                } else {
                    return  res.status(404).send('User not registered');
                }
            });
    } catch (err) {
        console.error(`Error in login: ${err}`);
        res.status(500).send('Internal Server Error');
    }
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
        db.end(() => {
            console.log('Database connection closed');
        });
    });
});


//running server
app.listen(3002, () => {
    console.log('Server is running on port 3002');
})



      


