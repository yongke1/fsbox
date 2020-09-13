// 导入baseService
import {
  fetch,
  devHttp,
  apiFormat,
  apiFormat2
} from '@/service/baseService';

// 写码申请列表 method 'POST'
const allParamApi = devHttp + '/fsapi/applyWriteCode/allParam';
export const allParam = (payload) => fetch.post(allParamApi, null, {
  params: payload
});

// 获取产品列表
const getProListApi = devHttp + '/GetProductList';
export const getProList = (payload) => fetch.post(getProListApi, null, { params: payload });

// 写码申请详情 method 'GET'
const getDetailApi = devHttp + '/fsapi/applyWriteCode/applyWriteCode/{id}';
export const getDetail = (opt) => fetch.get(apiFormat(getDetailApi, opt));

// 获取售后定制写码数据
const getAfterSaleListApi = devHttp + '/GetAfterSaleBinList';
export const getAfterSaleList = (opt) => fetch.post(apiFormat2(getAfterSaleListApi, opt));

// 申请写码 method 'POST'
const applyserviceApi = devHttp + '/fsapi/applyWriteCode/applyWriteCode';
export const applyservice = (payload) => fetch.post(applyserviceApi, null, {
  params: payload
});

// 记录售后定制写码
const addAfterSaleWriteCodeApi = devHttp + '/AddAfterSaleWriteCode';
export const addAfterSaleWriteCode = (opt) => fetch.post(apiFormat2(addAfterSaleWriteCodeApi, opt));

// 修改售后定制写码状态
const cancelLicationApi = devHttp + '/fsapi/applyWriteCode/CancelLication';
export const CancelLication = (opt) => fetch.post(apiFormat2(cancelLicationApi, opt));