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
          '@src': './src',
          '@customTypes': './src/types',
          '@store': './src/store',
          '@styles': './src/styles',
          '@navigations': './src/navigations',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
