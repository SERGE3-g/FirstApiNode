const express = require('express');
const bodyParser = require('body-parser');
const feedRoutes = require ('./routes/feed');

//const db = require('./utils/database');

const app = express();
app.use(bodyParser.json()); //application/json

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
});



app.use(express.static('public'));
app.use('/feed',feedRoutes);

app.listen(8080);