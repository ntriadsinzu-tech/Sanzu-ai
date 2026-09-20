const reply = require("./lib/reply");
module.exports = {
  config: {
    name: "pay",
    aliases: ["give", "transfer", "send"],
    version: "1.0.0",
    role: "0",
    hasPrefix: true,
    description: "Send coins to a replied user.",
    usage: "{prefix}pay",
    credits: "Sanzu"
  },
  run: async (ctx) => {
    const {api,event,args,prefix} = ctx;
    const {update}=require("./lib/store"); const target=event.messageReply?.senderID;
if(!target) return reply(api,event,`Usage: ${prefix}pay <amount> while replying to a user`);
const amount=Math.floor(Number(args[0]||0));
if(!Number.isFinite(amount)||amount<=0) return reply(api,event,"❌ Invalid amount.");
let ok=false;
update(event.senderID,u=>{if(u.balance>=amount){u.balance-=amount;ok=true;}});
if(!ok) return reply(api,event,"❌ Insufficient balance.");
update(target,u=>u.balance+=amount);
return reply(api,event,`💸 Sent $${amount.toLocaleString()} successfully.`);
  }
};
