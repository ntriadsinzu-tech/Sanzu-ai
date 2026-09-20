const reply=require("./lib/reply");
module.exports={
 config:{name:"rules",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu rules command.",usage:"{prefix}rules",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /rules is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
