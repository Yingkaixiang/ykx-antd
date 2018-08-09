const path = require("path");
const express = require("express");
const webpack = require("webpack");
const config = require("./webpack.config.js");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const fs = require("fs");

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

app.get("/markdown", (req, res) => {
  const file = fs.readFileSync("./markdown/test.md", "utf-8");
  const a = file.replace(/\n/g, "\n");
  res.set("Content-Type", "application/json");
  res.send(a);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
