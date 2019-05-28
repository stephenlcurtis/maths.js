var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var dir_js = path.resolve(__dirname, 'src');
var dir_dist = path.resolve(__dirname, 'dist');

module.exports = {
    entry: path.resolve('maths.js'),
    output: {
        filename: 'app.bundle.js',
        path: dir_dist
    },
    module: {
        rules: [
            {
                test: dir_js,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: dir_js,
                exclude: /node_modules/,
                loader: ['eslint-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'maths.js'
        })
    ],
    stats: {
        colors: true
    },
    mode: 'none',
    devtool: 'source-map',
    devServer: {
        contentBase: dir_dist
    },
};