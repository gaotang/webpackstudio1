var webpack= require("webpack");
var path = require('path');
// 定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');

module.exports={
    entry:{
        bundle:[ "./src/app.js"]
    },
    output:{
        path:__dirname,
        publicPath:"/",
        filename:"dist/[name].js"
    },
    module:{
        loaders:[
            {test: /\.html$/, loaders: ['html']},
            {test: /(\.js)$/, loader:["babel"] ,exclude:/node_modules/, 
             query:{
                     presets:["es2015"]
             }
            }
        ]
    },
    resolve: {
        root: ROOT_PATH,
        extensions: ['', '.js', '.jsx'],
        alias: {
            jquery: "node_modules/jquery/dist/jquery.min.js"
        }
     },
    plugins:[
        new webpack.ProvidePlugin({ // 把一个全局变量插入到所有的代码中,支持jQuery plugin的使用;使用ProvidePlugin加载使用频率高的模块
            // provide $, jQuery and window.jQuery to every script
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
         /* 
         new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
               */
    ]
}