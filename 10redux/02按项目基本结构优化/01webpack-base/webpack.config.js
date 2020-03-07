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
    mode: 'development',
    // webpack 4 中约定大于配置，webpack默认只能处理js文件，所以需要配置第三方loader，加载图片 .vue等其他文件
    plugins: [
        htmlPlugin
    ],
    // 所有第三方模块的配置规则都放在module下
    module: {
        rules: [
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
            // 为普通css样式表，追加modules启用模块化
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.scss$/, use: ['style-loader', 'css-loader?modules', 'sass-loader']}, // scss文件loader
            { test: /\.jpg|png|gif|bmp$/, use: 'url-loader'},
            { test: /\.ttf|woff|woff2|eot|svg$/, use: 'url-loader'},
        ]
    },
    // 使用import时避免写后缀名 alias属性用于定义项目目录别名
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css'], // 表示，这几个文件的后缀名，可以省略不写
        alias: {
            '@': path.join(__dirname, './src')
        }
    }

}