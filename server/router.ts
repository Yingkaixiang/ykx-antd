import * as fs from "fs";

export default (router: any) => {
  router.get("/markdown/:component", (ctx: any) => {
    const { component } = ctx.params;
    const file = fs.readFileSync(`./markdown/${component}.md`, "utf-8");
    const str = file.replace(/\n/g, "\n");
    ctx.body = str;
  });
};
