const { spawn } = require("child_process");
const http = require("http");

const PORT = process.env.PORT || 3000;

// ==========================================
// SETTINGS
// ==========================================

const RESTART_DELAY = 5000;
const HEALTH_INTERVAL = 30000;

let botProcess = null;
let restartTimer = null;
let shuttingDown = false;
let startedAt = Date.now();


// ==========================================
// KEEPALIVE HTTP SERVER
// ==========================================

const server = http.createServer((req, res) => {

  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/plain"
    });

    res.end(
      "Sanzu AI is running.\n" +
      `Uptime: ${Math.floor(
        (Date.now() - startedAt) / 1000
      )}s\n`
    );

    return;
  }

  if (req.url === "/health") {

    const alive =
      botProcess &&
      botProcess.exitCode === null;

    res.writeHead(alive ? 200 : 503, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        status: alive ? "ok" : "down",
        pid: botProcess?.pid || null,
        uptime: Math.floor(
          (Date.now() - startedAt) / 1000
        )
      })
    );

    return;
  }

  res.writeHead(404);
  res.end("Not Found");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(
    `[WATCHDOG] HTTP server listening on port ${PORT}`
  );
});


// ==========================================
// START BOT
// ==========================================

function startBot() {

  if (shuttingDown) return;

  console.log(
    "[WATCHDOG] Starting Sanzu AI..."
  );

  botProcess = spawn(
    process.execPath,
    ["auto.js"],
    {
      stdio: "inherit",
      env: {
        ...process.env
      }
    }
  );

  console.log(
    `[WATCHDOG] Bot PID: ${botProcess.pid}`
  );


  // ========================================
  // BOT EXIT
  // ========================================

  botProcess.on("exit", (code, signal) => {

    botProcess = null;

    if (shuttingDown) return;

    console.log(
      `[WATCHDOG] Bot stopped. Code=${code} Signal=${signal}`
    );

    scheduleRestart();
  });


  // ========================================
  // BOT ERROR
  // ========================================

  botProcess.on("error", (error) => {

    console.error(
      "[WATCHDOG] Bot process error:",
      error
    );

    if (!shuttingDown) {
      scheduleRestart();
    }
  });
}


// ==========================================
// RESTART
// ==========================================

function scheduleRestart() {

  if (shuttingDown) return;

  if (restartTimer) return;

  console.log(
    `[WATCHDOG] Restarting in ${RESTART_DELAY / 1000}s...`
  );

  restartTimer = setTimeout(() => {

    restartTimer = null;

    startBot();

  }, RESTART_DELAY);
}


// ==========================================
// WATCHDOG HEALTH CHECK
// ==========================================

setInterval(() => {

  if (shuttingDown) return;

  if (!botProcess) {

    console.log(
      "[WATCHDOG] Bot process is missing."
    );

    scheduleRestart();

    return;
  }

  if (botProcess.exitCode !== null) {

    console.log(
      "[WATCHDOG] Bot process is no longer alive."
    );

    scheduleRestart();

  }

}, HEALTH_INTERVAL);


// ==========================================
// GRACEFUL SHUTDOWN
// ==========================================

function shutdown(signal) {

  if (shuttingDown) return;

  shuttingDown = true;

  console.log(
    `[WATCHDOG] Received ${signal}. Shutting down...`
  );

  if (restartTimer) {
    clearTimeout(restartTimer);
    restartTimer = null;
  }

  if (botProcess) {

    try {
      botProcess.kill("SIGTERM");
    } catch (e) {
      console.error(
        "[WATCHDOG] Failed to stop bot:",
        e.message
      );
    }

  }

  server.close(() => {
    process.exit(0);
  });

  setTimeout(() => {
    process.exit(0);
  }, 10000);
}

process.on(
  "SIGTERM",
  () => shutdown("SIGTERM")
);

process.on(
  "SIGINT",
  () => shutdown("SIGINT")
);


// ==========================================
// START
// ==========================================

startBot();
