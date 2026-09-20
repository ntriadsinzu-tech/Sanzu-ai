module.exports.config = {
  name: "master",
  version: "1.0.0",
  hasPermission: 0,
  credits: "sinzu",
  description: "Sanzu command.",
  usePrefix: true,
  commandCategory: "Sanzu",
  usages: "/master",
  cooldowns: 3
};

module.exports.run = async function ({ api, event, args }) {
  const threadID = event.threadID;
  const messageID = event.messageID;
  try {
    const sub=String(args?.[0]||"").toLowerCase();
if(sub==="on") return api.sendMessage("👑 MASTER MODE: ON\n\nTHE MASTER OF ALL HAS ARRIVED.",threadID,messageID);
if(sub==="off") return api.sendMessage("👑 MASTER MODE: OFF",threadID,messageID);
if(sub==="status") return api.sendMessage("👑 MASTER MODE: STATUS",threadID,messageID);
return api.sendMessage("Usage: /master on | off | status",threadID,messageID);
  } catch (err) {
    console.error("[MASTER] Error:", err.message);
    return api.sendMessage("❌ /master: " + err.message, threadID, messageID);
  }
};
