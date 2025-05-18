import fs from 'fs';
import path from 'path';

/**
 * Loguea el uso del script con timestamp
 * @param {string} user
 */
export function logUsage(user) {
  const logPath = path.resolve('logs/usage.log');
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${user.trim() || 'usuario-anónimo'} ejecutó el CLI\n`;

  fs.appendFileSync(logPath, logEntry, 'utf8');
}