const Discord = require('discord.js');
const db = require('quick.db');
const ms = require("parse-ms");

module.exports = {
  name: "profile",
  aliases: ['p'],
  usage: "profile",
  description: "profile",
  run: async (client, message, args, async) => {
let money = db.fetch(`money_${message.author.id}`)

const config = require('../../config.json')


const item1 = config.item1name
const item2 = config.item2name
const item3 = config.item3name




const user = message.mentions.members.first() || message.author

const item1has = db.fetch(config.item1name + `_${user.id}`)
const item2has = db.fetch(config.item2name + `_${user.id}`)
const item3has = db.fetch(config.item3name + `_${user.id}`)


const embed = new Discord.MessageEmbed()
.setDescription(`**${user}'s Profile**\n\n${item1} - ${item1has}\n${item2} - ${item2has}\n${item3} - ${item3has}`)


message.channel.send(embed)
  }
}