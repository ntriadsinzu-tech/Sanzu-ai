const reply=require("./lib/reply");
module.exports={
 config:{name:"roulette",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu roulette command.",usage:"{prefix}roulette",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /roulette is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
