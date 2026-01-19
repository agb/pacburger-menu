const path = require("path");

module.exports = {
  entry: "./index.ts",
  output: {
    filename: "pacburger-menu.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], 
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  mode: "production", 
};
