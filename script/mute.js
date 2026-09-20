const reply=require("./lib/reply");
module.exports={
 config:{name:"mute",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu mute command.",usage:"{prefix}mute",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /mute is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
