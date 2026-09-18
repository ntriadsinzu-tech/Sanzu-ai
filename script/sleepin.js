const fs = require("fs");
const path = require("path");

module.exports.config = {
  name: "sleepin",
  version: "3.0.0",
  hasPermission: 0,
  credits: "Sinzu",
  description: "SLEEPIN4LGNG global autoreply",
  commandCategory: "system",
  usages: "on | off | status",
  cooldowns: 2
};

// ==========================================
// SETTINGS
// ==========================================

const ADMIN_ID = "61594251452411";

const FOOTER = "—𝐒𝐋𝐄𝐄𝐏𝐈𝐍𝟒𝐋𝐆𝐍𝐆💤💫";

// 5 seconds cooldown per thread
const REPLY_COOLDOWN = 5000;


// ==========================================
// DATA
// ==========================================

const DATA_DIR = path.join(__dirname, "../data");
const DATA_FILE = path.join(DATA_DIR, "sleepin_data.json");

function ensureData() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, {
      recursive: true
    });
  }

  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(
      DATA_FILE,
      JSON.stringify(
        {
          enabled: false
        },
        null,
        2
      )
    );
  }
}

function getData() {
  ensureData();

  try {
    return JSON.parse(
      fs.readFileSync(DATA_FILE, "utf8")
    );
  } catch (e) {
    return {
      enabled: false
    };
  }
}

function saveData(data) {
  ensureData();

  fs.writeFileSync(
    DATA_FILE,
    JSON.stringify(data, null, 2)
  );
}


// ==========================================
// 100 HF / JARGON REPLIES
// ==========================================

