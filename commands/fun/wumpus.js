const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "wumps",
  category: "fun",
  description: "Return a message from wumpus",
  usage: "wumpus  | <Text>",
  run: async (bot, message, args) => {
    let text = args.join(" ");

        if (!text) {
            return message.channel.send("Enter text that you want Wumpus to say.**");
        }
  
       const imageembed = new Discord.MessageEmbed()
      .setTitle(wumps.png)
      .setColor(`#1ABC9C`)
      .setImage(`https://wumps-api.blissysgfx.repl.co/wumpus?text=${text}`)      
      await message.channel.send(embed)
  }
}
