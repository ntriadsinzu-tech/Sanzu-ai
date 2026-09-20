const reply=require("./lib/reply");
module.exports={
 config:{name:"rewards",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu rewards command.",usage:"{prefix}rewards",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /rewards is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
