const reply=require("./lib/reply");
module.exports={
 config:{name:"audio",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu audio command.",usage:"{prefix}audio",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /audio is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
