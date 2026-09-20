const reply = require("./lib/reply");
module.exports = {
  config: {
    name: "balance",
    aliases: ["bal", "wallet"],
    version: "1.0.0",
    role: "0",
    hasPrefix: true,
    description: "Shows your balance.",
    usage: "{prefix}balance",
    credits: "Sanzu"
  },
  run: async (ctx) => {
    const {api,event,args,prefix} = ctx;
    const {user}=require("./lib/store"); const u=user(event.senderID); return reply(api,event,`💰 Balance: $${u.balance.toLocaleString()}`);
  }
};
