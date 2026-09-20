const reply=require("./lib/reply");
module.exports={
 config:{name:"tagall",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu tagall command.",usage:"{prefix}tagall",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /tagall is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
