const reply = require("./lib/reply");
module.exports = {
  config: {
    name: "8ball",
    aliases: ["eightball"],
    version: "1.0.0",
    role: "0",
    hasPrefix: true,
    description: "Ask the magic 8-ball.",
    usage: "{prefix}8ball",
    credits: "Sanzu"
  },
  run: async (ctx) => {
    const {api,event,args,prefix} = ctx;
    const a=["Yes.","No.","Maybe.","Definitely.","Ask again later.","Absolutely not.","Looks promising.","I cannot tell."];return reply(api,event,"🎱 "+a[Math.floor(Math.random()*a.length)]);
  }
};
