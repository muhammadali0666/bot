const TelegramBot = require('node-telegram-bot-api');

const token = '5982539743:AAGz4bKljIPFZTlun3OFEJBRWKxRJ7AArgY';

const bot = new TelegramBot(token, {polling: true});

const bootstrap = () => {
  bot.setMyCommands([
    {
      command: "/start",
      description: "botni ishga tushirish"
    }
  ])
  
  bot.on('message', (msg) => {
    const text = msg.text
    const chatId = msg.chat.id;
  
    if(text === "/start"){
      bot.sendMessage(chatId, `Assalomu Aleykum ${msg.from?.first_name} siz Muhammadalini botiga kirdingiz!`)
    }
  });
}

bootstrap()