const fs = require("fs");
const path = require("path");

// ==============================
// CONFIG
// ==============================

const ADMIN_ID = "61594251452411";

// 5 seconds cooldown bawat target
const REPLY_COOLDOWN = 5000;

const DATA_DIR = path.join(__dirname, "../data");
const DATA_FILE = path.join(DATA_DIR, "sleepin_data.json");

// ==============================
// CREATE DATA FOLDER
// ==============================

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// ==============================
// LOAD DATA
// ==============================

function loadData() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, "{}");
      return {};
    }

    const data = fs.readFileSync(DATA_FILE, "utf8");

    if (!data.trim()) return {};

    return JSON.parse(data);
  } catch (err) {
    return {};
  }
}

// ==============================
// SAVE DATA
// ==============================

function saveData(data) {
  try {
    fs.writeFileSync(
      DATA_FILE,
      JSON.stringify(data, null, 2),
      "utf8"
    );
  } catch (err) {
    // Silent
  }
}

// ==============================
// DATA
// ==============================

const sleepinData = loadData();
const cooldowns = new Map();

// ==============================
// REPLIES
// ==============================

const replies = [
  "Your statement arrives with confidence, yet confidence alone cannot compensate for the absence of substance.",
  "You speak as though assertion itself were evidence, but rhetoric cannot substitute for demonstration.",
  "The vocabulary may appear elaborate, but complexity of wording does not necessarily establish complexity of thought.",
  "Your argument attempts to sound conclusive before actually becoming conclusive.",
  "There is a noticeable distance between what you claim and what your words actually establish.",
  "You have constructed a sentence with considerable ambition, though its reasoning remains considerably less ambitious.",
  "Your point would carry more weight if the explanation beneath it were as strong as the presentation above it.",
  "You seem determined to make the sentence impressive, even where the argument itself remains unsubstantiated.",
  "Elegance in diction cannot rescue an argument that lacks structural coherence.",
  "You have presented a conclusion without adequately establishing the premises required to reach it.",
  "The assertion is clear; the justification for that assertion is considerably less so.",
  "Your wording creates an impression of authority, but impression and proof are fundamentally different things.",
  "You appear to be defending the appearance of an argument rather than the argument itself.",
  "The sentence sounds decisive, yet its logical foundation remains remarkably uncertain.",
  "A sophisticated vocabulary is useful, but only when the underlying reasoning is equally developed.",
  "You have increased the density of the language without increasing the strength of the reasoning.",
  "The confidence is evident. The substantiation, however, remains conspicuously absent.",
  "Your response attempts to close the discussion before sufficiently opening the argument.",
  "The terminology may be polished, but polish should never be mistaken for precision.",
  "You have mistaken verbal complexity for argumentative depth.",
  "Your conclusion seems to arrive considerably earlier than the evidence supporting it.",
  "The statement carries rhetorical weight, but rhetorical weight is not equivalent to logical validity.",
  "You are presenting certainty where the reasoning only demonstrates possibility.",
  "The argument would benefit from evidence rather than additional ornamentation.",
  "You have managed to make the sentence longer without making the point stronger.",
  "The diction is elaborate, yet the actual proposition remains surprisingly fragile.",
  "You rely heavily upon presentation while neglecting the burden of demonstration.",
  "There is a difference between sounding convincing and establishing something convincingly.",
  "Your response is articulate, but articulation does not automatically entail accuracy.",
  "The argument appears complete only until its assumptions are examined.",
  "You have supplied plenty of language, but comparatively little that actually proves your position.",
  "The confidence of your delivery exceeds the certainty warranted by your reasoning.",
  "Your statement would be more persuasive if it survived closer examination.",
  "You are treating your interpretation as though it were an established fact.",
  "The rhetoric is present; the rigorous justification is not.",
  "Your formulation suggests precision while simultaneously leaving its central claim insufficiently defined.",
  "You have built an impressive surface over an argument that still requires structural support.",
  "The conclusion may be possible, but possibility should not be presented as certainty.",
  "You emphasize the claim repeatedly without materially strengthening it.",
  "Your response contains terminology, but terminology alone does not constitute analysis.",
  "The argument seems dependent upon the listener accepting your premise without demanding justification.",
  "You have confused confidence with credibility.",
  "The sentence has rhetorical momentum, but momentum does not guarantee direction.",
  "Your point is understandable, though its evidentiary foundation remains questionable.",
  "You appear more concerned with how the argument sounds than with whether it withstands scrutiny.",
  "The vocabulary is extensive; the evidentiary burden remains unpaid.",
  "Your statement deserves examination rather than automatic acceptance.",
  "You have framed your conclusion as inevitable without establishing why it must be inevitable.",
  "The presentation is assertive, but assertion is merely the beginning of an argument.",
  "You are asking the wording to accomplish what the reasoning has not yet accomplished.",
  "A longer sentence cannot compensate for a weaker premise.",
  "Your argument possesses form, but its substance requires considerably more support.",
  "The confidence in your response is impressive; the logical continuity is less impressive.",
  "You have provided an interpretation while presenting it as though no alternative interpretation could exist.",
  "The argument becomes less convincing the closer its assumptions are inspected.",
  "Your phrasing attempts to obscure a gap that should instead be addressed directly.",
  "The statement is forceful, but forcefulness does not establish truth.",
  "You have demonstrated fluency with words, but not necessarily mastery of the proposition being discussed.",
  "Your conclusion depends upon several assumptions that you have not actually defended.",
  "The response sounds definitive because of its tone, not because of the strength of its evidence.",
  "You have mistaken elaboration for explanation.",
  "The argument could be shorter and stronger if unnecessary rhetorical decoration were removed.",
  "Your claim remains vulnerable because the reasoning connecting premise to conclusion is incomplete.",
  "You have supplied an answer, but not yet a sufficient justification for that answer.",
  "The vocabulary may distract from the fact that the central premise remains unsupported.",
  "Your statement carries certainty in its tone while carrying uncertainty in its foundation.",
  "You are relying upon repetition where demonstration would be more useful.",
  "The argument is presented as though it were self-evident, yet nothing about it has been adequately established.",
  "Your wording is polished enough to attract attention, but attention is not proof.",
  "There is rhetorical sophistication here, but logical sophistication requires more than sophisticated wording.",
  "You have made the proposition sound important without sufficiently establishing its validity.",
  "The distinction you are attempting to create is not supported by the reasoning you provide.",
  "Your response contains a conclusion, but the path leading to that conclusion remains incomplete.",
  "You appear to be defending a position before adequately defining it.",
  "The argument would be considerably stronger if its assumptions were made explicit.",
  "You have emphasized certainty while leaving the actual evidentiary standard unclear.",
  "Your response demonstrates confidence in the claim, but confidence in a claim is not evidence for it.",
  "The sentence is rhetorically elaborate but logically underdeveloped.",
  "You have expanded the language without resolving the fundamental issue.",
  "Your premise requires justification before your conclusion can reasonably inherit its certainty.",
  "The response sounds authoritative, but authority of tone cannot replace validity of reasoning.",
  "You are presenting an inference as though it were an observation.",
  "The argument has a polished exterior and an unresolved interior.",
  "Your position may be defensible, but the explanation provided does not yet defend it adequately.",
  "The sophistication of the vocabulary does not conceal the simplicity of the unsupported assumption.",
  "You have supplied rhetoric where the discussion requires evidence.",
  "Your response is confident enough to sound final, but not substantiated enough to actually be final.",
  "The conclusion is being treated as a starting point rather than something that must itself be demonstrated.",
  "You have constructed a verbal impression of certainty rather than establishing certainty through reasoning.",
  "The argument needs stronger premises, not stronger adjectives.",
  "Your statement is assertive, but its assertiveness does not increase its factual reliability.",
  "You have presented complexity in expression without equivalent complexity in analysis.",
  "The response would benefit from distinguishing what is demonstrated from what is merely asserted.",
  "You are asking the listener to accept your framing without adequately defending the framing itself.",
  "The rhetoric is polished, but the logical gap remains visible.",
  "Your claim may sound sophisticated, yet sophistication without substantiation remains superficial.",
  "You have offered an elaborate response to a premise that has not been sufficiently established.",
  "The argument's weakness is not hidden by its vocabulary; it is merely surrounded by it.",
  "You speak with certainty where your reasoning establishes considerably less.",
  "The conclusion cannot inherit more certainty than the premises provide.",
  "You have demonstrated verbal confidence, but the actual argument still requires proof.",
  "The sentence is impressive in construction, though considerably less impressive in justification.",
  "Your position becomes less stable once the unsupported assumptions are separated from the conclusion.",
  "You have attempted to substitute presentation for demonstration.",
  "The argument is not strengthened merely because it is expressed with greater complexity.",
  "Your response would be more compelling if its strongest claims were accompanied by equally strong reasons.",
  "You have produced a confident assertion, but confidence is not a substitute for evidence.",
  "The structure of your response suggests certainty that the substance does not yet justify.",
  "Your diction is elevated, but the central reasoning remains unresolved.",
  "You have given the impression of having answered the issue without actually resolving its central premise.",
  "The argument requires examination, not applause for its vocabulary.",
  "Your statement is rhetorically strong but evidentially incomplete.",
  "The language may be sophisticated, but the reasoning must still carry its own weight.",
  "You have made the conclusion sound inevitable without adequately demonstrating its necessity.",
  "The response contains plenty of assertion and insufficient verification.",
  "Your argument would survive more effectively if it relied less on tone and more on substantiation.",
  "You have presented a polished claim whose underlying premise remains exposed.",
  "The wording is confident, but the reasoning still leaves several unanswered questions.",
  "Your response illustrates how eloquence can create an impression of strength without necessarily supplying strength.",
  "The proposition remains unproven regardless of how confidently it is phrased.",
  "You have emphasized the appearance of precision while leaving the actual standard of proof undefined.",
  "Your argument is elaborate enough to sound convincing, but not sufficiently supported to become convincing.",
  "The conclusion is being asserted faster than it is being established.",
  "You have constructed rhetoric around a premise that still requires justification.",
  "The vocabulary deserves less attention than the logical relationship between your premises and conclusion.",
  "You have produced a statement of certainty rather than an argument establishing certainty.",
  "Your reasoning needs reinforcement; additional ornamentation will not provide it.",
  "The response has rhetorical polish, but its evidentiary foundation remains incomplete.",
  "You have made the argument sound stronger instead of actually making the argument stronger.",
  "The distinction between assertion and demonstration appears to be the missing element here.",
  "Your confidence is unmistakable, but your conclusion still depends upon premises you have not sufficiently established.",
  "A sophisticated sentence remains an unsupported sentence when its central claim lacks evidence.",
  "The argument's presentation is considerably more developed than its justification.",
  "You have provided an interpretation with the confidence of a fact, yet those are not interchangeable categories.",
  "The response may sound conclusive, but its reasoning remains open to substantial scrutiny.",
  "You have supplied an impressive amount of language without supplying an equivalent amount of proof.",
  "Your conclusion requires more than rhetorical certainty; it requires demonstrable support.",
  "The argument remains incomplete regardless of how elegantly the sentence is constructed.",
  "You have mistaken the appearance of precision for actual precision.",
  "The response is articulate, but articulation alone cannot establish the truth of its central claim.",
  "Your reasoning would be stronger if every major conclusion were connected to an explicitly defended premise.",
  "The wording creates confidence; the evidence should create conviction.",
  "You have presented a polished surface while leaving the underlying logical structure insufficiently defended.",
  "Your claim is not made more valid by being expressed in more elaborate language.",
  "The response attempts to overwhelm scrutiny with verbosity rather than satisfy scrutiny with evidence.",
  "You have supplied rhetorical force where analytical force is required.",
  "The argument should be evaluated by its reasoning, not by the sophistication of its vocabulary.",
  "Your conclusion remains dependent upon assumptions that have yet to earn acceptance.",
  "You have stated what you believe follows without adequately proving that it actually follows.",
  "The language is confident; the inference is still contestable.",
  "You have made the argument ornate, but ornament cannot substitute for logical necessity.",
  "The response would benefit from separating what you know, what you infer, and what you merely assume.",
  "You have presented certainty as though it were self-generating, when certainty must be supported by reasoning.",
  "The argument has rhetorical presence but insufficient analytical support.",
  "Your claim is expressed with authority, yet the supporting logic has not earned that authority.",
  "You have made a strong statement without establishing a correspondingly strong basis for it.",
  "The presentation is complete; the demonstration is not.",
  "Your argument requires evidence at precisely the point where your response provides assertion.",
  "You have constructed a conclusion whose confidence exceeds the support beneath it.",
  "The response sounds intellectually dense, but density of language is not density of reasoning.",
  "Your position would be clearer if the rhetoric were reduced and the premises were made explicit.",
  "You have attempted to make the wording carry the burden that should be carried by evidence.",
  "The claim remains unsupported even when wrapped in sophisticated terminology.",
  "Your sentence has complexity, but complexity alone does not create validity.",
  "The argument's strongest feature is its presentation; its weakest point is the missing justification.",
  "You have stated the conclusion confidently, but confidence cannot establish causation, truth, or necessity.",
  "Your response would be considerably more durable if its reasoning were as carefully constructed as its diction.",
  "The proposition deserves proof before it receives certainty.",
  "You have supplied enough rhetoric to sound decisive, but not enough reasoning to make the decision logically unavoidable.",
  "The distinction between sounding correct and being demonstrably correct remains unresolved in your response.",
  "Your claim may be plausible, but plausibility is not equivalent to proof.",
  "The argument requires stronger support rather than stronger wording.",
  "You have presented a conclusion whose premises remain insufficiently defended.",
  "The vocabulary is elevated; the evidentiary burden remains exactly where it was.",
  "Your response illustrates that verbosity can increase length without increasing validity.",
  "The argument has been dressed impressively, but its foundation still requires examination."
];

