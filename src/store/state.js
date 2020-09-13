/**
 * 描述：定义state
 */
import tool from "@assets/js/utils/tool.js";
// osName
const osName = tool.findOS();

// 用户信息
const userInfo = JSON.parse(tool.getStore("userInfo"));

// 保存params传递的数据
const paramsInfo = JSON.parse(tool.getStore("paramsInfo"));

// 公告栏信息
const noticeInfo = JSON.parse(tool.getStore("noticeInfo"));

// 订单当前tab项
const currentTab = tool.getStore("currentTab");

// 当前语言
const language =
  tool.getStore("language") === "null" ? "" : tool.getStore("language");

export default {
  versonDownload: {
    Windows: "https://fsbox.com/upgrade/FSInstaller.zip",
    MacOS: "https://fsbox.com/upgrade/FSInstall_Mac_Beta.dmg"
  },
  osName: osName,
  // 最新通知是否已读
  isReadNotice: null,
  // ddm的信息
  ddmInfo: null,
  // ddm导出信息
  exportInfo: null,
  // 测试配置文件
  // testConfigInfo: null,
  // 版本号
  fsVersion: "4.4.35",
  defaultWaveLength: null,
  isAdjusted: null,
  // 驱动是否启动
  isDriveStart: false,
  // 波长
  waveLength: null,
  // 当前获取到的按键
  currentKey: "",
  // 是否后台拿到型号名列表
  isgetProModel: false,
  // websocket传递数据
  socketInfoUsb: null,
  socketInfoLight: {},
  socketInfoTry: null,
  socketInfoWrite: null,
  // signalr服务
  // signalrServe: null,
  // 传值设置标识
  isCustomer: false,
  customerInfo: null,
  language: language || "en", // 当前语言版本
  // 全局公共部分
  current: 1, // 当前页
  totalElement: 1000, // 总数
  size: 10, // 分页数
  sidebar_an: false, // 控制导航
  userInfo: userInfo, // 用户信息
  paramsInfo: paramsInfo, // params传递数据
  noticeInfo: noticeInfo, // 用户信息
  menuTree: [], // 菜单Tree
  // 申请状态
  applyStatus: [
    {
      value: "0",
      label: "未审核"
    },
    {
      value: "1",
      label: "通过"
    },
    {
      value: "2",
      label: "不通过"
    }
  ],
  // 申请兼容类型
  compatibleType: [
    {
      label: "Cisco",
      value: "Cisco"
    },
    {
      label: "Juniper",
      value: "Juniper"
    },
    {
      label: "Arista",
      value: "Arista"
    },
    {
      label: "H3C",
      value: "H3C"
    },
    {
      label: "DELL (Force 10)",
      value: "DELL (Force 10)"
    },
    {
      label: "Brocade",
      value: "Brocade"
    },
    {
      label: "Intel",
      value: "Intel"
    },
    {
      label: "IBM",
      value: "IBM"
    },
    {
      label: "Huawei",
      value: "Huawei"
    },
    {
      label: "Mellanox",
      value: "Mellanox"
    },
    {
      label: "Netgear",
      value: "Netgear"
    },
    {
      label: "Extreme",
      value: "Extreme"
    },
    {
      label: "Alcatel-Lucent",
      value: "Alcatel-Lucent"
    },
    {
      label: "Avaya",
      value: "Avaya"
    },
    {
      label: "Marconi",
      value: "Marconi"
    },
    {
      label: "Moxa",
      value: "Moxa"
    },
    {
      label: "Ciena",
      value: "Ciena"
    },
    {
      label: "calix",
      value: "calix"
    },
    {
      label: "Finisar",
      value: "Finisar"
    },
    {
      label: "Transmode",
      value: "Transmode"
    },
    {
      label: "other",
      value: "other"
    }
  ],
  // 在线读写码兼容类型
  compatibleTypeOnline: [
    {
      label: "Cisco",
      value: "Cisco"
    },
    {
      label: "Juniper",
      value: "Juniper"
    },
    {
      label: "Arista",
      value: "Arista"
    },
    {
      label: "H3C",
      value: "H3C"
    },
    {
      label: "DELL (Force 10)",
      value: "DELL (Force 10)"
    },
    {
      label: "Brocade",
      value: "Brocade"
    },
    {
      label: "Intel",
      value: "Intel"
    },
    {
      label: "IBM",
      value: "IBM"
    },
    {
      label: "Huawei",
      value: "Huawei"
    },
    {
      label: "Netgear",
      value: "Netgear"
    },
    {
      label: "Extreme",
      value: "Extreme"
    },
    {
      label: "Alcatel-Lucent",
      value: "Alcatel-Lucent"
    },
    {
      label: "Generic",
      value: "Generic"
    },
    {
      label: "Mellanox",
      value: "Mellanox"
    }
    // {
    //     label: 'Ciena',
    //     value: 'Ciena'
    // }
  ],
  // 订单当前tab项
  currentTab: currentTab || "order",
  // 所有型号名
  proModelList: [],
  // 5种特殊品牌
  unableUploadTplList: ["Brocade", "IBM", "Huawei", "Cisco", "H3C"],
  // 当前切换模式
  // modelSave: false
  // 未读审批
  unReadList: []
};
