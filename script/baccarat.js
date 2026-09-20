const reply=require("./lib/reply");
module.exports={
 config:{name:"baccarat",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu baccarat command.",usage:"{prefix}baccarat",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /baccarat is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
