if(command.toLowerCase() === 'meme') {
const got = require('got');
const memeEmbed = new Discord.MessageEmbed();
got('https://www.reddit.com/r/discordapp/.json').then(response => {
 let content = JSON.parse(response.body);
 let permalink = content[0].data.children[0].data.permalink;
 let memeURL = `https://reddit.com${permalink}`;
 let memeImage = content[0].data.children[0].data.url;
 let memeTitle = content[0].data.children[0].data.title;
 let memeUpvotes = content[0].data.children[0].data.ups;
 let memeDownvotes = content[0].data.children[0].data.downs;
 let memeNumComments = content[0].data.children[0].data.num_comments;

 memeEmbed.setTitle(`${memeTitle}`);
 memeEmbed.setURL(`${memeURL}`);
 memeEmbed.setImage(memeImage);
 memeEmbed.setColor('0ceeee');
 memeEmbed.setTimestamp();
 memeEmbed.setFooter(`Requested by ${message.author.tag} | 👍 ${memeUpvotes} | 👎 ${memeDownvotes} | 💬 ${memeNumComments}`);

 message.channel.send(memeEmbed);
 });
 }
