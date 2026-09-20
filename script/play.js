const reply=require("./lib/reply");
module.exports={
 config:{name:"play",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu play command.",usage:"{prefix}play",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /play is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
