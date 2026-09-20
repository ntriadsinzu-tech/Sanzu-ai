const reply=require("./lib/reply");
module.exports={
 config:{name:"quiz",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu quiz command.",usage:"{prefix}quiz",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /quiz is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
