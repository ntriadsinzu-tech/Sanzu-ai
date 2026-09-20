module.exports.config = {
  name: "rate",
  version: "1.0.0",
  hasPermission: 0,
  credits: "sinzu",
  description: "Sanzu command.",
  usePrefix: true,
  commandCategory: "Sanzu",
  usages: "/rate",
  cooldowns: 3
};

module.exports.run = async function ({ api, event, args }) {
  const threadID = event.threadID;
  const messageID = event.messageID;
  try {
    return api.sendMessage("✅ /rate loaded." + (args?.length ? "\nInput: " + args.join(" ") : ""), threadID, messageID);
  } catch (err) {
    console.error("[RATE] Error:", err.message);
    return api.sendMessage("❌ /rate: " + err.message, threadID, messageID);
  }
};
