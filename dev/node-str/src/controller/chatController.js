'use strict'

AIMLInterpreter = require('../node_modules/AIMLInterpreter');

var aimlInterpreter = new AIMLInterpreter();
aimlInterpreter.loadAIMLFilesIntoArray(['../src/aiml/base.aiml.xml']);

var callback = function(answer, wildCardArray, input){
    console.log(answer + ' | ' + wildCardArray + ' | ' + input);
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({ 
        id: id, 
        item: req.body 
    });
};

exports.post('/', function (req, res) {
    res.body(req.body, aimlInterpreter.findAnswerInLoadedAIMLFiles(res.body.pergunta, callback));
});