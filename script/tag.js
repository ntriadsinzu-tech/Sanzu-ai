const reply=require("./lib/reply");
module.exports={
 config:{name:"tag",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu tag command.",usage:"{prefix}tag",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /tag is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
