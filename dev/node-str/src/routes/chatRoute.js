'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controller/chatController');

AIMLInterpreter = require('../../node_modules/aimlinterpreter');

var aimlInterpreter = new AIMLInterpreter();
aimlInterpreter.loadAIMLFilesIntoArray(['../node-str/src/aiml/base.aiml.xml']);

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "chatController",
        version: "0.0.1"
    });
});

var callback = function(answer, wildCardArray, input){
    return answer;   
};

const create = router.post('/', (req, res, next) => {
    
    if (aimlInterpreter.findAnswerInLoadedAIMLFiles(req.body.pergunta,  callback) == null) { 
        res.json({resposta: "Infelizmente nao encontrei nenhuma resposta sobre: " + req.body.pergunta 
    + ".\n Por gentileza, tente perguntar de outra maneira ou me pergunte sobre BOLETOS ou NOTAS."}); 
     } else {
        res.json({resposta: aimlInterpreter.findAnswerInLoadedAIMLFiles(req.body.pergunta,  callback)});
     }
});

module.exports = router;    