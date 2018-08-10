const path = require("path");
const express = require("express");
const proxy = require("http-proxy-middleware");
const webpack = require("webpack");
const config = require("./webpack.config.js");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const app = express();
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: "/",
    stats: { colors: true },
  }),
);
app.use(webpackHotMiddleware(compiler));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.all(
  "/api/*",
  proxy({
    target: "http://127.0.0.1:8888",
    pathRewrite: (path) => {
      return path.replace("/api", "");
    },
  }),
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
