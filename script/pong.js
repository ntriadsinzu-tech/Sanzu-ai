module.exports.config = {
  name: "pong",
  version: "1.0.0",
  hasPermission: 0,
  credits: "sinzu",
  description: "Sanzu command.",
  usePrefix: true,
  commandCategory: "Sanzu",
  usages: "/pong",
  cooldowns: 3
};

module.exports.run = async function ({ api, event, args }) {
  const threadID = event.threadID;
  const messageID = event.messageID;
  try {
    return api.sendMessage("🏓 Pong!", threadID, messageID);
  } catch (err) {
    console.error("[PONG] Error:", err.message);
    return api.sendMessage("❌ /pong: " + err.message, threadID, messageID);
  }
};
