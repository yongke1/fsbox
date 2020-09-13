// 导入baseService
import {
  fetch,
  devHttp
} from '@/service/baseService';

const getNoticeLoginApi = devHttp + '/fsapi/GetNoticeLogin';
export const getNoticeLogin = (payload) => fetch.post(getNoticeLoginApi, null, { params: payload });

const noticeLoginPageApi = devHttp + '/fsapi/NoticeLoginPage';
export const noticeLoginPage = (payload) => fetch.post(noticeLoginPageApi, null, { params: payload });

const saveNoticeLoginApi = devHttp + '/fsapi/SaveNoticeLogin';
export const saveNoticeLogin = (payload) => fetch.post(saveNoticeLoginApi, null, { params: payload });
