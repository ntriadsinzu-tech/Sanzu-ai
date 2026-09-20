const reply=require("./lib/reply");
module.exports={
 config:{name:"hangman",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu hangman command.",usage:"{prefix}hangman",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /hangman is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
