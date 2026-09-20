const reply=require("./lib/reply");
module.exports={
 config:{name:"define",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu define command.",usage:"{prefix}define",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /define is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
