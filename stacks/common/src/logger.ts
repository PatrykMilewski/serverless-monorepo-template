import { LambdaLog } from 'lambda-log';

const lambdaLog = new LambdaLog();

lambdaLog.options.debug = process.env.DEBUG === 'true';

export default {
  debug: (message: string, obj?: Record<string, unknown>): void => {
    lambdaLog.debug(message, { obj });
  },
  info: (message: string, obj?: Record<string, unknown>): void => {
    lambdaLog.info(message, { obj });
  },
  warn: (message: string, obj?: Record<string, unknown>): void => {
    lambdaLog.warn(message, { obj });
  },
  error: (message: string, obj?: Record<string, unknown>): void => {
    lambdaLog.error(message, { obj });
  },
};
