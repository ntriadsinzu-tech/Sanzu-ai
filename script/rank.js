const reply=require("./lib/reply");
module.exports={
 config:{name:"rank",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu rank command.",usage:"{prefix}rank",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /rank is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
