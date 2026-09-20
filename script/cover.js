const reply=require("./lib/reply");
module.exports={
 config:{name:"cover",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu cover command.",usage:"{prefix}cover",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /cover is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
