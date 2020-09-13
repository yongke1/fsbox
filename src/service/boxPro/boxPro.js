// 导入baseService
import {
  fetch,
  devHttp,
  apiFormat2
} from '@/service/baseService';

/**定制写码页面相关接口 */

// BoxPro申请列表搜索
const applyWriteCodeRecordBySnApi = devHttp + '/fsapi/applyWriteCode/ApplyWriteCodeRecordBySn';
export const applyWriteCodeRecordBySn = (opt) => fetch.get(apiFormat2(applyWriteCodeRecordBySnApi, opt));

// 在线写码,bin文件列表
const writeCodePageApi = devHttp + '/fsapi/applyWriteCode/WriteCodePage';
export const writeCodePage = (payload) => fetch.get(apiFormat2(writeCodePageApi, payload));

// BoxPro申请列表
const applyWriteCodeRecordApi = devHttp + '/fsapi/applyWriteCode/ApplyWriteCodeRecord';
export const applyWriteCodeRecord = (payload) => fetch.post(applyWriteCodeRecordApi, null, {
  params: payload
});