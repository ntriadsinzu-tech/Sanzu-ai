const reply=require("./lib/reply");
module.exports={
 config:{name:"guessnumber",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu guessnumber command.",usage:"{prefix}guessnumber",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /guessnumber is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
