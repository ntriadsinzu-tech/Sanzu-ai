const reply=require("./lib/reply");
module.exports={
 config:{name:"game",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu game command.",usage:"{prefix}game",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /game is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
