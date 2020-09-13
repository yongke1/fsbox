import tool from "@assets/js/utils/tool.js";
import types from "./mutations_types";

export default {
  // 读到DDM信息
  [types.READ_DDM] (state, info) {
    try {
      state.ddmInfo = JSON.parse(info.message);
    } catch (error) {
      state.ddmInfo = null;
    }
  },
  // 读取DDM导出信息
  [types.EXPORT_DDM] (state, info) {
    try {
      state.exportInfo = info.message;
    } catch (error) {
      state.exportInfo = null;
    }
  },
  // 改变驱动状态
  [types.CHANGE_DRIVE] (state, info) {
    state.isDriveStart = info;
  },
  // 获取波长
  [types.GET_WAVELENGTH] (state, info) {
    state.waveLength = info.message;
  },
  // 改变波长
  [types.AdjustWavelength] (state, info) {
    state.isAdjusted = info.message;
  },
  // 改变波长
  [types.DefaultWaveLength] (state, info) {
    state.defaultWaveLength = info.message;
  },
  // 更改当前按键状态
  [types.GET_KEY] (state, info) {
    state.currentKey = info.message;
  },
  // 获取wensocket数据usb
  [types.GETSOCKETINFO_USB] (state, info) {
    if (info === "nothing") {
      state.socketInfoUsb = state.socketInfoUsb;// eslint-disable-line
    } else {
      info.message === "False"
        ? (state.socketInfoUsb = info.message)
        : (state.socketInfoUsb = JSON.parse(info.message));
    }
  },
  // 模块连接状态
  [types.GETSOCKETINFO_LIGHT] (state, info) {
    info.message === "False"
      ? (state.socketInfoLight = info.message)
      : (state.socketInfoLight = JSON.parse(info.message));
    state.isgetProModel = !state.isgetProModel;
  },
  // TRYCONFIG返回
  [types.GETSOCKETINFO_TRY] (state, info) {
    info.message === "False"
      ? (state.socketInfoTry = info.message)
      : (state.socketInfoTry = JSON.parse(info.message));
  },
  // 写码成功返回
  [types.GETSOCKETINFO_WRITE] (state, info) {
    // state.socketInfoWrite = { Code: '1' };// 模拟写码失败
    info.message === "False"
      ? (state.socketInfoWrite = info.message)
      : (state.socketInfoWrite = JSON.parse(info.message));
  },
  // 切换是否为定制sn
  [types.CHANGE_CUSTOMER] (state, info) {
    state.isCustomer = !state.isCustomer;
    state.customerInfo = info;
  },
  [types.CLEAR_CUSTOMER] (state) {
    state.isCustomer = false;
    state.customerInfo = null;
  },
  // // 更改切换模式展示状态
  // [types.CHANGE_MODE] (state, info) {
  // 	state.modelSave = info;
  // },
  // 控制导航
  [types.SIDEBAR_AN] (state, info) {
    state.sidebar_an = info.state;
  },
  // 菜单tree
  [types.MENU_TREE] (state, info) {
    state.menuTree = info;
  },
  // 获取审核状态
  [types.APPLY_STATUS] (state, info) {
    state.applyStatus = info;
  },
  // 保存用户信息
  [types.USER_INFO] (state) {
    let userInfo = JSON.parse(tool.getStore("userInfo"));
    state.userInfo = userInfo;
  },
  // 保存params传递的数据
  [types.PARAMS_INFO] (state) {
    let paramsInfo = JSON.parse(tool.getStore("paramsInfo"));
    state.paramsInfo = paramsInfo;
  },
  // 保存公告栏信息
  [types.NOTICE_INFO] (state) {
    let noticeInfo = JSON.parse(tool.getStore("noticeInfo"));
    state.noticeInfo = noticeInfo;
  },
  // 保存订单tab
  [types.SET_CURRENT_TAB] (state, info) {
    state.currentTab = info;
  },
  // 切换当前语言
  [types.CHANGE_LANGUAGE] (state, info) {
    state.language = info;
    tool.setStore("language", info);
  },
  // 获取所有型号名
  [types.GET_PROMODEL_LIST] (state, info) {
    if (info.obj) {
      state.proModelList = info.obj.map(item => {
        return {
          value: item.id,
          label: item.modalName,
          oldId: item.parentId,
          attrKey: item.attrKey,
          attrValue: item.attrValue
        };
      });
    } else {
      state.proModelList = [];
    }
    state.isgetProModel = !state.isgetProModel;
  },
  // 切换当前语言
  reset_server (state) {
    // 是否后台拿到型号名列表
    //  state.isgetProModel = false;
    // websocket传递数据
    //  debugger;
    state.socketInfoUsb = null;
    state.socketInfoLight = null;
    state.socketInfoTry = null;
    state.socketInfoWrite = null;
    //  state.isCustomer = false;
    //  state.customerInfo = null;
    //  state.isgetProModel = false;
  },
  // 改变 未读数目
  // [types.CHANGE_UNREADLIST] (state, res) {
  //     state.unReadList = res.obj;
  // },
  // 反馈
  // [types.	INTO_FEEDBACK] (state, info) {
  // 	info.message === 'False' ? state.socketInfoLight = info.message : state.socketInfoLight = JSON.parse(info.message);
  // 	state.isgetProModel = !state.isgetProModel;
  // },
  [types.CHANGE_TAB] (state, tabRes) {
    state.currentTab = tabRes;
  },
  [types.CHANGE_DOT] (state, flag) {
    flag === true && state.dotIndex++;
    flag === false && state.dotIndex--;
  },
  [types.CHANGE_NOTICE] (state, flag) {
    state.isReadNotice = flag;
  },
  // 测试配置文件
  [types.TEST_CONFIG] (state, flag) {
    state.testConfigInfo = JSON.parse(flag.message);
  }
};
