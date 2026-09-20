const reply = require("./lib/reply");
module.exports = {
  config: {
    name: "truth",
    aliases: [],
    version: "1.0.0",
    role: "0",
    hasPrefix: true,
    description: "Truth prompt.",
    usage: "{prefix}truth",
    credits: "Sanzu"
  },
  run: async (ctx) => {
    const {api,event,args,prefix} = ctx;
    const a=["What is your biggest goal?","What is something you regret?","Who do you trust most?","What is a secret talent you have?"];return reply(api,event,"🗣️ TRUTH\n"+a[Math.floor(Math.random()*a.length)]);
  }
};
