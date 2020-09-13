/**项目公共接口 */
// 导入baseService
import { fetch, devHttp, apiFormat2 } from '@/service/baseService';

// 查询所有型号 method 'POST'
const findListConfModalNameApi = devHttp + '/fsapi/model/findListConfModalName';
export const findListConfModalName = () => fetch.post(findListConfModalNameApi);

// 根据型号名查属性
const findByKeyModalIdFsApi = devHttp + '/fsapi/model/findByKeyModalId';
export const findByKeyModalIdFs = (payload) => fetch.post(findByKeyModalIdFsApi, null, { params: payload });

// 根据型号名（PN）获取模块配置文件
const selectByModalComTypeApi = devHttp + '/fsapi/configfile/selectByModalComType';
export const selectByModalComType = (payload) => fetch.post(selectByModalComTypeApi, null, { params: payload });

// 根据（型号id,兼容类型,属性,属性值）查询可用bin文件
const selectModalbinByidKeyValueTypeApi = devHttp + '/fsapi/model/modalBin/selectModalbinByidKeyValueType2';
export const selectModalbinByidKeyValueType = (payload) => fetch.post(selectModalbinByidKeyValueTypeApi, null, { params: payload });

// 修改bin文件状态 method 'GET'
const upModalNameBisWriteApi = devHttp + '/fsapi/model/modalBin/upModalNameBisWrite';
export const upModalNameBisWrite = (payload) => fetch.get(apiFormat2(upModalNameBisWriteApi, payload));

// 写码结果记录
const writeCodeRecordApi = devHttp + '/fsapi/applyWriteCode/OperationRecord';
export const writeCodeRecord = (payload) => fetch.post(writeCodeRecordApi, null, {
  params: payload
});

// 通过SN获取兼容品牌
const getCompatibleApi = devHttp + '/fsapi/sno/getCompatible';
export const getCompatible = (payload) => fetch.get(apiFormat2(getCompatibleApi, payload));

// 单文件上传
export const singleUploadUrl = devHttp + '/fsapi/file/upload/single';

// 写码前判断是否可以写码
const getCodingLimitApi = devHttp + '/fsapi/GetCodingLimit';
export const getCodingLimit = (payload) => fetch.post(getCodingLimitApi, null, { params: payload });

// 写码后请求接口
const updateAfterCodeApi = devHttp + '/fsapi/UpdateAfterCode';
export const updateAfterCode = (payload) => fetch.post(updateAfterCodeApi, null, { params: payload });



