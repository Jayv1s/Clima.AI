const TelegramApi = require('node-telegram-bot-api')
const { telegramToken } = require('../configs')
const chatMessage = require('../public')
const chatbot = new TelegramApi(telegramToken, { polling: true })

chatbot.onText(/\/start/, (msg) => {
  const result = chatMessage.Start(msg)
  chatbot.sendMessage(result.ChatId, result.Msg)
})
