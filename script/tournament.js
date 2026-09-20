const reply=require("./lib/reply");
module.exports={
 config:{name:"tournament",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu tournament command.",usage:"{prefix}tournament",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /tournament is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
