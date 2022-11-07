import type { RequestOptionsInit } from "umi-request";
import { extend } from "umi-request";
import errorHandler from "./errorHandle.ts";

// 请求拦截
const authHeaderInterceptor = (url: string, options: RequestOptionsInit) => {
  // const authHeader = { Authorization: 'Bearer xxxxxx' };// 配置统一token使用
  return {
    url: `${url}`,
    options: { ...options, interceptors: true }, // headers: authHeader 配置统一token使用
  };
};
// 响应后拦截
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const demoResponseInterceptors = (
  response: Response,
  options: RequestOptionsInit
) => {
  // console.log(response);
  return response;
};
// 配置request
export const request = extend({
  prefix:
    process.env.NODE_ENV === "production"
      ? "https://api.github.com/repos/zhengchengshi/daily_english/contents"
      : "https://api.github.com/repos/zhengchengshi/daily_english/contents", // 监测开发环境
  // credentials: "include",
  errorHandler,
  // requestInterceptors: [authHeaderInterceptor],
  // responseInterceptors: [demoResponseInterceptors],
  middlewares: [],
  ttl: 60000,
  params: { ref: "main" },
});
