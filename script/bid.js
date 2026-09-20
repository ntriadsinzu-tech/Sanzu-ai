const reply=require("./lib/reply"),{db,save,update}=require("./lib/store");
module.exports={config:{name:"bid",aliases:["placebid"],version:"1.0.0",role:0,hasPrefix:true,description:"Bid on an auction.",usage:"{prefix}bid <id> <amount>",credits:"Sanzu"},
run:async({api,event,args,prefix})=>{
 const id=args[0],amount=Number(args[1]);if(!id||!Number.isFinite(amount))return reply(api,event,`Usage: ${prefix}bid <id> <amount>`);
 const d=db(),a=d.auctions.find(x=>x.id===id&&x.endsAt>Date.now());if(!a)return reply(api,event,"❌ Auction not found or expired.");
 if(amount<=a.currentBid)return reply(api,event,`❌ Bid must exceed $${a.currentBid.toLocaleString()}.`);
 let ok=false;update(event.senderID,u=>{if(u.balance>=amount){u.balance-=amount;ok=true;}});if(!ok)return reply(api,event,"❌ Insufficient balance.");
 if(a.highestBidder&&a.highestBidder!==event.senderID) update(a.highestBidder,u=>u.balance+=a.currentBid);
 a.currentBid=amount;a.highestBidder=event.senderID;save(d);
 return reply(api,event,`🔨 Bid accepted!\\n${a.item}: $${amount.toLocaleString()}`);
}};
