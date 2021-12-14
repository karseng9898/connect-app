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
          '@config': './src/config',
          '@forms': './src/forms',
          '@modules': './src/modules',
          '@src': './src',
          '@customTypes': './src/types',
          '@store': './src/store',
          '@styles': './src/styles',
          '@navigations': './src/navigations',
          '@utils': './src/utils',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
      },
    ],
  ],
};
