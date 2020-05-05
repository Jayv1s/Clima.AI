module.exports.Start = (msg) => {
  const chatId = { ChatId: msg.chat.id, Msg: 'Teste sucesso!' }
  return chatId
}
