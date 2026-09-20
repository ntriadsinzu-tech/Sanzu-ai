module.exports.config = {
  name: "ping",
  version: "1.0.0",
  hasPermission: 0,
  credits: "sinzu",
  description: "Sanzu command.",
  usePrefix: true,
  commandCategory: "Sanzu",
  usages: "/ping",
  cooldowns: 3
};

module.exports.run = async function ({ api, event, args }) {
  const threadID = event.threadID;
  const messageID = event.messageID;
  try {
    return api.sendMessage("🏓 Pong!", threadID, messageID);
  } catch (err) {
    console.error("[PING] Error:", err.message);
    return api.sendMessage("❌ /ping: " + err.message, threadID, messageID);
  }
};
