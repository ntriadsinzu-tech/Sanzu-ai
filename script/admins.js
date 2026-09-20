const reply=require("./lib/reply");
module.exports={
 config:{name:"admins",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu admins command.",usage:"{prefix}admins",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /admins is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
