const reply=require("./lib/reply");
module.exports={
 config:{name:"setrules",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu setrules command.",usage:"{prefix}setrules",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /setrules is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
