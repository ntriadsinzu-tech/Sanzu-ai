const reply=require("./lib/reply");
module.exports={
 config:{name:"sticker",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu sticker command.",usage:"{prefix}sticker",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /sticker is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
