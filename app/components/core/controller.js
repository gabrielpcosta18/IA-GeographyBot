let model = require('../index');

module.exports = function() {
    const TelegramBot = require('node-telegram-bot-api');
    const token = '385837953:AAGoqbe3ZYqUS5ijCOr_sw5BGiM5VIAj3cA';
    const bot = new TelegramBot(token, {polling: true});

    bot.onText(/\/capital (.+)/, (msg, match) => {
        const chatId = msg.chat.id;
        const resp = match[1]; 
        console.log(msg, match);
        bot.sendMessage(chatId, resp);
    });

    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        
        console.log(msg);
        bot.sendMessage(chatId, 'Received your message');
    });
}
