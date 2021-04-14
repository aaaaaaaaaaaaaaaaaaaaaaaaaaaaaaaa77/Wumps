
module.exports = {
  name: "wumpsfakesay",
  description: "Makes a webhook to impersonate someone",
  usage: "wumpsfakesay <message>",
  category: "utility",
  args: true,
  cooldown: 5,
  botpermission: ["MANAGE_WEBHOOKS"],
  run: async (client, message, args) => {
    message.delete();
    let user =
      message.guild.members.cache.get(args[0]);
    const webhook = await message.channel.createWebhook(('wumpus'), {
      avatar: ('https://cdn.discordapp.com/avatars/801468894400610324/91432dd928c8125aa2ad70660ccb3a94.png'),
      channel: message.channel.id
    });
    await webhook.send(args.join(" ")).then(() => {
      webhook.delete();
    });
  }
};
