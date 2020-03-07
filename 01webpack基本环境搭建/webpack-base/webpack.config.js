const path = require('path');
// 内存托管加速，把指定文件加载到内存中
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'), // 原文件
    filename: 'index.html'//生成在内存中首页的名称
})

// 向外暴露配置项， 复用了node api的
module.exports = {
    // development , production
    mode: 'production',
    // webpack 4 中约定大于配置
    plugins : [
        htmlPlugin
    ]
}