const reply=require("./lib/reply");
module.exports={
 config:{name:"time",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu time command.",usage:"{prefix}time",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /time is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
