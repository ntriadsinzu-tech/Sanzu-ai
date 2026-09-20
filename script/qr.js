const reply=require("./lib/reply");
module.exports={
 config:{name:"qr",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu qr command.",usage:"{prefix}qr",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /qr is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
