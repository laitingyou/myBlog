const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
console.log(path.resolve(__dirname, 'build'))
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            template: './public/index.html',
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react']
                }
            },
            {
                test: /\.css/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    devServer: {
        contentBase: "./public",
        inline: true,
        port: 8098
    },
}
