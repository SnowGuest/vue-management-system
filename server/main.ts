import { Application } from "jsr:@oak/oak@14/application";
import { Router } from "jsr:@oak/oak@14/router";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
// import { oakCors } from "jsr:@cors";

const app = new Application();
const router = new Router();
router.get("/user", (ctx, next) => {
  console.log("请求过来了 ")
  ctx.response.body = { code: 200, data: undefined, msg: "hello world!" };
  next()
});
app.use(router.routes());
app.use(router.allowedMethods());
app.use(oakCors());
console.log("开启监听")
app.listen({
  port: 11451
});