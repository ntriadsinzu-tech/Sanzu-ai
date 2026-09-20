const reply = require("./lib/reply");
module.exports = {
  config: {
    name: "botinfo",
    aliases: ["info"],
    version: "1.0.0",
    role: "0",
    hasPrefix: true,
    description: "Bot information.",
    usage: "{prefix}botinfo",
    credits: "Sanzu"
  },
  run: async (ctx) => {
    const {api,event,args,prefix} = ctx;
    return reply(api,event,"🤖 SANZU BOT\nEngine: WS3-FCA\nCommand pack: Sanzu Command Pack\nUse /help for commands.");
  }
};
