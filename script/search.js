const reply=require("./lib/reply");
module.exports={
 config:{name:"search",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu search command.",usage:"{prefix}search",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /search is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
