const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get('/', (req, res)=>{
    res.send('MedTech');
});

app.listen(port, ()=> {
    console.log(`The App is running on port ${port}`);
});

module.exports = app;