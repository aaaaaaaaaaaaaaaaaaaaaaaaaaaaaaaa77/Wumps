const discord = require('discord.js');

const fs = require('fs');

const db = require('quick.db');

const express = require('express');

const client = new discord.Client()

client.commands = new discord.Collection();

client.aliases = new discord.Collection();

client.queue = new Map();

client.on('ready', async () => {

	console.log(`Bot Is Ready To Go - ${client.user.tag}`);

});

const Categories = ['fun', 'utility']

Categories.forEach(async function(Category) {

	//

	fs.readdir(`./commands/${Category}`, async function(error, files) {

		if (error) throw new Error(`Error In Command - Command Handler\n${error}`);

		files.forEach(async function(file) {

			if (!file.endsWith('.js'))

				throw new Error(`A File Does Not Ends With .js - Command Handler!`);

			console.log(`./commands/${Category}/${file}`);

      let command;

      try {

        command = require(`./commands/${Category}/${file}`);

      } catch (err) {

        console.log(`./commands/${Category}/${file}`);

        console.log('could not load you have an error');

        console.log('========');

        return;

      }

      if (!command) {

        console.log(`./commands/${Category}/${file}`);

        console.log('could not load you have an error');

        console.log('========');

        return;

      }

			if (!command.name)

				throw new Error(

					`No Command Name & Command Aliases In A File - Command Handler!`

				);

			if (command.name) client.commands.set(command.name, command);

      if (!command.aliases) command.aliases = null;

			if (command.aliases)

				command.aliases.forEach(aliase =>

					client.aliases.set(aliase, command.name)

				);

		});

	});

});

client.on('message', async message => {

	let CustomPrefix = await db.fetch(`Prefix_${message.guild.id}`);

	if (!CustomPrefix) CustomPrefix = `w!`;

	if (message.author.bot || !message.guild || message.webhookID) return;

	if (!message.content.startsWith(CustomPrefix)) return;

	let args = message.content

		.slice(CustomPrefix.length)

		.trim()

		.split(/ +/g);

	let cmd = args.shift().toLowerCase();

	let command =

		client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

  console.log(command);

	if (!command) return console.log(`No Command Found!`);

	const Allowed = await db.fetch(

		`CommandOn_${message.guild.id}_${cmd.toLowerCase()}`

	);

	if (Allowed !== null) return;

	if (command) {

    

		command.run(client, message, args, {Cat: Categories });

	}

});

client.login(process.env.TOKEN).catch(err => console.log(`Invalid Token Provided!`));
