const reply=require("./lib/reply");
module.exports={
 config:{name:"groupinfo",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu groupinfo command.",usage:"{prefix}groupinfo",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /groupinfo is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
