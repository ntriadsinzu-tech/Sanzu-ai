module.exports.config = {
  name: "botinfo",
  version: "1.0.0",
  hasPermission: 0,
  credits: "sinzu",
  description: "Sanzu command.",
  usePrefix: true,
  commandCategory: "Sanzu",
  usages: "/botinfo",
  cooldowns: 3
};

module.exports.run = async function ({ api, event, args }) {
  const threadID = event.threadID;
  const messageID = event.messageID;
  try {
    return api.sendMessage("👑 SANZU BOT\n100 parent command files loaded.", threadID, messageID);
  } catch (err) {
    console.error("[BOTINFO] Error:", err.message);
    return api.sendMessage("❌ /botinfo: " + err.message, threadID, messageID);
  }
};
