var builder = require('botbuilder');

var connector = new builder.ConsoleConnector().listen();

// Rodar para iniciar o aplicativo node app.js

var bot = new builder.UniversalBot(connector, function (session) {
    if (session.message.text == "oi") {
        session.send("Olá, tudo bem?");
    } else {
        // session.send("You said: %s", session.message.text);
        session.send("Não entendi o que você falou. Diga oi");
    }
});