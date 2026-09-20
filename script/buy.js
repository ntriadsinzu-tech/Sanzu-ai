const reply=require("./lib/reply"), {items}=require("./shop"), {update,addItem}=require("./lib/store");
module.exports={config:{name:"buy",aliases:["purchase"],version:"1.0.0",role:0,hasPrefix:true,description:"Buy shop items.",usage:"{prefix}buy <item> [quantity]",credits:"Sanzu"},
run:async({api,event,args,prefix})=>{
 const item=(args[0]||"").toLowerCase(), qty=Math.max(1,Math.floor(Number(args[1]||1)));
 if(!items[item]||!Number.isFinite(qty)) return reply(api,event,`Usage: ${prefix}buy <item> [quantity]\\nUse ${prefix}shop.`);
 const total=items[item]*qty; let ok=false;
 update(event.senderID,u=>{if(u.balance>=total){u.balance-=total;ok=true;}});
 if(!ok)return reply(api,event,"❌ Insufficient balance.");
 addItem(event.senderID,item,qty);
 return reply(api,event,`✅ Purchased ${item.replace(/_/g," ")} ×${qty}\\n💰 Cost: $${total.toLocaleString()}`);
}};
