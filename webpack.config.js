var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                test: /\.css$/, loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(png|jpg)$/, loader: 'url-loader?limit=10000'
            },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /.rt$/,
                exclude: /node_modules/,
                loaders: [
                    "babel-loader?presets[]=es2015",
                    "react-templates-loader?modules=es6"
                ]
            }
        ]
    }
};