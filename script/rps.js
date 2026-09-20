module.exports.config = {
  name: "rps",
  version: "1.0.0",
  hasPermission: 0,
  credits: "sinzu",
  description: "Sanzu command.",
  usePrefix: true,
  commandCategory: "Sanzu",
  usages: "/rps",
  cooldowns: 3
};

module.exports.run = async function ({ api, event, args }) {
  const threadID = event.threadID;
  const messageID = event.messageID;
  try {
    return api.sendMessage("✅ /rps loaded." + (args?.length ? "\nInput: " + args.join(" ") : ""), threadID, messageID);
  } catch (err) {
    console.error("[RPS] Error:", err.message);
    return api.sendMessage("❌ /rps: " + err.message, threadID, messageID);
  }
};
