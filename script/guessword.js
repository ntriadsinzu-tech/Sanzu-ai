const reply=require("./lib/reply");
module.exports={
 config:{name:"guessword",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu guessword command.",usage:"{prefix}guessword",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /guessword is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
