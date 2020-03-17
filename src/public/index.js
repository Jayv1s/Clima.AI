const telegramApi = require('node-telegram-bot-api');
const config = require('../configs');

// const chatbot = new telegramApi(configs.telegramToken, {polling: true});

console.log(config.telegramToken);
// chatbot.onText(/\/start/, (msg) => {
//     const chatId = msg.chat.id;
  
//     bot.sendMessage(chatId, "Teste sucesso!");
// });