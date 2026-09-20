const reply=require("./lib/reply");
module.exports={
 config:{name:"song",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu song command.",usage:"{prefix}song",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /song is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
