const reply=require("./lib/reply");
module.exports={
 config:{name:"jackpot",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu jackpot command.",usage:"{prefix}jackpot",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /jackpot is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
