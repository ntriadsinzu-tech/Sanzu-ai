const reply=require("./lib/reply");
module.exports={
 config:{name:"avatar",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu avatar command.",usage:"{prefix}avatar",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /avatar is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
