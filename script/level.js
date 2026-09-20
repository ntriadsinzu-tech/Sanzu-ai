const reply=require("./lib/reply");
module.exports={
 config:{name:"level",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu level command.",usage:"{prefix}level",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /level is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
