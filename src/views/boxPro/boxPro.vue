<style lang="scss" scoped>
@import "~@assets/styles/_mixins";
// .scroll ::-webkit-scrollbar {
//   //隐藏所有纵向滚动条
//   display: none;
// }
// .scroll ::-webkit-scrollbar {
//   //滚动条背景
//   width: 5px;
//   height: 10px;
//   background: white;
//   border-radius: 6px;
// }
// .scroll ::-webkit-scrollbar-thumb {
//   //滚动条滑块
//   background: #ccc;
//   border-radius: 6px;
// }
.content {
  @include pd(0, 40px);
}
.box-header {
  border-bottom: 2px solid #eaeff5;
  .box-header-t {
    @include wh(100%, 83px);
    @include f-sc(16px, #445f87);
    @include f-w(600);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      @include position(relative);
      cursor: pointer;
      /deep/ .ivu-tooltip-arrow {
        border-bottom-color: #fff;
      }
      /deep/ .ivu-tooltip-inner {
        min-width: 225px;
        background: #fff;
        @include pd(20px);
        @include f-sc(14px, #7b8fa5);
        white-space: normal;
        font-weight: normal;
      }
      .icon {
        display: inline-block;
        vertical-align: middle;
        @include sprite(-158px, -392px, 16px, 16px);
        &:hover {
          @include sprite(-194px, -392px, 16px, 16px);
        }
      }
    }
    .toggle {
      display: inline-block;
      cursor: pointer;
      @include sprite(-143px, -341px, 14px, 14px);
      &.open {
        @include sprite(-174px, -341px, 14px, 14px);
      }
    }
  }
}
.box-body-t {
  margin-bottom: 20px;
  .title {
    @include wh(100%, 67px);
    display: flex;
    align-items: center;
    @include f-sc(16px, #445f87);
    @include f-w(600);
  }
  .action {
    display: flex;
    justify-content: space-between;
    white-space: nowrap;
    .action-l {
      .ivu-btn {
        @include br(3px);
        @include l-height(46px);
        margin-right: 10px;
        @include f-w(600);
        font-size: 14px;
        &.ivu-btn-primary {
          background: linear-gradient(
            -90deg,
            rgba(55, 160, 246, 1),
            rgba(56, 126, 233, 1)
          );
          /deep/ .ivu-tooltip-inner {
            min-width: 335px;
            background: #fff;
            @include pd(20px);
            @include f-sc(14px, #7b8fa5);
            white-space: normal;
          }
          /deep/ .ivu-tooltip-arrow {
            border-bottom-color: #fff;
          }
          .icon {
            display: inline-block;
            vertical-align: middle;
            @include sprite(-266px, -393px, 16px, 16px);
            &:hover {
              @include sprite(-158px, -392px, 16px, 16px);
            }
          }
        }
        &.ivu-btn-default {
          color: #7b8fa5;
          &:hover {
            color: #57a3f3;
          }
        }
      }
    }
    .action-r {
      @include position(relative);
      /deep/ .ivu-select-dropdown {
        .ivu-select-item {
          color: #7b8fa5;
        }
      }
      /deep/ .ivu-select-selection,
      /deep/ .ivu-input {
        @include l-height(46px);
        .ivu-select-placeholder {
          @include l-height(46px);
        }
        &:focus {
          box-shadow: none;
        }
      }
      /deep/ .ivu-select-selection {
        border-radius: 3px 0px 0px 3px;
        box-shadow: none;
        .ivu-select-selected-value {
          padding-left: 12px;
          line-height: 46px;
          height: 46px;
        }
      }
      /deep/ .ivu-input {
        border-left: none;
        border-radius: 0px 3px 3px 0px;
        width: 320px;
        @media screen and (max-width: 1380px) {
          width: 41%;
        }
      }
      .search-icon {
        @include position(absolute, 50%, 10px);
        margin-top: -8px;
        display: inline-block;
        cursor: pointer;
        @include sprite(-316px, -90px, 16px, 16px);
      }
    }
  }
}
.status-success {
  .status-success-img {
    text-align: center;
  }
  .status-success-msg {
    // margin-top: 59px;
    font-size: 34px;
    color: #ff9c5d;
    text-align: center;
    user-select: none;
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
      color: rgba(123, 143, 165, 1);
      margin-top: 32px;
      cursor: pointer;
    }
  }
  .table-box {
    max-width: 69%;
    margin: auto;
    border: 1px solid rgba(233, 239, 245, 1);
    border-radius: 3px;
    min-width: 580px;
    margin-bottom: 40px;
    max-height: 290px;
    overflow-y: scroll;
    .table-title {
      display: flex;
      padding: 20px;
      color: #7b8fa5;
      font-size: 14px;
      line-height: 9px;
      border-bottom: 1px solid rgba(233, 239, 245, 1);
    }
    .table-title :nth-of-type(1) {
      flex: 0.2;
    }
    .table-title :nth-of-type(2) {
      flex: 0.3;
    }
    .table-title :nth-of-type(3) {
      flex: 0.2;
    }
    .table-title :nth-of-type(4) {
      flex: 0.2;
    }
    .table-title :nth-of-type(5) {
      flex: 0.13;
      text-align: right;
    }
    .table-content {
      display: flex;
      padding: 20px;
      color: #435f87;
      font-size: 14px;
      line-height: 9px;
      border-bottom: 1px solid rgba(233, 239, 245, 1);
    }
    .table-content :nth-of-type(1) {
      flex: 0.2;
    }
    .table-content :nth-of-type(2) {
      flex: 0.3;
    }
    .table-content :nth-of-type(3) {
      flex: 0.2;
    }
    .table-content :nth-of-type(4) {
      flex: 0.2;
    }
    .table-content :nth-of-type(5) {
      flex: 0.13;
      text-align: right;
    }
  }
  .table-box::-webkit-scrollbar {
    width: 5px;
    height: 10px;
    background: rgba(247, 247, 247, 1);
    border-radius: 3px;
  }
  .table-box::-webkit-scrollbar-thumb {
    background: #d7d7d7;
    border-radius: 4px;
  }
  .table-batch-bottom {
    width: 240px;
    height: 46px;
    border-radius: 3px;
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    line-height: 46px;
    text-align: center;
    margin: auto;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
  }
  .table-batch-nodisable {
    background: linear-gradient(
      -90deg,
      rgba(55, 159, 245, 1),
      rgba(55, 125, 233, 1)
    );
  }
  .table-batch-disable {
    background: linear-gradient(
      -90deg,
      rgba(255, 199, 80, 1),
      rgba(255, 156, 93, 1)
    );
  }
  .table-batch-desc {
    width: 69%;
    margin: auto;
    position: relative;
    bottom: 39px;
    font-weight: 600;
  }
  .batch-config-btn {
    width: 240px;
    height: 46px;
    border: 2px solid rgba(123, 143, 165, 0.3);
    border-radius: 3px;
    color: rgba(123, 143, 165, 1);
    line-height: 40px;
    font-weight: bold;
    text-align: center;
    margin: auto;
  }
  .table-batch-stopbatch {
    color: #7b8fa5;
    border: 2px solid rgba(123, 143, 165, 0.3);
    border-radius: 3px;
  }
}
.no-data {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
}
.ivu-collapse {
  background: #fff;
  border: none;
  height: 500px;
  overflow-y: auto;
  position: relative;
  .ivu-collapse-item {
    border: none;
    &.ivu-collapse-item-active {
      /deep/ .ivu-collapse-header {
        margin-bottom: 0px;
        border-bottom: none;
        /deep/ i {
          transform: rotate(270deg);
        }
      }
      /deep/ .ivu-collapse-content {
        .ivu-table {
          border-top: none;
          .ivu-table-tip {
            &::-webkit-scrollbar {
              display: none;
            }
          }
        }
      }
    }
    /deep/ .ivu-collapse-header {
      @include l-height(52px);
      @include f-sc(14px, #7b8fa5);
      border: 1px solid #eaeff5;
      margin-bottom: 10px;
      i {
        @include position(absolute, 50%, 20px);
        transform: rotate(90deg);
        margin-top: -7px;
      }
      span {
        margin-right: 57px;
        color: #7b8fa5;
        & > span {
          color: #435f87;
        }
      }
    }
    /deep/ .ivu-collapse-content {
      @include pd(0);
      margin-bottom: 10px;
      .ivu-collapse-content-box {
        @include pd(0);
      }
      .ivu-table {
        border: 1px solid #eaeff5;
        // border-bottom: none;
        padding: 0 18px 0 20px;
        &::before {
          height: 0;
        }
        th,
        td {
          height: 50px;
          background: #fff;
        }
        th {
          @include f-w(normal);
          @include f-sc(14px, #7b8fa5);
          border-top: 1px solid #e8eaec;
        }
        td {
          @include f-sc(14px, #445f87);
        }
        tr {
          &:nth-last-child(1) {
            td {
              border: none;
            }
          }
        }
        .ivu-table-overflowX {
          overflow: hidden;
        }
        .ivu-checkbox-inner {
          // border: 2px solid #a5bad0;
          &.ivu-checkbox-focus {
            box-shadow: none;
          }
        }
      }
    }
    /deep/ th .ivu-table-cell {
      color: #7b8fa5;
      font-size: 14px;
      white-space: nowrap;
      padding: 0;
    }
    /deep/ td .ivu-table-cell {
      overflow: inherit;
      padding: 0;
    }
  }
}
.ivu-collapse::-webkit-scrollbar {
  // width: 5px;
  // height: 10px;
  display: none;
}
.ivu-collapse::-webkit-scrollbar-thumb {
  background: #d7d7d7;
}
.steping {
  padding: 40px 0;
}
.online-status {
  padding: 28px 0 0;
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
      span {
        color: #387fe9;
        cursor: pointer;
      }
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
  }
}

/deep/ .ivu-modal {
  // max-height: 783px;
  width: 1280px !important;
  /deep/ .ivu-modal-content {
    border-radius: 3px;
    /deep/ .ivu-modal-body {
      padding: 50px 0 50px 0;
      // min-height: 783px;
      box-sizing: border-box;
      h3 {
        @include f-sc(24px, #445f87);
        text-align: center;
      }
    }
  }
}
@media (max-width: 1280px) {
  /deep/ .ivu-modal {
    width: 980px !important;
  }
}

.body-content {
  .tip-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    p {
      color: #445f87;
      font-size: 18px;
      position: relative;
      padding: 0 42px 0 74px;
      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        left: 45px;
        // top: 50%;
        // margin-top: -12px;
        @include sprite(-130px, -492px, 20px, 20px);
      }
    }
    .ivu-btn {
      width: 240px;
      height: 46px;
      border-radius: 3px;
      font-weight: 600;
      &.ivu-btn-primary {
        margin: 42px 0 5px;
      }
      &.ivu-btn-text {
        color: #3880ea;
        &:hover {
          color: #3880ea;
        }
        &:focus {
          box-shadow: 0 0 0 0 transparent;
        }
      }
    }
  }
}
</style>

<template>
  <div class="content">
    <div class="box-header">
      <!-- 头部 -->
      <div class="box-header-t">
        <p class="title">
          Transceiver information
          <Tooltip content="Connect transceiver to view information."
                   placement="bottom">
            <span class="icon"></span>
          </Tooltip>
        </p>
        <span :class="['toggle',{'open':isToggle}]"
              @click="isToggle=!isToggle"></span>
      </div>
      <!-- 头部 ModuleInfo -->
      <div class="box-header-b"
           v-if="isToggle">
        <Module-Info :Brand="deviceInfo.CompatibleType"
                     :SN="deviceInfo.SerialNumber"
                     :PN="deviceInfo.PartNumber"></Module-Info>
      </div>
    </div>
    <!-- 主体部分 -->
    <div class="box-body">
      <div class="box-body-t">
        <div class="title">Available Configuration</div>
        <div class="action">
          <div class="action-l">
            <Button type="primary"
                    @click="batchWriteCode">
              Batch Configuration
              <Tooltip placement="bottom">
                <div slot="content"
                     v-html="`● When a single configuration is selected for
                  batch configuration. the cofiguration will
                  be repetedly reconfiured.<br/><br/>
                  ● When multiple configurations are selected
                  for batch configuration, the system will
                  continue to reconfigure according to the
                  selected order.`">
                </div>
                <span class="icon"
                      @click="_getList"></span>
              </Tooltip>
            </Button>
            <Button @click="$router.push({name:'main.order',query:{tabIndex:0}})">Request Configuration</Button>
          </div>
          <div class="action-r">
            <Select v-model="serchType"
                    @on-change="serchTypeChange"
                    style="width:240px">
              <Option value="1">Application No</Option>
              <Option value="2">Order No</Option>
              <Option value="3">S/N</Option>
            </Select>
            <Input v-model="serchText"
                   v-on:keyup.enter.native="selectSerchTypeList"
                   placeholder="Please filling" />
            <span class="search-icon"
                  @click="selectSerchTypeList"></span>
          </div>
        </div>
      </div>
      <!-- 分页centent -->
      <Collapse v-model="showPanelVal"
                @on-change="getProInfo"
                accordion>
        <Panel v-for="(item,i) in list"
               :key="i"
               :name="`${i}`">
          <span>
            Application No/Date:
            <span>{{item.applyNo}} / {{item.valiStartDate}}</span>
          </span>
          <span>
            Order No:
            <span>{{item.orderNumber}}</span>
          </span>
          <div slot="content"
               class="scroll">
            <Table ref="selection"
                   :columns="tableTitle"
                   :data="item.proData"
                   @on-select-all="selAll"
                   @on-select="selOnce"
                   @on-selection-change="handleSelectionChange($event, i)"
                   @on-select-cancel="cancelOnce"
                   no-data-text="No Data"
                   :key="refreshData"></Table>
            <my-spin :loading="loadingIndex===i"></my-spin>
          </div>
        </Panel>
        <my-spin :loading="isLoading"></my-spin>
        <!-- 加载动画 -->
        <div v-if="list.length === 0"
             class="no-data">
          <span>No Data</span>
        </div>
      </Collapse>
      <!-- 分页 -->
      <page-services :totalElement="pageParam.totalElement"
                     @current-change="currentChange"></page-services>
    </div>
    <!-- 写码弹框 -->
    <Modal v-model="isOpenWrite"
           :closable="!status.isWriteingCode||status.isWriteFail"
           :footer-hide="true"
           :mask-closable="false"
           class-name="vertical-center-modal"
           @on-ok="ok"
           @on-cancel="cancel">
      <div :key="refreshStatus">
        <h3>Transceiver information</h3>
        <div class="steping">
          <Steping :list="stepList"
                   :current="currentStep"></Steping>
        </div>
        <!-- 下载驱动 -->
        <div class="online-status"
             v-if="!status.isInsertLight">
          <div class="statusImg-box">
            <img :src="statusImg[connStatusNum].imgUrl"
                 alt />
          </div>
          <div class="status-info">
            <div :class="statusImg[connStatusNum].status=='error'?'error-color':statusImg[connStatusNum].status=='success'?'success-color':'status-msg'">{{statusImg[connStatusNum].msg}}</div>
            <div class="status-text-box"
                 v-if="!status.isConnecDrive">
              <p class="status-text">
                Please
                <span @click="reload">reload</span>
                the browser after the installation is complete.
              </p>
              <p class="status-text">It is recommended to activate your service in Google Chrome (68 version and later)</p>
              <!-- 安装驱动 -->
              <a :href="versonDownload['MacOS']"
                 :class="osName==='MacOS'?'active':''">
                <img src="~@assets/images/online/MacGray.png"
                     alt
                     v-if="osName!=='MacOS'" />
                <img src="~@assets/images/online/MacWhite.png"
                     alt
                     v-if="osName==='MacOS'" />Mac OS
              </a>
              <a :href="versonDownload['Windows']"
                 :class="osName==='Windows'?'active':''">
                <img src="~@assets/images/online/WindowsGray.png"
                     alt
                     v-if="osName!=='Windows'" />
                <img src="~@assets/images/online/WindowsWhite.png"
                     alt
                     v-if="osName==='Windows'" />
                Windows
              </a>
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
          <div v-if="!isShowBatchInfo">
            <!-- 状态图 -->
            <div class="status-success-img"
                 v-if="status.isWriteFail==true||status.isWriteingCode==true||status.isWriteSuccess==true">
              <img :src="statusImg[connStatusNum].imgUrl"
                   alt />
            </div>
            <!-- 状态图描述 -->
            <div class="status-success-msg"
                 v-if="status.isWriteSuccess==true||status.isWriteFail==true||status.isWriteingCode==true">
              <span :class="statusImg[connStatusNum].status=='error'?'error-color':statusImg[connStatusNum].status=='success'?'success-color':''">{{statusImg[connStatusNum].msg}}</span>
              <div v-show="boxPro.writeType===0&&status.isWriteFail||boxPro.writeType===1&&status.isWriteFail||boxPro.writeType===1&&status.isWriteSuccess"
                   class="batch-config-btn"
                   @click="boxPro.writeType===0&&status.isWriteFail?$router.push({name:'main.feedback'}):stopBatchConfiguraion"
                   v-text="boxPro.writeType===0&&status.isWriteFail?'Give Feedback':'Stop Batch Configuration'"></div>
            </div>
          </div>
          <!-- 连续写码信息展示表格 -->
          <div v-if="isShowBatchInfo">
            <div class="table-box">
              <div class="table-title">
                <span>No.</span>
                <span>P/N</span>
                <span>Brand</span>
                <span>New S/N</span>
                <span>Status</span>
              </div>
              <div class="table-content"
                   v-for="(item,i) in codingItemAry"
                   :key="i">
                <span>{{i+1}}/{{codingItemAry.length}}</span>
                <span>{{item.proModel}}</span>
                <span>{{item.compatibleType}}</span>
                <span>{{item.binfileName}}</span>
                <span :style="item.status===1?'color:#FF9C5D;':item.status===2?'color:#32D7B0;':item.status===3?'color:#F66767;':'color:#445F87;'">{{item.status===0?'Waiting':item.status===1?'Configuration':item.status===2?'Succeeded':item.status===3?'Failed':''}}</span>
              </div>
            </div>
            <div class="table-batch-desc"
                 :style="stopBatchShow.descStyle"
                 v-if="stopBatchShow.isShowDesc">{{stopBatchShow.descText}}</div>
            <div class="table-batch-bottom"
                 :class="stopBatchShow.bottomClass"
                 @click="startBatchConfBtn(stopBatchShow.btnText)">{{stopBatchShow.btnText}}</div>
          </div>
        </div>
      </div>
    </Modal>
    <!-- 禁止用户写码 -->
    <fs-modal :show="isCanWriteCode"
              :closeShow="false"
              :width="480"
              :footerHide="true">
      <div class="tip-box">
        <p>
          The account is detected to be abnormal, login/code configuration has been restricted, please contact your account manager for processing
        </p>
        <Button type="primary"
                @click="handleContact">Contact Now</Button>
        <Button type="text"
                @click="isCanWriteCode = false">Cancle</Button>
      </div>
    </fs-modal>
  </div>
</template>

<script>
import pageServices from "@components/pageServices/pageServices";
// import coding from '@components/coding/coding';
import { mapGetters, mapState, mapMutations } from "vuex";
import {
  writeCodePage,
  applyWriteCodeRecord,
  applyWriteCodeRecordBySn
} from "@service/boxPro/boxPro";
import mixin from "@assets/js/mixin/mixin";
import { getCompatible, writeCodeRecord, updateAfterCode } from "@service/common/common";
import fsModal from '@components/modal/modals';

export default {
  components: {
    pageServices,
    fsModal
    // coding
  },
  mixins: [mixin],
  computed: {
    ...mapGetters(["userInfo"]),
    ...mapState([
      "socketInfoLight",
      "socketInfoUsb",
      "socketInfoWrite",
      "socketInfoTry",
      "osName",
      "versonDownload",
      "isDriveStart"
    ]),
    stopBatchShow: function () {
      var descStyle = ""; //多个批量成功或失败的描述样式
      var bottomClass = ""; //按钮样式
      var isShowDesc = false; //多个批量写码的描述文本是否显示
      var descText = ""; //多个批量写码成功或失败的描述内容
      var btnText = ""; //多个批量写码按钮的文本
      if (
        this.boxPro.writeType === 2 &&
        this.status.isWriteingCode &&
        !this.status.isWriteSuccess &&
        !this.status.isWriteFail
      ) {
        bottomClass = "table-batch-disable";
      }
      if (this.boxPro.writeType === 1 && !this.status.isWriteingCode || this.boxPro.writeType === 2 && !this.status.isWriteingCode) {
        bottomClass = "table-batch-nodisable";
      }
      if (
        (this.boxPro.writeType === 2 &&
          this.status.isWriteingCode &&
          this.status.isWriteSuccess) ||
        (this.boxPro.writeType === 2 &&
          this.status.isWriteingCode &&
          this.status.isWriteFail)
      ) {
        bottomClass = "table-batch-stopbatch";
      }
      if (this.boxPro.writeType === 2 && this.status.isWriteSuccess) {
        descStyle = "color:rgba(50,215,176,1);";
      } else {
        descStyle = "color:rgba(246,103,103,1);";
      }

      if (
        (this.boxPro.writeType === 2 && this.status.isWriteSuccess) ||
        (this.boxPro.writeType === 2 && this.status.isWriteFail)
      ) {
        isShowDesc = true;
      }

      if (this.boxPro.writeType === 2 && this.status.isWriteSuccess) {
        descText = "Please replace the transceiver to be Configuration";
      } else if (this.boxPro.writeType === 2 && this.status.isWriteFail) {
        descText = "Please try again or Insert the next transceiver";
      }

      if (
        this.boxPro.writeType === 2 &&
        this.status.isWriteingCode &&
        !this.status.isWriteSuccess &&
        !this.status.isWriteFail
      ) {
        btnText = "Configuration......";
      } else if (
        (this.boxPro.writeType === 2 &&
          this.status.isWriteingCode &&
          this.status.isWriteSuccess) ||
        (this.boxPro.writeType === 2 &&
          this.status.isWriteingCode &&
          this.status.isWriteFail)
      ) {
        btnText = "Stop Batch Configuration";
      } else if (!this.status.isWriteingCode) {
        btnText = "Start Batch Confuguration";
      }
      return {
        bottomClass,
        descStyle,
        isShowDesc,
        descText,
        btnText
      };
    }
  },
  props: ["chat"],
  data () {
    return {
      //切换显示moduleInfo
      isToggle: false,
      //手风琴默认展开第一个
      showPanelVal: ["0"],
      //搜索类型的下拉框val 默认为S/N
      serchType: "3",
      //查询的文本
      serchText: "",
      //表单标题
      tableTitle: [
        {
          type: "selection",
          width: 30,
          align: "center"
        },
        {
          title: "Product ID",
          key: "proId",
          render: (h, params) => {
            return h('span', `#${params.row.proId}`)
          }
        },
        {
          title: "P/N",
          key: "proModel"
        },
        {
          title: "Brand",
          key: "compatibleType"
        },
        {
          title: "Vendor Name",
          key: "proBus"
        },
        {
          title: "Attribute",
          key: "proWaveLength"
        },
        {
          title: "New S/N",
          key: "binfileName"
        },
        {
          title: "Application Note",
          key: "applyRemarks",
          width: 140
        },
        {
          title: "Action",
          key: "action",
          width: 130,
          render: (h, parse) => {
            return h(
              "a",
              {
                on: {
                  click: () => {
                    // 检测不通过禁止写码
                    if (!JSON.parse(this._hyTool.getStore("isCanWrite"))) return this.isCanWriteCode = true;
                    if (
                      (this.boxPro.writeType === 1 &&
                        this.status.isWriteingCode) ||
                      (this.boxPro.writeType === 2 &&
                        this.status.isWriteingCode)
                    ) {
                      this.$Message.warning({
                        content: "Is writing code",
                        duration: 3
                      });
                      return;
                    }
                    this.isOpenWrite = true;
                    this.boxPro.writeType = 0;
                    this.singleWriteCodeItem = parse.row;
                    if (!this.isDriveStart) {
                      this.statusChange(0);
                      return;
                    }
                    if (this.socketInfoUsb === "False") {
                      this.statusChange(7);
                      return;
                    }
                    if (Object.keys(this.socketInfoLight).length === 0) {
                      this.statusChange(8);
                      return;
                    }
                    if (this.status.isWriteingCode) {
                      return;
                    }
                    if (this.socketInfoLight === "False" || this.socketInfoLight.Code === "1" || this.socketInfoLight.Code === "-1") {
                      this.statusChange(8);
                      return;
                    }
                    this.refreshStatus = Date.now();
                    this.status.isWriteSuccess = false;
                    this.status.isWriteFail = false;
                    this.isShowBatchInfo = false;
                    this.statusChange(9);
                    this.status.isWriteingCode = true;
                    this.singleWriteCode(this.singleWriteCodeItem);

                  }
                }
              },
              "Configuration"
            );
          }
        }
      ],
      //表单数据
      tableData: [],
      //是否打开写码弹窗
      isOpenWrite: false,
      //list 初始化列表
      list: [],
      //表单里item的loading
      loadingIndex: null,
      //分页参数
      pageParam: {
        totalElement: 0, //总共默认0条
        current: 1, //默认第一页
        size: 10 //默认每页十行
      },
      //初始化数据是否加载完的loading判断isLoading
      isLoading: true,
      //保存上一次getList的参数信息，用于判断是否重复请求并显示loading加载
      listParam: {},
      //驱动读取到的信息
      deviceInfo: {},
      //状态img
      statusImg: [
        {
          imgUrl: require("../../assets/images/online/device.png"),
          msg: "No FS_Service driver installed",
          status: "none"
        }, //驱动下载前
        {
          imgUrl: require("../../assets/images/online/insertUsbBefore.png"),
          msg: "Please connect  FS BOX",
          status: "none"
        }, //插入usb前
        {
          imgUrl: require("../../assets/images/online/insertUsbAfter.png"),
          msg: "Please connect  FS BOX",
          status: "none"
        }, //插入usb后
        {
          imgUrl: require("../../assets/images/online/insertLightBefore.png"),
          msg: "Please insert your transceiver for reading",
          status: "none"
        }, //插入光模块前
        {
          imgUrl: require("../../assets/images/online/insertLightAfter.png"),
          msg: "Please insert your transceiver for reading",
          status: "none"
        }, //插入光模块后
        {
          imgUrl: require("../../assets/images/online/writeTheCode.png"),
          msg: "Writing...",
          status: "none"
        }, //正在写码
        {
          imgUrl: require("../../assets/images/online/readCodeSuccess.png"),
          msg: "Configuration succeeded",
          status: "success"
        }, //写码成功
        {
          imgUrl: require("../../assets/images/online/readCodeError.png"),
          msg: "Configuration  failed",
          status: "error"
        }, //写码失败
        {
          imgUrl: require("../../assets/images/online/insertLightBefore.png"),
          msg: "Please replace the transceiver to be Configuration",
          status: "success"
        }, //连续写码成功
        {
          imgUrl: require("../../assets/images/online/readCodeError.png"),
          msg: "Please try again or Insert the next transceiver",
          status: "error"
        }, //连续写码失败
        {
          imgUrl: require("../../assets/images/online/readTheCode.png"),
          msg: "Reading...",
          status: "none"
        } //正在读码
      ],
      // 记录写码成功和失败的信息
      formData: {
        CodeType: "0",
        State: 1,
        Sale: this._hyTool.getStore("adminName"),
        UserLevel: this._hyTool.getStore("userLevel")
      },
      //单个写码的item数据
      singleWriteCodeItem: {},
      //批量写码的item集合
      codingItemAry: [],
      //是否再modal里显示批量信息
      isShowBatchInfo: false,
      //多个批量写码的索引
      codeIndex: 0,
      //刷新表单数据(取消勾选)
      refreshData: 0,
      //刷新写码状态
      refreshStatus: 0,
      //写码记录
      codeResultInfo: {},
      //判断是否可以写码弹框
      isCanWriteCode: false,
      // 写码后调用接口参数
      WriteCodeAfterOption: {}
    };
  },
  methods: {
    ...mapMutations(["GETSOCKETINFO_USB"]),
    handleContact () {
      // 打开聊天界面
      window.LC_API.open_chat_window();
      this.isCanWriteCode = false;
    },
    // 写码后调用
    handleAfterCode () {
      let options = {
        UserId: this.userInfo.userNo,
        emailAddress: window.atob(this.userInfo.emailAddress),
        CodeType: 1,
        ModelName: this.WriteCodeAfterOption.ModelName,
        CodeResult: this.WriteCodeAfterOption.CodeResult
      }
      updateAfterCode(options);
    },
    //写码弹窗点击确定事件
    ok () { },
    //写码弹窗点击取消事件
    cancel () {
      this.isOpenWrite = false;
      this.isShowBatchInfo = false;
      this.reset_server();
      this.codingItemAry = [];
      // this.status.isWriteingCode = false
    },
    //列表初始化数据
    async _getList (page) {
      // 查询列表的参数
      let listParam = {
        current: (this.pageParam.current = page ? page : 1),
        size: this.pageParam.size,
        fsUserId: this.userInfo.userNo,
        applyNo: this.serchType === "1" ? this.serchText : "",
        orderNumber: this.serchType === "2" ? this.serchText : "",
        sn: this.serchType === "3" ? this.serchText : ""
      };
      if (this.debounce(this.listParam, listParam)) {
        //防抖
        return;
      }
      this.listParam = listParam;
      this.isLoading = true;
      let result = null;
      if (
        (this.serchType === "3" && this.serchText !== "") ||
        (this.serchType === "2" && this.serchText !== "") ||
        (this.serchType === "1" && this.serchText !== "")
      ) {
        result = await applyWriteCodeRecordBySn(listParam);
      } else {
        result = await applyWriteCodeRecord(listParam);
      }
      this.list = result.obj.records ? result.obj.records : [];
      this.pageParam.totalElement = result.obj.total;
      this.isLoading = false;
      // 默认展开第一条
      this.getProInfo(this.showPanelVal);
    },
    //查询表单item的data
    async getProInfo (index) {
      // 如果折叠面板收起，传入的数组为空，则不执行
      if (index.length === 0) return false;
      index = +index[0];
      // 判断数据是否已经请求
      if (this.list.length === 0 || this.list[index].proData) return false;
      // 开始加载
      this.loadingIndex = index;
      // 获取当前打开的索引
      let param = this.list[index];
      let res = await writeCodePage({
        id: param.id,
        sn: this.serchType === "3" && this.serchText !== "" ? this.serchText : ""
      });
      // sn排序（优先字母，然后数字）
      res.obj.sort((a, b) => {
        a = a.binfileName;
        b = b.binfileName;
        if (/^\d/.test(a) ^ /^\D/.test(b)) return a > b ? 1 : a === b ? 0 : -1;
        return a > b ? -1 : a === b ? 0 : 1;
      });
      this.$set(this.list[index], "proData", res.obj);
      // 加载完成
      this.loadingIndex = null;
    },
    //切换分页事件
    currentChange (val) {
      this._getList(val);
    },
    //下拉框选择根据
    serchTypeChange (val) {
      this.serchType = val;
    },
    //查询搜索类型列表  回车事件
    selectSerchTypeList () {
      this._getList();
    },
    //查询列表getList防抖
    debounce (a, b) {
      var aProps = Object.getOwnPropertyNames(a);
      var bProps = Object.getOwnPropertyNames(b);
      if (aProps[6] == "__ob__" || bProps[6] == "__ob__") {
        delete aProps[6] || bProps[6]; //删除arr原型链的属性时 length并未改变
      }
      // if (aProps.length != bProps.length) {
      //   return false;
      // }
      for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        if (a[propName] !== b[propName]) {
          return false;
        }
      }
      return true; //相等返回true
    },
    // 获取光模块兼容性
    async _getCompatible (sno) {
      if (sno) {
        const res = await getCompatible({
          UserId: this.userInfo.userNo,
          NowBinSn: sno
        });
        if (res.obj && res.obj.compatibleType) {
          // this.compatibleTypeData = res.obj.compatibleType;
          this.deviceInfo.CompatibleType = res.obj.compatibleType;
        } else {
          this.deviceInfo.CompatibleType = "";
        }
      }
    },
    //单个写码点击事件 发起配置
    singleWriteCode (items) {
      // 设置配置参数
      let newConfig = items.configFiles.map(item => {
        return {
          powerDelay: item.PowerDelay,
          pageWriteDelay: item.PageWriteDelay,
          configPassword: item.ConfigPassword,
          pageWriteByte: item.PageWriteByte,
          preOperation: item.PreOperation,
          postOperation: item.PostOperation,
          id: item.Id.toString()
        };
      });
      // 发送给signal消息
      try {
        this.chat.then(result => {
          let opt = newConfig;
          result.server.send("TryConfig", JSON.stringify(opt));
        });
      } catch {
        // 显示写码失败的状态（配置也属于写码失败）
        this.statusChange(6);
        // 配置失败记录状态
        this.codeResultInfo.ConfigState = -1;
        this.codeResultInfo.WriteCodeState = 0;
        this.saveCodeResult();
      }

      // let userInfo = JSON.parse(this._hyTool.getStore("userInfo"));
      // this.formData.CompatibleType = items.compatibleType;
      // this.formData.UserId = userInfo.userNo;
      // this.formData.ConfigState = 1;
      // this.formData.ModalName = this.deviceInfo.PartNumber;
      // this.formData.OriginBinSn = this.deviceInfo.SerialNumber;
      // this.formData.OriginBase64 = this.deviceInfo.originBase64;
    },
    //批量写码
    batchWriteCode () {
      if (this.codingItemAry.length === 0) {
        return;
      }
      if (this.boxPro.writeType === 0 && this.status.isWriteingCode === true) {
        this.$Message.warning({
          content: "Is writing code",
          duration: 3
        });
        return;
      }
      if (this.socketInfoLight === null) {
        return
      }
      this.isOpenWrite = true;
      if (!this.isDriveStart) {
        this.statusChange(0);
        return;
      }
      if (this.status.isInsertUsb === false) {
        this.statusChange(7);
        return;
      }
      // 光模块断开,False为断开，code为1是读码失败 -1为未连接固件
      if (this.socketInfoLight === "False" || this.socketInfoLight.Code === "1" || this.socketInfoLight.Code === "-1") {
        this.statusChange(8);
        return;
      }
      this.addCodingItemAryPrototype();
      // this.statusChange(9);
      this.status.isWriteSuccess = false;
      this.status.isWriteFail = false;
      this.status.isWriteingCode = true;
      this.codingItemAry.length === 1
        ? (this.boxPro.writeType = 1)
        : (this.boxPro.writeType = 2);
      this.refreshStatus = Date.now();
      // setTimeout(() => {
      this.isShowBatchInfo = true;
      this.status.isWriteingCode = false;
      this.setCurrentStep(1, [
        { index: 0, des: "Connecting Box", status: "finish" },
        { index: 1, des: "Reading", status: "finish" },
        { index: 2, des: "Configuration", status: "process" }
      ]);
      // }, 1500);
    },
    //全选
    selAll (data) {
      // this.updateCodingAry('add', data)
      if (this.codingItemAry.length === 0) {
        data.forEach(items => {
          this.codingItemAry.push(items);
        });
        return;
      } else {
        data.forEach(item => {
          let flag = true;
          this.codingItemAry.forEach(item1 => {
            item.id === item1.id && (flag = false);
          });
          flag && this.codingItemAry.push(item);
        });
      }
    },
    //选中一行
    selOnce (res, row) {
      let flag = true;
      this.codingItemAry.forEach(item => {
        item.id === row.id && (flag = false);
      });
      flag && this.codingItemAry.push(row);
    },
    //table 取消选中某一项
    cancelOnce (res, row) {
      // this.updateCodingAry('remove', item)
      this.codingItemAry.forEach((item, index) => {
        item.id === row.id && this.codingItemAry.splice(index, 1);
      });
    },
    //全不选
    handleSelectionChange (selection, index) {
      if (selection.length > 0) return false;
      this.list[index].proData.forEach(item => {
        this.codingItemAry.forEach((item1, index1) => {
          item.id === item1.id && this.codingItemAry.splice(index1, 1);
        });
      });
    },
    // 开始写码
    async startCode () {
      let base64 = this.singleWriteCodeItem.binBase64;
      if (!base64) {
        this.statusChange(6);
        this.$Message.error({
          content: "Configuration  failed",
          duration: 3
        });
        return;
      }
      this.statusChange(4);
      // 写码参数
      let payload = {
        Base64: base64,
        CompatibleType: "customCode",
        BinModel: this.BinModel,
        IsCompatible: this.isCompatible || "0"
      };
      this.chat
        .then(result => {
          result.server.send("WriteCode", JSON.stringify(payload));
        })
        .catch(async () => {
          // this.formData.WriteCodeState = -1;
          // await writeCodeRecord(this.formData);

          // 发送写码异常
          this.statusChange(6);
          this.codeResultInfo.WriteCodeState = -1;
          // 写码失败保存写码记录
          this.saveCodeResult();
        });
    },
    //重置服务
    reset_server () {
      // this.status.isDriveStart = false
      // this.status.isInsertUsb = false
      // this.status.isInsertLight = false
      this.status.isWriteSuccess = false;
      this.status.isWriteFail = false;
      this.status.isWriteingCode = false;
      // this.connStatusNum = 0
      this.singleWriteCodeItem = {};
      this.boxPro.writeType = -1;
      this.isShowBatchInfo = false;
      this.codeIndex = 0;
      this.refreshTable()
      this.codingItemAry = []
      // this._getList()
    },
    //点击modal里的开始批量写码按钮
    startBatchConfBtn (val) {
      if (val === "Stop Batch Configuration") {
        this.stopBatchConfiguraion();
      }
      if (this.codingItemAry.length === 0 || this.status.isWriteingCode) {
        return;
      }
      if (this.codingItemAry.length === 1) {
        this.singleWriteCodeItem = this.codingItemAry[0];
        this.isShowBatchInfo = false;
        this.status.isWriteSuccess = false;
        this.status.isWriteFail = false;
        this.status.isWriteingCode = true;
        this.statusChange(4);
        this.singleWriteCode(this.singleWriteCodeItem);
      }
      if (this.codingItemAry.length > 1) {
        if (this.codeIndex <= this.codingItemAry.length) {
          this.statusChange(4);
          this.singleWriteCodeItem = this.codingItemAry[this.codeIndex];
          this.codingItemAry[this.codeIndex].status = 1;
          this.singleWriteCode(this.singleWriteCodeItem);
        }
      }
    },
    //多个批量 光模块插入时执行的写码
    multipleBatchWriteCode () {
      if (this.codingItemAry.length > 1) {
        if (this.codeIndex <= this.codingItemAry.length) {
          this.statusChange(4);
          this.singleWriteCodeItem = this.codingItemAry[this.codeIndex];
          this.codingItemAry[this.codeIndex].status = 1;
          this.singleWriteCode(this.singleWriteCodeItem);
        }
      }
    },
    //停止批量配置
    stopBatchConfiguraion () {
      if (this.boxPro.writeType === 0 && this.status.isWriteFail) {
        this.$Message.warning({
          content: "Page no",
          duration: 3
        });
        return;
      }
      this.isOpenWrite = false;
      this.reset_server();
    },
    //批量时 给选中的对象添加status属性
    addCodingItemAryPrototype () {
      if (this.codingItemAry.length > 1) {
        for (var i = 0; i < this.codingItemAry.length; i++) {
          // 添加status属性 0为待写码 1为正在写码 2为写码成功 3为写码失败
          this.$set(this.codingItemAry[i], "status", 0);
        }
      }
      if (this.codingItemAry.length === 1) {
        this.$set(this.codingItemAry[0], "status", 0);
      }
    },
    //取消表单勾选
    refreshTable () {
      this.refreshData = Date.now()
    },
    // 保存写码记录
    async saveCodeResult () {
      let options = {
        CodeType: '0',
        State: 0,
        Sale: this._hyTool.getStore('adminName'),
        UserLevel: this._hyTool.getStore('userLevel'),
        CompatibleType: this.formData.brand,
        UserId: this.userInfo.userNo,
        ModalName: this.deviceInfo.PartNumber,
        OriginBinSn: this.deviceInfo.SerialNumber,
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
  mounted () {
    this.reset_server();
  },
  created () {
    this._getList();
  },
  watch: {
    //驱动是否启动
    isDriveStart (val) {
      if (val) {
        if (this.isOpenWrite) {
          this.statusChange(1);
        }
        this.status.isConnecDrive = true;
        var resArr = ["False", null];
        (this._hyTool.isConArray(resArr, this.socketInfoUsb) ||
          this._hyTool.isConArray(resArr, this.socketInfoLight)) &&
          this.chat.then(result => {
            result.server.send("GetInfo", "0");
          });
      }
    },
    //usb是否连接
    socketInfoUsb (val) {
      // debugger
      if (val === null || val === 0) return;
      // usb断开或usb连接失败
      if (val === "False" || val.Code === "1") {
        if (this.isOpenWrite) {
          this.statusChange(7);
          this.isShowBatchInfo = false;
        }
      } else {
        //usb连接成功
        if (this.isOpenWrite) {
          //如果是多个批量写码，则usb连接时要显示批量信息
          if (this.boxPro.writeType === 2) {
            this.isShowBatchInfo = true;
          }
          //如果是单个写码，插入usb时关闭modal并重置服务
          if (this.boxPro.writeType === 0) {
            this.isOpenWrite = false
            this.reset_server();
          }
        }
        if (
          (this.boxPro.writeType === 1 && this.status.isWriteingCode) ||
          (this.boxPro.writeType === 2 && this.status.isWriteingCode)
        ) {
          //若正在写码，时usb抽出再插入则继续写码
        }
        this.statusChange(2)
      }
    },
    //光模块是否断开
    socketInfoLight (val) {
      // debugger
      if (val === null) {
        //未读出来
        return false;
      }
      // 光模块断开,False为断开，code为1是读码失败 -1为未连接固件
      if (val === "False" || val.Code === "1" || val.Code === "-1") {
        this.deviceInfo.SerialNumber = "--";
        this.deviceInfo.PartNumber = "--";
        this.deviceInfo.CompatibleType = "--";
        if (val.Code === '1') {
          // 读码失败（发送getInfo无法触发usb状态，需要手动触发）
          return this.GETSOCKETINFO_USB({ message: JSON.stringify({ "Code": "Successed" }) });
        }
        if (
          this.boxPro.writeType === 1 &&
          this.status.isWriteingCode &&
          this.status.isWriteSuccess
        ) {
          this.isShowBatchInfo = false;
        }
        if (
          this.boxPro.writeType === 2 &&
          this.status.isWriteingCode &&
          this.status.isWriteSuccess
        ) {
          //
        }
        this.isToggle = false;
        this.statusChange(8);
        if (this.boxPro.writeType === 0 && this.isOpenWrite) {
          if (this.status.isWriteSuccess || this.status.isWriteFail) {
            this.isOpenWrite = false;
            this.reset_server();
          }
        }
      } else {
        //光模块读码成功
        this.deviceInfo = val.Result;
        this.isToggle = true;
        if (this.boxPro.writeType === -1 && !this.status.isWriteingCode) {
          if (this.codingItemAry.length === 1) {
            this.boxPro.writeType = 1
          }
          if (this.codingItemAry.length > 1) {
            this.boxPro.writeType = 2
          }
        }

        if (this.boxPro.writeType === 0 && this.isOpenWrite) {
          //   if (this.status.isWriteSuccess || this.status.isWriteFail) {
          //     this.isOpenWrite = false;
          //     this.reset_server();
          //   } else {
          this.statusChange(4);
          this.isShowBatchInfo = false;
          this.singleWriteCode(this.singleWriteCodeItem)
          //   }
        }
        this.statusChange(3)
        if (this.boxPro.writeType === 1 && this.status.isWriteingCode) {
          this.singleWriteCode(this.codingItemAry[0]);
          this.status.isWriteSuccess = false;
        }
        if (this.boxPro.writeType === 1 && !this.status.isWriteingCode) {
          this.isShowBatchInfo = true;
        }
        if (this.boxPro.writeType === 2 && this.status.isWriteingCode) {
          if (this.codingItemAry.length === this.codeIndex) {
            this.isOpenWrite = false;
            this.reset_server();
            return;
          }
          this.statusChange(3);
          this.multipleBatchWriteCode();
        }
        if (this.status.isInsertUsb && this.status.isInsertLight && this.status.isConnecDrive && !this.status.isWriteingCode && this.boxPro.writeType !== 0) {
          this.isShowBatchInfo = true
          this.addCodingItemAryPrototype();
        }
        // 查询兼容品牌bin_template_md5
        this._getCompatible(this.deviceInfo.SerialNumber);
      }
    },
    //写码成功返回
    async socketInfoWrite (val) {
      if (val === null) return;
      if (val.Code === "0") {
        //写码成功
        this.statusChange(5);
        this.deviceInfo = val.Result;
        this._getCompatible(this.deviceInfo.SerialNumber);
        if (this.boxPro.writeType === 0) {
          this.status.isWriteingCode = false;
        }
        if (this.boxPro.writeType === 2) {
          this.codingItemAry[this.codeIndex].status = 2;
          this.codeIndex++;
        }
        this.$Message.success({
          content: "Configuration succeeeded",
          duration: 3
        });
        // 记录写码结果
        this.codeResultInfo.SerialNumber = val.Result.SerialNumber;
        this.codeResultInfo.NowBase64 = val.Result.originBase64;
        this.codeResultInfo.ModalCode = val.Result.modalType;
        this.codeResultInfo.WriteCodeState = 1;
        this.saveCodeResult();
        this.WriteCodeAfterOption.CodeResult = 1;
      } else {
        //写码失败
        this.statusChange(6);
        this.$Message.error({
          content: "Configuration failed",
          duration: 3
        });
        if (this.boxPro.writeType === 2) {
          this.codingItemAry[this.codeIndex].status = 3;
          this.codeIndex++;
        }
        // this.formData.WriteCodeState = -1;
        // await writeCodeRecord(this.formData);
        // 写码失败保存写码记录
        this.codeResultInfo.WriteCodeState = -1;
        this.saveCodeResult();
        this.WriteCodeAfterOption.CodeResult = 0;
      }
      // 写码后操作
      this.WriteCodeAfterOption.ModelName = val.Result.PartNumber;
      this.handleAfterCode();
    },
    //写码前配置，配置成功返回
    async socketInfoTry (val) {
      if (val === null) return;
      if (val.Code === "0") {
        // this.formData.ConfigId = val.Result.configId;
        // this.formData.IP = val.Result.IP;
        // 配置成功后写码
        this.startCode();
      } else {
        //配置失败
        if (this.boxPro.writeType === 1 && this.status.isWriteingCode) {
          //
        } else {
          // this.status.isWriteingCode = false;
        }
        if (this.boxPro.writeType === 2) {
          this.codingItemAry[this.codeIndex].status = 3;
          this.codeIndex++;
        }
        // 配置失败操作
        this.$Message.error({
          content: "Configuration  failed",
          duration: 3
        });
        // 配置失败记录
        this.codeResultInfo.ConfigState = -1;
        this.codeResultInfo.WriteCodeState = 0;
        this.statusChange(6);
        // 配置失败记录状态
        this.saveCodeResult();
        // this.formData.ConfigState = -1;
        // this.formData.WriteCodeState = -1;
        // await writeCodeRecord(this.formData);
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例
      if (vm.isDriveStart) {
        vm.chat.then((result) => {
          result.server.send('GetInfo', '0');
        });
      }
    });
  }
};
</script>
