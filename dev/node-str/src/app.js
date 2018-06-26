'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const indexRoute = require('./routes/indexRoute');
const chatRoute = require('./routes/chatRoute');
const bdRoute = require('./bd/connection');
/*
router.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200/chat');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers',
        'Access-Control-Allow-Methods,' +
        'Authorization,' +
        'Access-Control-Allow-Headers,' +
        'Access-Control-Allow-Origin,' +
        'X-Requested-With,' +
        'content-type,' +
        'X-Auth-Token');

    if ('OPTIONS' == req.method) {
        res.send(200);
    } else {
        next();
    }
})*/

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/chat', chatRoute);

module.exports = app;