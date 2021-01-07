import { Context } from "https://deno.land/x/oak/mod.ts";
import { verify } from "https://deno.land/x/djwt@v2.0/mod.ts"

import { KEY, JWT_HEADER } from "../constants/index.ts";

//定义 authMiddleware 检查token有效性
const authMiddleware = async (ctx: Context, next: any) => {

	//token 放在header里面传过来
	const headers: Headers = await ctx.request.headers;

	const tokenJwt = headers.get('token')
	// 传过来的token是否以bearer开头 + 空格 
	if (!tokenJwt) {
		ctx.response.status = 401;
		return;
	}

	try {
		//校验token
		const payload = await verify(tokenJwt, KEY, JWT_HEADER.alg);
		//如果token正确程序继续往下走
		await next();
		return;
	} catch (e) {
		ctx.response.status = 401;
		ctx.response.body = { message: 'ooo' };
	}
}

export default authMiddleware;
