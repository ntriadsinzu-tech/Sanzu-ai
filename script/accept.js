const reply=require("./lib/reply");
module.exports={
 config:{name:"accept",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu accept command.",usage:"{prefix}accept",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /accept is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
