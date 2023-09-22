const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.listen(port, ()=> {
    console.log(`The App is running on port ${port}`);
});

module.exports = app;