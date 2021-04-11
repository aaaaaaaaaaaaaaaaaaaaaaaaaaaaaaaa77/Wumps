const { slayersDB } = require("slayer.db");
const { Client, Message, MessageEmbed } = require("discord.js");

const db = new slayersDB();
module.exports = {
  category: "economy",
  name: "beg",
  cooldown: 10000,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const amount = Math.floor(Math.random() * 10000);
    const can = Math.floor(Math.random() * 100);

    const rejections = [
      "Go away u fat bitch",
      "Im broke u cunt",
      "Get a job u fucker",
      "HAHA, you a joker",
      "You wish i give u money",
    ];

    if (can < 75)
      return message.reply(
        rejections[Math.floor(Math.random() * rejections.length)]
      );

    let acceptions = [
      "Ok, Here's <amount>",
      "Fine! Here's <amount> , But dont ask again",
      "Yikes.. Im kinda broke.. But here's <amount>",
      "Your Cute, Take this <amount>",
    ];

    let reply = acceptions[Math.floor(Math.random() * acceptions.length)];

    reply = reply.replace("<amount>", `**${amount}**`);

    if (db.has(`wallet_${message.guild.id}`)) {
      const usersAmount = db.get(`wallet_${message.guild.id}`)
        ? db.get(`wallet_${message.guild.id}`)[message.author.id] || 0
        : 0;

      db.get(`wallet_${message.guild.id}`)[message.author.id] =
        usersAmount + amount;
    } else {
      db.set(`wallet_${message.guild.id}`, {
        [`${message.author.id}`]: amount,
      });
    }

    db.save();

    return message.reply(reply);
  },
};
