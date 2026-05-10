function parseMessage(message) {
  const lower = message.toLowerCase();

  if (lower.includes("seizure")) {
    return {
      logType: "seizure",
      details: message,
      timestamp: new Date().toISOString(),
    };
  }

  return {
    logType: "medication",
    details: message,
    timestamp: new Date().toISOString(),
  };
}

module.exports = { parseMessage };