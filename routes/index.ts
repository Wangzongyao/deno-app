import { Router } from "https://deno.land/x/oak/mod.ts";
import * as routesHandle from './user/index.ts'

const routes = new Router();

routes.get('/home', routesHandle.userData)

export default routes
