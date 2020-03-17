require('dotenv').config();
const telegramApi = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_TOKEN;
const chatbot = new telegramApi(token, {polling: true});

const initialize = () => {
    const language = [    
        [{ text: 'pt-br 	\ud83c\udde7\ud83c\uddf7', callback_data: 'portugues' }],
        [{ text: 'en-us  \ud83c\uddfa\ud83c\uddf8', callback_data: 'english' }]
    ];
    chatbot.onText(/\/start/, (msg,match) => {
        const chatId = msg.chat.id;
        const opts = {
            reply_to_message_id: msg.message_id,
            reply_markup: {
                resize_keyboard: true,
                one_time_keyboard: true,
                inline_keyboard	:  language
            }
        };

        chatbot.sendMessage(
            chatId, 
            `Hello! I'm Clima.AÍ, a chatbot about weather!\uD83C\uDF27 \nOlá! Eu sou o Clima.AÍ, um chatbot sobre o clima!\uD83C\uDF27`, 
            { parseMode: 'Markdown' }
        );

        chatbot.sendMessage(
            chatId, 
            `First of all, tell me, with what language do you want to follow?\nAntes de tudo, me diga, com qual idioma deseja seguir?\uD83C\uDF27`, opts, 
            { parseMode: 'Markdown' }
        );
    });
    chatbot.on('polling_error', err=> console.error(err));
};
initialize();