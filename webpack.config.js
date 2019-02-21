const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './scripts/index.jsx',
    output:{
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 81,
        contentBase: './public'
    },
        plugins:[
           new ExtractTextPlugin('app.css')
        ]
    ,
    module: {
        loaders:[{
           test: /.jsx?$/,
           loader: 'babel-loader',
           exclude: /node_modeles/,
           query: {
               presets:['es2015','react'],
               plugins:['transform-object-rest-spread']
           }

        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader","css-loader")
        }]

    }
}