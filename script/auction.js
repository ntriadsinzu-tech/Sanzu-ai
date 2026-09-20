const reply=require("./lib/reply"),{db}=require("./lib/store");
module.exports={config:{name:"auction",aliases:["auctions","auctionlist"],version:"1.0.0",role:0,hasPrefix:true,description:"List active auctions.",usage:"{prefix}auction",credits:"Sanzu"},
run:async({api,event})=>{const d=db(),a=d.auctions.filter(x=>x.endsAt>Date.now());if(!a.length)return reply(api,event,"🔨 No active auctions.");return reply(api,event,"🔨 ACTIVE AUCTIONS\\n"+a.map(x=>`• ${x.id} — ${x.item} — $${x.currentBid.toLocaleString()} — ${Math.ceil((x.endsAt-Date.now())/60000)}m`).join("\\n"));}};
