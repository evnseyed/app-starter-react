const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                use: "ts-loader",
            },
            // {
            //     test: /\.(js|jsx)$/,
            //     exclude: /(node_modules|bower_components)/,
            //     loader: "babel-loader",
            //     options: { presets: ["@babel/env"] }
            // },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },

    resolve: { extensions: [".tsx", ".ts", ".js"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
};