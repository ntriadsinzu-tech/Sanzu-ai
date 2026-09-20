const reply = require("./lib/reply");
module.exports = {
  config: {
    name: "dice",
    aliases: ["diceroll"],
    version: "1.0.0",
    role: "0",
    hasPrefix: true,
    description: "Roll dice.",
    usage: "{prefix}dice",
    credits: "Sanzu"
  },
  run: async (ctx) => {
    const {api,event,args,prefix} = ctx;
    const a=1+Math.floor(Math.random()*6),b=1+Math.floor(Math.random()*6); return reply(api,event,`🎲 You rolled: ${a}\n🎲 Bonus roll: ${b}\nTotal: ${a+b}`);
  }
};
