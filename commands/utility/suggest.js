const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'suggestion',
    description: 'My Info',
    aliases: ['suggest','suggestions'],
    guildOnly: true,
    execute(message, args, cmd, client, Discord) {
       
        const content = args.splice(0).join(" ");
        const channel = message.guild.channels.cache.find(channel => channel.name === "suggestions");
        const icon = message.guild.iconURL({format: "png", size: 1024, dynamic: true})
        const suggestionEmbed = new MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({format: "png", size: 1024, dynamic: true}))
        .setTitle('Suggestion')
        .setColor(`#f4c93a`)
        .setDescription(content)
        .setTimestamp()
        .setFooter(`${message.guild.name}`, `${icon}`)

        channel.send(suggestionEmbed).then((message) =>{
          message.react('✅');
          message.react('❎');
        });

    }}
