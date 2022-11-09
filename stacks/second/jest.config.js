const baseConfig = require('@serverless-monorepo-template/config/jest.config.js');

module.exports = {
  ...baseConfig.config,
};

process.env = Object.assign(process.env, {
  ...baseConfig.processEnv,
});
