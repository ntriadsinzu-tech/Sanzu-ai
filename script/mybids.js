const reply=require("./lib/reply"),{db}=require("./lib/store");
module.exports={config:{name:"mybids",aliases:["bidhistory"],version:"1.0.0",role:0,hasPrefix:true,description:"Show your current auction bids.",usage:"{prefix}mybids",credits:"Sanzu"},
run:async({api,event})=>{const a=db().auctions.filter(x=>x.highestBidder===event.senderID);return reply(api,event,a.length?"🔨 Your leading bids:\\n"+a.map(x=>`• ${x.item} — $${x.currentBid.toLocaleString()}`).join("\\n"):"You have no leading bids.");}};
