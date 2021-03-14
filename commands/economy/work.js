const Discord = require('discord.js');
const db = require('quick.db');
const ms = require("parse-ms");


module.exports = {
  name: "work",
  aliases: [],
  usage: "work",
  description: "work",
  run: async (client, message, args) => {



let user = message.author;
    let author = await db.fetch(`work_${user.id}`)

    let timeout = 600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`**You have already worked recently\n\nTry again in ${time.minutes}m ${time.seconds}s**`);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['Programmer','Builder','Waiter','Busboy','Chief','Mechanic']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 80) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`**You worked as a ${replies[result]} and earned ${amount} wumpencys**`);
        message.channel.send(embed1)
        
        db.add(`money_${user.id}`, amount)
        db.set(`work_${user.id}`, Date.now())

      }


  }
}