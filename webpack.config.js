const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  entry: {
    app: ['./src/app/App.tsx', 'webpack-hot-middleware/client'],
    vendor: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  resolve: {
    // 自动解析文件扩展名
    // 在代码引入时不需要添加扩展名
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      // 解析ts语法
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
      // 解析less语法，并插入css
      {
        test: /\.less$/,
        use: [
          {
            // 将css以<style></style>的形式插入html
            loader: 'style-loader',
          },
          {
            // 解析url,require等语法
            loader: 'css-loader',
            options: {
              // 开启css modules功能
              modules: true,
              // 定义生成的类名格式
              // path 当前文件的路径
              // name 当前文件名
              // local 当前类名
              // hash 随机字符串
              localIdentName: '[name]_[local]_[hash:base64:5]',
            },
          },
          {
            // 将less转换为css
            loader: 'less-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'app', 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    // 自动打开浏览器
    new OpenBrowserPlugin({ url: `http://localhost:${port}` }),
  ],
};
