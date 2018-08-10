import * as React from "react";
import { Route } from "react-router-dom";
import BadgeDoc from "./routes/badge/";
import IconDoc from "./routes/icon/";
import MarkdownDoc from "./routes/markdown/";
import PaginationDoc from "./routes/pagination/";
import UploadDoc from "./routes/upload/";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

function Router() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/icon" component={IconDoc} />
      <Route path="/markdown" component={MarkdownDoc} />
      <Route path="/badge" component={BadgeDoc} />
      <Route path="/pagination" component={PaginationDoc} />
      <Route path="/upload" component={UploadDoc} />
    </div>
  );
}

export default Router;
