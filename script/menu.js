module.exports.config = {
  name: "menu",
  version: "1.0.0",
  hasPermission: 0,
  credits: "sinzu",
  description: "Sanzu command.",
  usePrefix: true,
  commandCategory: "Sanzu",
  usages: "/menu",
  cooldowns: 3
};

module.exports.run = async function ({ api, event, args }) {
  const threadID = event.threadID;
  const messageID = event.messageID;
  try {
    return api.sendMessage("📖 SANZU MENU\nUse /help all.", threadID, messageID);
  } catch (err) {
    console.error("[MENU] Error:", err.message);
    return api.sendMessage("❌ /menu: " + err.message, threadID, messageID);
  }
};
