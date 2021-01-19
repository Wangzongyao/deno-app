import { Context, Status } from "https://deno.land/x/oak/mod.ts";

class DataFormatMiddleware {
    static ctx: Context

    static successFormat(ctx: Context, data: any, message: String) {
        DataFormatMiddleware.ctx.response.status = 200;
        DataFormatMiddleware.ctx.response.body = { flag: 1, message, data };
    }
    static errorFormat(ctx: Context, message: String) {
        DataFormatMiddleware.ctx.response.status = 200;
        DataFormatMiddleware.ctx.response.body = { flag: 0, message, data: null };
    }
    static statusFormat(ctx: Context, status: Status) {
        DataFormatMiddleware.ctx.response.status = status;
    }
}

export default DataFormatMiddleware
