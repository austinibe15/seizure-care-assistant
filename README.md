# 🧠 NeuroCare AI
### AI-Powered Emergency Monitoring & On-Chain Health Event Logging

NeuroCare AI is a futuristic AI healthcare assistant built for hackathon innovation challenges focused on AI + Web3 integration.

The platform combines:

- 🎤 Voice-based medical event logging
- 🤖 AI-powered health severity analysis
- 🚨 Emergency alert simulation with siren activation
- 📍 Live GPS emergency tracking
- 📊 Real-time analytics dashboard
- 🔗 Blockchain-ready health event logging
- 👛 MetaMask wallet connectivity
- 🌐 Mantle Testnet deployment support
- 📦 IPFS / CID event simulation
- 💬 Real-time AI chat interface
- 📱 Futuristic mobile-first UI

---

# 🚀 Live Vision

NeuroCare AI demonstrates how AI agents and blockchain infrastructure can improve emergency healthcare response systems.

The goal is to create:

> A decentralized AI-powered emergency healthcare companion capable of logging medical events, analyzing severity, triggering emergency workflows, and securely storing health events on-chain.

---

# 🏆 Hackathon Track Alignment

This project aligns strongly with:

## ✅ Agentic Economy Track
### RealClaw Real-Life Expansion

Use Cases:
- Health data management
- AI-driven emergency response
- On-chain healthcare logging
- Real-world AI assistant systems

---

# 🧩 Core Features

## 🎤 Voice Logging
Users can describe medical conditions using speech recognition.

Example:
- “I had a seizure and collapsed”
- “I feel dizzy and weak”

Technology:
- Web Speech API

---

## 🤖 AI Health Insights
The system analyzes user medical logs and classifies severity levels.

Severity Types:
- 🟢 Low
- 🟠 Moderate
- 🔴 Critical

AI performs:
- Symptom interpretation
- Risk scoring
- Emergency classification

---

## 🚨 Emergency Alert Simulation
When seizure-related keywords are detected:
- Emergency siren activates
- UI enters alert mode
- Caregiver alert simulation begins
- GPS coordinates are generated

---

## 📍 Live GPS Tracking
The platform simulates live patient location tracking during emergencies.

Example:
- Lagos emergency coordinates
- Real-time emergency response workflow

---

## 📊 Analytics Dashboard
Real-time dashboard updates:
- Seizure count
- Medication logs
- Symptom tracking
- Alert tracking
- Dynamic risk score

Includes:
- Live Chart.js visualization

---

## 🔗 Blockchain Event Logging
Health events can be connected to:
- Mantle Testnet
- Smart contracts
- MetaMask wallet interactions

Simulated:
- Transaction hashes
- IPFS CID references

---

## 👛 MetaMask Wallet Integration
Users can connect wallets directly from the UI.

Capabilities:
- Wallet authentication
- On-chain interaction
- Future transaction signing

---

## 💬 AI Chat Experience
A futuristic medical assistant chat interface enables:
- Conversational event logging
- Real-time responses
- AI workflow simulation

---

# 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, JavaScript |
| Charts | Chart.js |
| AI Backend | Node.js + Express |
| AI SDK | Google Generative AI |
| Blockchain | Mantle Testnet |
| Wallet | MetaMask |
| Storage Simulation | IPFS CID simulation |
| Voice Recognition | Web Speech API |
| Deployment | Netlify |
| Version Control | Git + GitHub |

---

# 🏗️ Project Architecture

```text
Frontend UI
   ↓
Voice / Text Input
   ↓
AI Severity Analysis
   ↓
Dashboard + Emergency Workflow
   ↓
Blockchain Event Logging
   ↓
Mantle Testnet + MetaMask
```

---

# ⚡ How I Built This Project

The project started as a simple emergency healthcare logging interface.

The vision evolved into:

> An AI-powered decentralized healthcare monitoring system with real-time emergency workflows.

Development stages included:

1. Building the futuristic mobile UI
2. Creating the analytics dashboard
3. Adding voice recognition
4. Integrating AI health analysis
5. Adding emergency workflows
6. Connecting MetaMask wallet
7. Simulating blockchain logging
8. Preparing Mantle deployment compatibility
9. Optimizing for hackathon demo presentation

---

# 🧠 AI Workflow Logic

The AI system performs keyword-based severity analysis.

Example Logic:

