module.exports = {
  root: true,
  extends: ['@antfu/eslint-config'],
  rules: {
    'no-console': 'off',
    'vue/no-mutating-props': 'off',
    'vue/no-useless-template-attributes': 'off',
    'vue/use-v-on-exact': 'off',
  },
}
