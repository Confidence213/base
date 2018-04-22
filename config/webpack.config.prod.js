/**
 * Created by Indra on 4/22/2018.
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require('./webpack.config.js');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const prodConfWebpack = merge(common, {
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    // 'postcss-loader',
                    'sass-loader',
                ],
            },
            // {
            //     test: /\.(css|scss)$/,
            //     use: extractSass.extract({
            //         use: [{
            //             loader: "css-loader"
            //         }, {
            //             loader: "sass-loader"
            //         }],
            //         // use style-loader in development
            //         fallback: "style-loader"
            //     })
            // }
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
        new UglifyJsPlugin({
            parallel: 4,
            sourceMap: true,
            test: /\.js($|\?)/i,
            // uglifyOptions: {
            //     ecma: 8,
            //     warnings: false,
            //     parse: {...options},
            //     compress: {...options},
            //     mangle: {
            //         ...options,
            //         properties: {
            //             // mangle property options
            //         }
            //     },
            //     output: {
            //         comments: false,
            //         beautify: false,
            //         ...options
            //     },
            //     toplevel: false,
            //     nameCache: null,
            //     ie8: false,
            //     keep_classnames: undefined,
            //     keep_fnames: false,
            //     safari10: false,
            // }
        })
    ]
});

console.log(prodConfWebpack);

module.exports =  prodConfWebpack;
