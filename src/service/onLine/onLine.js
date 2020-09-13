/**在线写码页面相关接口 */
import { fetch, devHttp } from "@/service/baseService";

// 查询所有型号 method 'POST'
const findListConfModalNameApi = devHttp + "/fsapi/model/findListConfModalName";
export const findListConfModalName = () => fetch.post(findListConfModalNameApi);

// 获取模块图片
const getImageApi = devHttp + '/GetImageUrl'; // http://54.245.72.232/api/GetImageUrl?param={"token":"f12510c1b2e5d3426c67afccc8ce7309","model":"SFP-10GZR-55"}
export const getImage = (payload) => fetch.post(getImageApi, null, {
  params: payload
});