<<<<<<< HEAD
# Sample Hardhat 3 Beta Project (`node:test` and `viem`)

This project showcases a Hardhat 3 Beta project using the native Node.js test runner (`node:test`) and the `viem` library for Ethereum interactions.

To learn more about the Hardhat 3 Beta, please visit the [Getting Started guide](https://hardhat.org/docs/getting-started#getting-started-with-hardhat-3). To share your feedback, join our [Hardhat 3 Beta](https://hardhat.org/hardhat3-beta-telegram-group) Telegram group or [open an issue](https://github.com/NomicFoundation/hardhat/issues/new) in our GitHub issue tracker.

## Project Overview

This example project includes:

- A simple Hardhat configuration file.
- Foundry-compatible Solidity unit tests.
- TypeScript integration tests using [`node:test`](nodejs.org/api/test.html), the new Node.js native test runner, and [`viem`](https://viem.sh/).
- Examples demonstrating how to connect to different types of networks, including locally simulating OP mainnet.

## Usage

### Running Tests

To run all the tests in the project, execute the following command:

```shell
npx hardhat test
```

You can also selectively run the Solidity or `node:test` tests:

```shell
npx hardhat test solidity
npx hardhat test nodejs
```

### Make a deployment to Sepolia

This project includes an example Ignition module to deploy the contract. You can deploy this module to a locally simulated chain or to Sepolia.

To run the deployment to a local chain:

```shell
npx hardhat ignition deploy ignition/modules/Counter.ts
```

To run the deployment to Sepolia, you need an account with funds to send the transaction. The provided Hardhat configuration includes a Configuration Variable called `SEPOLIA_PRIVATE_KEY`, which you can use to set the private key of the account you want to use.

You can set the `SEPOLIA_PRIVATE_KEY` variable using the `hardhat-keystore` plugin or by setting it as an environment variable.

To set the `SEPOLIA_PRIVATE_KEY` config variable using `hardhat-keystore`:

```shell
npx hardhat keystore set SEPOLIA_PRIVATE_KEY
```

After setting the variable, you can run the deployment with the Sepolia network:

```shell
npx hardhat ignition deploy --network sepolia ignition/modules/Counter.ts
```
=======
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






>>>>>>> 25bf323b117029f38ab70a85dd74ee873d6f90a2
