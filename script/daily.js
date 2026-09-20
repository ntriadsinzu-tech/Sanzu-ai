const reply = require("./lib/reply");
module.exports = {
  config: {
    name: "daily",
    aliases: ["dailyreward"],
    version: "1.0.0",
    role: "0",
    hasPrefix: true,
    description: "Daily reward.",
    usage: "{prefix}daily",
    credits: "Sanzu"
  },
  run: async (ctx) => {
    const {api,event,args,prefix} = ctx;
    const {update}=require("./lib/store"); const now=Date.now(); let ok=false;
update(event.senderID,u=>{ if(now-u.lastDaily<86400000) return; u.balance+=5000; u.xp+=50; u.lastDaily=now; ok=true; });
return reply(api,event, ok ? "🎁 Daily reward: +$5,000\n⭐ +50 XP" : "⏳ You already claimed your daily reward.");
  }
};
