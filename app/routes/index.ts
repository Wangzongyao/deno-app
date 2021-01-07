/**
 * router 路由模块
 * 职责：处理路由
 * 描述：根据不同的请求方法+请求路径设置具体的请求处理函数
 */

import { Router } from "https://deno.land/x/oak/mod.ts";
import * as routesHandle from "./user/index.ts";

import authMiddleware from '../common/middlewares/authMiddleware.ts'

const routes = new Router();

routes.get("/user/loginData", authMiddleware, routesHandle.loginData);
routes.get("/user/userData", authMiddleware, routesHandle.userData);

export default routes;
