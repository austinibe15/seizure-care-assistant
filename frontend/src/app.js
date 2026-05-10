const chat = document.getElementById("chat");
const typing = document.getElementById("typing");
const voiceStatus = document.getElementById("voiceStatus");
const walletDisplay = document.getElementById("walletAddress");

let seizureCount = 0;
let medCount = 0;
let symptomCount = 0;
let alertCount = 0;
let riskScore = 0;
let walletAddress = null; // stores connected wallet

/* CHART */
const chartLabels = [];
const seizureData = [];
const riskData = [];
const ctx = document.getElementById("healthChart");
const healthChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: chartLabels,
    datasets: [
      { label: "Seizures", data: seizureData, borderWidth: 2 },
      { label: "Risk Score", data: riskData, borderWidth: 2 }
    ]
  },
  options: { responsive: true, maintainAspectRatio: false }
});

/* DASHBOARD */
function updateDashboard() {
  document.getElementById("seizureCount").innerText = seizureCount;
  document.getElementById("medCount").innerText = medCount;
  document.getElementById("symptomCount").innerText = symptomCount;
  document.getElementById("alertCount").innerText = alertCount;
  document.getElementById("riskScore").innerText = riskScore;
}

/* CHART */
function updateChart() {
  chartLabels.push(`Log ${chartLabels.length + 1}`);
  seizureData.push(seizureCount);
  riskData.push(riskScore);
  healthChart.update();
}

/* CHAT */
function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = "bubble " + type;
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

/* AI TYPING */
function showTyping(show) {
  typing.style.display = show ? "block" : "none";
}

/* GPS */
function generateFakeGPS() {
  const lat = (6.5244 + Math.random() * 0.01).toFixed(5);
  const lng = (3.3792 + Math.random() * 0.01).toFixed(5);
  return `${lat}, ${lng}`;
}

/* SEVERITY ANALYSIS */
function analyzeSeverity(message) {
  const msg = message.toLowerCase();
  let severity = "Low";
  let reason = "Routine medical activity detected.";
  let icon = "🟢";

  if (msg.includes("seizure") || msg.includes("collapsed") || msg.includes("unconscious")) {
    severity = "Critical";
    reason = "Neurological emergency indicators detected.";
    icon = "🔴";
    riskScore += 30;
    alertCount++;
    document.body.classList.add("alert-mode");
    document.getElementById("emergencyBox").style.display = "block";
    document.getElementById("liveStatus").innerText = "Critical";
    const gps = generateFakeGPS();
    document.getElementById("gpsText").innerText = `Live Location: ${gps}`;
    addMessage(`🚑 Emergency Response Activated\n\n📍 GPS:\n${gps}\n\n📡 Caregiver Alert Sent\n\n🏥 Nearest Hospital:\nLagos Emergency Center`, "system");

    setTimeout(() => {
      document.body.classList.remove("alert-mode");
      document.getElementById("emergencyBox").style.display = "none";
    }, 5000);
  } else if (msg.includes("dizzy") || msg.includes("weak")) {
    severity = "Moderate";
    reason = "Symptoms require monitoring.";
    icon = "🟠";
    riskScore += 15;
  } else if (msg.includes("medication")) {
    severity = "Low";
    reason = "Medication adherence logged.";
    icon = "🟢";
    riskScore += 5;
  }

  return { severity, reason, icon };
}

/* SEND MESSAGE & AI */
async function sendMessage(text) {
  if (!text) return;

  addMessage(text, "user");
  showTyping(true);

  const msg = text.toLowerCase();
  if (msg.includes("seizure")) seizureCount++;
  if (msg.includes("medication")) medCount++;
  if (msg.includes("dizzy") || msg.includes("weak")) symptomCount++;

  const analysis = analyzeSeverity(text);
  updateDashboard();
  updateChart();

  try {
    const res = await fetch("http://localhost:4000/agent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text })
    });
    const data = await res.json();
    showTyping(false);

    addMessage(`📦 Event Logged\n\nCID:\n${data.cid}\n\nTX:\n${data.txHash}\n\n${analysis.icon} Severity:\n${analysis.severity}\n\n🧠 AI Insight:\n${analysis.reason}\n\n📈 Risk Score:\n${riskScore}`, "bot");

    // Optional: send on-chain transaction if wallet connected
    if (walletAddress) {
      await sendOnChainLog(data.cid, data.txHash);
    }

  } catch {
    showTyping(false);
    addMessage(`⚠️ Offline AI Mode\n\n${analysis.icon} Severity:\n${analysis.severity}\n\n🧠 AI Insight:\n${analysis.reason}\n\n📈 Risk Score:\n${riskScore}`, "bot");
  }
}

/* SEND BUTTON */
window.send = function () {
  const input = document.getElementById("msg");
  const value = input.value;
  input.value = "";
  sendMessage(value);
};

/* QUICK ACTIONS WITH SIREN */
window.quickSend = function(text) {
  // Play siren if seizure
  if (text.toLowerCase().includes("seizure")) {
    const siren = new Audio("./assets/siren.wav");
    siren.volume = 1;
    siren.play();
    setTimeout(() => { siren.pause(); siren.currentTime = 0; }, 5000);
  }

  sendMessage(text);
};

/* ENTER KEY */
document.getElementById("msg").addEventListener("keypress", function(e) {
  if (e.key === "Enter") send();
});

/* VOICE */
window.startVoice = function() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) { alert("Voice recognition not supported."); return; }
  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();
  voiceStatus.style.display = "block";

  recognition.onresult = function(e) {
    const transcript = e.results[0][0].transcript;
    document.getElementById("msg").value = transcript;
    voiceStatus.style.display = "none";
    sendMessage(transcript);
  };

  recognition.onerror = function() { voiceStatus.style.display = "none"; };
};

/* METAMASK WALLET CONNECTION */
async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      walletAddress = accounts[0];
      walletDisplay.innerText = `Wallet: ${walletAddress}`;
      console.log("Connected wallet:", walletAddress);
    } catch (err) {
      alert("Wallet connection rejected!");
      console.error(err);
    }
  } else {
    alert("MetaMask not found! Install it first.");
  }
}

/* OPTIONAL: SEND LOG TO MANTLE TESTNET */
async function sendOnChainLog(cid, txHash) {
  if (!walletAddress) return;

  // Example using ethers.js
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contractAddress = "0xYourMantleTestnetContract"; // replace with your deployed contract
    const abi = [
      "function logEvent(string cid, string txHash) public"
    ];
    const contract = new ethers.Contract(contractAddress, abi, signer);

    const tx = await contract.logEvent(cid, txHash);
    console.log("On-chain transaction sent:", tx.hash);
  } catch (err) {
    console.error("Error sending on-chain log:", err);
  }
}