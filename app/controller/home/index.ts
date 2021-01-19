import { Context } from "https://deno.land/x/oak/mod.ts";

class HomeController {
	/**
	 * @description 登录并获取权限
	 */
	static async cardList(ctx: Context) {

		const { value } = await ctx.request.body();
		const { name, password }: { name: String, password: String } = await value
		ctx.response.status = 200;
		ctx.response.body = {
			flag: 1,
			message: "ok",
			data: [1, 2],
		}
	}
}

export default HomeController
