const reply = require("./lib/reply");
module.exports = {
  config: {
    name: "dare",
    aliases: [],
    version: "1.0.0",
    role: "0",
    hasPrefix: true,
    description: "Dare prompt.",
    usage: "{prefix}dare",
    credits: "Sanzu"
  },
  run: async (ctx) => {
    const {api,event,args,prefix} = ctx;
    const a=["Send a funny sticker.","Say your best one-liner.","Change your nickname for 5 minutes.","Challenge someone to a game."];return reply(api,event,"🔥 DARE\n"+a[Math.floor(Math.random()*a.length)]);
  }
};
