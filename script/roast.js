const reply=require("./lib/reply");
module.exports={
 config:{name:"roast",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu roast command.",usage:"{prefix}roast",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /roast is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
