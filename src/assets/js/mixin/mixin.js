export default {
  data () {
    return {
      currentStep: 0,
      stepList: [],
      //状态列表
      status: {
        isConnecDrive: false,//是否连接了驱动
        isInsertUsb: false,//是否连接Usb
        isInsertLight: false,//是否插入光模块
        isWriteSuccess: false,//是否写码成功
        isWriteFail: false,//是否写码失败
        isWriteingCode: false,//是否正在写码
        isDiagnosing: false,//是否诊断中
        isConfiguationFailed: false//是否配置失败
      },
      //box页 写码类型  0单个写码，1单个批量写码，2多个批量写码
      boxPro: {
        writeType: -1
      },
      //连接状态码
      connStatusNum: 0,
      //是否可以修改序列号
      isReviseSN: false,
      //是否开启批量写码
      isBatchConfiguration: false,
      //是否是首次成功  --批量处理的情况
      isFirstSuccess: false
    }
  },
  methods: {
    reload () {
      window.location.reload();
    },
    // 设置当前步骤
    setCurrentStep (curIndex, res) {
      this.currentStep = curIndex;
      if (typeof res === "object") {
        res.forEach(item => {
          this.stepList[item.index].des = item.des || "--";
          this.stepList[item.index].status = item.status || "";
        });
      }
    },
    statusChange (val) {
      // flag判断是否是通过getInfo获取的模块信息，默认null,true表示通过getInfo获取
      if (this.$route.path === "/main/onLine") {
        switch (val) {
          case 1://驱动已下载
            this.status.isConnecDrive = true;
            this.status.isInsertUsb = false;
            this.status.isInsertLight = false;
            this.connStatusNum = 1;
            this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'process' }, { index: 1, des: "Reading", status: '' }, { index: 2, des: "Configuration", status: '' }]);
            break
          case 2://usb已插入
            this.status.isConnecDrive = true;
            this.status.isInsertUsb = true;
            this.status.isInsertLight = this.status.isInsertLight || false;
            this.connStatusNum = 3
            this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'process' }, { index: 2, des: "Configuration", status: '' }]);
            break
          case 3://若已下载驱动且已插入usb则可以插入光模块
            this.connStatusNum = 4
            this.status.isConnecDrive = true;
            this.status.isInsertUsb = true;
            this.status.isInsertLight = true;
            this.status.isWriteingCode = false;
            this.status.isWriteSuccess = false;
            this.status.isWriteFail = false;
            this.setCurrentStep(1, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Configuration", status: 'process' }]);
            break
          case 4://正在读码
            this.connStatusNum = 5
            this.status.isWriteingCode = true;
            this.setCurrentStep(1, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Configuration", status: 'wait' }]);
            break
          case 5://写码成功
            this.status.isWriteingCode = false;
            this.status.isWriteSuccess = true;
            if (this.isBatchConfiguration) {//连续写码成功
              this.connStatusNum = 8
            } else {//单个写码成功
              this.connStatusNum = 6
            }
            this.setCurrentStep(2, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Configuration", status: 'finish' }]);
            break
          case 6://写码失败
            this.status.isWriteSuccess = false;
            this.status.isWriteingCode = false;
            this.status.isWriteFail = true;
            if (this.isBatchConfiguration) {//连续写码失败
              this.connStatusNum = 9
            } else {//单个写码失败
              this.connStatusNum = 7
            }
            this.setCurrentStep(1, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Configuration", status: 'error' }]);
            break
          case 7://驱动连接中断
            // this.status.isDriveStart = false;
            this.status.isInsertLight = false;
            this.connStatusNum = 0;
            this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'process' }, { index: 1, des: "Reading", status: '' }, { index: 2, des: "Configuration", status: '' }]);
            break
          case 8://usb连接中断
            this.status.isInsertLight = false;
            this.status.isInsertUsb = false;
            this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'process' }, { index: 1, des: "Reading", status: '' }, { index: 2, des: "Configuration", status: '' }]);
            this.connStatusNum = 1
            break
          case 9://光模块连接中断
            // debugger;
            this.status.isConnecDrive = true;
            this.status.isInsertLight = false;
            this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: this.status.isInsertUsb ? 'finish' : 'process' }, { index: 1, des: "Reading", status: this.status.isInsertUsb ? 'process' : '' }, { index: 2, des: "Configuration", status: '' }]);
            this.connStatusNum = this.status.isInsertUsb ? 3 : 1;
            break
          case 10://光模块读码失败
            this.status.isInsertLight = false;
            this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'process' }, { index: 1, des: "Reading", status: '' }, { index: 2, des: "Configuration", status: '' }]);
            this.connStatusNum = 10
            break
        }
      }
      if (this.$route.path === "/main/diagnosing") {
        switch (val) {
          case 0: {//驱动未连接
            this.status.isConnecDrive = false;
            this.connStatusNum = 0;
            break
          }
          case 1: {//驱动已连接
            this.status.isConnecDrive = true;
            this.status.isInsertLight = false;
            this.connStatusNum = 1;
            this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'process' }, { index: 1, des: "Reading", status: '' }, { index: 2, des: "Diagnosing", status: '' }, { index: 3, des: "Replace transceiver", status: '' }, { index: 4, des: "Matching", status: '' }]);
            break
          }
          case 2: {//usb已连接
            this.status.isInsertUsb = true;
            this.status.isInsertLight = false;
            this.status.isConnecDrive = true
            this.connStatusNum = 3
            this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: '' }, { index: 2, des: "Diagnosing", status: '' }, { index: 3, des: "Replace transceiver", status: '' }, { index: 4, des: "Matching", status: '' }]);
            break
          }
          case 3: {//插入光模块
            this.status.isInsertLight = true;
            this.status.isInsertUsb = true;
            this.status.isConnecDrive = true
            this.status.isWriteingCode = false;
            this.status.isWriteSuccess = false;
            this.status.isWriteFail = false;
            this.connStatusNum = 4;
            if (this.status.isDiagnosing) {
              this.setCurrentStep(3, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Diagnosing", status: 'finish' }, { index: 3, des: "Replace transceiver", status: 'finish' }, { index: 4, des: "Matching", status: 'process' }]);
            }
            else {
              this.setCurrentStep(1, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Diagnosing", status: 'process' }, { index: 3, des: "Replace transceiver", status: '' }, { index: 4, des: "Matching", status: '' }]);
            }
            break
          }
          case 4: {//正在写码
            this.connStatusNum = 5
            this.status.isWriteingCode = true;
            this.setCurrentStep(1, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Diagnosing", status: 'wait' }]);
            break
          }
          case 5: {//写码成功
            this.status.isWriteingCode = false;
            this.status.isWriteSuccess = true;
            if (this.isBatchConfiguration) {//连续写码成功
              this.connStatusNum = 8
            } else {//单个写码成功
              this.connStatusNum = 6
              this.status.isDiagnosing = false
            }
            this.setCurrentStep(4, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Diagnosing", status: 'finish' }, { index: 3, des: "Replace Transceiver", status: 'finish' }, { index: 4, des: "Matching", status: 'finish' }]);
            break;
          }
          case 6: {//写码失败
            this.status.isWriteSuccess = false;
            this.status.isWriteFail = true;
            if (this.isBatchConfiguration) {//连续写码失败
              this.connStatusNum = 9
            } else {//单个写码失败
              this.connStatusNum = 7
              this.status.isWriteingCode = false;
              this.status.isDiagnosing = false
            }
            this.setCurrentStep(4, [
              { index: 0, des: 'Connecting Box', status: 'finish' },
              { index: 1, des: 'Reading', status: 'finish' },
              { index: 2, des: 'Diagnosing', status: 'finish' },
              { index: 3, des: 'Replace transceiver', status: 'finish' },
              { index: 4, des: 'Matching', status: 'error' }]);
            break;
          }
          case 7: {//usb连接中断
            this.status.isInsertUsb = false
            this.status.isInsertLight = false;
            this.connStatusNum = 1
            break;
          }
          case 8: {//光模块连接中断
            if (!this.isBatchConfiguration && this.status.isWriteSuccess || !this.isBatchConfiguration && this.status.isWriteFail) {
              this.connStatusNum = 3
              this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'process' }, { index: 2, des: "Diagnosing", status: '' }, { index: 3, des: "Replace transceiver", status: '' }, { index: 4, des: "Matching", status: '' }]);
              return
            }
            if (this.isBatchConfiguration && this.status.isConfiguationFailed) {
              this.setCurrentStep(2, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Diagnosing", status: 'finish' }, { index: 3, des: "Replace transceiver", status: 'wait' }, { index: 4, des: "Matching", status: '' }]);
              return
            }
            this.status.isInsertLight = false
            this.status.isConnecDrive = true
            this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: this.status.isInsertUsb ? 'finish' : 'process' }, { index: 1, des: "Reading", status: this.status.isInsertUsb ? 'process' : '' }, { index: 2, des: "Diagnosing", status: '' }, { index: 3, des: "Replace transceiver", status: '' }, { index: 4, des: "Matching", status: '' }]);
            this.connStatusNum = this.status.isInsertUsb ? 3 : 1
            break;
          }
        }
      }
      if (this.$route.path === "/main/boxPro") {
        // debugger;
        switch (val) {
          case 0: {//驱动未连接
            this.status.isConnecDrive = false;
            this.status.isInsertLight = false;
            this.connStatusNum = 0;
            break
          }
          case 1: {//驱动已连接
            this.status.isConnecDrive = true;
            // this.status.isInsertLight = false;
            this.connStatusNum = 1;
            this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'process' }, { index: 1, des: "Reading", status: '' }, { index: 2, des: "Configuration", status: '' }]);
            break
          }
          case 2: {//usb已连接
            this.status.isInsertUsb = true;
            this.status.isConnecDrive = true
            // this.status.isInsertLight = false;
            this.connStatusNum = 3
            this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'process' }, { index: 2, des: "Configuration", status: '' }]);
            if (this.boxPro.writeType === 1 || this.boxPro.writeType === 2) {
              if (this.status.isWriteingCode) {
                this.setCurrentStep(1, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Configuration", status: 'process' }]);
              }
              if (!this.status.isWriteingCode) {
                this.setCurrentStep(1, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Configuration", status: 'process' }]);
              }
            }
            break
          }
          case 3: {//插入光模块
            this.status.isInsertLight = true;
            this.status.isInsertUsb = true;
            this.status.isConnecDrive = true
            this.status.isWriteSuccess = false;
            this.status.isWriteFail = false;
            if (this.boxPro.writeType === 1 && !this.status.isWriteingCode) {
              this.setCurrentStep(1, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Configuration", status: 'process' }]);
            }
            if (this.boxPro.writeType === 1 && this.status.isWriteingCode) {
              this.connStatusNum = 5
              this.setCurrentStep(1, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Configuration", status: 'wait' }]);
            }
            if (this.boxPro.writeType === 2 && this.status.isWriteingCode) {
              this.setCurrentStep(1, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Configuration", status: 'wait' }]);
            }
            if (this.boxPro.writeType === 2 && !this.status.isWriteingCode) {
              this.setCurrentStep(1, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Configuration", status: 'process' }]);
            }
            break
          }
          case 4: {//正在写码
            if (this.boxPro.writeType === 2) {
              this.status.isWriteingCode = true;
              this.setCurrentStep(1, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Configuration", status: 'wait' }]);
            } else {
              this.status.isWriteingCode = true;
              this.connStatusNum = 5
              this.setCurrentStep(1, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Configuration", status: 'wait' }]);
            }
            break
          }
          case 5: {//写码成功
            this.status.isWriteSuccess = true
            if (this.boxPro.writeType === 0) {
              this.connStatusNum = 6
            }
            if (this.boxPro.writeType === 1) {
              this.connStatusNum = 8
            }
            this.setCurrentStep(2, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Configuration", status: 'finish' }]);
            break
          }
          case 6: {//写码失败
            if (this.boxPro.writeType === 0 && this.status.isInsertUsb && !this.status.isInsertLight) {
              this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'process' }, { index: 2, des: "Configuration", status: 'error' }]);
              return
            }
            if (this.boxPro.writeType === 0 && !this.status.isInsertUsb) {
              this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'wait' }, { index: 1, des: "Reading", status: '' }, { index: 2, des: "Configuration", status: 'error' }]);
              return
            }
            //writeType为1，写码时拔出光模块或拔出usb
            if (this.boxPro.writeType === 1 && this.status.isInsertUsb && !this.status.isInsertUsb || this.boxPro.writeType === 1 && !this.status.isInsertUsb) {
              this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'wait' }, { index: 2, des: "Configuration", status: 'error' }]);
              return
            }
            if (this.boxPro.writeType === 2 && this.status.isWriteingCode && this.status.isInsertLight) {
              this.setCurrentStep(1, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Configuration", status: 'error' }]);
              this.status.isWriteFail = true
              this.status.isWriteSuccess = false
              this.connStatusNum = 9
              return
            }
            //如果writetype为2且是既没有写码成功和写码失败则是正在写码的时候断开了光模块
            if (this.boxPro.writeType === 2 && this.status.isWriteingCode && !this.status.isWriteSuccess && !this.status.isWriteFail) {
              this.status.isWriteFail = true
              this.status.isWriteSuccess = false
              // this.setCurrentStep(1, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Configuration", status: 'error' }]);
              return
            }
            this.status.isWriteFail = true
            this.status.isWriteSuccess = false
            if (this.boxPro.writeType === 0) {
              this.connStatusNum = 7
            }
            if (this.boxPro.writeType === 1) {
              this.connStatusNum = 9
            }
            if (this.boxPro.writeType === 1 && !this.status.isWriteSuccess && !this.status.isWriteFail) {
              this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Configuration", status: 'error' }]);
            }
            this.setCurrentStep(1, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Configuration", status: 'error' }]);
            break
          }
          case 7: {//usb连接中断
            if (this.boxPro.writeType === 0 && this.status.isInsertUsb && !this.status.isInsertLight) {
              return
            }
            this.status.isInsertUsb = false
            this.status.isInsertLight = false
            if (this.boxPro.writeType === 0 && this.status.isWriteSuccess) {
              this.connStatusNum = 1
              this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'wait' }, { index: 1, des: "Reading", status: '' }, { index: 2, des: "Configuration", status: '' }]);
              return
            }
            if (this.boxPro.writeType === 0) {
              this.connStatusNum = 2
              this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'process' }, { index: 1, des: "Reading", status: '' }, { index: 2, des: "Configuration", status: '' }]);
              return
            }
            if (this.boxPro.writeType === 1 || this.boxPro.writeType === 2) {
              if (this.status.isWriteingCode) {
                this.connStatusNum = 9
                this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'wait' }, { index: 1, des: "Reading", status: '' }, { index: 2, des: "Configuration", status: 'error' }]);
              }
              if (!this.status.isWriteingCode) {
                this.connStatusNum = 1
                this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'wait' }, { index: 1, des: "Reading", status: '' }, { index: 2, des: "Configuration", status: '' }]);
                return
              }
            }
            this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'process' }, { index: 1, des: "Reading", status: '' }, { index: 2, des: "Configuration", status: '' }]);
            this.connStatusNum = 1
            break;
          }
          case 8: {//光模块连接中断
            this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'process' }, { index: 2, des: "Configuration", status: '' }]);
            if (this.boxPro.writeType === 0 && this.status.isWriteSuccess) {
              this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'process' }, { index: 2, des: "Configuration", status: '' }]);
            }
            if (this.boxPro.writeType === 0 && this.status.isWriteFail) {
              this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'process' }, { index: 2, des: "Configuration", status: '' }]);
            }
            if (this.boxPro.writeType === 0 && this.status.isWriteingCode) {
              this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'process' }, { index: 2, des: "Configuration", status: '' }]);
            }
            if (this.boxPro.writeType === 1 && this.status.isWriteSuccess) {
              this.connStatusNum = 3
              this.status.isWriteSuccess = false
              this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'process' }, { index: 2, des: "Configuration", status: '' }]);
              return
            }
            if (this.boxPro.writeType === 1 && !this.status.isWriteingCode) {
              this.connStatusNum = 3
              this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'process' }, { index: 2, des: "Configuration", status: '' }]);
              return
            }
            if (this.boxPro.writeType === 1 && this.status.isWriteingCode) {
              this.connStatusNum = 3
              this.status.isInsertLight = false
              this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'process' }, { index: 2, des: "Configuration", status: 'error' }]);
              return
            }
            if (this.boxPro.writeType === 2 && this.status.isWriteSuccess || this.boxPro.writeType === 2 && this.status.isWriteFail) {
              this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'process' }, { index: 2, des: "Configuration", status: '' }]);
              // this.status.isWriteSuccess = false
              // this.status.isWriteFail = false
              return
            }
            if (this.boxPro.writeType === 2 && this.status.isWriteingCode && !this.status.isWriteSuccess && !this.status.isWriteFail) {
              // this.status.isWriteFail = true
              this.status.isInsertLight = false
              this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'process' }, { index: 2, des: "Configuration", status: 'error' }]);
              return
            }
            if (this.boxPro.writeType === 2 && !this.status.isWriteingCode) {
              this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'process' }, { index: 2, des: "Configuration", status: 'error' }]);
            }
            this.connStatusNum = this.status.isInsertUsb ? 3 : 1;
            this.status.isInsertLight = false
            break;
          }
          case 9: {//读码中
            this.status.isInsertLight = true
            // this.status.isWriteingCode = true
            this.connStatusNum = 5
            this.setCurrentStep(1, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Configuration", status: 'wait' }]);
            break;
          }
        }
      }
      if (this.$route.path === "/main/afterSales" || this.$route.path === "/main/configuration") {
        switch (val) {
          case 0: {//驱动未连接
            this.status.isConnecDrive = false
            this.connStatusNum = 0;
            break;
          }
          case 1: {//驱动已连接
            this.status.isConnecDrive = true
            this.connStatusNum = 1;
            this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'process' }, { index: 1, des: "Reading", status: '' }, { index: 2, des: "Configuration", status: '' }]);
            break;
          }
          case 2: {//usb已连接
            this.status.isInsertUsb = true;
            this.status.isConnecDrive = true
            this.connStatusNum = 2
            this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'process' }, { index: 2, des: "Configuration", status: '' }]);
            break;
          }
          case 3: {//光模块已连接
            this.status.isInsertLight = true;
            this.status.isInsertUsb = true;
            this.status.isConnecDrive = true;
            this.connStatusNum = 3
            if (this.status.isWriteingCode && this.status.isWriteFail || this.status.isWriteingCode && this.status.isWriteSuccess) {
              this.setCurrentStep(1, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Configuration", status: 'wait' }]);
              return
            }
            this.status.isWriteSuccess = false;
            this.status.isWriteFail = false;
            this.setCurrentStep(1, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Configuration", status: 'process' }]);
            break;
          }
          case 4: {//正在写码
            this.status.isWriteSuccess = false
            this.status.isWriteFail = false
            this.connStatusNum = 3
            this.setCurrentStep(1, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Configuration", status: 'wait' }]);
            break;
          }
          case 5: {//写码成功
            this.status.isWriteSuccess = true
            this.connStatusNum = 4
            this.setCurrentStep(2, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Configuration", status: 'finish' }]);
            break;
          }
          case 6: {//写码失败
            this.status.isWriteFail = true
            this.status.isWriteSuccess = false
            this.connStatusNum = 5
            this.setCurrentStep(2, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Configuration", status: 'error' }]);
            break
          }
          case 7: {//usb连接中断
            this.status.isInsertUsb = false
            this.status.isInsertLight = false
            this.status.isConnecDrive = true
            this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'process' }, { index: 1, des: "Reading", status: '' }, { index: 2, des: "Configuration", status: '' }]);
            this.connStatusNum = 1
            break;
          }
          case 8: {//光模块连接中断
            this.status.isInsertLight = false;
            this.status.isConnecDrive = true;
            if (this.status.isInsertUsb) {
              this.connStatusNum = 2;
              this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'finish' }, { index: 1, des: "Reading", status: 'wait' }, { index: 2, des: "Configuration", status: '' }]);
            } else {
              this.connStatusNum = 1;
              this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'process' }, { index: 1, des: "Reading", status: '' }, { index: 2, des: "Configuration", status: '' }]);
            }
            break;
          }
        }
      }
    }
  },
  beforeMount () {
    //不同组件的进度条
    if (this.$route) {
      if (this.$route.path === "/main/onLine") {
        this.stepList = [
          {
            title: "",
            des: "Connecting Box",
            status: ''
          },
          {
            title: "",
            des: 'Reading',
            status: ''
          },
          {
            title: "",
            des: 'Configuration',
            status: ''
          }
        ]
      }
      if (this.$route.path === "/main/diagnosing") {
        this.stepList = [
          {
            title: "",
            des: "Connecting Box",
            status: ''
          },
          {
            title: "",
            des: 'Reading',
            status: ''
          },
          {
            title: "",
            des: 'Diagnosing',
            status: ''
          },
          {
            title: "",
            des: 'Replace transceiver',
            status: ''
          },
          {
            title: "",
            des: 'Matching',
            status: ''
          }
        ]
      }
      if (this.$route.path === "/main/boxPro") {
        this.stepList = [
          {
            title: "",
            des: "Connecting Box",
            status: ''
          },
          {
            title: "",
            des: 'Reading',
            status: ''
          },
          {
            title: "",
            des: 'Configuration',
            status: ''
          }
        ]
      }
      if (this.$route.path === "/main/afterSales" || this.$route.path === "/main/configuration") {
        this.stepList = [
          {
            title: "",
            des: "Connecting Box",
            status: ''
          },
          {
            title: "",
            des: 'Reading',
            status: ''
          },
          {
            title: "",
            des: 'Configuration',
            status: ''
          }
        ]
      }
    }
  }
}
