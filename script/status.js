module.exports.config = {
  name: "status",
  version: "1.0.0",
  hasPermission: 0,
  credits: "sinzu",
  description: "Sanzu command.",
  usePrefix: true,
  commandCategory: "Sanzu",
  usages: "/status",
  cooldowns: 3
};

module.exports.run = async function ({ api, event, args }) {
  const threadID = event.threadID;
  const messageID = event.messageID;
  try {
    return api.sendMessage("🟢 Sanzu Bot is online.", threadID, messageID);
  } catch (err) {
    console.error("[STATUS] Error:", err.message);
    return api.sendMessage("❌ /status: " + err.message, threadID, messageID);
  }
};
