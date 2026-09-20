const reply=require("./lib/reply");
module.exports={
 config:{name:"random",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu random command.",usage:"{prefix}random",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /random is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