```js
if (message.includes("seizure")) {
   severity = "Critical";
}
```

Triggers:
- Emergency siren
- Risk score increase
- GPS generation
- Alert workflow
- Emergency dashboard updates

---

# 🔐 Security Considerations

## ✅ Environment Variables

Sensitive API keys are protected using `.env`.

Example:

```env
GEMINI_API_KEY=your_api_key
```

---

## ✅ `.gitignore`

The following are excluded from GitHub:

```gitignore
node_modules
.env
dist
```

---

## ✅ Wallet Security

The app:
- Never stores private keys
- Uses MetaMask authentication
- Only requests wallet connection permission

---

## ✅ Frontend Safety

The frontend:
- Contains no embedded secret keys
- Uses public wallet-based authentication only

---

# ⚔️ Challenges Faced & Solutions

## 1️⃣ Gemini API Model Errors

### Problem
The Gemini model versions initially used returned:

```text
404 Model Not Found
```

### Solution
Updated the AI model configuration and verified supported model endpoints.

---

## 2️⃣ NPM Installation & Cache Issues

### Problem
Package installations failed due to:
- corrupted npm cache
- dependency conflicts

### Solution

Used:

```bash
npm cache clean --force
npm install --legacy-peer-deps
```

Also isolated backend dependencies properly.

---

## 3️⃣ Free Tier API Quota Errors

### Problem

```text
429 Too Many Requests
```

### Solution
Implemented:
- Offline AI fallback mode
- Graceful error handling
- Simulated AI responses during demo

This ensured the application remained demo-ready even under API limits.

---

## 4️⃣ UI Scaling Problems

### Problem
The UI was too zoomed in for video presentation.

### Solution
Optimized:
- Phone frame scaling
- Scroll flow
- Dashboard sizing
- Chat sizing

Result:
A cleaner cinematic hackathon demo experience.

---

## 5️⃣ Emergency Workflow Realism

### Problem
Needed a stronger emotional impact for judges.

### Solution
Added:
- Emergency flashing mode
- Siren sound effects
- Live GPS simulation
- Critical response UI animations

---

# 🌐 Mantle Testnet Setup

## Add Mantle Network to MetaMask

### Network Details

```text
Network Name: Mantle Testnet
RPC URL: https://rpc.testnet.mantle.xyz
Chain ID: 5001
Currency Symbol: MNT
Block Explorer: https://explorer.testnet.mantle.xyz
```

---

# 🧪 Running Locally

## 1️⃣ Clone Repo

```bash
git clone https://github.com/YOUR_USERNAME/neurocare-ai.git
```

---

## 2️⃣ Install Backend

```bash
cd backend
npm install
```

---

## 3️⃣ Create `.env`

```env
GEMINI_API_KEY=your_api_key
```

---

## 4️⃣ Start Backend

```bash
node index.js
```

---

## 5️⃣ Start Frontend

Open:

```text
index.html
```

Or use:
- VSCode Live Server

---

# 🚀 Netlify Deployment

## Frontend Deployment

1. Push project to GitHub
2. Login to Netlify
3. Import GitHub repository
4. Deploy site

Result:
- Public hackathon demo URL

---

# 🎬 Demo Walkthrough

The demo video showcases:

✅ MetaMask wallet connection  
✅ Voice logging  
✅ AI severity analysis  
✅ Emergency siren activation  
✅ Live dashboard updates  
✅ Blockchain transaction simulation  
✅ Analytics chart updates  
✅ Real-time healthcare workflow  

---

# 📦 Future Improvements

Planned upgrades:
- Real Mantle smart contracts
- Real IPFS uploads
- Live hospital API integration
- Caregiver SMS notifications
- AI predictive seizure analysis
- Wearable device integration
- Real decentralized medical storage

---



# 🤝 Open Source

This project is open-source and built for educational and hackathon innovation purposes.

---

# 👨‍💻 Author

### Ibe Ezenwa Augustine
### Contact email: austinibe15@gmail.com

AI × Web3 Builder  
Healthcare Innovation Enthusiast  
Hackathon Developer

---


# 💡 Final Vision

NeuroCare AI demonstrates the future intersection of:

- Artificial Intelligence
- Emergency healthcare systems
- Decentralized infrastructure
- Real-time agentic workflows
- Human-centered AI interfaces

> Building intelligent healthcare systems that can save lives in real time.
