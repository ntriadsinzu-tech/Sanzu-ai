const reply = require("./lib/reply");
module.exports = {
  config: {
    name: "slots",
    aliases: [],
    version: "1.0.0",
    role: "0",
    hasPrefix: true,
    description: "Spin slots.",
    usage: "{prefix}slots",
    credits: "Sanzu"
  },
  run: async (ctx) => {
    const {api,event,args,prefix} = ctx;
    const x=["🍒","🍋","💎","7️⃣","⭐"];const a=[0,1,2].map(()=>x[Math.floor(Math.random()*x.length)]);return reply(api,event,`🎰 ${a.join(" | ")}\n${a[0]===a[1]&&a[1]===a[2]?"🎉 JACKPOT!":"Try again!"}`);
  }
};
