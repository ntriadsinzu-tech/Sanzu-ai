const fs = require("fs");
const path = require("path");
module.exports = {
  config: {
    name: "help",
    aliases: ["menu","commands"],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Shows installed Sanzu commands.",
    usage: "{prefix}help [category]",
    credits: "Sanzu"
  },
  run: async ({api,event,args,Utils,prefix}) => {
    const rows = [...Utils.commands.values()];
    const cat = (args[0]||"").toLowerCase();
    const groups = {
      system:["help","menu","commands","ping","uptime","botinfo"],
      economy:["balance","bal","daily","work","give","pay"],
      shop:["shop","buy","sell","inventory"],
      auction:["auction","createauction","bid","mybids","endauction"],
      games:["games","rps","dice","slots","guess","quiz","trivia"],
      fun:["8ball","slap","hug","ship","rate","truth","dare"],
      user:["profile","uid","afk"],
      owner:["master"]
    };
    if (cat && groups[cat]) {
      const names = groups[cat];
      return api.sendMessage("╔══ 𝐒𝐀𝐍𝐙𝐔 "+cat.toUpperCase()+" ══╗\n"+names.map(x=>"• /"+x).join("\n")+"\n╚════════════════════╝", event.threadID, event.messageID);
    }
    const names = [...new Set(rows.map(x=>x.name).filter(Boolean))].sort();
    return api.sendMessage(
      "╔══════════════════════╗\n     𝐒𝐀𝐍𝐙𝐔 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒\n╚══════════════════════╝\n\n"+
      "🤖 AI  • /ai /ask /translate /rebut\n👥 GROUP • /groupinfo /tagall /warn /mute\n💰 ECONOMY • /balance /daily /work /pay\n🛒 SHOP • /shop /buy /sell /inventory\n🔨 AUCTION • /auction /bid /createauction\n🎮 GAMES • /games /rps /dice /slots /quiz\n🎉 FUN • /8ball /slap /hug /ship\n👤 USER • /profile /uid /afk\n⚙️ SYSTEM • /ping /uptime /stats\n\nType "+prefix+"help <category>.\n\nLoaded commands: "+names.length,
      event.threadID, event.messageID);
  }
};
