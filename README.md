NeuroCare AI – Emergency Monitoring & AI Health Insights

NeuroCare AI is a real-time health monitoring dashboard that leverages AI to track seizure events, medication adherence, and symptoms. Integrated with blockchain (Mantle Testnet) and MetaMask, the platform demonstrates AI × Web3 capabilities for hackathons and RWA/Agentic tracks.

Project Overview
NeuroCare AI is designed for hackathon submission, featuring:

Real-time AI health insights – Automatically analyzes messages and symptoms.

Voice logging – Speak events instead of typing.

Dashboard & Analytics – Tracks seizures, symptoms, medication, alerts, and risk scores.

Emergency Simulation – Siren and alerts on critical events.

NeuroCare AI – Emergency Monitoring & AI Health Insights

NeuroCare AI is a real-time health monitoring dashboard that leverages AI to track seizure events, medication adherence, and symptoms. Integrated with blockchain (Mantle Testnet) and MetaMask, the platform demonstrates AI × Web3 capabilities for hackathons and RWA/Agentic tracks.

Project Overview
NeuroCare AI is designed for hackathon submission, featuring:

Real-time AI health insights – Automatically analyzes messages and symptoms.

Voice logging – Speak events instead of typing.

Dashboard & Analytics – Tracks seizures, symptoms, medication, alerts, and risk scores.

Emergency Simulation – Siren and alerts on critical events.
Blockchain/IPFS Simulation – Stores event CID & transaction hash.

Chart Trends – Seizure frequency and risk score trends over time.

Hackathon-friendly UI – Phone-like layout with zoom for recording walkthroughs.

/frontend
  index.html         # Main UI page
  style.css          # Styling with responsive phone-frame and dashboard
  app.js             # Logic for AI, voice, dashboard, wallet & siren
  /assets
    siren.wav        # Emergency sound
/backend
  index.js           # Node/Express server for AI simulation
  services/
    ai.js            # Gemini AI integration
  package.json
/contracts
  EventLogger.sol    # Sample Mantle Testnet contract
README.md

Setup & Installation
Backend (AI Simulator)
cd backend
npm install
node index.js
# Runs on http://localhost:4000
The backend provides an endpoint for AI insights and CID/transaction simulation.

Frontend
cd frontend
# Open index.html directly in browser or deploy via Netlify
Ensure MetaMask is installed in your browser.

Test voice logging and quick-send buttons.

Siren will trigger on seizure events.

MetaMask & Mantle Testnet
Install MetaMask: https://metamask.io/

Connect to Mantle Testnet

Get test MNT from Mantle Faucet

Click Connect Wallet in the app.

Trigger events to simulate on-chain logging.






