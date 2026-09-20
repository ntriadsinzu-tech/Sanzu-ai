const reply = require("./lib/reply");
module.exports = {
  config: {
    name: "rps",
    aliases: [],
    version: "1.0.0",
    role: "0",
    hasPrefix: true,
    description: "Rock paper scissors.",
    usage: "{prefix}rps",
    credits: "Sanzu"
  },
  run: async (ctx) => {
    const {api,event,args,prefix} = ctx;
    const c=(args[0]||"").toLowerCase(), choices=["rock","paper","scissors"];
if(!choices.includes(c)) return reply(api,event,`Usage: ${prefix}rps rock|paper|scissors`);
const b=choices[Math.floor(Math.random()*3)]; const win=(c==="rock"&&b==="scissors")||(c==="paper"&&b==="rock")||(c==="scissors"&&b==="paper");
return reply(api,event,`🎮 You: ${c}\n🤖 Bot: ${b}\n${c===b?"🤝 Draw!":win?"🏆 You win!":"💀 You lose!"}`);
  }
};
