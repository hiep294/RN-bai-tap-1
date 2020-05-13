module.exports = {
  root: true,
  extends: ['eslint-config-anonymous', 'react-app'],
  rules: {
    camelcase: 'off',
    'new-cap': 'off',
    'no-unused-vars': 'off',
    'no-multi-str': 'off',
    'promise/catch-or-return': 'off',
    'promise/always-return': 'off',
    'promise/no-nesting': 'off',
  },
};
