const reply=require("./lib/reply");
module.exports={
 config:{name:"rewrite",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu rewrite command.",usage:"{prefix}rewrite",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /rewrite is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
