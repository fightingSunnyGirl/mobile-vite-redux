module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: [
        'Android 4.1',
        'iOS 7.1',
        'Chrome > 31',
        'ff > 31',
        'ie >= 8',
        '> 1%',
      ],
      grid: true,
    }),
    // require("postcss-modules")({
    //   generateScopedName: "[name]__[local]___[hash:base64:5]",
    //   hashPrefix: "prefix",
    // }),
  ],
}