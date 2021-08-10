module.exports = {
  plugins: [
    // 前缀追加
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
    // 单位适配 还需要在html文件里面计算根元素值
    require('postcss-pxtransform')({
      platform: 'h5',
      designWidth: 750,
    }),
    require('postcss-flexbugs-fixes'),
  ],
}
