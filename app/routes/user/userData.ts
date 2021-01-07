import { Request, Response } from "https://deno.land/x/oak/mod.ts";
import * as log from "https://deno.land/std/log/mod.ts";

const userData = (
  { params, request, response }: {
    params: any;
    request: Request;
    response: Response;
  },
) => {
  try {
    response.status = 200;
    console.log('执行了这里');
    response.body = {
      "flag": 1,
      "message": "ok",
      "data": {
        "userId": "140120010221",
        "userAvatar": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg",
        "userName": "土堆先生の名字",
      },
    };
  } catch (error) {
    log.error(error);
    response.status = 500;
  }
};

export default userData;
