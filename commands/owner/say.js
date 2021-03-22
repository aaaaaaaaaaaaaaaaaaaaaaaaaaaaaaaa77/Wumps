const discord = require ("discord.js")

module.exports = {
    name: "say",
    description: "say",
    args:[],
    run (client, message, args) {
      if(!global.admins.includes(message.author.id)) return
      const sayMessage = args.join(" ");
      // then we delete the command message the catch just ignores the error with a cute smiley thing
      message.delete().catch(O_o => {});
      // and we get the bot to say the thing
      message.channel.send(sayMessage);
      }
    }
  ;