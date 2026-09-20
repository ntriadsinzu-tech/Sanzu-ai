const reply=require("./lib/reply");
module.exports={
 config:{name:"blackjack",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu blackjack command.",usage:"{prefix}blackjack",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /blackjack is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
