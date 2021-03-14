const Discord = require('discord.js');
const db = require('quick.db');
const ms = require("parse-ms");

module.exports = {
  name: "daily",
  aliases: [],
  usage: "daily",
  description: "daily dough",
  run: async (client, message, args, async) => {
let money = db.fetch(`money_${message.author.id}`)


  
 let user = message.author;

  let timeout = 86400000;
  let amount = 10;

  let daily = await db.fetch(`daily_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`**You've already collected your daily reward\n\nCollect it again in ${time.hours}h ${time.minutes}m ${time.seconds}s**`);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`**You've collected your daily reward of ${amount} wumpencys**`);
  message.channel.send(moneyEmbed)
  db.add(`money_${user.id}`, amount)
  db.set(`daily_${user.id}`, Date.now())





  }


  }
  }