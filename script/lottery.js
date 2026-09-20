const reply=require("./lib/reply");
module.exports={
 config:{name:"lottery",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu lottery command.",usage:"{prefix}lottery",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /lottery is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
