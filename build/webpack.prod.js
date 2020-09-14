const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const commonConfig = require('./webpack.common');
const entryDir = path.resolve(__dirname,'../utils');
const outputDir = path.resolve(__dirname, '../dist');
const entryUtils = require('./entrys.js');

function getEntry(globPath) {
  const entries = {}
  glob.sync(globPath).forEach(entry => {
    let pathname = path.dirname(entry).split('/').slice(2).join('/')
    entries[pathname] = entry
  })
  return entries
}

const prodConfig = {
    mode:"production",
    // devtool: "cheap-module-source-map",
    module: {
        rules:[
          
            
        ]
    },
    entry: {
      index:path.resolve(entryDir,'index.js'),
      ...entryUtils.entries(),
   },
   output: {
       path: outputDir,
       filename: 'js/[name].js', // 代码打包后的文件名
       chunkFilename: 'js/[name].js' // 代码拆分后的文件名
   },
    optimization: { // 用于实现代码分割
      splitChunks: {
        chunks: 'all'
      }
    },
    plugins: [
      new CleanWebpackPlugin(), // 默认情况下，此插件将删除 webpack output.path目录中的所有文件，以及每次成功重建后所有未使用的 webpack 资产。
    ],
}

module.exports = merge(commonConfig,prodConfig);
