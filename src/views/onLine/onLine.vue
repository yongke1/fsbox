<style lang="scss" scoped>
@import "~@assets/styles/_mixins";

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
  // padding-bottom: 61px;
  // min-height: 800px;
  .steping {
    padding: 40px 0 0;
  }
  .online-status {
    // padding: 30px 0 0;
    text-align: center;
    .statusImg-box {
      &.active {
        margin: 80px 0;
      }
      img {
        display: block;
        margin: 0 auto;
      }
    }
    .status-info {
      // margin-top: 62px;
      // margin-bottom: 107px;
      .active {
        background: linear-gradient(to right, #37a0f6, #387ee9);
        color: #ffffff;
        &:hover {
          opacity: 0.9;
        }
      }
      p:nth-child(1) {
        font-size: 18px;
        color: #7b8fa5;
        margin: 50px auto 10px;
        line-height: normal;
        span {
          color: #387fe9;
          cursor: pointer;
        }
      }
      p:nth-child(2) {
        font-size: 16px;
        color: #a5bad0;
        line-height: normal;
      }
      .install-box {
        display: flex;
        justify-content: center;
        padding: 40px 0;
        &.win {
          flex-direction: row-reverse;
        }
      }
      a {
        // padding: 0.6rem 4.5rem;
        width: 240px;
        line-height: 46px;
        display: inline-block;
        border-radius: 3px;
        border: 0;
        // box-shadow: 0px 21px 27px 0px rgba(7, 49, 94, 0.08);
        font-size: 14px;
        &:not(.active) {
          // border: 2px solid rgba(123, 143, 165, 0.3);
          box-shadow: 0 0 0 2px rgba(123, 143, 165, 0.3) inset;
        }
        &:hover {
          border: none;
          color: #ffffff;
          background: linear-gradient(to right, #37a0f6, #387ee9);
        }
        & + a {
          margin-right: 30px;
        }
        .status-text-box {
          .status-text {
            margin-bottom: 5px;
            font-size: 18px;
          }
        }
        img {
          display: inline-block;
          margin-right: 10px;
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
        line-height: normal;
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
  .status-success {
    .status-success-img {
      text-align: center;
    }
    .status-success-msg {
      // margin-top: 59px;
      font-size: 34px;
      color: #ff9c5d;
      text-align: center;
      padding-bottom: 40px;
      .success-color {
        color: #32d7b0;
        font-weight: bold;
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
        font-weight: bold;
        transition: all 0.1s linear;
        &:hover {
          color: #57a3f3;
          border-color: #57a3f3;
        }
      }
    }
    .online-content {
      padding-bottom: 40px;
      // overflow: hidden;
      .online-table {
        width: 420px;
        margin: auto;
        /deep/ .ivu-select-disabled {
          .ivu-select-selection {
            background: #f5f8fb;
          }
        }
        /deep/ .ivu-select-selection {
          height: 54px;
          border-radius: 3px;
          margin-top: 10px;
          .ivu-select-input {
            @include l-height(54px);
          }
          .ivu-select-placeholder,
          .ivu-select-selected-value {
            height: 54px;
            line-height: 54px;
          }
        }
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
          margin: 10px 0 0 0;
          border: 1px solid #dee5ed;
          border-radius: 3px;
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
          top: 30px;
          right: -35px;
          background: url("~@assets/images/icon/box_icon.png") no-repeat -56px -340px;
        }
        .table-sn-no {
          width: 15px;
          height: 17px;
          position: absolute;
          top: 30px;
          right: -35px;
          background: url("~@assets/images/icon/box_icon.png") no-repeat -102px -340px;
        }
        .table-sn-null {
          position: absolute;
          top: 25px;
          right: -45px;
          @include sprite(-344px, -135px, 31px, 31px);
          animation: xz 1s linear infinite;
        }
        @keyframes xz {
          from {
            transform: rotate(0deg) scale(0.7);
          }
          to {
            transform: rotate(360deg) scale(0.7);
          }
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
            right: 11%;
            text-align: center;
            background: #ffffff;
            z-index: 1;
            box-shadow: 0 5px 15px 5px rgba(7, 49, 94, 0.1);
            li {
              width: 25%;
              // padding: 7px;
              height: 56px;
              display: flex;
              justify-content: center;
              align-items: center;
              &:hover {
                box-shadow: 0 0 2px 0px gray inset;
              }
              // &:not(:nth-child(4n)) {
              //   border-right: 0.5px solid #dee5ed;
              // }
            }
          }
          .active {
            color: #ffffff;
            background-color: #3793f1;
            line-height: 26px;
          }
          .table-brand-desc {
            text-align: left;
            padding: 18px 63px 18px 40px;
            height: 75px;
            border-top: 1px solid #dee5ed;
          }
        }
        .brand-select-model {
          position: absolute;
          width: 540px;
        }
        .table-revise-sn {
          justify-content: space-between;
          // margin-top: 22px;
          // margin-bottom: 26px;
          margin: 20px 0;
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
              display: none;
              position: absolute;
              width: 310px;
              font-size: 14px;
              color: #7b8fa5;
              // padding: 17px 20px 12px 20px;
              padding: 20px;
              box-shadow: 0px 2px 15px 0px rgba(22, 81, 131, 0.15);
              left: -90%;
              top: 30px;
              background: #fff;
              &::before {
                content: "";
                border: 5px solid #fff;
                border-right-color: transparent;
                border-bottom-color: transparent;
                transform: rotate(45deg);
                position: absolute;
                top: -5px;
                left: 150px;
              }
            }
            .sn-left-icon:hover ~ .revise-sn-hint {
              z-index: 1;
              display: inline-block;
            }
          }
          .revise-sn-right {
            div {
              display: flex;
              &.disabled {
                cursor: not-allowed;
              }
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
          margin: 20px 0;
          &.mt {
            margin-top: 22px;
          }
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
              // opacity: 0;
              display: none;
              position: absolute;
              width: 418px;
              font-size: 14px;
              color: #7b8fa5;
              // padding: 17px 20px 12px 20px;
              padding: 20px;
              box-shadow: 0px 2px 15px 0px rgba(22, 81, 131, 0.15);
              left: 0%;
              top: 30px;
              background: #fff;
              &::before {
                content: "";
                border: 5px solid #fff;
                border-right-color: transparent;
                border-bottom-color: transparent;
                transform: rotate(45deg);
                position: absolute;
                top: -5px;
                left: 140px;
              }
            }
            div:hover ~ p {
              z-index: 1;
              // opacity: 1;
              display: inline-block;
            }
            & > span {
              color: #7b8fa5;
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
          font-weight: bold;
          &:hover {
            opacity: 0.9;
          }
          &.disabled {
            opacity: 0.7;
            &:hover {
              cursor: not-allowed;
            }
          }
        }
        // .writeCode-btn:not(.disabled) {
        //   opacity: 0.9;
        // }
        .table-brand-warning {
          color: #f66767;
        }
        .brand-right-warning {
          position: absolute;
          right: -200px;
          top: 28px;
        }
        .band,
        .brand,
        .transmission-distance {
          margin-top: 20px;
        }
      }
    }
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
  <div class="online-box">
    <div class="steping">
      <Steping :list="stepList"
               :current='currentStep'></Steping>
    </div>
    <!-- 下载驱动 -->
    <div class="online-status"
         v-if="!status.isInsertLight">
      <div :class="['statusImg-box',{'active':connStatusNum>0}]">
        <img :src="statusImg[connStatusNum].imgUrl"
             alt="">
      </div>
      <div class="status-info">
        <div :class="statusImg[connStatusNum].status=='error'?'error-color':statusImg[connStatusNum].status=='success'?'success-color':'status-msg'"> {{statusImg[connStatusNum].msg}}</div>
        <div class="status-text-box"
             v-if="!status.isConnecDrive">
          <p class="status-text">
            Please
            <span @click="reload">reload</span>
            the browser after the installation is complete.
          </p>
          <p class="status-text">It is recommended to activate your service in Google Chrome (68 version and later)</p>
          <!-- 安装驱动 -->
          <div :class="['install-box',{'win':osName==='Windows'}]">
            <a :href="versonDownload['MacOS']"
               @mouseenter="macHover=true"
               @mouseleave="macHover=false"
               :class="osName==='MacOS'?'active':''">
              <img src="~@assets/images/online/MacWhite.png"
                   alt=""
                   v-if="macHover">
              <img src="~@assets/images/online/MacGray.png"
                   alt=""
                   v-else-if="osName!=='MacOS'">
              <img src="~@assets/images/online/MacWhite.png"
                   alt=""
                   v-else-if="osName==='MacOS'">Mac OS
            </a>
            <a :href="versonDownload['Windows']"
               @mouseenter="winHover=true"
               @mouseleave="winHover=false"
               :class="osName === 'Windows' ? 'active' : ''">
              <img src="~@assets/images/online/WindowsWhite.png"
                   alt=""
                   v-if="winHover" />
              <img src="~@assets/images/online/WindowsGray.png"
                   alt=""
                   v-else-if="osName!=='Windows'">
              <img src="~@assets/images/online/WindowsWhite.png"
                   alt=""
                   v-else-if="osName==='Windows'">
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
      <Module-Info :Brand="moduleInfo.CompatibleType"
                   :SN="moduleInfo.SerialNumber"
                   :PN="moduleInfo.PartNumber"
                   :moduleData="moduleData"></Module-Info>
      <!-- 状态图 -->
      <div class="status-success-img"
           v-if="status.isInsertLight&&status.isWriteFail==true||status.isWriteingCode==true||status.isWriteSuccess==true">
        <img :src="statusImg[connStatusNum].imgUrl"
             alt="">
      </div>
      <!-- 状态图描述 -->
      <div class="status-success-msg"
           v-if="status.isWriteSuccess==true||status.isWriteFail==true||status.isWriteingCode==true">
        <span :class="statusImg[connStatusNum].status=='error'?'error-color':statusImg[connStatusNum].status=='success'?'success-color':''">{{statusImg[connStatusNum].msg}}</span>
        <div v-show="isBatchConfiguration&&status.isWriteSuccess||isBatchConfiguration&&status.isWriteFail"
             class="batch-config-btn"
             @click="handleBtn">{{ !isBatchConfiguration && status.isWriteFail?'Give Feedback': 'Stop Batch Configuration'}}</div>
      </div>
      <!-- 写码区 -->
      <div class="online-content"
           v-if="status.isWriteSuccess==false&&status.isWriteFail==false&&status.isWriteingCode==false">
        <div class="online-table">
          <!-- pn title -->
          <div class="pn">
            <div class="desc">
              <span class="table-desc">P/N</span><span class="table-aster">*</span>
            </div>
            <!-- <input type="text"
                   class="table-input pn-input"
                   placeholder="请输入P/N"
                   v-model="formData.pn"
                   disabled> -->
            <!-- :disabled="formData.modelId?true:false" -->
            <Select v-model="formData.modelId"
                    filterable
                    :placeholder="formData.modelId?'':'Matching...'"
                    @on-change="selectAttr">
              <Option v-for="item in proModelList"
                      :value="item.value"
                      :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>
          <!-- brand input -->
          <div class="brand">
            <div class="desc">
              <span class="table-desc">Brand</span><span class="table-aster">*</span>
            </div>
            <div class="table-brand">
              <input type="text"
                     :class="['table-input',{'table-input-warning':ruleList.includes('brand')}]"
                     placeholder="Please choose"
                     v-model="formData.brand"
                     :disabled="!formData.modelId || isCoding"
                     readonly
                     @click="showBrandModel"
                     v-on:blur="isActiveBrand"
                     :maxlength="16">
              <Icon :type="isShowBrandModel?'ios-arrow-up':'ios-arrow-down'"
                    @click="showBrandModel"
                    class="input-icon-down" />
              <div v-if="formData.brand"
                   :class="isWriteCodeFiles?'table-sn-yes':isWriteCodeFiles===false?'table-sn-no':'table-sn-null'"></div>
              <span class="table-brand-warning brand-right-warning"
                    v-if="isWriteCodeFiles===false">Sorry, no files available</span>
              <div class="brand-select-model"
                   v-if="isShowBrandModel"
                   v-clickoutside="handleClose">
                <ul class="flex animate__animated animate__slideInDown">
                  <li v-for="(item,index) in compatibleTypeOnline"
                      :key="index"
                      :class="{'active':index===brandNameIndex}"
                      @click="selBrandName(index,item)">
                    {{item.label}}</li>
                  <div class="table-brand-desc">
                    If you need to change more brands for compatibility, please go to
                    <a @click="$router.push('/main/boxPro')">'Box Pro'</a>.for custom application
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <!-- brand 未选提示 -->
          <span class="table-brand-warning"
                v-if="ruleList.includes('brand')">Please select a compatible brand
          </span>
          <!-- band -->
          <!-- <div class="band">
            <div class="desc">
              <span class="table-desc">Band</span><span class="table-aster">*</span>
            </div>
            <div class="table-brand">
              <input type="text"
                     class="table-input"
                     placeholder="Please choose"
                     v-model="formData.band"
                     :maxlength="16">
              <Icon :type="isShowBrandModel?'ios-arrow-up':'ios-arrow-down'"
                    class="input-icon-down" />
            </div>
          </div> -->
          <!-- Transmission distance -->
          <div v-for="(item,index) in moduleInfo.attrList"
               :key="index"
               class="transmission-distance">
            <div v-if="showSelect(item.attrKey)">
              <div class="desc">
                <span class="table-desc">
                  {{item.attrKey | attrKeyFormat}}
                </span><span class="table-aster">*</span>
              </div>
              <Select v-model="formData.confModalAttrs[index].attrValue"
                      :disabled="isCoding">
                <Option v-for="item2 in item.attrValue.split(',')"
                        :key="item2"
                        :label="item2"
                        :value="item2"></Option>
              </Select>
            </div>
          </div>
          <!-- revise-sn -->
          <div class="table-revise-sn flex">
            <div class="revise-sn-left">
              <span>Revise S/N</span>
              <div class="sn-left-icon"></div>
              <div class="revise-sn-hint">
                If your transceiver does not work properly after revising the S/N, please apply for the configuration file in Box Pro.
              </div>
            </div>
            <div class="revise-sn-right flex">
              <div @click="reviseSN('Yes')">
                <div :class="[isReviseSN?'revise-sn-yes':'revise-sn-none',{'disabled':isCoding||isDisabledSn}]"></div>
                <span>Yes</span>
              </div>
              <div @click="reviseSN('No')">
                <div :class="[isReviseSN?'revise-sn-none':'revise-sn-no',{'disabled':isCoding||isDisabledSn}]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          <!-- Serial number -->
          <div v-show="isReviseSN">
            <div class="desc">
              <span class="table-desc">Serial number</span>
            </div>
            <input type="text"
                   :class="['table-input',{'table-input-warning':ruleList.includes('sn')||isSnRule}]"
                   v-model="formData.sn"
                   :disabled="isCoding"
                   placeholder="Please filling">
            <span class="table-brand-warning"
                  v-if="ruleList.includes('sn')">Please input Serial number
            </span>
            <span class="table-brand-warning"
                  v-if="isSnRule">The SerialNumber input is invalid
            </span>
          </div>
          <!-- Keep Current switch -->
          <div class="flex table-switch">
            <div class="revise-batch-left">
              <span>Batch Configurtion</span>
              <div></div>
              <p>
                The platform will automatically start configuration when the Batch Configuration button is turned on. Please follow the prompts to insert and remove the transceiver repeatedly.
                Turn off the button to stop the batch configuration.
                If your transceiver does not work properly after revising the S/N, please apply for the configuration file in Box Pro.
              </p>
            </div>
            <div>
              <i-switch v-model="isBatchConfiguration"
                        :disabled="isCoding"
                        @on-change="isBatchChange" />
            </div>
          </div>
          <div :class="['writeCode-btn',{'disabled':isWriteCodeFiles===false||isCoding}]"
               @click="startWriteCode">
            <span>Start Configuration</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 禁止用户写码弹框 -->
    <!-- 账号提示 -->
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
import { mapState, mapGetters, mapMutations } from "vuex"
import mixin from "@assets/js/mixin/mixin";
import { selectByModalComType, findByKeyModalIdFs, selectModalbinByidKeyValueType, writeCodeRecord, getCompatible, updateAfterCode } from '@service/common/common';
import { getImage } from '@service/onLine/onLine';
import newPn from '@assets/js/sources/newPn.js';
import specialRulesForBrocade from '@assets/js/sources/specialRulesForBrocade.js';
import fsModal from '@components/modal/modals';

const clickoutside = {
  bind (el, binding) {
    function documentHandler (e) {
      if (el.contains(e.target)) {
        return false;
      }
      if (el && binding.expression) {
        // console.log(el);
        binding.value(e);
      }
    }
    el.__vueClickOutside__ = documentHandler;
    document.addEventListener('click', documentHandler);
  },
  unbind (el) {
    document.removeEventListener('click', el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
};

export default {
  props: ['chat'],
  mixins: [mixin],
  components: {
    fsModal
  },
  filters: {
    attrKeyFormat (value) {
      let label = '';
      switch (value) {
        case '1':
          label = 'Wavelength';
          break;
        case '2':
          label = 'Transmission Distance';
          break;
        case '3':
          label = 'Cable Length';
          break;
        case '4':
          label = 'Form Factor';
          break;
        case '5':
          label = 'Port';
          break;
        case '6':
          label = 'Data Rate';
          break;
      }
      return label;
    }
  },
  computed: {
    ...mapGetters(['compatibleTypeOnline', 'userInfo']),
    ...mapState([
      'isDriveStart',
      'versonDownload',
      'osName',
      'socketInfoUsb',
      'socketInfoLight',
      'socketInfoTry',
      'proModelList',
      'socketInfoWrite',
      'unableUploadTplList'
    ])
  },
  directives: { clickoutside },
  data () {
    return {
      moduleData: {},
      macHover: false,
      winHover: false,
      isSnRule: false,
      //苹果电脑显示text
      macText: 'Mac OS',
      //windows电脑显示text
      winText: 'Windows',
      //是否显示兼容模板
      isShowBrandModel: false,
      //当前选中的兼容品牌
      brandNameIndex: null,
      //是否可以修正序列号S/N
      isReviseSN: false,
      //是否保持当前型号名P/N
      // isKeepPN: false,
      //是否保留厂商名
      // isKeepVendorName: false,
      //是否批量写
      isBatchConfiguration: false,
      // 写码表单数据
      formData: {
        confModalAttrs: [
          {
            attrKey: '',
            attrValue: ''
          },
          {
            attrKey: '',
            attrValue: ''
          }
        ]
      },
      ruleList: [],
      //状态img
      statusImg: [
        { imgUrl: require('../../assets/images/online/device.png'), msg: 'No FS_Service driver installed', status: 'none' },//驱动下载前
        { imgUrl: require('../../assets/images/online/insertUsbBefore.png'), msg: 'Please connect  FS BOX', status: 'none' },//插入usb前
        { imgUrl: require('../../assets/images/online/insertUsbAfter.png'), msg: 'Please connect  FS BOX', status: 'none' },//插入usb后
        { imgUrl: require('../../assets/images/online/insertLightBefore.png'), msg: 'Please insert your transceiver for reading', status: 'none' },//插入光模块前
        { imgUrl: require('../../assets/images/online/insertLightAfter.png'), msg: 'Please insert your transceiver for reading', status: 'none' },//插入光模块后
        { imgUrl: require('../../assets/images/online/writeTheCode.png'), msg: 'Writing...', status: 'none' },//正在写码
        { imgUrl: require('../../assets/images/online/readCodeSuccess.png'), msg: 'Configuration succeeded', status: 'success' },//写码成功
        { imgUrl: require('../../assets/images/online/readCodeError.png'), msg: 'Configuration  failed', status: 'error' },//写码失败
        { imgUrl: require('../../assets/images/online/insertLightBefore.png'), msg: 'Please insert next transceiver', status: 'success' },//连续写码成功
        { imgUrl: require('../../assets/images/online/insertLightBefore.png'), msg: 'Please try again or insert the next transceiver', status: 'error' },//连续写码失败
        { imgUrl: require('../../assets/images/online/readCodeError.png'), msg: 'Code reading failed', status: 'error' },//读码失败
      ],
      //是否有写码文件
      isWriteCodeFiles: null,
      // 记录当前模块信息
      moduleInfo: {},
      // 记录写码需要的信息
      writeCodeInfo: {},
      // 记录正在写码状态...
      isCoding: false,
      // 记录是否已经开始复写
      // isBatched: false,
      // 根据兼容禁用SN输入框
      isDisabledSn: false,
      // 复写的文件列表,保存复写请求的bin文件
      batchList: [],
      // 保存写码结果
      codeResultInfo: {},
      //判断是否可以写码弹框
      isCanWriteCode: false,
      // 写码后调用接口参数
      WriteCodeAfterOption: {}
    };
  },
  mounted () {
    this.setCurrentStep(0, [{ index: 0, des: "Connecting Box", status: 'process' }, { index: 1, des: "Reading", status: '' }, { index: 2, des: "Configuration", status: '' }]);
  },
  methods: {
    ...mapMutations(['GETSOCKETINFO_USB']),
    getModuleImg () {
      // 获取产品的图片信息
      let options = {
        param: { token: this.userInfo.token, model: this.moduleInfo.PartNumber }
      }
      getImage(options).then(res => {
        res.result === 'true' && (this.moduleData = res.data);
      })
    },
    // 写码后调用
    handleAfterCode () {
      let options = {
        UserId: this.userInfo.userNo,
        emailAddress: window.atob(this.userInfo.emailAddress),
        CodeType: 0,
        ModelName: this.WriteCodeAfterOption.ModelName,
        CodeResult: this.WriteCodeAfterOption.CodeResult
      }
      updateAfterCode(options);
    },
    handleContact () {
      // 打开聊天界面
      window.LC_API.open_chat_window();
      this.isCanWriteCode = false;
    },
    handleBtn () {
      !this.isBatchConfiguration && this.status.isWriteFail ? this.$router.push({ name: 'main.feedback' }) : this.stopBatch();
    },
    // 重置数据
    resetData () {
      let modelId = this.formData.modelId;
      this.formData = {
        modelId,
        confModalAttrs: [
          {
            attrKey: '',
            attrValue: ''
          },
          {
            attrKey: '',
            attrValue: ''
          }
        ]
      };
      this.isReviseSN = false;
      this.isWriteCodeFiles = null;
      this.writeCodeInfo = {};
    },
    // 退出连续写码
    stopBatch () {
      // 重置数据
      if (!this.isBatchConfiguration) this.resetData();
      // this.resetData();
      this.isBatchConfiguration = false;
      this.statusChange(3);
    },
    // 获取模块兼容
    async _getCompatible () {
      await getCompatible({
        UserId: this.userInfo.userNo,
        NowBinSn: this.moduleInfo.SerialNumber
      }).then(res => {
        res.obj && 'compatibleType' in res.obj && this.$set(this.moduleInfo, 'CompatibleType', res.obj.compatibleType);
      });
    },
    // 测试配置文件
    testConfigFile () {
      // debugger;
      // 发送给signal消息
      try {
        this.chat.then((result) => {
          let test = this.writeCodeInfo.configFile;
          result.server.send('TryConfig', JSON.stringify(test));
        });
      }
      catch {
        // 配置出错
        console.log('配置错误');
        this.isCoding = false;
        this.codeResultInfo.ConfigState = -1;
        this.codeResultInfo.WriteCodeState = 0;
        // 显示写码失败的状态（配置也属于写码失败）
        this.statusChange(6);
        // 配置失败记录状态
        this.saveCodeResult();
      }
    },
    // 发送写码指令
    sendWriteCode () {
      // 处理博科前缀
      if (this.formData.brand === 'Brocade') {
        let modelIndex = this.proModelList.findIndex((item) => {
          return item.value === this.formData.modelId;
        });
        let modelLabel = this.proModelList[modelIndex].label;
        let isExistInCA9 = specialRulesForBrocade.CA9.includes(modelLabel);
        let isExistInCZA8 = specialRulesForBrocade.CZA8.includes(modelLabel);
        this.brocadePrefix = '';
        if (isExistInCA9) {
          this.brocadePrefix = 'CA';
        } else if (isExistInCZA8) {
          this.brocadePrefix = 'CZA';
        }
      }
      // 自定义SN
      let serialNumBrocade = this.formData.brand === 'Brocade' ? this.brocadePrefix + this.formData.sn : this.formData.sn;
      let myCompatibleType = '';
      // if (this.isBatchConfiguration) {
      //   myCompatibleType = this.formData.sn !== '' ? this.formData.brand + ',' + serialNumBrocade : this.formData.brand;
      // } else {
      myCompatibleType = 'sn' in this.formData && this.formData.sn !== '' ? this.formData.brand + ',' + serialNumBrocade : this.formData.brand;
      // }
      // 批量bin文件写码时候，替换获取到的bin文件
      if (this.isBatchConfiguration && this.batchList.length > 0) {
        // H3C无法复写临时解决方案
        if (this.formData.brand === 'H3C') {
          this.writeCodeInfo.binFile = this.batchList[0][0];
        } else {
          this.writeCodeInfo.binFile = this.batchList[0];
        }
      }
      let payload = {
        'Base64': this.writeCodeInfo.binFile.fileBase64,
        'CompatibleType': myCompatibleType,
        'BinModel': this.writeCodeInfo.BinModel,
        'IsCompatible': this.writeCodeInfo.isCompatible || '0',
        'Pn': this.moduleInfo.PartNumber, // Pn根据是否勾选保留赋值
        'ManufacturerName': this.moduleInfo.VesndorName || this.moduleInfo.VendorName
        // 'PartNumber': isModelType === '0' ? this.moduleInfo.PartNumber : '1'
      };
      try {
        // 向驱动发写码请求
        this.chat.then((result) => {
          result.server.send('WriteCode', JSON.stringify(payload));
        });
      } catch {
        // 发送写码异常
        this.statusChange(6);
        // 修改写码中的状态false
        this.isCoding = false;
        this.codeResultInfo.WriteCodeState = -1;
        // 批量写码失败提示
        if (this.isBatchConfiguration) this.$Message.warning('Configuration failed');
        // 写码失败保存写码记录
        this.saveCodeResult();
      }
    },
    //切换兼容显示模板
    showBrandModel () {
      this.isShowBrandModel = !this.isShowBrandModel;
    },
    //选中兼容品牌
    selBrandName (index, val) {
      this.brandNameIndex = index;
      this.isShowBrandModel = !this.isShowBrandModel;
      this.$set(this.formData, 'brand', val.value);
      // this.isDisabledSn = ['Cisco'].includes(this.formData.brand) ? true : false;
      this.isActiveBrand();
      // 当兼容改变时，重新获取配置
      this.getConfigFile();
      // 当兼容改变时，重新获取Bin文件
      this.getBinFile();
    },
    //关闭品牌兼容
    handleClose (e) {
      if (e.target.className === "table-input" || e.target.className === "table-input table-input-warning" || e.target.className === "input-icon-down ivu-icon ivu-icon-ios-arrow-up") return;
      this.isShowBrandModel = false;
    },
    //是否可以修正序列号S/N 开关
    reviseSN (val) {
      // 开始复写后||写码中||禁用SN，不可点击
      if (this.isCoding || this.isDisabledSn) return false;
      if (val == 'Yes') {
        this.isReviseSN = true
      }
      else {
        this.isReviseSN = false
        this.isSnRule = false;
      }
    },
    //是否批量写开关
    isBatchChange (val) {
      this.isBatchConfiguration = val;
    },
    //写码按钮事件
    startWriteCode () {
      // 检测不通过禁止写码
      if (!JSON.parse(this._hyTool.getStore("isCanWrite"))) return this.isCanWriteCode = true;
      // 正在写码时或者未找到码，禁止点击
      if (this.isCoding || this.isWriteCodeFiles === false) return false;
      // 表单验证
      this.ruleList = [];
      if (!this.formData.brand) this.ruleList.push('brand');
      if (this.isReviseSN && !this.formData.sn) this.ruleList.push('sn');
      // if (this.formData.brand === '') this.ruleList.push('brand');
      if (this.ruleList.length > 0 || !this.writeCodeInfo.binFile) return false;
      if (this.isReviseSN && !this.snRuleValidate()) return this.isSnRule = true;
      console.log('验证通过');
      // 表单验证通过，开始写码状态
      this.isCoding = true;
      // 如果是复写
      // if (this.isBatchConfiguration) this.isBatched = true;
      this.isActiveBrand();
      // 显示正在写码状态
      this.statusChange(4);
      // 开始测试配置
      this.testConfigFile();
    },
    //是否给brand警示框
    isActiveBrand () {
      var input = document.querySelectorAll('.brand>.table-brand>.table-input')[0];
      if (this.formData.brand === '') {
        input.classList.add('table-input-warning')
      } else {
        if (input.classList.contains('table-input-warning')) {
          input.classList.remove('table-input-warning')
        }
      }
    },
    // 根据属性值来跟本地光模块匹配判断是否展示
    showSelect (attr) {
      let isShow = '';
      if (attr === '1') {
        this.moduleInfo.Wavelength === '' || this.moduleInfo.Wavelength === 'Undefine' ? isShow = true : isShow = false;
        return isShow;
      } else if (attr === '2') {
        this.moduleInfo.Distance === '' || this.moduleInfo.Distance === 'Undefine' ? isShow = true : isShow = false;
        return isShow;
      } else {
        return true;
      }
    },
    // 根据型号名查属性
    async selectAttr () {
      await findByKeyModalIdFs({ modalId: this.formData.modelId }).then(res => {
        this.$set(this.moduleInfo, 'attrList', res.obj || []);
        this.moduleInfo.attrList.forEach((item, index) => {
          this.formData.confModalAttrs[index].attrKey = item.attrKey;
        });
      });
    },
    // 获取配置文件
    async getConfigFile () {
      // this.moduleInfo.compatibleType = this.moduleInfo.compatibleType === 'Brocade' ? 'Brocade' : '';
      let options = {
        modelId: this.formData.modelId,
        // 当兼容为Brocade，才会传递modelName和compatibleType
        modelName: this.formData.brand === 'Brocade' ? this.moduleInfo.PartNumber : null,
        compatibleType: this.formData.brand === 'Brocade' ? this.formData.brand : null
      }
      await selectByModalComType(options).then(res => {
        this.writeCodeInfo.configFile = res.obj.list;
      });
    },
    // 获取bin文件
    async getBinFile (type = null) {
      // 查找bin文件
      this.isWriteCodeFiles = null;
      // 序列化属性参数
      let attrKeyArray = [], attrValueArray = [];
      this.formData.confModalAttrs.forEach((item, index) => {
        attrKeyArray.push(item.attrKey || 0);
        if (item.attrKey === '2') {
          let distance = this.moduleInfo.Distance.toLowerCase();
          attrValueArray.push(distance || 0);
        } else if (item.attrKey === '1') {
          let Wavelength = this.moduleInfo.Wavelength || this.formData.confModalAttrs[index].attrValue;
          attrValueArray.push(Wavelength || 0);
        } else {
          attrValueArray.push(this.formData.confModalAttrs[index].attrValue || 0);
        }
      });
      // 获取写码结果记录配置参数
      this.codeResultInfo.attrKey = attrKeyArray.join(',');
      this.codeResultInfo.attrValue = attrValueArray.join(',');
      let options = {
        modelId: this.formData.modelId,
        compatibleType: this.formData.brand,
        sn: this.moduleInfo.SerialNumber,
        attrKey: attrKeyArray.join(','),
        attrValue: attrValueArray.join(','),
        number: type ? 10 : null
      }
      await selectModalbinByidKeyValueType(options).then(res => {
        let binInfo = null;
        if ([-1, -2].includes(res.obj.state)) {
          this.$set(this.writeCodeInfo, 'binFile', null);
        } else {
          if (type) {
            //复写获取一组（10个）bin文件
            this.batchList = res.obj.list;
            return false;
          } else {
            // 正常单个写码获取bin文件
            this.$set(this.writeCodeInfo, 'binFile', 'vtv' in res.obj && res.obj.vtv ? res.obj.vtv[0] : res.obj);
            binInfo = res.obj;
          }
        }
        // 判断是否有bin文件
        this.isWriteCodeFiles = this.writeCodeInfo.binFile ? true : false;
        // 'BinModel': '1'为bin模板批量写码 为'-1'则不是批量写bin模板 博科isCompatible必为0 是1 isTemplate!==0 为-1
        this.moduleInfo.compatibleType === 'Brocade' && binInfo.isTemplate !== 0 ? this.writeCodeInfo.BinModel = '-1' : this.writeCodeInfo.BinModel = '1';
        this.moduleInfo.compatibleType === 'Brocade' && this.formData.sn && (this.writeCodeInfo.BinModel = '1');
        this.writeCodeInfo.BinModel = binInfo.brandState === 0 ? '1' : '-1';
        // 是否可以修改SN
        this.isDisabledSn = ('isCompatible' in binInfo && binInfo.isCompatible === 0) ? false : true;
      }).catch(() => {
        this.isWriteCodeFiles = false;
      })
    },
    findPartNumber () {
      let val = this.proModelList;
      for (let i = 0; i < newPn.length; i++) {
        let item = newPn[i];
        if (item.NewPn === this.moduleInfo.PartNumber) {
          let key = {};
          key = item['Distance/KM'] === '' ? { attrKey: '0', attrValue: 0 } : { attrKey: '2', attrValue: item['Distance/KM'] + 'km' };
          // SFP-10GLRM-31临时解决方案
          (this.moduleInfo.PartNumber === 'SFP-10GLRM-31' && parseInt(key.attrValue) === 300) && (key.attrValue = '220m');
          this.moduleInfo.attrArr = [
            { attrKey: '1,' + key.attrKey, attrValue: [item['Channel/band'], key.attrValue ? key.attrValue.toLowerCase() : key.attrValue].join(',') }
          ];
          break;//终止循环体
        }
      }
      let flag = 'attrArr' in this.moduleInfo;//判断是否在json文件中找到对应关系
      if (flag) {
        for (let j = 0; j < val.length; j++) {
          if (this.moduleInfo.PartNumber === val[j].label) {
            this.formData.modelId = val[j].oldId;
          }
        }
      } else {
        for (let k = 0; k < val.length; k++) {
          if (this.moduleInfo.PartNumber === val[k].label) {
            this.formData.modelId = val[k].oldId ? val[k].oldId : val[k].value;
            this.selectAttr();
            break;
          }
        }
      }
    },
    // 批量写码 序列号变化规则
    reWriteCodeParse (str) {
      let number = str.slice(-3);
      let numberInt = parseInt(number);
      if (isNaN(numberInt)) numberInt = 0;
      let newNumber = '';
      if (numberInt >= 0 && numberInt < 10) {
        numberInt++;
        if (numberInt === 10) {
          newNumber = '0' + numberInt;
        } else {
          newNumber = '00' + numberInt;
        }
      } else if (numberInt >= 10 && numberInt < 100) {
        numberInt++;
        if (numberInt === 100) {
          newNumber = numberInt;
        } else {
          newNumber = '0' + numberInt;
        }
      } else if (numberInt >= 100 && numberInt <= 999) {
        numberInt++;
        if (numberInt === 1000) {
          newNumber = '000';
        } else {
          newNumber = numberInt;
        }
      }
      let numberStart = str.slice(0, -3) + newNumber;
      return numberStart;
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
        ModalName: this.moduleInfo.PartNumber,
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
    },
    //sn正则校验
    snRuleValidate () {
      let reg = /^[0-9a-zA-Z + -]{5,16}$/;
      let regEmpty = /(^\s+)|(\s+$)|\s+/g;
      if (reg.test(this.formData.sn) || regEmpty.test(this.formData.sn)) {
        return true
      } else {
        return false
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例
      if (vm.isDriveStart) {
        // var resArr = ['False', null];
        // (vm._hyTool.isConArray(resArr, vm.socketInfoUsb) || vm._hyTool.isConArray(resArr, vm.socketInfoLight)) &&
        vm.chat.then((result) => {
          result.server.send('GetInfo', '0');
        });
      }
    });
  },
  watch: {
    formData: { //监听的对象
      deep: true, //深度监听设置为 true
      handler: function (newV) {
        Object.keys(newV).forEach(item1 => {
          this.ruleList.forEach((item2, i) => {
            item1 === item2 && this.ruleList.splice(i, 1);
          })
        })
      }
    },
    // 监听是否禁用sn
    isDisabledSn (val) {
      if (val) {
        this.isReviseSN = false;
        delete this.formData.sn;
      }
    },
    // 监听复写按钮时候开启
    // isBatchConfiguration (val) {
    //   !val && (this.isBatched = val);
    // },
    isDriveStart (val) {
      // debugger;
      if (val) {
        var resArr = ['False', null];
        (this._hyTool.isConArray(resArr, this.socketInfoUsb) || this._hyTool.isConArray(resArr, this.socketInfoLight)) &&
          this.chat.then((result) => {
            result.server.send('GetInfo', '0');
          });
      }
    },
    // 监听配置
    socketInfoTry (val) {
      if (val === null) return false;
      if (val.Code === '0') {
        // 配置成功操作
        console.log('配置成功');
        this.codeResultInfo.ConfigState = 1;
        this.codeResultInfo.ConfigId = val.Result.configId;
        // 配置成功发送开始写码
        this.sendWriteCode();
      } else {
        // 配置失败操作
        console.log('配置失败');
        this.isCoding = false;
        this.codeResultInfo.ConfigState = -1;
        this.codeResultInfo.WriteCodeState = 0;
        // 显示写码失败的状态（配置也属于写码失败）
        this.statusChange(6);
        // 配置失败记录状态
        this.saveCodeResult();
      }
    },
    // 监听写码完成返回
    socketInfoWrite (val) {
      if (val === null) return false;
      if (val.Code === '0') {
        // 写码成功
        console.log('写码成功');
        this.statusChange(5);
        // 存储旧SN
        this.codeResultInfo.oldSerialNumber = this.moduleInfo.SerialNumber;
        // 写码成功重新获取模块信息
        this.moduleInfo = val.Result;
        //写码成功直接把兼容改成选择的兼容
        this.moduleInfo.CompatibleType = this.formData.brand;
        // 修改写码中的状态false
        this.isCoding = false;
        if (this.isBatchConfiguration) {
          this.$Message.success('Configuration succeeeded');
          // 批量bin文件写码时，成功后删除列表第一个码文件
          this.batchList.length > 0 && this.batchList.splice(0, 1);
          this.formData.sn = this.reWriteCodeParse(val.Result.SerialNumber);
        }
        // 记录写码结果
        this.codeResultInfo.SerialNumber = val.Result.SerialNumber;
        this.codeResultInfo.NowBase64 = val.Result.originBase64;
        this.codeResultInfo.ModalCode = val.Result.modalType;
        this.codeResultInfo.WriteCodeState = 1;
        this.saveCodeResult();
        this.WriteCodeAfterOption.CodeResult = 1;
      } else {
        // 写码失败
        console.log('写码失败');
        this.statusChange(6);
        // 修改写码中的状态false
        this.isCoding = false;
        // 写码失败保存写码记录
        this.codeResultInfo.WriteCodeState = -1;
        if (this.isBatchConfiguration) this.$Message.warning('Configuration failed');
        this.saveCodeResult();
        this.WriteCodeAfterOption.CodeResult = 0;
      }
      // 写码失败后操作
      this.WriteCodeAfterOption.ModelName = val.Result.PartNumber;
      this.handleAfterCode();
    },
    // 监听获取型号名
    proModelList (val) {
      if (val) this.findPartNumber();
    },
    // 监听usb状态
    socketInfoUsb (val) {
      // debugger;
      if (val === null) return false;
      if (val === 'False') {
        // usb断开
        this.statusChange(1);
        // 重置数据
        if (!this.isBatchConfiguration) this.resetData();
      } else {
        // usb插入
        this.statusChange(2);
      }
    },
    // 监听模块状态
    socketInfoLight (val) {
      // debugger;
      if (val === null) return false;
      // 模块断开情况 val===false,val.Code==='-1',val.Code === '1'
      if (val === 'False' || val.Code === '-1' || val.Code === '1') {
        // 模块断开
        this.statusChange(9);
        // 重置数据
        if (!this.isBatchConfiguration) this.resetData();
        // 复写模式下获取bin文件，一次10个码
        if (this.isBatchConfiguration) {
          // 当文件写完再次请求
          if (this.batchList.length > 0) return false;
          // 判断使用bin文件还是bin模板
          let flag = this._hyTool.isConArray(this.unableUploadTplList, this.formData.brand);
          flag && this.getBinFile(1);
        }
        // debugger;
        if (val.Code === '1') {
          // 读码失败（发送getInfo无法触发usb状态，需要手动触发）
          return this.GETSOCKETINFO_USB({ message: JSON.stringify({ "Code": "Successed" }) });
        }
      }
      else {
        // 模块插入
        this.statusChange(3);
        // 获取模块信息
        this.moduleInfo = val.Result;
        // 查询兼容
        this._getCompatible();
        // 特定模块波段的判断
        let checkModulePn = ['DWDM-SFP8G-80', 'DWDM-SFP10G-80', 'DWDM-SFP1G-EZX', 'DWDM-SFP1G-ZX', 'DWDM-SFP10G-40', 'DWDM-XFP10G-40', 'DWDM-XFP10G-80', 'DWDM-XFP10G-120'];
        checkModulePn.includes(this.moduleInfo.PartNumber) && (this.moduleInfo.Wavelength = '');
        // 匹配插入模块id
        this.findPartNumber();
        // 判断是否需要复写
        if (this.isBatchConfiguration) {
          // 显示正在写码状态
          this.statusChange(4);
          // 批量写码，不需要重新配置，直接调写码指令
          this.sendWriteCode();
        }
        // 获取模块图片信息
        this.getModuleImg();
      }
    },
    'formData.sn': {
      deep: true,
      handler (newV) {
        if (!newV) {
          this.ruleList.push('sn');
          this.isSnRule = false;
          return false;
        }
        if (this.isReviseSN && !this.snRuleValidate()) {
          this.isSnRule = true;
        } else {
          this.isSnRule = false;
        }
      }
    }
  }
};
</script>
