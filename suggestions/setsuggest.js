const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "setsuggest",
    category: "config",
    usage: "setsuggest <#channel>",
    authorPermission: ["MANAGE_GUILD"],
    run: async (client, message, args) => {
      if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(" ***You need ``MANAGE_GUILD``permission to set a suggestion channel.**");
    }

        let Channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

        if (!Channel) return message.channel.send(` Please Mention A Channel!`);

        if (Channel.type === "voice") return message.channel.send(` Please Mention A Text Channel!`);

        await db.set(`suggestion_${message.guild.id}`, Channel.id);

        let Embed = new MessageEmbed()
        .setColor("00FFFF")
        .setDescription(`Successfully set the suggestions channel to <#${Channel.id}>.')
    

        return message.channel.send(Embed);

    }
};
