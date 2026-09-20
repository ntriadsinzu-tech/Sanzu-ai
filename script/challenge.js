const reply=require("./lib/reply");
module.exports={
 config:{name:"challenge",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu challenge command.",usage:"{prefix}challenge",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /challenge is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
