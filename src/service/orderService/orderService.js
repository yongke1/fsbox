// 导入baseService
import { fetch, devHttp, apiFormat2 } from '@/service/baseService';

// 获取产品列表
const getProListApi = devHttp + '/GetProductList';
export const getProList = (payload) => fetch.post(getProListApi, null, { params: payload });

// 查询我的记录 Get请求：MyStudy/MyRecordPage 参数：string userId, int current = 1, int size = 10
const myRecordPageApi = devHttp + '/fsapi/MyStudy/MyRecordPage';
export const myRecordPage = (payload) => fetch.get(apiFormat2(myRecordPageApi, payload));

// 删除我的记录 Id=2743
const DeleteUserWarehouseApi = devHttp + '/fsapi/MyStudy/DeleteUserWarehouse';
export const DeleteUserWarehouse = (payload) => fetch.post(DeleteUserWarehouseApi, null, { params: payload });

// 备注修改 Id=2742&remark=fdsf
const UpdateRemarkApi = devHttp + '/fsapi/MyStudy/UpdateRemark';
export const UpdateRemark = (payload) => fetch.post(UpdateRemarkApi, null, { params: payload });

// 读取用户的写码记录
const userWriteRecordApi = devHttp + '/fsapi/applyWriteCode/GetUserWriteRecord';
export const userWriteRecord = (payload) => fetch.get(apiFormat2(userWriteRecordApi, payload));