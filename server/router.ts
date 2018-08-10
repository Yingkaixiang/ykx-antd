import * as fs from "fs";
import * as multer from "koa-multer";

export default (router: any) => {
  router.get("/markdown/:component", (ctx: any) => {
    const { component } = ctx.params;
    const file = fs.readFileSync(`./markdown/${component}.md`, "utf-8");
    const str = file.replace(/\n/g, "\n");
    ctx.body = str;
  });

  const storage = multer.diskStorage({
    destination: "uploads",
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    },
  });

  const upload = multer({ storage: storage });

  router.post("/upload", upload.array("files"), (ctx: any) => {
    ctx.body = "123";
  });
};
