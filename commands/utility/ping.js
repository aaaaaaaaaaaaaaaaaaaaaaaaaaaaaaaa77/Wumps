const {MessageEmbed} = require('discord.js');

module.exports = {
	name: 'ping',
	aliases: ["ms", "latency"],
	description: 'Ping!',
	execute(message, args, cmd, client, Discord) {
		const firstEmbed = new MessageEmbed()
        .setDescription('🏓Pinging.....!')
        .setColor('36393F')

		const pingEmbed = new MessageEmbed()
		.setAuthor(`${message.author.username}`, message.author.displayAvatarURL({format:"png", dynamic:true}))
		.setThumbnail('https://cdn.discordapp.com/attachments/825490227493732362/830929692847636540/91432dd928c8125aa2ad70660ccb3a94.png')
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
