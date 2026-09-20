module.exports.config = {
  name: "commands",
  version: "1.0.0",
  hasPermission: 0,
  credits: "sinzu",
  description: "Sanzu command.",
  usePrefix: true,
  commandCategory: "Sanzu",
  usages: "/commands",
  cooldowns: 3
};

module.exports.run = async function ({ api, event, args }) {
  const threadID = event.threadID;
  const messageID = event.messageID;
  try {
    return api.sendMessage("📚 100 parent command files loaded.", threadID, messageID);
  } catch (err) {
    console.error("[COMMANDS] Error:", err.message);
    return api.sendMessage("❌ /commands: " + err.message, threadID, messageID);
  }
};
