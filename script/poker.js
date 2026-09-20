const reply=require("./lib/reply");
module.exports={
 config:{name:"poker",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu poker command.",usage:"{prefix}poker",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /poker is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
