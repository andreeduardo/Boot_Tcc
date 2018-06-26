'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controller/chatController');

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "chatController",
        version: "0.0.1"
    });
});

router.post('/', controller.post);
router.put('/:id', controller.put);

module.exports = router;    