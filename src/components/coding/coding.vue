<style lang="scss" scoped>
input:focus {
  border: none;
}
input {
  background: none;
  outline: none;
  border: none;
}
.flex {
  display: flex;
}
.online-box {
  background: #ffffff;
  padding-bottom: 50px;
  min-height: 800px;
  .steping {
    padding: 40px 0;
  }
  .online-status {
    padding: 30px 0 0;
    text-align: center;
    .status-info {
      margin-top: 62px;
      // margin-bottom: 107px;
      .active {
        background: linear-gradient(to right, #37a0f6, #387ee9);
        color: #ffffff;
        border: 0;
      }
      p:nth-child(1) {
        font-size: 18px;
        color: #364658;
        margin: 10px auto;
      }
      p:nth-child(2) {
        font-size: 16px;
        color: #a5bad0;
      }
      a {
        margin-top: 3rem;
        padding: 0.6rem 4.5rem;
        margin-left: 30px;
        display: inline-block;
        border-radius: 3px;
        box-shadow: 0px 21px 27px 0px rgba(7, 49, 94, 0.08);
        border: 2px solid rgba(123, 143, 165, 0.3);
        .status-text-box {
          .status-text {
            margin-bottom: 5px;
            font-size: 18px;
          }
        }
        img {
          display: inline-block;
          margin-right: 17px;
          vertical-align: middle;
          position: relative;
          bottom: 3px;
        }
        span {
          width: 16px;
          height: 17px;
          display: inline-block;
          vertical-align: text-bottom;
          margin-right: 10px;
        }
      }
      .status-msg {
        font-size: 34px;
        color: #ff9c5d;
        font-weight: bold;
      }
      .success-color {
        color: #32d7b0;
        font-size: 34px;
        font-weight: bold;
      }
      .error-color {
        color: #f66767;
        font-size: 34px;
        font-weight: bold;
      }
      .install-box {
        display: flex;
        justify-content: center;
        &.win {
          flex-direction: row-reverse;
        }
      }
    }
  }
  .status-success {
    .status-success-img {
      text-align: center;
    }
    .status-success-msg {
      margin-top: 59px;
      font-size: 34px;
      color: #ff9c5d;
      text-align: center;
      .success-color {
        color: #32d7b0;
      }
      .error-color {
        color: #f66767;
      }
      .batch-config-btn {
        text-align: center;
        height: 46px;
        line-height: 46px;
        width: 240px;
        margin: auto;
        border: 2px solid rgba(123, 143, 165, 0.3);
        border-radius: 3px;
        font-size: 14px;
        color: rgb(127, 178, 233);
        margin-top: 32px;
        user-select: none;
      }
    }
    .online-content {
      .online-table {
        width: 420px;
        margin: auto;

        .table-desc {
          color: #7b8fa5;
        }
        .table-aster {
          color: red;
          margin-left: 5px;
        }
        .table-input {
          width: 100%;
          padding: 18px;
          margin: 10px 0 20px 0;
          border: 1px solid #dee5ed;
        }
        .table-input-warning {
          border: 1px solid #f66767;
        }
        .table-input:nth-child(1) {
          margin-bottom: 0;
        }
        .table-input[disabled] {
          background: rgba(245, 248, 251, 1);
        }
        .table-sn-yes {
          width: 15px;
          height: 17px;
          position: absolute;
          top: 25px;
          right: -35px;
          background: url("~@assets/images/icon/box_icon.png") no-repeat -56px -340px;
        }
        .table-sn-no {
          width: 15px;
          height: 17px;
          position: absolute;
          top: 25px;
          right: -35px;
          background: url("~@assets/images/icon/box_icon.png") no-repeat -102px -340px;
        }
        .table-brand {
          position: relative;
          cursor: pointer;
          .input-icon-down {
            position: absolute;
            right: 10px;
            top: 30px;
          }
          ul {
            flex-flow: row wrap;
            color: #445f87;
            position: relative;
            right: 15%;
            text-align: center;
            background: #ffffff;
            z-index: 1;
            box-shadow: 0 5px 15px 5px rgba(7, 49, 94, 0.1);
            li {
              width: 25%;
              border: 0.5px solid #dee5ed;
              padding: 7px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
          .active {
            color: #ffffff;
            background-color: #3793f1;
          }
          .table-brand-desc {
            text-align: left;
            padding: 22px 63px 21px 40px;
          }
        }
        .brand-select-model {
          position: absolute;
          width: 140%;
        }
        .table-revise-sn {
          justify-content: space-between;
          margin-top: 22px;
          margin-bottom: 26px;
          color: #7b8fa5;
          .revise-sn-left {
            position: relative;
            .sn-left-icon {
              width: 20px;
              height: 20px;
              position: absolute;
              top: 0;
              right: -30px;
              background: url("~@assets/images/icon/box_icon.png") no-repeat -157px -389px;
            }
            .sn-left-icon:hover {
              background: url("~@assets/images/icon/box_icon.png") no-repeat -194px -389px;
            }
            .revise-sn-hint {
              z-index: -1;
              position: absolute;
              width: 310px;
              font-size: 14px;
              color: #7b8fa5;
              padding: 17px 20px 12px 20px;
              box-shadow: 0px 2px 15px 0px rgba(22, 81, 131, 0.15);
              left: -90%;
              background: #fff;
            }
            .sn-left-icon:hover ~ .revise-sn-hint {
              z-index: 1;
            }
          }
          .revise-sn-right {
            div {
              display: flex;
            }
            div:nth-child(2) {
              margin-left: 22px;
            }
          }
          .revise-sn-no {
            width: 20px;
            height: 20px;
            cursor: pointer;
            background: url("~@assets/images/icon/box_icon.png") no-repeat -50px -389px;
          }
          .revise-sn-yes {
            width: 20px;
            height: 20px;
            cursor: pointer;
            background: url("~@assets/images/icon/box_icon.png") no-repeat -84px -389px;
          }
          .revise-sn-none {
            width: 20px;
            height: 20px;
            cursor: pointer;
            background: url("~@assets/images/icon/box_icon.png") no-repeat -122px -389px;
          }
        }
        .table-switch {
          justify-content: space-between;
          margin-bottom: 25px;
          .revise-batch-left {
            position: relative;
            div {
              width: 20px;
              height: 20px;
              position: absolute;
              top: 0;
              right: -30px;
              background: url("~@assets/images/icon/box_icon.png") no-repeat -157px -389px;
            }
            div:hover {
              background: url("~@assets/images/icon/box_icon.png") no-repeat -194px -389px;
            }
            p {
              z-index: -1;
              position: absolute;
              width: 310px;
              font-size: 14px;
              color: #7b8fa5;
              padding: 17px 20px 12px 20px;
              box-shadow: 0px 2px 15px 0px rgba(22, 81, 131, 0.15);
              left: 0%;
              background: #fff;
            }
            div:hover ~ p {
              z-index: 1;
            }
          }
        }
        .writeCode-btn {
          width: 100%;
          padding: 17px;
          background: linear-gradient(to right, #37a0f6, #387ee9);
          margin: auto;
          text-align: center;
          color: #ffffff;
          cursor: pointer;
          border-radius: 3px;
        }
        .writeCode-btn:hover {
          opacity: 0.9;
        }
        .table-brand-warning {
          color: #f66767;
        }
        .brand-right-warning {
          position: absolute;
          right: -200px;
          top: 22px;
        }
        .band {
          margin-top: 20px;
        }
        .transmission-distance {
          margin-top: 20px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="online-box">
    <div class="steping">
      <Steping :list="stepList"
               :current='currentStep'></Steping>
    </div>
    <!-- 下载驱动 -->
    <div class="online-status"
         v-if="!status.isInsertLight">
      <div class="statusImg-box">
        <img :src="statusImg[connStatusNum].imgUrl"
             alt="">
      </div>
      <div class="status-info">
        <div :class="statusImg[connStatusNum].status=='error'?'error-color':statusImg[connStatusNum].status=='success'?'success-color':'status-msg'"> {{statusImg[connStatusNum].msg}}</div>
        <div class="status-text-box"
             v-if="!status.isConnecDrive">
          <p class="status-text">
            Please
            <span>paylod</span>
            the browser after the installation is complete.
          </p>
          <p class="status-text">It is recommended to activate your service in Google Chrome (68 version and later)</p>
          <!-- 安装驱动 -->
          <div :class="['install-box',{'win':osName==='Windows'}]">
            <a :href="versonDownload['MacOS']"
               :class="osName==='MacOS'?'active':''">
              <img src="~@assets/images/online/MacGray.png"
                   alt=""
                   v-if="osName!=='MacOS'">
              <img src="~@assets/images/online/MacWhite.png"
                   alt=""
                   v-if="osName==='MacOS'">Mac OS
            </a>
            <a :href="versonDownload['Windows']"
               :class="osName==='Windows'?'active':''">
              <img src="~@assets/images/online/WindowsGray.png"
                   alt=""
                   v-if="osName!=='Windows'">
              <img src="~@assets/images/online/WindowsWhite.png"
                   alt=""
                   v-if="osName==='Windows'">
              Windows
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 读码成功后 -->
    <div class="status-success"
         v-if="status.isInsertLight">
      <!-- 模块信息 -->
      <Module-Info :Brand="deviceInfo.CompatibleType"
                   :SN="deviceInfo.SerialNumber"
                   :PN="deviceInfo.PartNumber"></Module-Info>
      <!-- 状态图 -->
      <div class="status-success-img">
        <img :src="statusImg[connStatusNum].imgUrl"
             alt="">
      </div>
      <!-- 状态图描述 -->
      <div class="status-success-msg">
        <span :class="statusImg[connStatusNum].status=='error'?'error-color':statusImg[connStatusNum].status=='success'?'success-color':''">{{statusImg[connStatusNum].msg}}</span>
        <div v-show="status.isWriteFail"
             class="batch-config-btn"
             @click="$router.push({name:'main.feedback'})">Give Feedback</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import mixin from "@assets/js/mixin/mixin";
import { addAfterSaleWriteCode } from "@service/applyWriteCode/applyWriteCode"
import { selectByModalComType, writeCodeRecord, updateAfterCode } from "@/service/common/common"

export default {
  name: "coding",
  mixins: [mixin],
  props: ['data', 'from', 'chat', 'CodeType'],
  computed: {
    ...mapGetters(['userInfo']),
    ...mapState([
      'proModelList',
      'isDriveStart',
      'versonDownload',
      'osName',
      'socketInfoUsb',
      'socketInfoLight',
      'socketInfoWrite',
      'socketInfoTry',
      'customerInfo'
    ]),
  },
  data () {
    return {
      //序列号
      serialNum: "",
      //兼容品牌
      brandVal: '',
      //状态img
      statusImg: [
        { imgUrl: require('../../assets/images/online/device.png'), msg: 'No FS_Service driver installed', status: 'none' },//驱动下载前
        { imgUrl: require('../../assets/images/online/insertUsbBefore.png'), msg: 'Please connect  FS BOX', status: 'none' },//插入usb前
        { imgUrl: require('../../assets/images/online/insertLightBefore.png'), msg: 'Please insert your transceiver for reading', status: 'none' },//插入光模块前
        { imgUrl: require('../../assets/images/online/writeTheCode.png'), msg: 'Writing...', status: 'none' },//正在写码
        { imgUrl: require('../../assets/images/online/readCodeSuccess.png'), msg: 'Configuration succeeded', status: 'success' },//写码成功
        { imgUrl: require('../../assets/images/online/readCodeError.png'), msg: 'Configuration  failed', status: 'error' }//写码失败
      ],
      //驱动读取的光模块信息
      deviceInfo: {},
      //配置文件
      configDataList: {},
      //五个特殊兼容
      specialCompatible: [{ value: 'Cisco' }, { value: 'H3C' }, { value: 'Brocade' }, { value: 'IBM' }, { value: 'Huawei' }],
      // 写码记录
      codeResultInfo: {},
      // 写码后调用接口参数
      WriteCodeAfterOption: {}
    };
  },
  methods: {
    ...mapMutations(["GETSOCKETINFO_USB"]),
    // 写码后调用
    handleAfterCode () {
      let options = {
        UserId: this.userInfo.userNo,
        emailAddress: window.atob(this.userInfo.emailAddress),
        CodeType: this.CodeType,
        ModelName: this.WriteCodeAfterOption.ModelName,
        CodeResult: this.WriteCodeAfterOption.CodeResult
      }
      updateAfterCode(options);
    },
    //开始写码
    coding () {
      if (!this.data) return false;
      this.$emit('close-icon', false);
      this.statusChange(4)
      // 测试配置
      this.tryConfig();
    },
    // 测试配置文件
    async tryConfig () {
      // let userInfo = JSON.parse(this._hyTool.getStore('userInfo'));
      // 发送给signal消息
      try {
        this.chat.then((result) => {
          let test = this.configDataList;
          result.server.send('TryConfig', JSON.stringify(test));
        });
      }
      catch {
        this.codeResultInfo.ConfigState = -1;
        this.codeResultInfo.WriteCodeState = 0;
        // 显示写码失败的状态（配置也属于写码失败）
        this.statusChange(6);
        // 配置失败记录状态
        this.saveCodeResult();
      }
    },
    async startCode () {
      // 判断bin文件是否为空
      let base64 = ''
      if (this.from === 'configuration') {
        base64 = this.data.binBase64
      } else {
        base64 = this.data.binByte;
      }

      if (!base64) {
        this.statusChange(6);
        return
      }
      // let serialNumBrocade = this.searchData.compatibleType === 'Brocade' ? this.serialNum : this.serialNum;
      let _IsCompatible
      if (this._hyTool.isInArray(this.specialCompatible, this.deviceInfo.CompatibleType) === '') {
        _IsCompatible = 0
      } else {
        _IsCompatible = 1
      }
      let payload = {
        'Base64': base64,
        'CompatibleType': '',
        'BinModel': -1, //-1未覆盖，其他未不覆盖
        'IsCompatible': _IsCompatible
      };
      try {
        //  写码请求
        this.chat.then((result) => {
          result.server.send('WriteCode', JSON.stringify(payload));
        });
      } catch (e) {
        await addAfterSaleWriteCode(this.formData);
        // 写码失败保存写码记录
        this.statusChange(6);
        this.codeResultInfo.WriteCodeState = -1;
        this.saveCodeResult();
      }
    },
    getProModelId (pn) {
      if (pn) {
        let model = this.proModelList.filter(item => pn === item.label);
        if (model.length > 0) {
          this.data.modelId = model[0].value;
        }
        this.getConfigList()
      }
    },
    // 查询配置文件
    async getConfigList () {
      if (this.data.modelId) {
        let payload = {
          modelId: this.data.modelId
        }
        const res = await selectByModalComType(payload);
        let obj = res.obj;
        this.configDataList = [];
        this.configDataList = obj.list;
        this.status.isWriteingCode = true
        this.coding();
      }
    },
    // 保存写码记录
    async saveCodeResult () {
      // debugger;
      let options = {
        CodeType: '0',
        State: 0,
        Sale: this._hyTool.getStore('adminName'),
        UserLevel: this._hyTool.getStore('userLevel'),
        UserId: this.userInfo.userNo,
        CompatibleType: this.deviceInfo.CompatibleType,
        ModalName: this.deviceInfo.PartNumber,
        OriginBinSn: this.codeResultInfo.oldSerialNumber,
        NowBinSn: this.codeResultInfo.SerialNumber,
        AttrKey: this.codeResultInfo.attrKey,
        AttrValue: this.codeResultInfo.attrValue,
        ConfigId: this.codeResultInfo.ConfigId,
        ConfigState: this.codeResultInfo.ConfigState,
        NowBase64: this.codeResultInfo.NowBase64,
        ModalCode: this.codeResultInfo.ModalCode,
        WriteCodeState: this.codeResultInfo.WriteCodeState
      }
      await writeCodeRecord(options);
    }
  },
  watch: {
    isDriveStart (val) {
      if (val) {
        this.statusChange(1)
        this.chat.then((result) => {
          result.server.send('GetInfo', '0');
        });
      }
    },
    //usb是否连接
    socketInfoUsb (val) {
      if (val === null || val === 0) return;
      // usb断开或usb连接失败
      if (val === "False" || val.Code === "1") {
        this.statusChange(7)
      } else {
        //usb连接成功
        this.statusChange(2)
      }
    },
    //光模块
    socketInfoLight (val) {
      if (val === null) {
        //未读出来
        return false;
      }
      // 光模块断开,False为断开，code为1是读码失败 -1为未连接固件
      if (val === "False" || val.Code === "1" || val.Code === "-1") {
        this.statusChange(8)
        if (val.Code === "1") {
          // 读码失败（发送getInfo无法触发usb状态，需要手动触发）
          return this.GETSOCKETINFO_USB({ message: JSON.stringify({ "Code": "Successed" }) });
        }
      } else {
        //读码成功
        this.statusChange(3)
        this.deviceInfo = val.Result;
        this.proModelList.filter((item) => item.label === this.deviceInfo.PartNumber).length === 0 &&
          this.chat.then((result) => {
            result.server.send('WaveLengthRead', JSON.stringify({ a: 1 })); // 发送的是无效数据，只为保持格式
          });
        const res = val;
        if (res.Result.PartNumber === 'DWDM-SFP8G-80' || res.Result.PartNumber === 'DWDM-SFP10G-80' || res.Result.PartNumber === 'DWDM-SFP1G-EZX' || res.Result.PartNumber === 'DWDM-SFP1G-ZX' || res.Result.PartNumber === 'DWDM-SFP10G-40' || res.Result.PartNumber === 'DWDM-XFP10G-40' || res.Result.PartNumber === 'DWDM-XFP10G-80' || res.Result.PartNumber === 'DWDM-XFP10G-120') {
          res.Result.Wavelength = '';
        }
        if (this.from === 'configuration') {
          this.status.isWriteingCode = true
          this.getProModelId(this.data.modalName)
          return
        }
        this.coding();
        // if (this.status.isWriteFail || this.status.isWriteSuccess) {
        //   this.coding()
        // }
      }
    },
    //写码前配置，配置成功返回
    async socketInfoTry (val) {
      if (val === null) return;
      if (val.Code === "0") {
        //配置成功
        // 配置成功后写码
        this.startCode();
      } else {
        this.$emit('close-icon', true);
        // 配置失败操作
        this.codeResultInfo.ConfigState = -1;
        this.codeResultInfo.WriteCodeState = 0;
        // 显示写码失败的状态（配置也属于写码失败）
        this.statusChange(6);
        // 配置失败记录状态
        this.saveCodeResult();
      }
    },
    //写码成功返回
    async socketInfoWrite (val) {
      if (val === null) return;
      if (val.Code === "0") {
        // debugger;
        //写码成功
        this.statusChange(5)
        this.$emit('close-icon', true);
        // 储存旧SN
        this.codeResultInfo.oldSerialNumber = this.deviceInfo.SerialNumber;
        // 写码成功重新获取模块信息
        this.deviceInfo = val.Result
        this.deviceInfo.CompatibleType = this.data.compatibleType || this.data.brand
        // 记录写码结果
        this.codeResultInfo.SerialNumber = val.Result.SerialNumber;
        this.codeResultInfo.NowBase64 = val.Result.originBase64;
        this.codeResultInfo.ModalCode = val.Result.modalType;
        this.codeResultInfo.WriteCodeState = 1;
        this.saveCodeResult();
        this.WriteCodeAfterOption.CodeResult = 1;
      } else {
        this.$emit('close-icon', true);
        // 写码失败
        this.statusChange(6);
        this.codeResultInfo.WriteCodeState = -1;
        // 写码失败保存写码记录
        this.saveCodeResult();
        this.WriteCodeAfterOption.CodeResult = 0;
      }
      // 写码失败后操作
      this.WriteCodeAfterOption.ModelName = val.Result.PartNumber;
      this.handleAfterCode();
    },
    data: {
      handler (newVal) {
        if (newVal === '') {
          return
        }
        // if (this.from === 'configuration') {
        //   this.status.isWriteingCode = true
        //   this.getProModelId(newVal.modalName)
        //   return
        // }
        this.configDataList = newVal.configFiles
        // this.coding();
      }
    }
  }
};
</script>
