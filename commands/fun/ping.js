const {MessageEmbed} = require('discord.js');

module.exports = {
	name: 'ping',
	aliases: ["ms", "latency"],
	description: 'Ping!',
	execute(message, args, cmd, client, Discord) {
		const firstEmbed = new MessageEmbed()
        .setDescription('🏓Pinging.........')
        .setColor('36393F')

		const pingEmbed = new MessageEmbed()
		.setAuthor(`${message.author.username}`, message.author.displayAvatarURL({format:"png", dynamic:true}))
		.setThumbnail('https://cdn.discordapp.com/attachments/829429799549403136/829652374544056360/thing.png')
		.addFields(
			{ name: 'API', value: `${message.client.ws.ping}`},
			{ name: 'Bot Latency', value: `${Date.now() - message.createdTimestamp}`}
		)
		.setColor('36393F')

		message.channel.send(firstEmbed)
		.then(msg => {
            setTimeout(function() {
                msg.edit(pingEmbed)
            }, 3000);
		})}}
