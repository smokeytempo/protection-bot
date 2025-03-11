# Protection Bot - Advanced Discord Security & Moderation

A **state-of-the-art Discord bot** providing **server security and moderation** with powerful anti-features. Protect your Discord community from **raids, spam, phishing, ghost pings, and malicious bots** with real-time monitoring and automated actions. Every action is logged with **professional embeds**, ensuring a sleek and efficient security experience.

![Protection Bot Banner](https://via.placeholder.com/1200x300?text=Protection+Bot)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Commands](#commands)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🔥 Key Features

- **🚨 Anti-Raid Protection:** Detect and block mass joins from suspicious users.
- **🛡️ Anti-Spam System:** Prevent message flooding, automated messages, and bot spam.
- **🔗 Anti-Link & Advertising:** Delete **unauthorized links** and prevent self-promotion.
- **🚫 Anti-Profanity Filter:** Automatically detect and remove **offensive language**.
- **📢 Anti-Mention Spam:** Prevent mass mentions and @everyone/@here abuses.
- **⚡ Anti-Nuke Detection:** Stop mass role deletions and server nukes instantly.
- **👻 Anti-Ghost Ping Logs:** Capture ghost pings for **administrator review**.
- **🤖 Anti-Bot Additions:** Auto-kick unauthorized bots before they cause harm.
- **🔍 Anti-Phishing Scanner:** Delete **suspicious URLs** to prevent scams.
- **♻️ Anti-Duplicate Message Removal:** Ensure chat clarity by removing repeated messages.
- **📜 Advanced Logging System:** Every security action is logged with **aesthetic embeds**.

## 🚀 Installation Guide

### 📥 Clone the Repository

```bash
git clone https://github.com/smokeytempo/protection-bot.git
cd protection-bot
```

### 📦 Install Dependencies

```bash
npm install
```

### 🔧 Configure Environment Variables

Create a `.env` file in the root directory with the following content:

```ini
DISCORD_TOKEN=YOUR_DISCORD_TOKEN
LOG_CHANNEL_ID=YOUR_LOG_CHANNEL_ID
PREFIX=!
```

## ⚙️ Configuration & Customization

Modify settings in `config/config.json`:

- **Anti-Spam:** Adjust message threshold, cooldown duration, and punishment type.
- **Anti-Raid:** Set **join limits** and response actions.
- **Filter Management:** Define **banned words and restricted URLs**.
- **Advanced Security:** Fine-tune anti-nuke, anti-phishing, anti-duplicate message settings.

## 📌 Usage & Commands

### ▶️ Start the Bot

```bash
npm start
```

For development with auto-reloading:

```bash
npm run dev
```

### 🔥 Commands Overview

#### Slash Commands

- `/setup` - Configure **protection settings** (Admin only).
  
  **Example:**
  ```
  /setup antispam threshold: 5 duration: 10 punishment: mute
  ```

- `/ping` - Check bot **latency & response speed**.

#### Prefix Commands

Prefix-based commands (e.g., `!ping`) are also supported.

## 📡 Deployment (Production-Ready)

For 24/7 bot uptime, use **PM2**:

```bash
npm install -g pm2
pm2 start index.js --name "protection-bot"
```

PM2 **ensures automatic restarts** on crashes.

## 💡 Why Choose Protection Bot?

- ✅ **Advanced AI-powered security** with **real-time threat analysis**.
- ✅ **Lightweight & Fast** – Built with [discord.js](https://discord.js.org/) and **Node.js**.
- ✅ **Highly Customizable** – Adjust settings for different server needs.
- ✅ **Seamless Integration** – Works alongside other moderation bots.
- ✅ **Continuous Updates** – Frequent updates for **enhanced security**.

## 🤝 Contributing

Contributions are welcome! Open an **issue or pull request** with your **ideas, improvements, or bug fixes**. Follow **GitHub best practices** and ensure **code quality**.

## 📜 License

This project is licensed under the **MIT License**.

---

Built with ❤️ using [discord.js](https://discord.js.org/) and **Node.js**.

---

### 📢 Stay Updated!

⭐ Star the repo for the **latest updates**! 💬 Join the community & **protect your Discord server today!** 🚀
