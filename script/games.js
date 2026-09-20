module.exports.config = {
  name: "games",
  version: "1.0.0",
  hasPermission: 0,
  credits: "sinzu",
  description: "Sanzu command.",
  usePrefix: true,
  commandCategory: "Sanzu",
  usages: "/games",
  cooldowns: 3
};

module.exports.run = async function ({ api, event, args }) {
  const threadID = event.threadID;
  const messageID = event.messageID;
  try {
    return api.sendMessage("✅ /games loaded." + (args?.length ? "\nInput: " + args.join(" ") : ""), threadID, messageID);
  } catch (err) {
    console.error("[GAMES] Error:", err.message);
    return api.sendMessage("❌ /games: " + err.message, threadID, messageID);
  }
};
