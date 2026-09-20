const reply=require("./lib/reply");
module.exports={
 config:{name:"decline",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu decline command.",usage:"{prefix}decline",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /decline is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
