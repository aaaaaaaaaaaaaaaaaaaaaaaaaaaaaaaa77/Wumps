const discord = require("discord.js");


module.exports = {
  name: "suggest",
  usage: " ",
  description: "Suggest",
  run: async (client, message, args) => {
    const args = msg.content.slice(prefix.length).split(' '); 
    const command = args.shift().toLowerCase();  
    
    
    if (command === 'suggest'){   //if command is suggest
    const channel = msg.guild.channels.find(ch => ch.name === 'suggestions');  //finds the channel named suggestions 
    
    channel.send('Suggestion:\n ' + args.join(' '))  //Sends the arguments
    }     //Closes the if (command === 'suggest'){ 
    }   //Closes the client.on('message',msg => {

    
}
