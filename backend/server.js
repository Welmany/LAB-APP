// Express manage requests, routes and URLs
import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express(); //Instance of the Express application.
const port = 8081;

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "PUT", "GET"],
    credentials: true
}));  //Middleware used to allow requests from any origin.

app.use(express.json());  //Middleware for parsing application/json and It helps in converting the POST data into the request body.
app.use(bodyParser.json())

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lab_app2'
});

// Testing connection
db.connect((err) => {
    if (err) console.log('Error: Database not connected');
    console.log('Database Connected!');
});


//Updates
app.put('/salateorica', (req, res) => {
    const sql = 'UPDATE escola SET numero_total = ? WHERE id = ?';
    db.query(sql, [req.body.aux, req.body.id], (err, data) => {
        if(err){
            return res.json(err);
        }
        else{
            return res.json(data);
        }
    })
})

app.get('/getalldata', (req, res) => {
    
    const sql = 'SELECT * FROM escola';
    db.query(sql, (err, data) => {
        if(err){
            return res.json(err);
        }
        else{
            return res.json(data);
            // console.log(data)
        }
    })
})

app.put('/updateitem', (req, res) => {
    // console.log(req.body);

    const { func, naoFunc, itemId } = req.body;
    const sql = 'UPDATE escola SET funcionais = ?, nao_funcionais = ? WHERE id = ?';
    db.query(sql, [func, naoFunc, itemId], (err, data) => {
       if(err){
         return res.json(err);
       }
       else{
         return res.json(data);
       }
    });
});
   

// set port
app.listen(port, () => {
    console.log(`Node app is running on port ${port}`);
})
