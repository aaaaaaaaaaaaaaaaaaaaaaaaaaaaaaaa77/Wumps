const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "wumpus",
  category: "fun",
  description: "Return a message from wumpus",
  usage: "w!wmpus <text>",
  run: async (bot, message, args) => {
    let text = args.join(" ");

        if (!text) {
            return message.channel.send("Enter some text for wumpus to say.");
        }
  const embed = new MessageEmbed()
      .setColor(`#1ABC9C`)
      .setImage(`https://wumps-api.blissysgfx.repl.co/wumpus?text=${text}`)      
      await message.channel.send(embed)
  }
}
