const discord = require("discord.js");

module.exports = {
    "name":"eval",
    "args":["[Code]"],
    "description":"input raw javascript",
    run(client, message, args) {
      if(!global.devs.includes(message.author.id)) return;
      eval(args.join(" "))
    }
  }