module.exports.config = {
  name: "version",
  version: "1.0.0",
  hasPermission: 0,
  credits: "sinzu",
  description: "Sanzu command.",
  usePrefix: true,
  commandCategory: "Sanzu",
  usages: "/version",
  cooldowns: 3
};

module.exports.run = async function ({ api, event, args }) {
  const threadID = event.threadID;
  const messageID = event.messageID;
  try {
    return api.sendMessage("👑 SANZU BOT\nCommand Pack: 100 files", threadID, messageID);
  } catch (err) {
    console.error("[VERSION] Error:", err.message);
    return api.sendMessage("❌ /version: " + err.message, threadID, messageID);
  }
};
