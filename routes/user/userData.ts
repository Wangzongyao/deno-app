import { Request, Response, Router } from "https://deno.land/x/oak/mod.ts";
import * as log from 'https://deno.land/std/log/mod.ts';

const userData = ({ params, request, response }: { params: any, request: Request, response: Response }) => {
    try {
        response.status = 200;
        response.body = {
            "flag": 1,
            "message": "ok",
            "data": {
                "userId": "140120010221",
                "userAvatar": "",
                "userName": "土堆先生"
            }
        }
    } catch (error) {
        log.error(error);
        response.status = 500;
    }
}

export default userData
