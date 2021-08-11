import { Message } from "discord.js";
import { loginSettings } from "../connySettings";

export async function pingCommand(message: Message) {
      if (message.content == `${loginSettings.prefix}ping`) {
            message.reply("Pong!");
      }
}