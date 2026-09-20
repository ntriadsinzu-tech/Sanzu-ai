const reply=require("./lib/reply");
module.exports={
 config:{name:"profile",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu profile command.",usage:"{prefix}profile",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /profile is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
