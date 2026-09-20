const reply=require("./lib/reply");
module.exports={
 config:{name:"trivia",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu trivia command.",usage:"{prefix}trivia",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /trivia is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
