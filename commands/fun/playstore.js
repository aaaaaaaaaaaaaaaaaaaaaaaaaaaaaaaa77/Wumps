const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "wumpusplaystore",
  category: "fun",
  description: "well....",
  usage: "playstore  | <Text>",
  run: async (bot, message, args) => {
    let user = await message.mentions.members.first()
    let text = args.join(" ");

    if (!text) {
        return message.channel.send("**Enter Text**");
        }
    if(!user){
         user = message.author;
        }
  const embed = new MessageEmbed()
      .setColor(`#1ABC9C`)
      .setImage(`https://api.cool-img-api.ml/play-store?image=https://cdn.discordapp.com/avatars/801468894400610324/91432dd928c8125aa2ad70660ccb3a94.png&text=${text}&author=Wumpus`)      
      await message.channel.send(embed)
  }
}
