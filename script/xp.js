module.exports.config = {
  name: "xp",
  version: "1.0.0",
  hasPermission: 0,
  credits: "sinzu",
  description: "Sanzu command.",
  usePrefix: true,
  commandCategory: "Sanzu",
  usages: "/xp",
  cooldowns: 3
};

module.exports.run = async function ({ api, event, args }) {
  const threadID = event.threadID;
  const messageID = event.messageID;
  try {
    return api.sendMessage("✅ /xp loaded." + (args?.length ? "\nInput: " + args.join(" ") : ""), threadID, messageID);
  } catch (err) {
    console.error("[XP] Error:", err.message);
    return api.sendMessage("❌ /xp: " + err.message, threadID, messageID);
  }
};
