var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var dir_js = path.resolve(__dirname, 'src');
var dir_dist = path.resolve(__dirname, 'dist');

module.exports = {
    entry: path.resolve(dir_js, 'kova.js'),
    output: {
        filename: 'kova.js',
        path: dir_dist
    },
    module: {
        loaders: [
            {
                test: dir_js,
                exclude: /node_modules/,
                loader: ['babel-loader', 'eslint-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'kova.js'
        })
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: dir_dist,
    },
};