const REPLIES = [
  "Your assertion appears rather nebulous, yet its rhetorical construction remains curiously elaborate.",
  "That proposition possesses considerable lexical ornamentation, although its substantive foundation remains questionable.",
  "Your articulation has been duly acknowledged, albeit its contextual relevance appears somewhat ambiguous.",
  "An intriguing assertion, though its semantic trajectory seems remarkably incongruous.",
  "The premise you've presented warrants scrutiny, particularly given its rather equivocal formulation.",
  "Your discourse carries rhetorical weight, yet its underlying implication remains considerably elusive.",
  "That statement exhibits an unusual juxtaposition of terminology and intent, rendering its interpretation rather indeterminate.",
  "The lexical architecture of your statement is elaborate, although the central proposition remains obscure.",
  "Your formulation is rhetorically compelling, but its logical continuity appears somewhat fragmented.",
  "Such an assertion may possess stylistic gravity, yet its conceptual substance remains debatable.",
  "The semantic complexion of your statement appears rather ambiguous, despite its confident presentation.",
  "Your proposition has been registered, although its underlying premise remains susceptible to reinterpretation.",
  "That articulation demonstrates considerable verbal complexity without establishing an unequivocal conclusion.",
  "Your argument seems rhetorically furnished, though its evidentiary foundation remains rather tenuous.",
  "The discourse you've introduced is intriguing, albeit conceptually inconsistent in several respects.",
  "Your statement possesses an interesting cadence, yet its intended inference remains difficult to ascertain.",
  "The proposition appears ostensibly coherent, although closer scrutiny reveals several semantic discrepancies.",
  "Your rhetoric is undeniably elaborate, but lexical sophistication alone does not establish logical validity.",
  "That particular assertion remains conceptually ambiguous despite its seemingly definitive tone.",
  "Your statement warrants contextual examination before its intended implication can be properly construed.",
  "The premise appears superficially persuasive, although its semantic foundation remains considerably unstable.",
  "Your choice of terminology is rather extravagant, yet the proposition itself remains surprisingly equivocal.",
  "That argument follows an interesting rhetorical trajectory, though its conclusion appears insufficiently substantiated.",
  "Your articulation demonstrates verbal dexterity, but its conceptual precision remains questionable.",
  "The statement has been duly processed, although its semantic implications remain rather indeterminate.",
  "Your proposition seems deliberately intricate, perhaps obscuring an otherwise straightforward premise.",
  "The rhetorical structure is notable, yet the logical relationship between its components remains tenuous.",
  "Your assertion carries an air of certainty that the underlying argument does not entirely substantiate.",
  "That formulation is linguistically sophisticated, though its intended meaning remains somewhat elusive.",
  "Your discourse presents an intriguing semantic composition, albeit one lacking definitive contextual clarity.",
  "The argument you've constructed possesses rhetorical momentum, but its logical destination remains uncertain.",
  "Your statement appears laden with implication, although the precise inference remains open to interpretation.",
  "The lexical density of your assertion is considerable, yet density should not be mistaken for conceptual depth.",
  "That proposition is certainly articulate, although articulation alone cannot resolve its underlying ambiguity.",
  "Your rhetoric suggests certainty, while the actual premise appears markedly more equivocal.",
  "The statement contains an interesting semantic tension between its wording and its apparent intention.",
  "Your assertion is acknowledged, though its conceptual parameters remain insufficiently delineated.",
  "The argument possesses stylistic sophistication, but its substantive coherence warrants further inspection.",
  "Your wording is remarkably ornate, although the central thesis remains rather difficult to isolate.",
  "That statement appears rhetorically decisive while remaining logically inconclusive.",
  "Your proposition introduces an interesting premise, though its implications are not immediately self-evident.",
  "The semantic structure you've employed is intricate, yet its practical conclusion remains somewhat obscure.",
  "Your discourse demonstrates lexical ambition, although the argument beneath it remains comparatively uncertain.",
  "That assertion may sound definitive, but its conceptual foundation leaves considerable room for scrutiny.",
  "Your articulation is duly noted, though the contextual framework surrounding it remains rather incomplete.",
  "The rhetoric is compelling in presentation, but the proposition itself remains insufficiently established.",
  "Your statement presents a peculiar synthesis of confidence and ambiguity.",
  "The terminology you've employed is distinctive, although its relevance to the central proposition remains unclear.",
  "Your argument appears carefully phrased, yet several semantic inconsistencies remain apparent.",
  "That formulation possesses rhetorical elegance without necessarily establishing argumentative validity.",
  "Your statement is intellectually intriguing, although its intended conclusion remains open-ended.",
  "The proposition seems coherent at first glance, but deeper examination exposes certain conceptual irregularities.",
  "Your rhetoric carries substantial lexical force, though the premise itself remains rather fragile.",
  "The assertion is certainly noticeable, yet its semantic precision leaves something to be desired.",
  "Your discourse appears intentionally sophisticated, although sophistication cannot substitute for substantiation.",
  "That proposition contains an interesting conceptual framework, albeit one that remains insufficiently demonstrated.",
  "Your articulation has rhetorical presence, though its underlying logic appears somewhat discontinuous.",
  "The statement presents itself with confidence, but confidence alone does not establish veracity.",
  "Your premise is intriguing, yet the available context remains inadequate for a definitive interpretation.",
  "The lexical formulation is undeniably polished, although its argumentative substance remains uncertain.",
  "Your assertion introduces a compelling rhetorical angle, but its logical implications require further examination.",
  "That statement is rather elaborate for a proposition whose conceptual boundaries remain unclear.",
  "Your discourse exhibits notable verbal sophistication, although semantic precision appears comparatively limited.",
  "The premise has potential rhetorical force, yet its evidentiary dimension remains unresolved.",
  "Your assertion seems deliberately emphatic, though the reasoning beneath it remains somewhat understated.",
  "The statement contains a fascinating contradiction between rhetorical certainty and conceptual ambiguity.",
  "Your articulation appears persuasive in cadence, yet its substantive basis remains open to challenge.",
  "That proposition is rhetorically interesting, although its logical continuity remains imperfect.",
  "Your choice of diction suggests considerable intentionality, but the intended inference remains elusive.",
  "The discourse possesses an impressive vocabulary, yet vocabulary itself does not constitute an argument.",
  "Your assertion is sufficiently intriguing to warrant examination, although not sufficiently substantiated to conclude.",
  "The premise appears rather intricate, perhaps unnecessarily so, given its relatively simple implication.",
  "Your rhetoric is polished, but the conceptual framework beneath it remains somewhat unstable.",
  "That statement demonstrates lexical complexity while leaving its principal thesis surprisingly underdeveloped.",
  "Your articulation carries an almost categorical tone, despite the ambiguity embedded within its premise.",
  "The proposition is noteworthy, although its semantic coherence remains open to interpretation.",
  "Your argument contains rhetorical sophistication, but several logical transitions remain insufficiently articulated.",
  "That formulation possesses stylistic authority, yet its conceptual validity remains undetermined.",
  "Your discourse is certainly elaborate, although its central implication remains remarkably elusive.",
  "The statement appears structurally persuasive, but its underlying premise warrants considerably more scrutiny.",
  "Your assertion introduces a compelling semantic proposition, albeit one lacking definitive contextual grounding.",
  "The rhetoric suggests profundity, while the actual premise remains comparatively indeterminate.",
  "Your lexical choices are rather conspicuous, although their argumentative utility remains questionable.",
  "That proposition has rhetorical merit, yet its logical architecture appears somewhat incomplete.",
  "Your articulation is sophisticated in expression, though not necessarily conclusive in substance.",
  "The statement presents an interesting thesis, but its evidentiary framework remains conspicuously limited.",
  "Your premise seems confidently expressed, although its conceptual boundaries remain rather porous.",
  "That assertion possesses linguistic elegance, yet elegance does not inherently establish correctness.",
  "Your discourse is semantically intriguing, although its practical interpretation remains uncertain.",
  "The proposition you've introduced is worthy of consideration, but not without contextual qualification.",
  "Your statement contains considerable rhetorical flourish, while its principal argument remains understated.",
  "The formulation is undoubtedly articulate, though its conceptual precision remains open to scrutiny.",
  "Your assertion demonstrates an impressive command of diction, yet the underlying premise remains equivocal.",
  "That discourse carries substantial stylistic weight, although its logical foundation remains somewhat tenuous.",
  "Your proposition is rhetorically engaging, but its semantic implications remain far from definitive.",
  "The assertion has been acknowledged, although its intended meaning remains subject to interpretation.",
  "Your articulation is elaborate enough to invite scrutiny, particularly where its logic appears discontinuous.",
  "That premise may sound compelling, yet its substantiation remains insufficiently demonstrated.",
  "Your statement exhibits considerable rhetorical craftsmanship, though its central thesis remains ambiguous.",
  "The discourse is certainly distinctive, but conceptual clarity appears to have been sacrificed for lexical grandeur.",
  "Your assertion remains intriguing, although its logical architecture requires a more rigorous examination.",
  "The proposition possesses verbal sophistication, yet its substantive conclusion remains remarkably uncertain.",
  "Your rhetoric is impressive in construction, but the argument itself remains open-ended.",
  "That statement is duly acknowledged, though its semantic implications remain considerably more complex than apparent."
];


