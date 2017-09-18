let model = require('../index');
const swipl = require('swipl');

swipl.call(`consult("C:/Users/Vostro/Documents/workspace/ufam/IA/IA-GeographyBot/app/components/core/knowledge.pl")`);

function process(command, value) {
    let query = new swipl.Query(`${command}("${value}", Y)`);
    console.log(command, value);
    let ret = null;
    while (ret = query.next()) {
        if(ret != null)
            console.log(ret);
        query.close();
        return ret.Y;
    }

    query.close();
    return null;
}

module.exports = function() {
    const TelegramBot = require('node-telegram-bot-api');
    const token = '385837953:AAGoqbe3ZYqUS5ijCOr_sw5BGiM5VIAj3cA';
    const bot = new TelegramBot(token, {polling: true});

    bot.onText(/\/help/, (msg, match) => { 
        const chatId = msg.chat.id; 
        let resp = "Muito bom meu caro. Irei falar algumas estruturas de perguntas que entendo atualmente.";
        bot.sendMessage(chatId, resp); 
        resp = "Não me julgue T_T";
        bot.sendMessage(chatId, resp);
        resp = `Pergunte "Qual é a capital do estado X? ou então Qual é o tamanho do estado Y? ou Qual é a comida típica da região Z?`;
        bot.sendMessage(chatId, resp);
    });

    bot.onText(/^(?:Q|q)ual (?:é )?a? (capital) d(?:o estado (?:(?:d(?:e|a|o)))?|(?:o|a)) ((?:[^?])+)+\??/, (msg, match) => { 
        const chatId = msg.chat.id; 
        let resp = process(match[1], match[2].toLowerCase());

        if(resp != null) {
            resp = 'Acredito fortemente que é ' + resp;
        }
        else {
            resp = 'Entendi a pergunta, mas... Não lembro agora xD';
        }
        bot.sendMessage(chatId, resp); 
    });

    bot.onText(/^(?:Q|q)ual (?:é )?o? (tamanho) d(?:o estado (?:(?:d(?:e|a|o) ))?|(?:o|a) )((?:[^?])+)+\??/, (msg, match) => { 
        const chatId = msg.chat.id; 
        let resp = process(match[1], match[2].toLowerCase());

        if(resp != null) {
            resp = 'Acredito fortemente que é ' + resp + "*1000 km²";
        }
        else {
            resp = 'Entendi a pergunta, mas... Não lembro agora xD';
        }
        bot.sendMessage(chatId, resp); 
    });

    bot.onText(/^(?:Q|q)ua(?:l|is) (?:é |são )?(?:a?(?:s)?)? (comida) (?:típica) d(?:(?:o|a )(?:região )?)((?:[^?])+)+\??/, (msg, match) => { 
        const chatId = msg.chat.id; 
        let resp = process(match[1], match[2].toLowerCase());

        if(resp != null) {
            resp = 'Acredito fortemente que é ' + resp;
        }
        else {
            resp = 'Entendi a pergunta, mas... Não lembro agora xD';
        }
        bot.sendMessage(chatId, resp); 
    });

    bot.onText(/^(?:Q|q)ual (?:é )?o? (pib) d(?:o estado (?:(?:d(?:e|a|o)))?|(?:o|a)) ((?:[^?])+)+\??/, (msg, match) => { 
        const chatId = msg.chat.id; 
        let resp = process(match[1], match[2].toLowerCase());

        if(resp != null) {
            resp = 'Acredito fortemente que é ' + resp + " (valor em bilhões)";
        }
        else {
            resp = 'Entendi a pergunta, mas... Não lembro agora xD';
        }
        bot.sendMessage(chatId, resp); 
    });

    // bot.on('message', (msg) => {
    //     const chatId = msg.chat.id;

    //     bot.sendMessage(chatId, processText(msg.text.toLowerCase()));
    // });
}
