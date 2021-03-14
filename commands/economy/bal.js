const Discord = require('discord.js');
const db = require('quick.db');


module.exports = {
  name: "balance",
  aliases: ["bal"],
  usage: "bal",
  description: "see balance",
  run: async (client, message, args) => {



 let bal = db.fetch(`money_${message.author.id}`)


const embed = new Discord.MessageEmbed()
.setTitle(`${message.author.username}'s Balance`)
.setDescription(`**Your Balance Is: ${bal}**`)
message.channel.send(embed)

  }
}
