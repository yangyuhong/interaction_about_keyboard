var webpack = require("webpack") ;
var path = require("path") ;
// 将共用React组件合并打包到指定文件common.js中;
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
//     name: 'common',
//     minChunks: 2
// });
module.exports = {
   /* plugins:[
        // commonsPlugin

            optimization:{
                splitChunks:{
                    name:'common',
                    minChunks:2
            }
        }


    ],
*/
    entry: {
        "input_pager" : "./views/demo.jsx",
        "zqdm"        : "./views/zqdm.jsx",
    },
    output: {
        path: __dirname + "/dist/scripts",
        filename: "[name].js",
        publicPath: "./dist/scripts"
    },
    module : {
        rules:[
            {
                test:/\.jsx$/,
                exclude:/node_modules/,
                loader:'babel-loader!imports-loader?native='+path.resolve(__dirname,'js/native_helper.jsx')
            },{
                test:/\.less$/,
                exclude:/node_modules/,
                loader:'style-loader!css-loader!less-loader'
            },{
                test:/\.css$/,
                exclude:/node_modules/,
                loader:'style-loader!css-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.css']
    },

}
