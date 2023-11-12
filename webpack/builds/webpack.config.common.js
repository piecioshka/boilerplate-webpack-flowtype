"use strict";

const path = require("path");
const root = path.join(__dirname, "..", "..");
const merge = require("webpack-merge");

module.exports = (env) => {
    let config = {
        entry: {
            main: path.join(root, "src", "main"),
        },
        output: {
            filename: "bundle.js",
            path: path.join(root, "dist"),
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.html$/,
                    exclude: /node_modules/,
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                    },
                },
            ],
        },
    };

    // Addons
    const addons = getAddons(env);
    addons.forEach((addon) => {
        config = merge.merge(
            config,
            require(path.join(root, "webpack", "addons", `webpack.${addon}`))
        );
    });

    return config;
};

function getAddons(env) {
    if (!env || !env.addons) return [];
    if (typeof env.addons === "string") return env.addons.split(",");
    return env.addons;
}
