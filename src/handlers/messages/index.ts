import { Bot, InlineKeyboard } from "grammy"
import { MyContext } from "../../types"


async function setup(bot: Bot<MyContext>) {
  bot.on('message', async ctx => {
    const inlineKeyboard = new InlineKeyboard()
      .webApp(ctx.message.text, ctx.message.text);


    await ctx.reply('Your webapp', {
      reply_markup: inlineKeyboard,
    }).catch();
  })
}

export default { setup }
