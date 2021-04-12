const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
 
module.exports = {
  name: "suggest",
  category:"suggestions",
  
  run: async (client, message, args) => {
   
  let channel = await db.fetch(`suggestion_${message.guild.id}`);
    if (channel === null) return message.channel.send(`**No suggestion channel set. Use \n\\`w!setsuggest [channel]\` to set a suggestion channel**`);
  
  const suggestionQuery = args.join(" ");
  if(!suggestionQuery) return message.reply(" Please Suggest Something.");
    
  const embed = new MessageEmbed()
         
       .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
       .setDescription(`${suggestionQuery}`)
       .setColor("00FFFF")
       .setFooter("Status: Pending")
       .setTimestamp();
       
    const done = new MessageEmbed()
       .setDescription(` Your suggestion was successfully sent to <#${channel}>!`)
       .setColor("BLUE")
       
    message.channel.send(done)
    
    let msgEmbed = await message.guild.channels.cache.get(channel).send(embed)
    
    await msgEmbed.react('<:WumpusThumbsUp:813584994504540171>'')
    await msgEmbed.react('<:WumpusThumbsDown:813585092663574609> ')
  }
}
