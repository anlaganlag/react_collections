const path = require('path')
const HMTLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:"./src/index.ts",

    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js",

    },


    module:{
        rules:[
            {
                test:/\.ts$/,
                use:'ts-loader',

                exclude:/node-modules/,
            }
        ]
    },

    plugins:[
        new HMTLWebpackPlugin(
            {
                template:"./src/index.html"
            }
        ),
    ]



}