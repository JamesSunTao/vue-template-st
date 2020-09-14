const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const entryDir = path.resolve(__dirname,'../src/pages/');
const outputDir = path.resolve(__dirname, '../dist');

const prodConfig = {
    mode:"development",
    devtool: "cheap-module-eval-source-map",
    devServer: {
        // contentBase:'./dist',
        open:true,
        port:3100,
        hot:true,  //热更新
        hotOnly:true,//热更新
    },
    entry: {
        main:path.resolve(entryDir,'index.js'),
     },
     output: {
         path: outputDir,
         filename: 'static/js/[name]-[hash:6].js',// 代码打包后的文件名
         chunkFilename: 'static/js/[name]-[hash:6].js'// 代码拆分后的文件名
     },
    module: {
        rules:[
          
            
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            // 打包输出HTML
            title: 'webpack 项目模板',
            filename: 'index.html', // 生成后的文件名
            template: path.resolve(entryDir,'index.html'), // 根据此模版生成 HTML 文件
            minify: {
              // 压缩 HTML 文件
              removeComments: true, // 移除 HTML 中的注释
              collapseWhitespace: true, // 删除空白符与换行符
              minifyCSS: true // 压缩内联 css
            }
        }),
    ],
}

module.exports = merge(commonConfig,prodConfig);
