import { Context } from "https://deno.land/x/oak/mod.ts";
import { create, Payload } from "https://deno.land/x/djwt@v2.0/mod.ts"
import * as log from "https://deno.land/std/log/mod.ts";

import { JWT_HEADER, KEY } from '../../common/constants/index.ts'
import userMap from '../../models/index.ts'

class UserController {
	/**
	 * @description 登录并获取权限
	 */
	static async loginData(ctx: Context) {
		// 执行埋点
		log.info('登录埋点');

		const { value } = await ctx.request.body();
		const { name, password } : { name: String, password: String } = await value

		const hasUser = userMap.find(user => (
			user.name === name && user.password === password
		))

		if (hasUser) {

			const payload: Payload = { iss: hasUser.name }

			const jwt = await create(JWT_HEADER, payload, KEY)

			ctx.response.status = 200;
			ctx.response.body = {
				flag: 1,
				message: "ok",
				data: {
					userName: hasUser.name,
					userToken: jwt
				},
			}
		}
	}
}

export default UserController
