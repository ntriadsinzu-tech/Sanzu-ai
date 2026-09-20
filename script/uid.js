const reply = require("./lib/reply");
module.exports = {
  config: {
    name: "uid",
    aliases: ["id"],
    version: "1.0.0",
    role: "0",
    hasPrefix: true,
    description: "Shows your sender ID.",
    usage: "{prefix}uid",
    credits: "Sanzu"
  },
  run: async (ctx) => {
    const {api,event,args,prefix} = ctx;
    return reply(api,event,`🆔 Your UID: ${event.senderID}`);
  }
};
