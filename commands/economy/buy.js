const Discord = require('discord.js');
const db = require('quick.db');

const ms = require("parse-ms");


module.exports = {
  name: "buy",
  aliases: [],
  usage: "buy <item>",
  description: "buy something",
  run: async (client, message, args) => {

const config = require('../../config.json')

const userMoney = db.fetch(`money_${message.author.id}`)
const name = args[0]


  const priceEmbed = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription("**You do not have enough for that!**")


const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("**Please enter something to buy!**")
if (!name) return message.channel.send(embed);


if (name === config.item1name) {


  if (userMoney < config.item1price) return message.channel.send(priceEmbed);

  db.add(`money_${message.author.id}`, parseInt(-config.item1price))

  db.add(config.item1name + `_${message.author.id}`, 1)

  const buyItem1 = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription("**You just got **" + config.item1name)
  message.channel.send(buyItem1)
}





if (name === config.item2name) {


  if (userMoney < config.item2price) return message.channel.send(priceEmbed);

  db.add(`money_${message.author.id}`, parseInt(-config.item2price))

  db.add(config.item2name + `_${message.author.id}`, 1)

  const buyItem2 = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription("**You just got **" + config.item2name)
  message.channel.send(buyItem2)
}




if (name === config.item3name) {


  if (userMoney < config.item3price) return message.channel.send(priceEmbed);

  db.add(`money_${message.author.id}`, parseInt(-config.item3price))

  db.add(config.item3name + `_${message.author.id}`, 1)

  const buyItem3 = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription("**You just got **" + config.item3name)
  message.channel.send(buyItem3)
}



  }
}