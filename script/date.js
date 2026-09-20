const reply=require("./lib/reply");
module.exports={
 config:{name:"date",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu date command.",usage:"{prefix}date",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /date is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
