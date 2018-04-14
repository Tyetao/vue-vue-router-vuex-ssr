module.exports = {
  //此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  //此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
  parser: 'babel-eslint',
  //此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
  parserOptions: {
    sourceType: 'module'
  },
  //此项指定环境的全局变量，下面的配置指定为浏览器环境
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  // 此项是用来配置标准的js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错
  extends: 'standard',
  // required to lint *.vue files
  // 此项是用来提供插件的，插件名称省略了eslint-plugin-，下面这个配置是用来规范html的
  plugins: [
    'html'
  ],
  "globals": {
    "Vue": true
  },
  // add your custom rules here
  // 下面这些rules是用来设置从插件来的规范代码的规则，使用必须去掉前缀eslint-plugin-
  // 主要有如下的设置规则，可以设置字符串也可以设置数字，两者效果一致
  // "off" -> 0 关闭规则
  // "warn" -> 1 开启警告规则
  //"error" -> 2 开启错误规则
  // 了解了上面这些，下面这些代码相信也看的明白了
  'rules': {
    "semi": [2, "never"], // 禁用末尾的冒号
    "no-new": 0,
    "no-unused-vars": 2, // 禁止出现未使用过的变量
    "comma-dangle": 2, // 要求或禁止末尾逗号
    "require-jsdoc": 0, // 要求使用 JSDoc 注释
    "arrow-parens": 2, // 要求箭头函数的参数使用圆括号
    "no-trailing-spaces": 2, // 禁用行尾空格
    "space-before-function-paren": 0, // 强制在 function的左括号之前使用一致的空格
    "key-spacing": 2, // 强制在对象字面量的属性中键和值之间使用一致的间距
    "quotes": [2, "single"], // 强制使用一致的反勾号、双引号或单引号
    "max-len": 0, // 强制一行的最大长度
    "one-var": 2, // 强制函数中的变量要么一起声明要么分开声明
    "spaced-comment": 2, // 强制在注释中 // 或 /* 使用一致的空格
    "no-multi-spaces": 2, // 禁止使用多个空格
    "keyword-spacing": 2, // 强制在关键字前后使用一致的空格
    "no-var": 2, // 要求使用 let 或 const 而不是 var
    "comma-style": 2, // 强制使用一致的逗号风格
    "object-curly-spacing": [2, "always"], // 强制在大括号中使用一致的空格
    "block-spacing": 2, // 禁止或强制在代码块中开括号前和闭括号后有空格
    "no-unused-vars": 2, // 禁止出现未使用过的变量
    "curly": 2, // 强制所有控制语句使用一致的括号风格
    "space-before-blocks": 2, // 强制在块之前使用一致的空格
    "brace-style": 2, // 强制在代码块中使用一致的大括号风格
    "camelcase": 2, // 强制使用骆驼拼写法命名约定
    "no-invalid-this": 0, // 禁止 this 关键字出现在类和类对象之外
    "comma-spacing": 2, // 强制在逗号前后使用一致的空格
    "linebreak-style": 2, // 强制使用一致的换行风格
  }
}
