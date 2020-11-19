const merger = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merger(common, {
    mode: "production",
    module: {
        rules: [{
            test: /\.js$/,
            exclude: "/node_modules/",
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }]
        }]
    }
})