import { Application } from "https://deno.land/x/oak/mod.ts";
import routes from "./routes/index.ts";

const app = new Application();
const { signal } = new AbortController();

app.use(routes.routes());
app.use(routes.allowedMethods());

/**
 * @description 定义端口，从PM2配置中获取
 */
const port = await Deno.env.get('PORT');
await app.listen({ port: Number(port), signal });