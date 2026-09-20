const reply=require("./lib/reply");
module.exports={
 config:{name:"connect4",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu connect4 command.",usage:"{prefix}connect4",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /connect4 is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
