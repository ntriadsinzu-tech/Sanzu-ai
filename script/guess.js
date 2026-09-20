const reply=require("./lib/reply");
module.exports={
 config:{name:"guess",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu guess command.",usage:"{prefix}guess",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /guess is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
