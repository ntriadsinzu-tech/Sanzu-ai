const reply=require("./lib/reply");
module.exports={
 config:{name:"games",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu games command.",usage:"{prefix}games",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /games is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
