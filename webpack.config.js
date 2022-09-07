const htmlWebpack    = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')
const CopyPlugin     = require("copy-webpack-plugin")




module.exports={
    mode: `development`,

    output:{
        clean:true,
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
        ]
    },

    optimization:{},

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