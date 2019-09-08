module.exports = (api) => {
  api.cache(true);

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
  ];

  const plugins = [
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-class-properties',
  ];

  return {
    presets,
    plugins,
  };
}
