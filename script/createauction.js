const reply=require("./lib/reply"), {db,save,removeItem,user}=require("./lib/store");
module.exports={config:{name:"createauction",aliases:["auctioncreate","listauction"],version:"1.0.0",role:0,hasPrefix:true,description:"Create an item auction.",usage:"{prefix}createauction <item> <startBid> <minutes>",credits:"Sanzu"},
run:async({api,event,args,prefix})=>{
 const item=(args[0]||"").toLowerCase(), bid=Number(args[1]), mins=Number(args[2]||10),u=user(event.senderID);
 if(!item||!Number.isFinite(bid)||bid<=0||!Number.isFinite(mins)||mins<=0)return reply(api,event,`Usage: ${prefix}createauction <item> <startBid> <minutes>`);
 if((u.inventory[item]||0)<1)return reply(api,event,"❌ You don't own that item.");
 removeItem(event.senderID,item,1);const d=db();const id=Date.now().toString(36);d.auctions.push({id,item,startBid:bid,currentBid:bid,highestBidder:null,seller:event.senderID,endsAt:Date.now()+mins*60000});save(d);
 return reply(api,event,`🔨 Auction created!\\nID: ${id}\\nItem: ${item}\\nStarting bid: $${bid.toLocaleString()}\\nDuration: ${mins}m\\nBid with /bid ${id} <amount>`);
}};
