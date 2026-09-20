const reply = require("./lib/reply");
module.exports = {
  config: {
    name: "ship",
    aliases: [],
    version: "1.0.0",
    role: "0",
    hasPrefix: true,
    description: "Compatibility game.",
    usage: "{prefix}ship",
    credits: "Sanzu"
  },
  run: async (ctx) => {
    const {api,event,args,prefix} = ctx;
    const n=Math.floor(Math.random()*101);return reply(api,event,`💘 Compatibility: ${n}%`);
  }
};
