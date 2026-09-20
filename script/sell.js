const reply=require("./lib/reply"), {items}=require("./shop"), {update,removeItem,user}=require("./lib/store");
module.exports={config:{name:"sell",aliases:["sellitem"],version:"1.0.0",role:0,hasPrefix:true,description:"Sell an item for 60% of shop price.",usage:"{prefix}sell <item> [quantity]",credits:"Sanzu"},
run:async({api,event,args,prefix})=>{
 const item=(args[0]||"").toLowerCase(),qty=Math.max(1,Math.floor(Number(args[1]||1))),u=user(event.senderID);
 if(!items[item]||!Number.isFinite(qty))return reply(api,event,`Usage: ${prefix}sell <item> [quantity]`);
 if((u.inventory[item]||0)<qty)return reply(api,event,"❌ You don't have enough of that item.");
 const total=Math.floor(items[item]*qty*.6);removeItem(event.senderID,item,qty);update(event.senderID,u=>u.balance+=total);
 return reply(api,event,`💰 Sold ${item.replace(/_/g," ")} ×${qty} for $${total.toLocaleString()}.`);
}};
