import { findListConfModalName } from "@/service/common/common";
import types from "./mutations_types";
import "expose-loader?jQuery!jquery"; // 处理第三方库的插件依赖问题
import $ from "jquery";
import "signalr";
import "./hubs/hub.js";

export default {
  // 获取型号名
  async getProModelList ({ commit }) {
    // 使用sessionStorage将型号名缓存下来
    let session = window.sessionStorage.getItem('proModelList'), res = null;
    if (session) {
      res = JSON.parse(session);
    } else {
      res = await findListConfModalName();
      window.sessionStorage.setItem('proModelList', JSON.stringify(res))
    }
    // 保存型号名
    commit(types.GET_PROMODEL_LIST, res);
  },
  // signalr建立连接 可能多个页面需要放在vuex里
  signalrConnect ({ commit }, payload) {
    // console.log(payload);
    // debugger;
    // 建立swebsocket
    var chat = $.connection.myHub;
    let signalrServe = $.connection.hub;
    signalrServe.url = "http://localhost:56789/signalr";
    // 获取数据addMessage
    chat.client.addMessage = (name, message) => {
      if (
        typeof message === "boolean" ||
        (typeof message === "string" &&
          message.length < 10 &&
          message !== "False" &&
          name !== "WaveLengthRead" &&
          name !== "DefaultWaveLength")
      ) {
        typeof message === "boolean" ? "" : (message = parseInt(message));
        message ? (message = "1") : (message = "0");
      }
      // console.log(message);
      if (name === null) return "False";
      let info = {
        name: name,
        message:
          message === null
            ? null
            : message.indexOf('"') === 0
              ? message.trim('"')
              : message
      };
      if (name === "USBConnected") {
        commit("GETSOCKETINFO_USB", info);
      } else if (name === "IsPluggedIn") {
        commit("GETSOCKETINFO_LIGHT", info);
        commit("GETSOCKETINFO_USB", "nothing");
      } else if (name === "TryConfig") {
        commit("GETSOCKETINFO_TRY", info);
      } else if (name === "WriteCode") {
        commit("GETSOCKETINFO_WRITE", info);
      } else if (name === "IsBatch") {
        commit("GET_KEY", info);
      } else if (name === "WaveLengthRead") {
        commit("GET_WAVELENGTH", info);
      } else if (name === "AdjustWavelength") {
        commit("AdjustWavelength", info);
      } else if (name === "DefaultWaveLength") {
        commit("DefaultWaveLength", info);
      } else if (name === "ReadDdm") {
        commit("READ_DDM", info);
      } else if (name === "ExportDdmInfo") {
        commit("EXPORT_DDM", info);
      } else if (name === "TryConfigByTest") {
        commit("TEST_CONFIG", info);
      }
    };
    // 握手
    // console.log(payload);
    // var timer = setInterval(() => {
    signalrServe
      .start()
      .done(function (data) {// eslint-disable-line
        // clearInterval(timer); timer = null;
        // Start the connection.
        // 驱动已启动
        commit(types.CHANGE_DRIVE, true);
      })
      .fail(() => {
        if (payload === "Windows") location.href = "FiberStore://";
        if (payload === "MacOS") location.href = "macbox://open";
      });
    // }, 2000);
    return chat;
  },
  // async getUnReadList ({
  //     commit
  // }, payload) {
  //     let res = await customerApi({
  //         userId: payload.userId
  //     });
  //     commit(types.CHANGE_UNREADLIST, res);
  // },
  changeDDM ({ commit }) {
    commit(types.READ_DDM, "null");
  },
  // 改变tab的选中状态
  async changeTab ({ commit }, res) {
    commit(types.CHANGE_TAB, res);
  },
  async changeDot ({ commit }, res) {
    commit(types.CHANGE_DOT, res);
  },
  async changeNotice ({ commit }, res) {
    commit(types.CHANGE_NOTICE, res);
  }
};
