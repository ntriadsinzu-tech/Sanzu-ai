const reply=require("./lib/reply");
module.exports={
 config:{name:"lock",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu lock command.",usage:"{prefix}lock",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /lock is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