// ==============================
// RANDOM REPLY
// ==============================

function randomReply() {
  const reply =
    replies[Math.floor(Math.random() * replies.length)];

  return (
    reply +
    "\n\n—𝐒𝐋𝐄𝐄𝐏𝐈𝐍𝟒𝐋𝐆𝐍𝐆💤💫"
  );
}

// ==============================
// NORMALIZE UID
// ==============================

function normalizeID(id) {
  if (id === undefined || id === null) return "";

  return String(id)
    .replace(/[^\d]/g, "")
    .trim();
}

// ==============================
// COMMAND CONFIG
// ==============================

module.exports.config = {
  name: "sleepin",
  version: "4.0.0",
  hasPermission: 0,
  credits: "Sinzu",
  description: "Targeted UID autoreply system.",
  commandCategory: "admin",
  usages:
    "/sleepin on [uid] | /sleepin off [uid] | /sleepin status [uid]",
  cooldowns: 3
};

// ==============================
// COMMAND
// ==============================

module.exports.run = async function ({
  api,
  event,
  args
}) {
  try {
    const senderID = normalizeID(
      event.senderID || event.userID
    );

    // ADMIN ONLY
    if (senderID !== normalizeID(ADMIN_ID)) {
      return;
    }

    const action = String(args[0] || "")
      .toLowerCase()
      .trim();

    const targetUID = normalizeID(args[1]);

    // ==========================
    // /sleepin on [UID]
    // ==========================

    if (action === "on") {
      if (!targetUID) {
        return api.sendMessage(
          "Usage: /sleepin on [target uid]",
          event.threadID
        );
      }

      sleepinData[targetUID] = {
        enabled: true,
        enabledAt: Date.now()
      };

      saveData(sleepinData);

      return api.sendMessage(
        `𝐒𝐋𝐄𝐄𝐏𝐈𝐍𝟒𝐋𝐆𝐍𝐆💤💫\n\nAutoreply: ON\nTarget UID: ${targetUID}`,
        event.threadID
      );
    }

    // ==========================
    // /sleepin off [UID]
    // ==========================

    if (action === "off") {
      if (!targetUID) {
        return api.sendMessage(
          "Usage: /sleepin off [target uid]",
          event.threadID
        );
      }

      if (sleepinData[targetUID]) {
        delete sleepinData[targetUID];
        saveData(sleepinData);
      }

      cooldowns.delete(targetUID);

      return api.sendMessage(
        `𝐒𝐋𝐄𝐄𝐏𝐈𝐍𝟒𝐋𝐆𝐍𝐆💤💫\n\nAutoreply: OFF\nTarget UID: ${targetUID}`,
        event.threadID
      );
    }

    // ==========================
    // /sleepin status [UID]
    // ==========================

    if (action === "status") {
      if (!targetUID) {
        return api.sendMessage(
          "Usage: /sleepin status [target uid]",
          event.threadID
        );
      }

      const status =
        sleepinData[targetUID]?.enabled === true
          ? "ON"
          : "OFF";

      return api.sendMessage(
        `𝐒𝐋𝐄𝐄𝐏𝐈𝐍𝟒𝐋𝐆𝐍𝐆💤💫\n\nTarget UID: ${targetUID}\nStatus: ${status}`,
        event.threadID
      );
    }

    // Walang ibang command response.
    // Hindi dito magmumula ang "Invalid command..."
    return;

  } catch (err) {
    // Silent error
    return;
  }
};

