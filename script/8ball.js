module.exports.config = {
  name: "8ball",
  version: "1.0.0",
  hasPermission: 0,
  credits: "sinzu",
  description: "Sanzu command.",
  usePrefix: true,
  commandCategory: "Sanzu",
  usages: "/8ball",
  cooldowns: 3
};

module.exports.run = async function ({ api, event, args }) {
  const threadID = event.threadID;
  const messageID = event.messageID;
  try {
    return api.sendMessage("✅ /8ball loaded." + (args?.length ? "\nInput: " + args.join(" ") : ""), threadID, messageID);
  } catch (err) {
    console.error("[8BALL] Error:", err.message);
    return api.sendMessage("❌ /8ball: " + err.message, threadID, messageID);
  }
};