// ==========================================
// RANDOM REPLY
// ==========================================

function randomReply() {
  const index = Math.floor(
    Math.random() * REPLIES.length
  );

  return `${REPLIES[index]}\n\n${FOOTER}`;
}


// ==========================================
// COOLDOWN
// ==========================================

const cooldowns = new Map();


// ==========================================
// /sleepin COMMAND
// ==========================================

module.exports.run = async function ({
  api,
  event,
  args
}) {

  // ONLY ADMIN CAN CONTROL SLEEPIN
  if (String(event.senderID) !== ADMIN_ID) {
    return;
  }

  const action = String(
    args[0] || ""
  ).toLowerCase();

  const data = getData();


  // ========================================
  // ON
  // ========================================

  if (action === "on") {

    data.enabled = true;

    saveData(data);

    return api.sendMessage(
      `𝐒𝐋𝐄𝐄𝐏𝐈𝐍𝟒𝐋𝐆𝐍𝐆\n\n` +
      `Status: 𝐎𝐍 🟢\n` +
      `Trigger: 𝐀𝐍𝐘 𝐌𝐄𝐒𝐒𝐀𝐆𝐄\n` +
      `Commands: 𝐀𝐋𝐒𝐎 𝐓𝐑𝐈𝐆𝐆𝐄𝐑\n` +
      `Reply pool: ${REPLIES.length}\n` +
      `Expiry: 𝐍𝐎𝐍𝐄\n\n` +
      FOOTER,
      event.threadID
    );
  }


  // ========================================
  // OFF
  // ========================================

  if (action === "off") {

    data.enabled = false;

    saveData(data);

    return api.sendMessage(
      `𝐒𝐋𝐄𝐄𝐏𝐈𝐍𝟒𝐋𝐆𝐍𝐆\n\n` +
      `Status: 𝐎𝐅𝐅 🔴\n\n` +
      FOOTER,
      event.threadID
    );
  }


  // ========================================
  // STATUS
  // ========================================

  if (action === "status") {

    return api.sendMessage(
      `𝐒𝐋𝐄𝐄𝐏𝐈𝐍𝟒𝐋𝐆𝐍𝐆\n\n` +
      `Status: ${data.enabled ? "𝐎𝐍 🟢" : "𝐎𝐅𝐅 🔴"}\n` +
      `Reply pool: ${REPLIES.length}\n` +
      `Trigger: Any message\n` +
      `Command messages: YES\n` +
      `Cooldown: ${REPLY_COOLDOWN / 1000}s\n\n` +
      FOOTER,
      event.threadID
    );
  }


  // Invalid command from ADMIN
  return api.sendMessage(
    `𝐒𝐋𝐄𝐄𝐏𝐈𝐍𝟒𝐋𝐆𝐍𝐆\n\n` +
    `/sleepin on\n` +
    `/sleepin off\n` +
    `/sleepin status\n\n` +
    FOOTER,
    event.threadID
  );
};


// ==========================================
// GLOBAL AUTOREPLY
// ==========================================

module.exports.handleEvent = async function ({
  api,
  event
}) {

  const data = getData();

  if (!data.enabled) return;

  if (!event.threadID) return;

  if (!event.body) return;

  const message = String(
    event.body
  ).trim();

  if (!message) return;


  // ========================================
  // IMPORTANT:
  // DO NOT IGNORE "/" OR "!"
  //
  // So these WILL trigger:
  //
  // /silent
  // /help
  // /whatever
  // !test
  // !hello
  // ========================================


  // ========================================
  // DON'T REPLY TO BOT'S OWN MESSAGE
  // ========================================

  if (
    event.senderID &&
    event.userID &&
    String(event.senderID) === String(event.userID)
  ) {
    return;
  }


  // ========================================
  // COOLDOWN PER THREAD
  // ========================================

  const now = Date.now();

  const last =
    cooldowns.get(event.threadID) || 0;

  if (
    now - last <
    REPLY_COOLDOWN
  ) {
    return;
  }

  cooldowns.set(
    event.threadID,
    now
  );


  // ========================================
  // SEND RANDOM REPLY
  // ========================================

  try {

    await api.sendMessage(
      randomReply(),
      event.threadID,
      event.messageID
    );

  } catch (error) {

    console.error(
      "[SLEEPIN4LGNG AUTOREPLY]",
      error
    );

    cooldowns.delete(
      event.threadID
    );
  }
};
