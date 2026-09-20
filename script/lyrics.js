const reply=require("./lib/reply");
module.exports={
 config:{name:"lyrics",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu lyrics command.",usage:"{prefix}lyrics",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /lyrics is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
