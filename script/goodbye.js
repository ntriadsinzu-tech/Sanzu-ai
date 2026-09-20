const reply=require("./lib/reply");
module.exports={
 config:{name:"goodbye",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu goodbye command.",usage:"{prefix}goodbye",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /goodbye is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
