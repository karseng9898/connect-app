module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ts', '.tsx', '.jsx', '.js'],
        alias: {
          '@components': './src/components',
          '@constants': './src/constants',
          '@common': './src/components/common',
          '@forms': './src/forms',
          '@screens': './src/screens',
          '@customTypes': './src/types',
          '@styles': './src/styles',
          '@navigations': './src/navigations',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
