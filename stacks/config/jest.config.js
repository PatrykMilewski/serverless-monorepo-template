module.exports.config = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.[t|j]s?$': require.resolve('@sucrase/jest-plugin'),
  },
  maxWorkers: 1,
};

module.exports.processEnv = {
  AWS_REGION: 'eu-west-1',
};
