/**登录页面相关接口 */
import { fetch, devHttp } from "@service/baseService.js";

// 验证token
const checkTokenApi = devHttp + "/RefreshToken";
export const checkToken = payload =>
  fetch.post(checkTokenApi, null, {
    params: payload
  });

// 用户登录
const loginApi = devHttp + "/RequestToken"; // 用户登录   method 'POST'
export const userLogin = payload =>
  fetch.post(loginApi, null, {
    params: payload
  });

// 检查是正式还是测试的apiFormat
export const judgeApiEnv = () => fetch.post(devHttp + "/fsapi/JudgeIsNormal");
