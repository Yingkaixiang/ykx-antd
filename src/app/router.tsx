import * as React from "react";
import { Route } from "react-router-dom";
import BadgeDoc from "./routes/badge/";
import MarkdownDoc from "./routes/markdown/";
import PaginationDoc from "./routes/pagination/";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

function Router() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/markdown" component={MarkdownDoc} />
      <Route path="/badge" component={BadgeDoc} />
      <Route path="/pagination" component={PaginationDoc} />
    </div>
  );
}

export default Router;
