const path = require("path");
const express = require("express");
const request = require("superagent");
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

app.get("/api/*", (req, res) => {
  const path = req.url.replace("/api", "");
  request.get(`http://127.0.0.1:8888${path}`).end((err, data) => {
    res.set("Content-Type", "application/json");
    res.send(data.text);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
