var webpack = require('webpack');

module.exports = {
    entry: "./client/main.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!postcss-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!postcss-loader!less",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            },
            {
                test: /\.svg/,
                loader: "url-loader?limit=26000&mimetype=image/svg+xml"
            },
            {
                test: /\.jsx$/,
                exclude: [/node_modules/, /public/],
                loader: 'react-hot-loader!babel-loader'
                  
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    }
}