
const htmlWebpack    = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin     = require("copy-webpack-plugin");

const cssMinimizer   = require("css-minimizer-webpack-plugin");
const Terser         = require("terser-webpack-plugin");

module.exports = {
    mode: 'production',
    
    output:{
        clean:true,
        filename:'main.[contenthash].js'
    },

    module:{
        rules:[
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources:false
                }
            },
            {
                test:/\.css$/,
                exclude: /estilo.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test:/estilo.css$/,
                use: [MiniCssExtract.loader, 'css-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
         
        ]
    },

    optimization:{
            minimize:true,
            minimizer:[
                new cssMinimizer(),
                new Terser(),
            ]
    },

    plugins:[
      new htmlWebpack({
        template:'src/index.html',
      }),
      new MiniCssExtract({
        filename: 'estilo.[fullhash].css',
        ignoreOrder:false,
      }),
      new CopyPlugin({
        patterns:[
            {from: 'src/assets/', to: 'assets/'}
        ]
      })
    ]
}