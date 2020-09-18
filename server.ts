import { Application } from "https://deno.land/x/oak/mod.ts";
import routes from "./routes/index.ts";

/**
 * @description 定义端口
 */
const PORT = 8000;

const app = new Application();
const { signal } = new AbortController();

app.use(routes.routes());
app.use(routes.allowedMethods());

await app.listen({ port: PORT, signal });
