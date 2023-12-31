import { Bot } from "grammy"
import { MyContext } from "../types"

import errors from "./errors"
import commands from "./commands"
// import callbackQueries from "./callbackQueries"
// import inlineQueries from "./inlineQueries"
import { logger } from "../utils"
import messages from "./messages"

async function setup(bot: Bot<MyContext>) {
  logger.info("Setting up handlers...")

  await commands.setup(bot)
  await errors.setup(bot)
  await messages.setup(bot)
  // await callbackQueries.setup(bot)
  // await inlineQueries.setup(bot)
}

export default { setup }