// ==============================
// AUTOREPLY EVENT
// ==============================

module.exports.handleEvent = async function ({
  api,
  event
}) {
  try {
    const senderID = normalizeID(
      event.senderID || event.userID
    );

    // Walang sender
    if (!senderID) return;

    // Huwag replyan ang admin/bot
    if (senderID === normalizeID(ADMIN_ID)) {
      return;
    }

    // Target lang na naka-ON
    if (
      !sleepinData[senderID] ||
      sleepinData[senderID].enabled !== true
    ) {
      return;
    }

    // ==========================================
    // IMPORTANT:
    // WALANG body check dito.
    //
    // Ibig sabihin kahit:
    // - normal text
    // - emoji
    // - ticker
    // - stickers/events na may senderID
    // - message na nagsisimula sa /
    //
    // ay hindi bina-block ng sleepin.js.
    // ==========================================

    const now = Date.now();

    const lastReply =
      cooldowns.get(senderID) || 0;

    // 5-second cooldown bawat target
    if (
      now - lastReply <
      REPLY_COOLDOWN
    ) {
      return;
    }

    cooldowns.set(senderID, now);

    const reply = randomReply();

    await api.sendMessage(
      reply,
      event.threadID
    );

  } catch (err) {
    // SILENT
    // Walang error message na ipapadala.
    return;
  }
};
