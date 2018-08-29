import * as React from "react";
import { Route } from "react-router-dom";
import BadgeDoc from "./routes/badge/";
import ButtonDoc from "./routes/button/";
import CodeboxDoc from "./routes/codebox/";
import IconDoc from "./routes/icon/";
import InputDoc from "./routes/input/";
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
      <Route path="/button" component={ButtonDoc} />
      <Route path="/icon" component={IconDoc} />
      <Route path="/input" component={InputDoc} />
      <Route path="/markdown" component={MarkdownDoc} />
      <Route path="/badge" component={BadgeDoc} />
      <Route path="/pagination" component={PaginationDoc} />
      <Route path="/upload" component={UploadDoc} />
      <Route path="/codebox" component={CodeboxDoc} />
    </div>
  );
}

export default Router;
