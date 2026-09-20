const reply=require("./lib/reply");
module.exports={
 config:{name:"ttt",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu ttt command.",usage:"{prefix}ttt",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /ttt is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
