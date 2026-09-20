const reply=require("./lib/reply");
module.exports={
 config:{name:"google",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu google command.",usage:"{prefix}google",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /google is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
