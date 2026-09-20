const fs=require("fs"), path=require("path");
const stateFile=path.join(process.cwd(),"data","master_mode.json");
function get(){try{return JSON.parse(fs.readFileSync(stateFile,"utf8"))}catch{return {}}}
function save(x){fs.mkdirSync(path.dirname(stateFile),{recursive:true});fs.writeFileSync(stateFile,JSON.stringify(x,null,2))}
module.exports={
 config:{name:"master",aliases:["mastermode"],version:"1.0.0",role:"1",hasPrefix:true,description:"Toggle the Master arrival read-event greeting.",usage:"{prefix}master on|off|status",credits:"Sanzu"},
 run:async({api,event,args})=>{
  const s=get(),k=event.threadID;
  if(args[0]==="on"){s[k]=true;save(s);return api.sendMessage("👑 Master mode enabled for this GC.",k,event.messageID)}
  if(args[0]==="off"){delete s[k];save(s);return api.sendMessage("👑 Master mode disabled for this GC.",k,event.messageID)}
  return api.sendMessage(`👑 Master mode: ${s[k]?"ON":"OFF"}`,k,event.messageID);
 },
 handleEvent:async({api,event})=>{
  if(!["read_receipt","read","readReceipt"].includes(event.type)) return;
  const s=get(),k=event.threadID;if(!s[k])return;
  if(event.readerID && event.readerID===api.getCurrentUserID?.()){
    try{
      const gif=path.join(process.cwd(),"public","master.gif");
      if(fs.existsSync(gif)) return api.sendMessage({body:"THE MASTER OF ALL HAS ARRIVED.",attachment:fs.createReadStream(gif)},k);
      return api.sendMessage("THE MASTER OF ALL HAS ARRIVED.",k);
    }catch{}
  }
 }
};
