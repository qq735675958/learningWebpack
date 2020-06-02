const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** const CleanWebpackPlugin = require('clean-webpack-plugin');
 *  以上方法为老方法引入 会报错
 */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: 'development',
    // mode: 'production',
    entry: './src/index.js',
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
            filename: 'index.html',
            title: 'development',
            hash: true
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],

        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        progress: true, //开启进度条
        port: 9000
    }
}