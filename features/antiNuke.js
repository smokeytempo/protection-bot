const logger = require('../utils/logger');
module.exports = (auditLogEntry, client) => {
  const config = client.config.antiNuke;
  if (auditLogEntry.action === 'CHANNEL_DELETE' && auditLogEntry.count >= config.channelDeletionThreshold) {
    const executor = auditLogEntry.executor;
    executor.ban({ reason: 'Nuke detected' }).catch(() => {});
    logger(client, auditLogEntry.guild, 'Anti-Nuke Triggered', `User ${executor.tag} banned for mass channel deletion.`, 'DARK_PURPLE');
  }
};
