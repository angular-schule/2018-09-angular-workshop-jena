module.exports = {
    mode: "development",
    entry: "./main.ts",
    output: { filename: "bundle.js" },
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    }
}