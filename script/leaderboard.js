const reply=require("./lib/reply");
module.exports={
 config:{name:"leaderboard",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu leaderboard command.",usage:"{prefix}leaderboard",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /leaderboard is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
