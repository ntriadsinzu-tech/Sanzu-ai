const reply=require("./lib/reply");
module.exports={
 config:{name:"ban",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu ban command.",usage:"{prefix}ban",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /ban is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
