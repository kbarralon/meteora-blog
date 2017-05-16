const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const serverConfig = {
    entry: './src/app.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.node.js'
    },
    module: {
        exprContextCritical: false,
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    resolve: {
        alias: {
            'handlebars' : 'handlebars/dist/handlebars.js'
        }
    }
};

const clientConfig = {
    entry: ['./public/assets/scss/app.scss', './public/assets/js/app.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        exprContextCritical: false,
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }],
        rules: [
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'app.bundle.css',
            allChunks: true,
        }),
        new OptimizeCssAssetsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            comments: false
        })
    ],
};

module.exports = [ serverConfig, clientConfig ];