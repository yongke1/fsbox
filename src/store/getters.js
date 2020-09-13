export default {
  applyStatus: state => state.applyStatus, // 审核状态
  menuTree: state => state.menuTree,
  userInfo: state => state.userInfo, // 获取用户信息
  paramsInfo: state => state.paramsInfo, // 获取params传递的数据
  compatibleType: state => state.compatibleType, // 申请写码兼容类型
  currentTab: state => state.currentTab, // tab当前项
  language: state => state.language, // 当前语言
  compatibleTypeOnline: state => state.compatibleTypeOnline, // 在线写码兼容类型
  noticeInfo: state => state.noticeInfo, // 获取公告栏信息
  notices: state => state.isReadNotice // 获取公告栏信息
};
