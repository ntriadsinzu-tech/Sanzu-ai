const reply=require("./lib/reply");
module.exports={
 config:{name:"rebut",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu rebut command.",usage:"{prefix}rebut",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /rebut is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
