/**诊断写码页面相关接口 */
// 导入baseService
import qs from 'qs';
import {
  fetch,
  devHttp,
  apiFormat2
} from '@/service/baseService';


// 更新存码
const UpdateCodeApi = devHttp + '/fsapi/FrontOnlieCoding/UpdateUserWarehouseByUserid';
export const UpdateCode = (opt) => fetch.post(UpdateCodeApi, qs.stringify(opt));

// 获取兼容品牌的关系通过sn码
const getCompatibleApi = devHttp + '/fsapi/sno/getCompatible';
export const getCompatible = (payload) => fetch.get(apiFormat2(getCompatibleApi, payload));

// 保存存码数据
const saveCodeApi = devHttp + '/fsapi/FrontOnlieCoding/AddUserWarehouse';
export const saveCode = (payload) => fetch.post(saveCodeApi, null, {
  params: payload
});

// 获取存码列表
const saveCodeListApi = devHttp + '/fsapi/FrontOnlieCoding/UserWarehousePage';
export const saveCodeList = (payload) => fetch.post(saveCodeListApi, null, {
  params: payload
});