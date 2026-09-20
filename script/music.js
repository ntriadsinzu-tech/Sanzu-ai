const reply=require("./lib/reply");
module.exports={
 config:{name:"music",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu music command.",usage:"{prefix}music",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /music is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
