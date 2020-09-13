import { fetch, devHttp } from '@/service/baseService';

// 添加反馈
const addFeedBackApi = devHttp + '/fsapi/FrontUserFeedBack/AddFeedBack';
export const addFeedBack = (payload) => fetch.post(addFeedBackApi, null, { params: payload });
