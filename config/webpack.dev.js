const path = require("path")

module.exports = {
  entry: {
    main: "./src/main.js"
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "html-loader",
            options : {
              attrs: ["img:src"]
            }
          }
        ]
      },
      {
        test: /\.(jpg|gif|png)$/,
        use : [
          {
            loader : 'file-loader',
            options : {
              name : "img/[name].[ext]"
            }
          }
        ]
      }
    ]
  }
}