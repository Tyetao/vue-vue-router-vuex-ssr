const docsLoader = require.resolve('./docs-loader')

module.exports = (isDev) => {
  return {
    preserveWhitepace: true, // 把模板html节点的末尾空格去掉
    extractCSS: !isDev, // 把vue单文件里的css提取出来
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    },
    // postcss,
    hotReload: false,
    loaders: {
      'docs': docsLoader
    }
  }
}
