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
    console.log(params)
    if(params.name === '土堆先生' && params.password === '950229') {
        response.status = 200;
        response.body = {
            "flag": 1,
            "message": "ok",
            "data": {
              "userName": "土堆先生",
              "userAvatar": "",
              "userToken": "1401200140120010221sdfsdfsd.asdlfsdf09801f10221"
            },
          };
        return ;
    }
    response.status = 401;
    response.body = {
      "flag": 0,
      "message": "暂未授权，请重新登录！",
      "data": null,
    };
  } catch (error) {
    log.error(error);
    response.status = 500;
  }
};

export default userData;
