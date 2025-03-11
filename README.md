# Protection Bot

A state-of-the-art Discord bot that provides robust server protection using a suite of anti-features, including anti-raid, anti-spam, anti-link, anti-profanity, anti-advertising, anti-mention spam, anti-nuke, anti-ghost ping detection, anti-bot additions, anti-phishing, and anti-duplicate message measures. Every action is logged with beautifully crafted embeds for a professional and consistent user interface.

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

## Features

- **Anti-Raid Protection:** Detects mass joins and automatically kicks potential raiders.
- **Anti-Spam:** Monitors message frequency, issuing mutes, kicks, or bans as needed.
- **Anti-Link & Anti-Advertising:** Deletes messages containing unauthorized links or promotions.
- **Anti-Profanity:** Filters and removes offensive language.
- **Anti-Mention Spam:** Prevents excessive mentions and deletes spammy messages.
- **Anti-Nuke:** Detects and mitigates rapid, destructive actions like mass channel/role deletions.
- **Anti-Ghost Ping Detection:** Logs ghost pings for administrative review.
- **Anti-Bot Additions:** Kicks unauthorized bots to prevent malicious additions.
- **Anti-Phishing:** Detects suspicious URLs and deletes potential phishing messages.
- **Anti-Duplicate Message:** Removes duplicate messages to maintain chat clarity.
- **Embed-Based Logging:** All actions and bot responses are delivered as stylish, consistent embeds.

## Installation

### Clone the Repository

```bash
git clone https://github.com/smokeytempo/protection-bot.git
cd protection-bot
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory with the following content:

```ini
DISCORD_TOKEN=YOUR_DISCORD_TOKEN
LOG_CHANNEL_ID=YOUR_LOG_CHANNEL_ID
PREFIX=!
```

## Configuration

Customize bot settings in `config/config.json`. You can adjust:

- **Anti-Spam:** Set message threshold, duration, and punishment type.
- **Anti-Raid:** Configure join thresholds, time frame, and punishment.
- **Anti-Profanity & Anti-Advertising:** Customize banned words and URL patterns.
- **Other Protections:** Fine-tune settings for anti-mention spam, anti-nuke, anti-phishing, anti-duplicate messages, etc.

## Usage

### Start the Bot

```bash
npm start
```

For development with live reloading, use:

```bash
npm run dev
```

## Commands

### Slash Commands

- `/setup` - Configure protection settings with subcommands for each feature (requires Administrator privileges).
  
  **Example:**
  ```
  /setup antispam threshold: 5 duration: 10 punishment: mute
  ```

- `/ping` - Check the bot's latency.

### Prefix Commands

You can also use prefix commands (e.g., `!ping`) if preferred.

## Deployment

For production, it is recommended to use a process manager like PM2:

```bash
npm install -g pm2
pm2 start index.js --name "protection-bot"
```

PM2 ensures your bot runs continuously with auto-restart on failure.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements or bug fixes. Follow the standard GitHub flow and ensure your code adheres to the project’s style and best practices.

## License

This project is licensed under the MIT License.

---

Built with ❤️ using [discord.js](https://discord.js.org/) and Node.js.
