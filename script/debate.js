const reply=require("./lib/reply");
module.exports={
 config:{name:"debate",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu debate command.",usage:"{prefix}debate",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /debate is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
