const reply=require("./lib/reply");
module.exports={
 config:{name:"summarize",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu summarize command.",usage:"{prefix}summarize",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /summarize is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
