const Discord = require("discord.js");

const { MessageEmbed } = require("discord.js");

const db = require("quick.db");

module.exports = {

  name: "accept",

  category: "suggestions",

  run: async (client, message, args) => {

let channel = await db.fetch(`suggestion_${message.guild.id}`);

    if (channel === null) return message.channel.send(`No suggestion channels has been set. Use `w!setsuggest [channel]\` to set a suggestion channel`);

if (channel === null) return;

     

      if(!message.member.hasPermission('MANAGE_GUILD')) return;

      

    const rgx = /^(?:<@!?)?(\d+)>?$/;

    const messageID = args[0];

    const replyQuery = args.slice(1).join(' ');

      

    const number = new MessageEmbed()

      .setDescription(`Please use a valid message ID.`)

      .setColor("FF2052")

      

    const id = new MessageEmbed()

      .setDescription('You forgot to specify a message ID.`)

      .setColor("FF2052")

      

    const query = new MessageEmbed()

      .setDescription(`You forgot to specify the reason.`)

      .setColor("FF2052")

      

    const reply = new MessageEmbed()

      .setDescription(`Successfully accepted the suggestion.`)

      .setColor("00FFFF")

      

    const noChannel = new MessageEmbed()

      .setDescription(`No suggestion channel found.`)

      .setColor("FF2052")

      

    const noMessage = new MessageEmbed()

      .setDescription(`I cannot find any message with that ID, please use a valid message ID.`)

      .setColor("FF2052")

    

      if(!messageID) return message.channel.send(id);

      

      if (!rgx.test(messageID)) return message.channel.send(number);

      

      if(!replyQuery) return message.channel.send(query)

      

      try{

      const suggestionChannel = message.guild.channels.cache.get(channel)

      

      if(!suggestionChannel) return message.channel.send(noChannel)

      

      const suggestedEmbed = await suggestionChannel.messages.fetch(messageID).catch(error => {

    const noMessage = new MessageEmbed()

      .setDescription(`I cannot find any message with that ID, please use a valid message ID.`)

      .setColor("FF2052")

  return message.channel.send(noMessage);

  })

     

      const data = suggestedEmbed.embeds[0];

     

      const replyEmbed = new MessageEmbed()

      .setAuthor(`${data.author.name}`, data.author.iconURL)

      .setDescription(data.description)

      .setColor("GREEN")

      .addField(` accepted by ${message.author.tag}`, replyQuery)

      .setFooter("Status: accepted")

      .setTimestamp();

      

     suggestedEmbed.edit(replyEmbed)

     

     message.channel.send(reply)

      

      const user = await client.users.cache.find((u) => u.tag === data.author.name)

      

    const embed = new MessageEmbed()

      .setDescription(`Your [suggestion](https://discord.com/channels/${message.guild.id}/${channel}/${messageID}) has been accepted.`)

      .setColor("GREEN")

      user.send(embed)

        

      } catch(err) {

        return;

    }

  }

}
