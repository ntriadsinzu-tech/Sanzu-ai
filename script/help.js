module.exports.config = {
  name: "help",
  version: "1.0.0",
  hasPermission: 0,
  credits: "sinzu",
  description: "Sanzu command.",
  usePrefix: true,
  commandCategory: "Sanzu",
  usages: "/help",
  cooldowns: 3
};

module.exports.run = async function ({ api, event, args }) {
  const threadID = event.threadID;
  const messageID = event.messageID;
  try {
    return api.sendMessage("📚 SANZU HELP\nUse /help <category> or /commands.", threadID, messageID);
  } catch (err) {
    console.error("[HELP] Error:", err.message);
    return api.sendMessage("❌ /help: " + err.message, threadID, messageID);
  }
};
