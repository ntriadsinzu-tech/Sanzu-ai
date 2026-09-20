const reply=require("./lib/reply");
module.exports={
 config:{name:"calc",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu calc command.",usage:"{prefix}calc",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /calc is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
