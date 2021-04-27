const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "build.js",
        path: path.resolve(__dirname, "./dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            "presets": [
                                [
                                    "@babel/preset-env",
                                    {
                                        "useBuiltIns": "usage",
                                        "corejs": 3,
                                        "targets": {
                                            "chrome": "58",
                                            "ie": "10"
                                        }
                                    },
                                ]
                            ],
                            "plugins": [
                                "@babel/plugin-transform-runtime", // 和 preset-env 不同时使用
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "kevin webpack"
        })
    ]
}