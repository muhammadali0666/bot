const TelegramBot = require('node-telegram-bot-api');

const token = '6377747448:AAEenQWgYfTIZZ--CkGaRcaY-BiqqWIxlh0';

const bot = new TelegramBot(token, { polling: true });

  bot.setMyCommands([
    {
      command: "/start",
      description: "botni ishga tushirish"
    },
    {
      command: "/info",
      description: "men haqimda ma'lumot"
    }
  ])

  bot.on('message', async (msg) => {
    const text = msg.text
    const chatId = msg.chat.id;

    if (text === "/start") {
      await bot.sendMessage(chatId, `Assalomu Aleykum ${msg.from?.first_name} siz Muhammadalini botiga kirdingiz!`)
    }
    if (text === "/info") {
      await bot.sendPhoto(chatId, "https://muhammadalishuhratjonov.netlify.app/img/my.jpg", {
        reply_markup: {
          keyboard: [
            [
              {
              text: "siteni ko'rish",
              web_app: {
                url: "https://muhammadalishuhratjonov.netlify.app/"
              }
            }
          ]
          ]
        }
      })
    }
  });
