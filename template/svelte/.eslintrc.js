module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser', // an eslint parser allow eslint to lint typescript source code
  parserOptions: {
    sourceType: 'module'
  },
  // --fix 设置是否强制使用分号作为语句的结尾。
  // 要求使用分号作为语句的结尾
  //  "off" or 0 - 关闭规则
  // "warn" or 1 - 将规则视为一个警告（不会影响退出码）
  // "error" or 2 - 将规则视为一个错误 (退出码为1)
  rules: {
    semi: [
      "error",
      "never",
    ],
  },
}
