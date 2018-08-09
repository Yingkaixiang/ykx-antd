import * as Koa from "koa";
import * as Router from "koa-router";
import * as logger from "koa-logger";
import * as KoaBodyParser from "koa-bodyparser";
import routers from "./router";

const app = new Koa();
const router = new Router();

routers(router);

app.use(logger());
app.use(KoaBodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(8888);

console.log("server is listened on 8888");
