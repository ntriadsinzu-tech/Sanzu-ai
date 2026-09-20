const reply = require("./lib/reply");
module.exports = {
  config: {
    name: "afk",
    aliases: [],
    version: "1.0.0",
    role: "0",
    hasPrefix: true,
    description: "Mark yourself AFK.",
    usage: "{prefix}afk",
    credits: "Sanzu"
  },
  run: async (ctx) => {
    const {api,event,args,prefix} = ctx;
    return reply(api,event,"💤 You are now AFK.");
  }
};
