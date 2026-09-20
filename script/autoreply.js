const reply=require("./lib/reply");
module.exports={
 config:{name:"autoreply",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu autoreply command.",usage:"{prefix}autoreply",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /autoreply is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
