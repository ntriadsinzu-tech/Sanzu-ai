const reply=require("./lib/reply");
module.exports={
 config:{name:"groupid",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu groupid command.",usage:"{prefix}groupid",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /groupid is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
