AIMLInterpreter = require('../node_modules/AIMLInterpreter');

var aimlInterpreter = new AIMLInterpreter();
aimlInterpreter.loadAIMLFilesIntoArray(['../src/aiml/base.aiml.xml']);

var callback = function(answer, wildCardArray, input){
    console.log(answer + ' | ' + wildCardArray + ' | ' + input);
};

aimlInterpreter.findAnswerInLoadedAIMLFiles('oi tudo bem', callback);