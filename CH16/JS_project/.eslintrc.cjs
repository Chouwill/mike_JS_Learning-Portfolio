module.exports = {
  env: {
    browser: true,
    es2024: true,
    commonjs: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "no-promise-executor-return": "off",
    "no-plusplus": "off",
    "no-loop-func": "off",
    "array-callback-return": "error",
    "object-curly-newline": "off",
    "max-len": ["error", { code: 140 }],
    quotes: ["error", "double"],
    "arrow-body-style": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "implicit-arrow-linebreak": "off",
    "no-unused-vars": "off",
  },
};
