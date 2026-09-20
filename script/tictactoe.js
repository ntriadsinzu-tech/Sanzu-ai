const reply=require("./lib/reply");
module.exports={
 config:{name:"tictactoe",aliases:[],version:"1.0.0",role:0,hasPrefix:true,description:"Sanzu tictactoe command.",usage:"{prefix}tictactoe",credits:"Sanzu"},
 run:async({api,event,args,prefix})=>reply(api,event,`⚡ /tictactoe is installed. Use /help for the command list.{args.length?"\nArgs: "+args.join(" "):""}`)
};
