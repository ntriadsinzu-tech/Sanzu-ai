const reply=require("./lib/reply");
module.exports={
 config:{name:"gif",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu gif command.",usage:"{prefix}gif",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /gif is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
