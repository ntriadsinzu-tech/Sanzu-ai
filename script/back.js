const reply = require("./lib/reply");
module.exports = {
  config: {
    name: "back",
    aliases: [],
    version: "1.0.0",
    role: "0",
    hasPrefix: true,
    description: "Return from AFK.",
    usage: "{prefix}back",
    credits: "Sanzu"
  },
  run: async (ctx) => {
    const {api,event,args,prefix} = ctx;
    return reply(api,event,"👋 Welcome back.");
  }
};
