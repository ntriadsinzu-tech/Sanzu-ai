const fs = require("fs");
const path = require("path");

module.exports.config = {
  name: "halimaw",
  version: "3.5.0",
  hasPermission: 0,
  credits: "sinzu / updated",
  description: "Tarantadong Halimaw - Ninja Stealth Auto-Roast & Auto-Responder for PM & GC",
  usePrefix: true,
  commandCategory: "Fun",
  usages: "/halimaw [on | off | status]",
  cooldowns: 3
};

const DATA_PATH = path.join(__dirname, "halimaw_config.json");

// Dynamic Cooldown Tracker para sa stealth execution
const threadCooldowns = new Map();

// Listahan ng mga pambara at roasts (Tarantadong Halimaw Mode)
const ROASTS = [
  "Bro really thought that message was necessary 🥷🩸",
  "The confidence… the delusion… unmatched 🥷🩸",
  "Say less, we already lost brain cells reading that 🥷🩸",
  "You typed all that just to embarrass yourself? 🥷🩸",
  "Main character energy but the plot is mid 🥷🩸",
  "Who hurt you? Because that sentence hurt all of us 🥷🩸",
  "Please stop before the group chat files a restraining order 🥷🩸",
  "You really just said that out loud… in text… permanently 🥷🩸",
  "The audacity is loud but the intelligence is on mute 🥷🩸",
  "This is why group chats need a mute button for specific people 🥷🩸",
  "Bro woke up and chose violence against the English language 🥷🩸",
  "I’m not even mad, I’m just disappointed… and second-hand embarrassed 🥷🩸",
  "Your message just aged like milk left in the sun 🥷🩸",
  "Somewhere a grammar teacher is crying 🥷🩸",
  "This energy is giving ‘I peaked in high school’ 🥷🩸",
  "You dropped that like it was fire. It was not 🥷🩸",
  "The group chat was peaceful until you arrived 🥷🩸",
  "Please log off for the sake of everyone’s mental health 🥷🩸",
  "That was a choice… a bold, terrible choice 🥷🩸",
  "I’m taking notes on how not to communicate 🥷🩸"
];

// Load Configuration File
function loadConfig() {
  try {
    if (fs.existsSync(DATA_PATH)) {
      return JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
    }
  } catch (e) {
    console.error("Error loading config:", e);
  }
  return { active: false };
}

// Save Configuration File
function saveConfig(data) {
  try {
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
  } catch (e) {
    console.error("Error saving config:", e);
  }
}

// ===== EVENT HANDLER (PM + GC AUTO-RESPONDER) =====
module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, senderID, body } = event;

  // 1. Huwag pansinin kapag walang body, kapag command, o kapag sariling chat ng bot
  if (!body || body.startsWith("/") || senderID === api.getCurrentUserID()) return;

  const config = loadConfig();
  if (!config.active) return;

  // 2. Dynamic Thread Cooldown Check (10-15 seconds randomness para sa stealth protection)
  const now = Date.now();
  const lastTime = threadCooldowns.get(threadID) || 0;
  const dynamicCooldown = Math.floor(Math.random() * 5000) + 10000; // 10s to 15s

  if (now - lastTime < dynamicCooldown) return;

  // 3. Human-like Probability (70% chance na sumagot)
  if (Math.random() > 0.70) return;

  // Record ang time ng huling reply
  threadCooldowns.set(threadID, now);

  // 4. Pumili ng Random Roast
  const selectedRoast = ROASTS[Math.floor(Math.random() * ROASTS.length)];

  // 5. Human Typing Simulation System
  const typingDelay = Math.floor(Math.random() * 2000) + 2000; // 2s to 4s delay

  // I-send ang typing indicator kung supported ng FCA
  try {
    if (typeof api.sendTypingIndicator === "function") {
      api.sendTypingIndicator(threadID, true);
    }
  } catch (err) {}

  setTimeout(() => {
    // I-off ang typing indicator bago mag-send
    try {
      if (typeof api.sendTypingIndicator === "function") {
        api.sendTypingIndicator(threadID, false);
      }
    } catch (err) {}

    api.sendMessage(selectedRoast, threadID);
  }, typingDelay);
};

// ===== COMMAND CONTROLLER =====
module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID } = event;
  const sub = (args[0] || "").toLowerCase();
  const config = loadConfig();

  if (sub === "on") {
    config.active = true;
    saveConfig(config);
    return api.sendMessage(
      "🥷🩸 TARANTADONG HALIMAW: ACTIVATED\n" +
      "───────────────────\n" +
      "🩸 Mode: Ninja Stealth Anti-Ban\n" +
      "🥷 Scope: Private Messages & Group Chats\n" +
      "🩸 Duration: Permanent (Walang Limit)\n" +
      "🥷 Behavior: Simulated Typing & Dynamic Delay\n" +
      "───────────────────\n" +
      "🩸 Gamitin ang `/halimaw off` para i-turn off.",
      threadID,
      messageID
    );
  }

  if (sub === "off") {
    config.active = false;
    saveConfig(config);
    return api.sendMessage(
      "🥷🩸 TARANTADONG HALIMAW: DISABLED\n" +
      "───────────────────\n" +
      "Napatay na ang auto-responder sa PM at GC.",
      threadID,
      messageID
    );
  }

  if (sub === "status") {
    const isRunning = config.active;
    const statusSymbol = isRunning ? "🥷🩸 ONLINE (ACTIVE)" : "🛑 OFFLINE";
    const modeText = isRunning ? "Ninja Stealth Anti-Detect Mode" : "Disabled";

    return api.sendMessage(
      "📊 TARANTADONG HALIMAW STATUS\n" +
      "───────────────────\n" +
      `• Status: ${statusSymbol}\n` +
      `• Mode: ${modeText}\n` +
      `• Protection: Active (Dynamic Cooldown & Typing Delay)\n` +
      "───────────────────",
      threadID,
      messageID
    );
  }

  return api.sendMessage(
    "🥷🩸 TARANTADONG HALIMAW PANEL\n" +
    "───────────────────\n" +
    "▶️ /halimaw on  — Simulan ang stealth auto-roast (PM & GC)\n" +
    "⏸️ /halimaw off — I-off ang auto-roast\n" +
    "📈 /halimaw status — I-check ang kasalukuyang status\n" +
    "───────────────────",
    threadID,
    messageID
  );
};
