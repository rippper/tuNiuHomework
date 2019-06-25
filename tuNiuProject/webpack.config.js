const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode:'development',
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'.dist'),
        publicPath:'dist',
        filename:'bundle.js',
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["vue-style-loader","css-loader"]
            },
            {
                test:/\.vue$/,
                loader:"vue-loader"
            },
            {
                test:/\.styl$/,
                use:["style-loader","css-loader","stylus=loader"]
            },
            {
                test:/\.(jpg|png|svg)$/,
                use:["file-loader"]
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    }
}