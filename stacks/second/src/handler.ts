import logger from '@serverless-monorepo-template/common/src/logger';

export const handler = async (event: InputEvent): Promise<boolean> => {
  logger.debug('Input event', { event });
  try {
    return true;
  } catch (err) {
    logger.error('Lambda failed', {
      event,
      err,
    });
    throw err;
  }
};

type InputEvent = {
  text: string;
};
