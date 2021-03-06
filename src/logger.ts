import { LogLevel } from './types';

/**
 * Logs messages in the console with a corresponding urgency
 *
 * @param level the urgency of the message
 * @param message the message to log in the console
 */
export const log = (level: LogLevel, message: string) => {
  const packageName = '[react-intercom-hook]';

  switch (level) {
    case 'info':
      console.log(`${packageName} ${message}`);
      break;
    case 'warn':
      console.warn(`${packageName} ${message}`);
      break;
    case 'error':
      console.error(`${packageName} ${message}`);
      break;
    case 'critical':
      throw message;
    default:
      console.log(`${packageName} ${message}`);
  }
};
