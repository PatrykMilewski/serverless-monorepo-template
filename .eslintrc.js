module.exports = {
  plugins: ['prettier', '@typescript-eslint', 'jest', 'json-format'],
  overrides: [
    {
      files: '*.ts',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.root.json'
      },
      extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended'
      ],
      rules: {
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "no-await-in-loop": "off",
        "import/prefer-default-export": "off",
        "prettier/prettier": "error",
        "@typescript-eslint/require-await": "warn",
        "@typescript-eslint/no-unsafe-assignment": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unsafe-member-access": "warn",
        "prefer-promise-reject-errors": "warn",
        "@typescript-eslint/no-unsafe-call": "warn",
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            "js": "never",
            "ts": "never",
          }
        ]
      },
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.ts', '.json']
          }
        },
      },
    },
    {
      files: '*.json',
      settings: {
        "json/json-with-comments-files": [".vscode/**"],
      },
    },
  ],
  env: {
    jest: true,
    node: true
  },
  root: true,
}
