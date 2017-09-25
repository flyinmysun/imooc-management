

//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
module.exports = {//注意这里是exports不是export
    devtool: 'eval-source-map',//生成Source Maps,这里选择eval-source-map
    entry: __dirname + "/app/main.js",//唯一入口文件，就像Java中的main方法
    output: {//输出目录
        path: __dirname + "/public",//打包后的js文件存放的地方
        filename: "bundle.js"//打包后的js文件名
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        port:"5000",    //省略的话，默认端口为8080
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,   //针对于jsx和js结尾的文件
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,    //配置css
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }
                ],
                //plugins: [["import", { libraryName: "antd", style: "css" }]]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png)\w*/,  //针对于fontawesome文件
                loader: "file-loader",
            },

        ]
    }
};
