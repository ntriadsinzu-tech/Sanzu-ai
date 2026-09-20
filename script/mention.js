const reply=require("./lib/reply");
module.exports={
 config:{name:"mention",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu mention command.",usage:"{prefix}mention",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /mention is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
