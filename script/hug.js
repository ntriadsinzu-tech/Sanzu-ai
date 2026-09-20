const reply = require("./lib/reply");
module.exports = {
  config: {
    name: "hug",
    aliases: [],
    version: "1.0.0",
    role: "0",
    hasPrefix: true,
    description: "Fun hug action.",
    usage: "{prefix}hug",
    credits: "Sanzu"
  },
  run: async (ctx) => {
    const {api,event,args,prefix} = ctx;
    return reply(api,event,"🫂 Sending a virtual hug!");
  }
};
