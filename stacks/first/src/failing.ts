import logger from '@serverless-monorepo-template/common/src/logger';

export const handler = async (event: InputEvent): Promise<boolean> => {
  logger.debug('Input event', { event });
  try {
    check();
    return false;
  } catch (err) {
    logger.error('Lambda failed', {
      event,
      err,
    });
    throw err;
  }
};

const check = () => {
  throw new Error('Something went wrong!');
};

type InputEvent = {
  text: string;
};
