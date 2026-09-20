const reply = require("./lib/reply");
module.exports = {
  config: {
    name: "ping",
    aliases: ["pong"],
    version: "1.0.0",
    role: "0",
    hasPrefix: true,
    description: "Checks bot latency.",
    usage: "{prefix}ping",
    credits: "Sanzu"
  },
  run: async (ctx) => {
    const {api,event,args,prefix} = ctx;
    const t=Date.now(); return reply(api,event,`🏓 PONG\nLatency: ${Date.now()-t}ms`);
  }
};
