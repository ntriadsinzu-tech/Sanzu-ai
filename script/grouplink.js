const reply=require("./lib/reply");
module.exports={
 config:{name:"grouplink",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu grouplink command.",usage:"{prefix}grouplink",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /grouplink is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
