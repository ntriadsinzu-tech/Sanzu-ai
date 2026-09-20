const reply = require("./lib/reply");
module.exports = {
  config: {
    name: "slap",
    aliases: [],
    version: "1.0.0",
    role: "0",
    hasPrefix: true,
    description: "Fun slap action.",
    usage: "{prefix}slap",
    credits: "Sanzu"
  },
  run: async (ctx) => {
    const {api,event,args,prefix} = ctx;
    return reply(api,event,`👋 ${event.mentions&&Object.keys(event.mentions)[0]?"Slapped the mentioned user!":"*slaps the air*"} 😭`);
  }
};
