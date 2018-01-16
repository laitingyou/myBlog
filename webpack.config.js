const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const extractSass = new ExtractTextPlugin({
//     filename: "[name].[contenthash].css",
//     disable: process.env.NODE_ENV === "development"
// });
module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
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
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
                // NODE_ENV:'"development"'
            }
        })
       /* extractSass*/
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
                test: /\.css$|\.scss$/,
                    use: [{
                        loader: "style-loader?sourceMap"
                    },{
                        loader: "css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]"
                    }, {
                        loader: "sass-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]"
                    }]
            },
         /*   {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
            },*/
            {
                test: /\.(woff|woff2|svg|eot|ttf)$/,
                use: ['file-loader']
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }
        ]
    },
    devServer: {
        contentBase: "./build",
        inline: true,
        port: 8000
    },
}
