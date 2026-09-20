const reply=require("./lib/reply");
module.exports={
 config:{name:"streak",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu streak command.",usage:"{prefix}streak",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /streak is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
