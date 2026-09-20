const reply = require("./lib/reply");
module.exports = {
  config: {
    name: "inventory",
    aliases: ["inv", "items"],
    version: "1.0.0",
    role: "0",
    hasPrefix: true,
    description: "Shows inventory.",
    usage: "{prefix}inventory",
    credits: "Sanzu"
  },
  run: async (ctx) => {
    const {api,event,args,prefix} = ctx;
    const {user}=require("./lib/store"); const inv=user(event.senderID).inventory;
const lines=Object.entries(inv); return reply(api,event,lines.length? "📦 INVENTORY\n"+lines.map(([k,v])=>`• ${k} ×${v}`).join("\n"):"📦 Inventory is empty.");
  }
};
