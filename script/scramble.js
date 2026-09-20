const reply=require("./lib/reply");
module.exports={
 config:{name:"scramble",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu scramble command.",usage:"{prefix}scramble",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /scramble is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
