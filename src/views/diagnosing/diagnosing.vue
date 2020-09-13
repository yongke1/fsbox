<style lang="scss" scoped>
@import "~@assets/styles/_mixins";

.diagnose-box {
  .steping {
    padding: 40px 0 0;
  }
  .diagnose-status {
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
        // border: 0;
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
      a {
        // margin-top: 3rem;
        // padding: 0.6rem 4.5rem;
        width: 240px;
        line-height: 46px;
        display: inline-block;
        border-radius: 3px;
        border: 0;
        // margin-left: 30px;
        display: inline-block;
        border-radius: 3px;
        // box-shadow: 0px 21px 27px 0px rgba(7, 49, 94, 0.08);
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
      line-height: normal;
      font-weight: bold;
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
    .diagnose-content {
      .diagnose-table {
        width: 420px;
        margin: auto;
        padding-bottom: 35px;
        p {
          margin-bottom: 10px;
          color: #445f87;
          font-weight: 600;
          margin: 0;
        }
        .replace-title {
          justify-content: space-between;
          margin-bottom: 10px;
          .title-img-none {
            position: relative;
            span {
              position: absolute;
              top: 30px;
              left: -40px;
              padding: 20px;
              width: 100px;
              text-align: center;
              background: #fff;
              box-shadow: 0px 2px 15px 0px rgba(22, 81, 131, 0.15);
              display: none;
              font-size: 14px;
              color: #7b8fa5;
              &::before {
                content: "";
                border: 5px solid #fff;
                border-right-color: transparent;
                border-bottom-color: transparent;
                transform: rotate(45deg);
                position: absolute;
                top: -5px;
                left: 42px;
              }
            }
            &:hover {
              span {
                display: inline-block;
              }
            }
          }
          .title-img-open {
            width: 15px;
            height: 15px;
            cursor: pointer;
            background: url("~@assets/images/icon/box_icon.png") no-repeat -173px -341px;
            cursor: pointer;
          }
          .title-img-close {
            width: 15px;
            height: 15px;
            cursor: pointer;
            background: url("~@assets/images/icon/box_icon.png") no-repeat -142px -341px;
          }
        }
        .table-desc {
          color: #7b8fa5;
          font-size: 16px;
        }
        .table-aster {
          color: red;
          margin-left: 5px;
        }
        .table-input {
          width: 100%;
          padding: 17px;
          margin: 10px 0 20px 0;
          border: 1px solid #dee5ed;
          border-radius: 3px;
          font-size: 16px;
          color: #445f87;
          &:focus {
            outline: none;
          }
          &.table-input-warning {
            border: 1px solid #f66767;
            & + .warning-txt {
              display: inline-block;
            }
          }
          &::-webkit-input-placeholder {
            font-size: 16px;
            color: #a5bad0;
          }
        }
        // .table-input:nth-child(1) {
        //   margin-bottom: 0;
        // }
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
          .warning-txt {
            position: absolute;
            bottom: 0;
            left: 0;
            color: #f66767;
            display: none;
          }
          .input-icon-down {
            position: absolute;
            right: 10px;
            top: 30px;
            color: #a5bad0;
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
            height: 225px;
            overflow-y: scroll;
            &::-webkit-scrollbar {
              width: 5px;
              height: 1px;
              // background: red;
            }
            &::-webkit-scrollbar-thumb {
              /*滚动条里面小方块*/
              border-radius: 10px;
              -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
              background: #d7d7d7;
            }
            li {
              width: 25%;
              border-bottom: 1px solid #dee5ed;
              padding: 7px;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 56px;
              float: left;
              &:hover {
                color: #ffffff;
                background-color: #3793f1;
              }
              &:nth-child(1) {
                border-left: 1px solid #dee5ed;
              }
              & + li {
                border-left: 1px solid #dee5ed;
              }
            }
          }
          .active {
            color: #ffffff;
            background-color: #3793f1;
          }
          // .table-brand-desc {
          //   text-align: left;
          //   padding: 22px 63px 21px 40px;
          // }
        }
        .brand-select-model {
          position: absolute;
          width: 140%;
          z-index: 1;
          user-select: none;
          // border: 1px solid red;
          .select-modal-serch {
            position: relative;
            right: 15%;
            background: #ffffff;
            border: 1px solid #dee5ed;
            z-index: 5;
            .serch-input {
              background: rgba(247, 247, 247, 1);
              border-radius: 16px;
              height: 32px;
              margin: 7px 0;
              padding-left: 56px;
              padding-right: 56px;
              font-size: 16px;
              color: #445f87;
              &::-webkit-input-placeholder {
                font-size: 16px;
                color: #a5bad0;
              }
            }
            .serch-img {
              width: 20px;
              height: 20px;
              position: absolute;
              left: 25px;
              top: 14px;
              background: url("~@assets/images/icon/box_icon.png") no-repeat -316px -89px;
            }
            .input-serch-box {
              position: relative;
              display: flex;
              width: 226px;
              margin: auto;
            }
          }
          ul {
            li {
              font-size: 16px;
              color: #445f87;
            }
          }
        }
        .table-revise-sn {
          justify-content: space-between;
          // margin-top: 22px;
          margin-bottom: 20px;
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
              opacity: 0;
              position: absolute;
              width: 310px;
              font-size: 14px;
              color: #7b8fa5;
              padding: 17px 20px 12px 20px;
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
              opacity: 1;
            }
          }
          .revise-sn-right {
            div {
              display: flex;
            }
            div:nth-child(2) {
              margin-left: 22px;
            }
            .disabled {
              cursor: no-drop;
            }
          }
          .revise-sn-no {
            width: 20px;
            height: 20px;
            cursor: pointer;
            background: url("~@assets/images/icon/box_icon.png") no-repeat -122px -389px;
          }
          .revise-sn-yes {
            width: 20px;
            height: 20px;
            cursor: pointer;
            background: url("~@assets/images/icon/box_icon.png") no-repeat -84px -389px;
          }
          .revise-sn-disabled {
            cursor: no-drop;
          }
          // .revise-sn-none {
          //   width: 20px;
          //   height: 20px;
          //   cursor: pointer;
          //   background: url("~@assets/images/icon/box_icon.png") no-repeat -122px -389px;
          // }
        }
        .table-switch {
          justify-content: space-between;
          margin-bottom: 20px;
          align-items: center;
          position: relative;
          .ivu-switch {
            &.ivu-switch-default {
              background: #a5bad0;
              border: none;
            }
            &.ivu-switch-checked {
              background: #3793f1;
              // border: none;
            }
            &:focus {
              box-shadow: none;
            }
          }
          .info-text {
            position: relative;
            font-size: 16px;
            color: #7b8fa5;
            div {
              position: absolute;
              top: 0;
              right: -30px;
              width: 20px;
              height: 20px;
              background: url("~@assets/images/icon/box_icon.png") no-repeat -157px -389px;
            }
            div:hover {
              background: url("~@assets/images/icon/box_icon.png") no-repeat -194px -389px;
            }
            p {
              display: none;
              position: absolute;
              width: 310px;
              font-size: 14px;
              color: #7b8fa5;
              padding: 17px 20px 12px 20px;
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
                left: 150px;
              }
            }
            div:hover ~ p {
              z-index: 1;
              display: inline-block;
            }
          }
          p {
            position: absolute;
            right: -40px;
            top: 30px;
            z-index: -1;
            font-size: 14px;
            color: #7b8fa5;
            padding: 18px;
            box-shadow: 0px 2px 15px 0px rgba(22, 81, 131, 0.15);
            background: #fff;
            &::before {
              content: "";
              border: 5px solid #fff;
              border-right-color: transparent;
              border-bottom-color: transparent;
              transform: rotate(45deg);
              position: absolute;
              top: -5px;
              left: 43%;
            }
          }
          .open-img {
            width: 15px;
            height: 15px;
            background: url("~@assets/images/icon/box_icon.png") no-repeat -142px -341px;
            cursor: pointer;
          }
          .close-img {
            width: 15px;
            height: 15px;
            background: url("~@assets/images/icon/box_icon.png") no-repeat -173px -341px;
            cursor: pointer;
          }
          .close-img:hover ~ .open-up {
            z-index: 1;
          }
          .open-img:hover ~ .pick-up {
            z-index: 1;
          }
          .revise-sn-left {
            position: relative;
            span {
              font-size: 16px;
              color: #7b8fa5;
            }
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
              display: none;
              position: absolute;
              width: 310px;
              font-size: 14px;
              color: #7b8fa5;
              padding: 17px 20px 12px 20px;
              box-shadow: 0px 2px 15px 0px rgba(22, 81, 131, 0.15);
              left: -30%;
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
                left: 170px;
              }
            }
            .sn-left-icon:hover ~ .revise-sn-hint {
              display: inline-block;
            }
          }
        }
        .writeCode-btn {
          width: 100%;
          padding: 13px 17px;
          background: linear-gradient(to right, #37a0f6, #387ee9);
          margin: auto;
          text-align: center;
          color: #ffffff;
          cursor: pointer;
          border-radius: 3px;
          font-weight: bold;
          &.loading {
            background: linear-gradient(
              -90deg,
              rgba(255, 199, 80, 1),
              rgba(255, 156, 93, 1)
            );
          }
        }
        .writeCode-btn-loading {
          width: 100%;
          padding: 13px 17px;
          background: linear-gradient(
            -90deg,
            rgba(255, 199, 80, 1),
            rgba(255, 156, 93, 1)
          );
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
        .transmission-distance {
          margin-top: 20px;
        }
        .cut-off {
          height: 2px;
          background: rgba(234, 239, 245, 1);
          margin: 20px 0;
        }
      }
    }
  }
}
.modal-img {
  img {
    margin: 46px 241px;
    width: 451px;
    height: 271px;
  }
  p {
    font-weight: bold;
    color: rgba(255, 156, 93, 1);
    font-size: 36px;
    width: 586px;
    padding-bottom: 45px;
    margin: auto;
    text-align: center;
  }
}
.flex {
  display: flex;
}
input:focus {
  border: none;
}
input {
  background: none;
  outline: none;
  border: none;
}
.after-replace-sn {
  position: relative;
  .warning-txt {
    position: absolute;
    bottom: 0;
    left: 0;
    color: red;
    display: none;
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
  <div class="diagnose-box">
    <div class="steping">
      <Steping :list="stepList"
               :current="currentStep"></Steping>
    </div>
    <!-- 读码成功前 -->
    <div class="diagnose-status"
         v-if="!status.isInsertLight">
      <div :class="['statusImg-box',{'active':connStatusNum>0}]">
        <img :src="statusImg[connStatusNum].imgUrl"
             alt="" />
      </div>
      <div class="status-info">
        <div :class="
            statusImg[connStatusNum].status == 'error'
              ? 'error-color'
              : statusImg[connStatusNum].status == 'success'
              ? 'success-color'
              : 'status-msg'
          ">
          {{ statusImg[connStatusNum].msg }}
        </div>
        <div class="status-text-box"
             v-if="!status.isConnecDrive">
          <p class="status-text">
            Please
            <span @click="reload">reload</span>
            the browser after the installation is complete.
          </p>
          <p class="status-text">
            It is recommended to activate your service in Google Chrome (68
            version and later)
          </p>
          <!-- 安装驱动 -->
          <div style="padding:40px 0;flex-flow: row-reverse nowrap;justify-content: center;align-items: center;"
               :style="osName === 'Windows' ? 'display: flex;' : 'dispaly:block'">
            <a :href="versonDownload['MacOS']"
               @mouseenter="macHover=true"
               @mouseleave="macHover=false"
               :class="osName==='MacOS'?'active':''">
              <img src="~@assets/images/online/MacWhite.png"
                   alt=""
                   v-if="macHover">
              <img src="~@assets/images/online/MacGray.png"
                   alt=""
                   v-else-if="osName !== 'MacOS'" />
              <img src="~@assets/images/online/MacWhite.png"
                   alt=""
                   v-else-if="osName === 'MacOS'" />Mac OS
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
                   v-else-if="osName !== 'Windows'" />
              <img src="~@assets/images/online/WindowsWhite.png"
                   alt=""
                   v-else-if="osName === 'Windows'" />
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
      <Module-Info :Brand="
          deviceInfo.VesndorName !== 'FS'
            ? '--'
            : isFirstDeviceInfo
            ? deviceInfo.CompatibleType
            : replaceDeviceInfo.CompatibleType
        "
                   :SN="
          deviceInfo.VesndorName !== 'FS'
            ? '--'
            : isFirstDeviceInfo
            ? deviceInfo.SerialNumber
            : replaceDeviceInfo.SerialNumber
        "
                   :PN="
          deviceInfo.VesndorName !== 'FS'
            ? '--'
            : isFirstDeviceInfo
            ? deviceInfo.PartNumber
            : replaceDeviceInfo.PartNumber
        "></Module-Info>
      <!-- 状态图 -->
      <div class="status-success-img"
           v-if="
          (status.isInsertLight && status.isWriteFail == true) ||
            status.isWriteingCode == true ||
            status.isWriteSuccess == true
        ">
        <img :src="statusImg[connStatusNum].imgUrl"
             alt="" />
      </div>
      <!-- 状态图描述 -->
      <div class="status-success-msg"
           v-if="
          status.isWriteSuccess || status.isWriteFail || status.isWriteingCode
        ">
        <span :class="
            statusImg[connStatusNum].status == 'error'
              ? 'error-color'
              : statusImg[connStatusNum].status == 'success'
              ? 'success-color'
              : ''
          ">{{ statusImg[connStatusNum].msg }}</span>
        <div v-show="
            (isBatchConfiguration && status.isWriteSuccess) ||
              (isBatchConfiguration && status.isWriteFail) ||
              (!isBatchConfiguration && status.isWriteFail)
          "
             :style="connStatusNum === 5 ? 'display:none;' : ''"
             class="batch-config-btn"
             v-text="
            !isBatchConfiguration && status.isWriteFail
              ? 'Give Feedback'
              : 'Stop Batch Configuration'
          "
             @click="handleBtn"></div>
      </div>
      <!-- 写码区 -->
      <div class="diagnose-content"
           v-if="
          status.isWriteSuccess == false &&
            status.isWriteFail == false &&
            status.isWriteingCode == false
        ">
        <div class="diagnose-table">
          <div class="flex replace-title">
            <p>Available FS Transceiver Information</p>
            <div class="title-img-none"
                 :class="
                !isReplace && isOpenReplaceModle
                  ? 'title-img-open'
                  : !isReplace && !isOpenReplaceModle
                  ? 'title-img-close'
                  : ''
              "
                 @click="isShowBeforeReplaceModle">
              <span>
                {{!isReplace && isOpenReplaceModle
                  ? 'Open up': 'Pick up'}}
              </span>
            </div>
          </div>
          <!-- 更换前的模块表单 -->
          <div class="before-replace-table"
               v-if="isReplace || isOpenReplaceModle">
            <!-- pn title -->
            <div class="pn">
              <div class="desc">
                <span class="table-desc">P/N</span><span class="table-aster">*</span>
              </div>
              <input type="text"
                     class="table-input pn-input"
                     :placeholder="
                  deviceInfo.VesndorName === 'FS' ? deviceInfo.PartNumber : '--'
                "
                     disabled />
            </div>
            <!-- brand input -->
            <div class="brand">
              <div class="desc">
                <span class="table-desc"> Compatible Brand </span><span class="table-aster">*</span>
              </div>
              <div class="table-brand">
                <input type="text"
                       class="table-input"
                       placeholder="Please choose"
                       v-model="brandVal"
                       @click="showBrandModel"
                       :maxlength="16"
                       v-on:blur="isActiveBrand"
                       v-bind:disabled="!isReplace"
                       readonly />
                <div class="warning-txt">Please choose a Brand</div>
                <Icon :type="isShowBrandModel ? 'ios-arrow-up' : 'ios-arrow-down'"
                      @click="showBrandModel"
                      class="input-icon-down" />
                <div class="brand-select-model animate__animated animate__slideInDown"
                     v-if="isShowBrandModel"
                     v-clickoutside="handleClose">
                  <div class="select-modal-serch">
                    <div class="input-serch-box">
                      <input type="text"
                             placeholder="Search your Brand"
                             class="serch-input"
                             v-model="serchBrandVal" />
                      <div class="serch-img"
                           :style="
                          serchBrandVal !== '' ? 'left:auto;right:0px' : ''
                        "></div>
                    </div>
                  </div>
                  <ul>
                    <li v-for="(item, index) in items"
                        :key="index"
                        :class="{ active: item === brandNameIndex }"
                        @click="selBrandName(index, item)">
                      {{ item.label }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- sn -->
            <div class="sn">
              <div class="desc">
                <span class="table-desc">S/N</span><span class="table-aster">*</span>
              </div>
              <div class="table-brand">
                <input type="text"
                       class="table-input"
                       :placeholder="
                    deviceInfo.VesndorName === 'FS'
                      ? deviceInfo.SerialNumber
                      : '--'
                  "
                       :maxlength="16"
                       disabled />
                <!-- v-bind:disabled="!isReplace" -->
              </div>
            </div>
            <!-- info open row -->
            <div class="flex table-switch">
              <div class="info-text">
                More Information
                <div></div>
                <p>
                  Fill in more information to match transceiver accurately
                </p>
              </div>
              <div v-show="isReplace"
                   :class="isOpenDeviceInfo ? 'close-img' : 'open-img'"
                   @click.stop="openInfo()"></div>
              <p class="open-up">Open up</p>
              <p class="pick-up">Pick up</p>
            </div>
            <div v-if="isOpenDeviceInfo"
                 class="animate__animated animate__fadeInDown">
              <!-- Device Model Number -->
              <div>
                <div>
                  <span class="table-desc">Device Model Number</span>
                </div>
                <div>
                  <input type="text"
                         class="table-input"
                         placeholder="Please filling"
                         v-model="deviceNumber"
                         :maxlength="16"
                         v-bind:disabled="!isReplace" />
                </div>
              </div>
              <!-- Device Model Number -->
              <div>
                <div>
                  <span class="table-desc">Remark</span>
                </div>
                <div>
                  <textarea class="table-input"
                            placeholder="Please filling"
                            v-model="deviceNumberRemark"
                            v-bind:disabled="!isReplace" /></textarea>
                </div>
              </div>
            </div>

            <!-- Switch Batch Matching -->
            <div class="flex table-switch">
              <div class="revise-sn-left">
                <span>Save the information to my Configuration</span>
              </div>
              <div>
                <i-switch v-model="isSaveConfig"
                          v-bind:disabled="!isReplace"
                          @on-change="isSaveConfigChange" />
              </div>
            </div>
          </div>
          <div :class="!isReplace ? 'cut-off' : ''"></div>
          <!-- 更换后的模块表单 -->
          <div class="after-replace-table"
               v-if="!isReplace">
            <p>Problematic FS Transceiver information</p>
            <!-- Input pn rows -->
            <div class="after-replace-pn">
              <div class="desc">
                <span class="table-desc">P/N</span><span class="table-aster">*</span>
              </div>
              <input type="text"
                     class="table-input pn-input"
                     :placeholder="
                  replaceDeviceInfo.VesndorName === 'FS'
                    ? replaceDeviceInfo.PartNumber
                    : '--'
                "
                     disabled />
            </div>
            <!-- Radio revise-sn -->
            <div class="table-revise-sn flex">
              <div class="revise-sn-left">
                <span>Revise S/N</span>
                <div class="sn-left-icon"></div>
                <div class="revise-sn-hint">
                  The module of this brand does not support serial number
                  modification. If you need to modify the serial number, please
                  apply in "Box pro"
                </div>
              </div>
              <!-- 是否可以修改序列号 -->
              <div class="revise-sn-right flex">
                <div @click="reviseSN('Yes')">
                  <div :class="[
                      isReviseSN ? 'revise-sn-yes' : 'revise-sn-no',
                      { 'revise-sn-disabled': !status.isDiagnosing },
                    ]"
                       :style="isCompatible === 0 ? '' : 'cursor: no-drop;'"></div>
                  <span :style="isCompatible === 0 ? '' : 'cursor: no-drop;'">Yes</span>
                </div>
                <div @click="reviseSN('No')">
                  <div :class="[
                      isReviseSN ? 'revise-sn-no' : 'revise-sn-yes',
                      { 'revise-sn-disabled': !status.isDiagnosing },
                    ]"
                       :style="isCompatible === 0 ? '' : 'cursor: no-drop;'"></div>
                  <span :style="isCompatible === 0 ? '' : 'cursor: no-drop;'">No</span>
                </div>
              </div>
            </div>
            <!-- Input sn rwos -->
            <div class="after-replace-sn"
                 v-show="isReviseSN">
              <div class="desc">
                <span class="table-desc">S/N</span><span class="table-aster">*</span>
              </div>
              <input type="text"
                     :class="[
                  'table-input',
                  'pn-input',
                  { 'table-input-warning': isSnRule },
                ]"
                     placeholder="Please filling"
                     :disabled="!status.isDiagnosing"
                     @change="snRuleValidate()"
                     v-model="replaceBand" />
              <div class="warning-txt">
                The SerialNumber input is invalid
              </div>
            </div>
            <!-- Switch Batch Matching -->
            <div class="flex table-switch">
              <div class="revise-sn-left">
                <span>Batch Matching</span>
                <div class="sn-left-icon"></div>
                <div class="revise-sn-hint">
                  The module of this brand does not support serial number
                  modification. If you need to modify the serial number, please
                  apply in "Box pro"
                </div>
              </div>
              <div>
                <i-switch v-model="isBatchConfiguration"
                          :disabled="!status.isDiagnosing"
                          @on-change="BatchConfiguration" />
              </div>
            </div>
          </div>
          <!-- start Diagnosing -->
          <div :class="[btnText === 'Start Diagnosing' || btnText === 'Start Matching'? 'writeCode-btn': 'writeCode-btn-loading',{'loading':btnText === 'Matching......'&&!status.isDiagnosing}]"
               @click="startDiagnosing">
            <span>{{ btnText }}</span>
          </div>
        </div>
      </div>
    </div>
    <Modal v-model="isShowReplaceModal"
           footer-hide
           :closable="false"
           :mask-closable="false"
           :transfer="false"
           :width="933"
           class-name="vertical-center-modal">
      <div class="modal-img">
        <img src="~@assets/images/online/insertLightBefore.png"
             alt="" />
        <p>
          Please replace the transceiver to be matched
        </p>
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
import { mapState, mapGetters, mapMutations } from "vuex";
import brandList from "./config/compatibleBrand";
import { UpdateCode, getCompatible, saveCode } from "@service/diagnosing/diagnosing";
import mixin from "@assets/js/mixin/mixin";
import fsModal from '@components/modal/modals';

import {
  selectByModalComType,
  findByKeyModalIdFs,
  writeCodeRecord,
  updateAfterCode
} from "@service/common/common";
import pnList from "@assets/js/sources/newPn";
import specialRulesForBrocade from "@assets/js/sources/specialRulesForBrocade.js";
// import func from '../../../vue-temp/vue-editor-bridge';
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
    document.addEventListener("click", documentHandler);
  },
  unbind (el) {
    document.removeEventListener("click", el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  },
};

export default {
  components: { fsModal },
  mixins: [mixin],
  props: ["chat"],
  directives: { clickoutside },
  computed: {
    ...mapGetters(["compatibleTypeOnline", "userInfo"]),
    ...mapState([
      "osName",
      "versonDownload",
      "isDriveStart",
      "socketInfoUsb",
      "socketInfoLight",
      "proModelList",
      "isgetProModel",
      "socketInfoWrite",
      "socketInfoTry",
      "isCustomer",
    ]),
    //过滤方法
    items: function () {
      var _search = this.serchBrandVal;
      if (_search) {
        //不区分大小写处理
        var reg = new RegExp(_search, "ig");
        //es6 filter过滤匹配，有则返回当前，无则返回所有
        return this.brandList.filter(function (e) {
          //匹配所有字段
          return Object.keys(e).some(function (key) {
            return e[key].match(reg);
          });
          //匹配某个字段
          //  return e.name.match(reg);
        });
      }
      return this.brandList;
    },
    isFirstDeviceInfo: function () {
      if (Object.keys(this.replaceDeviceInfo).length === 0) return true;
      else return false;
    },
  },
  data () {
    return {
      macHover: false,
      winHover: false,
      //状态img
      statusImg: [
        {
          imgUrl: require("../../assets/images/online/device.png"),
          msg: "No FS_Service driver installed",
          status: "none",
        }, //驱动下载前
        {
          imgUrl: require("../../assets/images/online/insertUsbBefore.png"),
          msg: "Please connect  FS BOX",
          status: "none",
        }, //插入usb前
        {
          imgUrl: require("../../assets/images/online/insertUsbAfter.png"),
          msg: "Please connect  FS BOX",
          status: "none",
        }, //插入usb后
        {
          imgUrl: require("../../assets/images/online/insertLightBefore.png"),
          msg: "Please insert your transceiver for reading",
          status: "none",
        }, //插入光模块前
        {
          imgUrl: require("../../assets/images/online/insertLightAfter.png"),
          msg: "Please insert your transceiver for reading",
          status: "none",
        }, //插入光模块后
        {
          imgUrl: require("../../assets/images/online/writeTheCode.png"),
          msg: "Writing...",
          status: "none",
        }, //正在写码
        {
          imgUrl: require("../../assets/images/online/readCodeSuccess.png"),
          msg: "Matching succeeded",
          status: "success",
        }, //写码成功
        {
          imgUrl: require("../../assets/images/online/readCodeError.png"),
          msg: "Matching  failed",
          status: "error",
        }, //写码失败
        {
          imgUrl: require("../../assets/images/online/insertLightBefore.png"),
          msg: "Please insert next transceiver",
          status: "success",
        }, //连续写码成功
        {
          imgUrl: require("../../assets/images/online/insertLightBefore.png"),
          msg: "Please try again or insert the next transceiver",
          status: "error",
        }, //连续写码失败
      ],
      //brand值
      brandVal: null,
      //设备号
      deviceNumber: null,
      //是否展开设备信息
      isOpenDeviceInfo: false,
      //是否显示brand模板
      isShowBrandModel: false,
      //诊断按钮text
      btnText: "Start Diagnosing",
      //设备号备注
      deviceNumberRemark: "",
      //当前选中的兼容品牌
      brandNameIndex: -1,
      //是否显示更换光模块的模态窗
      isShowReplaceModal: false,
      //是否保存配置
      isSaveConfig: true,
      //模块是否是更换前
      isReplace: true,
      //是否打开更换前的模板
      isOpenReplaceModle: false,
      //搜索模板的输入值
      serchBrandVal: "",
      //第一次读取的光模块信息
      deviceInfo: {},
      //非第一次读取的光模块信息
      replaceDeviceInfo: {},
      //兼容模板下拉数据
      brandList: brandList,
      //搜索框的data
      searchData: {
        modelId: "",
        compatibleType: "",
        confModalAttrs: [
          {
            attrKey: "",
            attrValue: "",
          },
          {
            attrKey: "",
            attrValue: "",
          },
        ],
      },
      //配置文件
      configDataList: [],
      // 查询bin文件
      bin: { fileBase64: null },
      //brocade 兼容前缀
      brocadePrefix: "",
      // 是否为特殊兼容品牌驱动判断
      isCompatible: "",
      //上传的数据
      formData: {},
      //线缆长度和波段
      attrArr: null,
      //查询bin文件的属性表
      attrList: [],
      //五个特殊兼容
      specialCompatible: [
        { value: "Cisco" },
        { value: "H3C" },
        { value: "Brocade" },
        { value: "IBM" },
        { value: "Huawei" },
      ],
      //切换后的sn输入框
      replaceBand: "",
      //初次读取光模块的base64
      originBase64: "",
      isSnRule: false,
      // 保存写码记录
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
        CodeType: 2,
        ModelName: this.WriteCodeAfterOption.ModelName,
        CodeResult: this.WriteCodeAfterOption.CodeResult
      }
      updateAfterCode(options);
    },
    handleBtn () {
      !this.isBatchConfiguration && this.status.isWriteFail ? this.$router.push({ name: 'main.feedback' }) : this.stopBatch();
    },
    //显示brand模板
    showBrandModel () {
      if (!this.isReplace) return false;
      this.isShowBrandModel = !this.isShowBrandModel;
    },
    //点击其他地方关闭brand模板
    handleClose (e) {
      if (
        e.target.className === "table-input" ||
        e.target.className === "table-input table-input-warning" ||
        e.target.className === "input-icon-down ivu-icon ivu-icon-ios-arrow-up"
      )
        return;
      this.isShowBrandModel = false;
    },
    //展开更多资料
    openInfo () {
      this.isOpenDeviceInfo = !this.isOpenDeviceInfo;
    },
    isActiveBrand () {
      var input = document.querySelectorAll(
        ".brand>.table-brand>.table-input"
      )[0];
      if (this.brandVal === null) {
        input.classList.add("table-input-warning");
      } else {
        if (input.classList.contains("table-input-warning")) {
          input.classList.remove("table-input-warning");
        }
      }
    },
    //点击开始诊断按钮
    startDiagnosing () {
      // 检测不通过禁止写码
      if (!JSON.parse(this._hyTool.getStore("isCanWrite"))) return this.isCanWriteCode = true;
      if (this.brandVal === null) {
        this.isActiveBrand();
        return;
      }
      if (this.isReplace) {
        this.setCurrentStep(1, [
          { index: 0, des: "Connecting Box", status: "finish" },
          { index: 1, des: "Reading", status: "finish" },
          { index: 2, des: "Diagnosing", status: "wait" },
          { index: 3, des: "Replace transceiver", status: "" },
          { index: 4, des: "Matching", status: "" },
        ]);
        //定制前
        if (this.status.isDiagnosing) {
          //是否正在诊断的时候点击了按钮
          this.status.isDiagnosing = false;
          this.setCurrentStep(1, [
            { index: 0, des: "Connecting Box", status: "finish" },
            { index: 1, des: "Reading", status: "finish" },
            { index: 2, des: "Diagnosing", status: "process" },
            { index: 3, des: "Replace transceiver", status: "" },
            { index: 4, des: "Matching", status: "" },
          ]);
          return;
        } else {
          this.status.isDiagnosing = true;
          this.btnText = "Diagnosing......";
          //定制中状态
          //是否是特殊兼容
          if (
            this._hyTool.isInArray(this.specialCompatible, this.brandVal) === ""
          ) {
            this.isCompatible = 0;
          } else {
            this.isCompatible = 1;
          }
          // 保存读码信息
          let codeInfo = {
            binBase64: this.deviceInfo.originBase64,
            userId: this.userInfo.userNo,
            compatibleType: this.brandVal,
            modalName: this.deviceInfo.PartNumber,
            remark: this.deviceNumberRemark,
            binSn: this.deviceInfo.SerialNumber,
            equipmentName: this.deviceNumber,
            state: this.isSaveConfig ? 1 : 0,
            readCompatible:
              this.deviceInfo.CompatibleType || this.searchData.compatibleType,
          };
          UpdateCode(codeInfo).then((res) => {
            if (res.code) {
              this.isShowReplaceModal = true;
              this.btnText = "Start Matching";
              this.originBase64 = this.deviceInfo.originBase64;
              this.setCurrentStep(2, [
                { index: 0, des: "Connecting Box", status: "finish" },
                { index: 1, des: "Reading", status: "finish" },
                { index: 2, des: "Diagnosing", status: "finish" },
                { index: 3, des: "Replace transceiver", status: "process" },
                { index: 4, des: "Matching", status: "" },
              ]);
              this.$Message.success('Diagnosing succeeeded');
            }
          });
        }
      } else {
        //定制后的匹配事件
        if (this.isReviseSN) {
          if (!this.snRuleValidate()) {
            // this.$Message.error(
            //   {
            //     content: 'The SerialNumber input is invalid',
            //     duration: 5
            //   }
            // );
            return (this.isSnRule = true);
            // return
          } else {
            this.isSnRule = false;
          }
        }
        if (this.status.isDiagnosing) {
          this.btnText = "Matching......";
          this.status.isDiagnosing = false;
        } else {
          return;
        }
        this.ok();
      }
    },
    async ok () {
      console.log(this.socketInfoLight);
      if (this.socketInfoLight === "False" || this.socketInfoLight.Code === "1")
        return;
      this.coding();
    },
    //校验定制前的表单验证并发起配置
    coding () {
      if (!this.deviceInfo.originBase64) return;
      this.searchData.modelName = "";
      if (/[0-9a-zA-Z]/.test(this.deviceNumber)) {
        this.tryConfig();
      }
    },
    // 开始写码
    async startCode () {
      if (!this.deviceInfo.originBase64) {
        // 光模块写码文件无效
        this.setCurrentStep(1, [
          { index: 0, des: "Connecting Box", status: "finish" },
          { index: 1, des: "Reading", status: "finish" },
          { index: 2, des: "Diagnosing", status: "error" },
          { index: 3, des: "Replace transceiver", status: "" },
          { index: 4, des: "Matching", status: "" },
        ]);
        return;
      }
      // 处理博科前缀
      if (this.brandVal === "Brocade") {
        let modelIndex = this.proModelList.findIndex((item) => {
          return item.value === this.searchData.modelId;
        });
        let modelLabel = this.proModelList[modelIndex].label;
        let isExistInCA9 = specialRulesForBrocade.CA9.includes(modelLabel);
        let isExistInCZA8 = specialRulesForBrocade.CZA8.includes(modelLabel);
        this.brocadePrefix = "";
        if (isExistInCA9) {
          this.brocadePrefix = "CA";
        } else if (isExistInCZA8) {
          this.brocadePrefix = "CZA";
        }
      }
      // let myCompatibleType = '';
      // let serialNumBrocade = this.brandVal === 'Brocade' ? this.brocadePrefix + this.replaceBand : this.replaceBand;
      // myCompatibleType = this.isReviseSN && this.replaceBand !== '' ? this.brandVal + ',' + serialNumBrocade : this.brandVal;
      // 写码参数
      let newBinModel = this.isReviseSN && this.replaceBand !== "" ? 0 : -1;
      let _compatibleType = "";
      _compatibleType =
        this.searchData.compatibleType || this.deviceInfo.compatibleType || "A";
      if (this.brandVal === "Brocade") {
        _compatibleType = this.brocadePrefix + _compatibleType;
      }
      if (this.isReviseSN && this.replaceBand !== "") {
        _compatibleType = _compatibleType + "," + this.replaceBand;
      }
      let payload = {
        Base64: this.originBase64,
        CompatibleType: _compatibleType,
        BinModel: newBinModel, //-1为覆盖其他为不覆盖
        // CompatibleType: "A,LMT-808080",
        // BinModel: 0,     //-1为覆盖其他为不覆盖
        IsCompatible: this.isCompatible.toString(), //是否是五种特殊兼容,不是为0
        Pn: "",
        ManufacturerName: "",
      };
      try {
        //写码请求
        this.chat.then((result) => {
          result.server.send("WriteCode", JSON.stringify(payload));
        });
      } catch {
        //写码请求发送失败
        // await writeCodeRecord(this.formData);
        // 发送写码异常记录
        this.codeResultInfo.WriteCodeState = -1;
        this.saveCodeResult();
        this.setCurrentStep(4, [
          { index: 0, des: "Connecting Box", status: "finish" },
          { index: 1, des: "Reading", status: "finish" },
          { index: 2, des: "Diagnosing", status: "finish" },
          { index: 3, des: "Replace transceiver", status: "finish" },
          { index: 4, des: "Matching", status: "error" },
        ]);
      }
    },
    // 测试配置文件
    async tryConfig () {
      this.setCurrentStep(3, [{ index: 4, des: "Matching", status: "wait" }]);
      try {
        // 发送给signal消息
        this.chat.then((result) => {
          let test = this.configDataList;
          result.server.send("TryConfig", JSON.stringify(test));
        });
      } catch {
        // 写码失败状态图
        this.connStatusNum = 4;
        this.status.isConfiguationFailed = true;
        // await writeCodeRecord(this.formData);
        // 保存写码记录
        this.codeResultInfo.ConfigState = -1;
        this.codeResultInfo.WriteCodeState = 0;
        this.saveCodeResult();
        this.$Message.error({
          content:
            "Matching failed, please try again or replace the transceiver.",
          duration: 5,
        });
        // 配置文件错误
        this.setCurrentStep(4, [
          { index: 0, des: "Connecting Box", status: "finish" },
          { index: 1, des: "Reading", status: "finish" },
          { index: 2, des: "Diagnosing", status: "finish" },
          { index: 3, des: "Replace transceiver", status: "finish" },
          { index: 4, des: "Matching", status: "error" },
        ]);
      }
    },
    //选中兼容品牌
    selBrandName (index, val) {
      this.brandNameIndex = val;
      this.brandVal = val.label;
      this.isShowBrandModel = !this.isShowBrandModel;
      this.isActiveBrand();
    },
    //是否可以修正序列号S/N 开关
    reviseSN (val) {
      if (!this.status.isDiagnosing) return false;
      //特殊的兼容 无法修改sn
      if (this.isCompatible === 0) {
        if (val == "Yes") {
          this.isReviseSN = true;
        } else {
          this.isReviseSN = false;
        }
      } else {
        return;
      }
    },
    //是否批量配置
    BatchConfiguration (val) {
      this.isBatchConfiguration = val;
    },
    //是否保存信息到我的配置
    isSaveConfigChange (val) {
      this.isSaveConfig = val;
    },
    //是否显示更换前的模板
    isShowBeforeReplaceModle () {
      this.isOpenReplaceModle = !this.isOpenReplaceModle;
    },
    // 获取光模块兼容性
    async _getCompatible (sno) {
      let userInfo = JSON.parse(this._hyTool.getStore("userInfo"));
      if (sno) {
        const res = await getCompatible({
          UserId: userInfo.userNo,
          NowBinSn: sno,
        });
        if (res.obj && res.obj.compatibleType) {
          this.$set(this.searchData, "compatibleType", res.obj.compatibleType);
          //如果驱动返回CompatibleType为空则将查询出来的CompatibleType赋给驱动信息对象
          if (this.deviceInfo.CompatibleType === "") {
            this.deviceInfo.CompatibleType = this.searchData.compatibleType;
          }
        }
      }
    },
    // 根据型号名查询属性
    async selectAttr (result) {
      this.searchData.modelId = result.value;
      if (result) {
        if (
          result.label === "DWDM-SFP8G-80" ||
          result.label === "DWDM-SFP10G-80" ||
          result.label === "DWDM-SFP1G-EZX" ||
          result.label === "DWDM-SFP1G-ZX" ||
          result.label === "DWDM-SFP10G-40" ||
          result.label === "DWDM-XFP10G-40" ||
          result.label === "DWDM-XFP10G-80" ||
          result.label === "DWDM-XFP10G-120"
        ) {
          this.deviceInfo.Wavelength = "";
        }
        // 清空属性内容
        this.searchData.confModalAttrs = [
          {
            attrKey: "",
            attrValue: "",
          },
          {
            attrKey: "",
            attrValue: "",
          },
        ];
        if (result.value) {
          //  开始查询属性;
          const res = await findByKeyModalIdFs({ modalId: result.value });
          this.attrList = res.obj || [];
          if (result.label) {
            this.searchData.modelName = result.label;
          }
          this.attrList.forEach((item, index) => {
            this.searchData.confModalAttrs[index].attrKey = item.attrKey;
          });
          this.getConfigList();
        }
      }
    },
    // 查询配置文件
    async getConfigList () {
      if (this.searchData.modelId) {
        let payload = this._hyTool.deepCopy(this.searchData);
        delete payload.confModalAttrs;
        // 处理Brocade兼容，需要多传递一个modelName参数
        this.searchData.compatibleType === "Brocade" &&
          (payload.modelName = this.deviceInfo.PartNumber);
        // 通过兼容查询配置文件
        this.searchData.compatibleType === "Brocade"
          ? "Brocade"
          : (payload.compatibleType = "");
        const res = await selectByModalComType(payload);
        this.configDataList = res.obj.list;
      }
    },
    //停止连续写码
    stopBatch () {
      if (!this.isBatchConfiguration && this.status.isWriteFail) {
        //非连续写码且写码失败
      } else {
        //连续写码成功或失败
        // this.isReplace = false
        this.reset_server();
      }
    },
    //清除状态
    reset_server () {
      this.status.isWriteSuccess = false;
      this.status.isWriteFail = false;
      this.status.isWriteingCode = false;
      this.status.isDiagnosing = false;
      this.isFirstSuccess = false;
      this.isBatchConfiguration = false;
      this.isReviseSN = false;
      this.replaceBand = "";
      this.brandVal = "";
      this.deviceNumber = "";
      this.deviceNumberRemark = "";
      this.isReplace = true;
      this.status.isConfiguationFailed = false;
      this.btnText = "Start Diagnosing";
      this.setCurrentStep(1, [
        { index: 0, des: "Connecting Box", status: "finish" },
        { index: 1, des: "Reading", status: "finish" },
        { index: 2, des: "Configuration", status: "process" },
        { index: 3, des: "Replace Transceiver", status: "" },
        { index: 4, des: "Matching", status: "" },
      ]);
    },
    //sn正则校验
    snRuleValidate () {
      let reg = /^[0-9a-zA-Z + -]{5,16}$/;
      let regEmpty = /(^\s+)|(\s+$)|\s+/g;
      if (reg.test(this.replaceBand) || regEmpty.test(this.replaceBand)) {
        return true;
      } else {
        return false;
      }
    },
    // 保存写码记录
    async saveCodeResult () {
      let options = {
        CodeType: '0',
        State: 0,
        Sale: this._hyTool.getStore('adminName'),
        UserLevel: this._hyTool.getStore('userLevel'),
        CompatibleType: this.brandVal,
        UserId: this.userInfo.userNo,
        ModalName: this.replaceDeviceInfo.PartNumber,
        OriginBinSn: this.deviceInfo.SerialNumber,
        NowBinSn: this.replaceDeviceInfo.SerialNumber,
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
    this.setCurrentStep(0, [
      { index: 0, des: "Connecting Box", status: "process" },
      { index: 1, des: "Reading", status: "" },
      { index: 2, des: "Diagnosing", status: "" },
      { index: 3, des: "Replace transceiver", status: "" },
      { index: 4, des: "Matching", status: "" },
    ]);
  },
  watch: {
    isDriveStart (val) {
      if (val) {
        this.status.isConnecDrive = true;
        this.statusChange(1);
        var resArr = ["False", null];
        (this._hyTool.isConArray(resArr, this.socketInfoUsb) ||
          this._hyTool.isConArray(resArr, this.socketInfoLight)) &&
          this.chat.then((result) => {
            result.server.send("GetInfo", "0");
          });
      }
    },
    // 光模块是否断开
    async socketInfoLight (val) {
      if (val === null) {
        //未读出来
        return false;
      }
      // 光模块断开,False为断开，code为1是读码失败 -1为未连接固件
      if (val === "False" || val.Code === "1" || val.Code === "-1") {
        if (val.Code === "1") {
          // 读码失败（发送getInfo无法触发usb状态，需要手动触发）
          // debugger
          return this.GETSOCKETINFO_USB({
            message: JSON.stringify({ Code: "Successed" }),
          });
        }
        //是否开启了批量匹配
        if (this.isBatchConfiguration) {
          this.setCurrentStep(2, [
            { index: 0, des: "Connecting Box", status: "finish" },
            { index: 1, des: "Reading", status: "finish" },
            { index: 2, des: "Diagnosing", status: "finish" },
            { index: 3, des: "Replace transceiver", status: "wait" },
            { index: 4, des: "Matching", status: "" },
          ]);
        } else {
          this.statusChange(8);
        }
      } else {
        //光模块读码成功
        if (this.isBatchConfiguration && this.isFirstSuccess) {
          this.setCurrentStep(3, [
            { index: 0, des: "Connecting Box", status: "finish" },
            { index: 1, des: "Reading", status: "finish" },
            { index: 2, des: "Diagnosing", status: "finish" },
            { index: 3, des: "Replace transceiver", status: "finish" },
            { index: 4, des: "Matching", status: "wait" },
          ]);
          this.connStatusNum = 5;
          this.tryConfig();
        } else {
          if (
            this.status.isWriteSuccess ||
            this.status.isWriteFail ||
            this.status.isConfiguationFailed
          ) {
            this.reset_server();
            this.isReplace = true;
          }
          this.statusChange(3);
          if (this.isShowReplaceModal) {
            this.isShowReplaceModal = false; //关闭modal
            this.isReplace = false; //显示更换后模块的页面
          }
          if (this.isReplace) {
            //若显示的是更换前的模板则读取光模块信息给到deviceInfo对象
            this.deviceInfo = val.Result;
          } else {
            this.replaceDeviceInfo = val.Result;
          }
          this.bin.fileBase64 = this.deviceInfo.originBase64;
          // 查询兼容品牌bin_template_md5查处
          this._getCompatible(this.deviceInfo.SerialNumber);
        }
        //模块读取成功调用存码
        let options = {
          modalName: this.deviceInfo.PartNumber,
          binSn: this.deviceInfo.SerialNumber,
          binBase64: this.deviceInfo.originBase64,
          userId: this.userInfo.userNo,
          vendorName: this.deviceInfo.VesndorName,
          compatibleType: this.deviceInfo.CompatibleType
        };
        await saveCode(options);
      }
    },
    // usb是否断开
    socketInfoUsb (val) {
      if (val === null || val === 0) return;
      // usb断开或usb连接失败
      if (val === "False" || val.Code === "1") {
        this.status.isInsertUsb = false;
        this.statusChange(7);
        this.setCurrentStep(0, [
          { index: 0, des: "Connecting Box", status: "process" },
          { index: 1, des: "Reading", status: "" },
          { index: 2, des: "Diagnosing", status: "" },
          { index: 3, des: "Replace transceiver", status: "" },
          { index: 4, des: "Matching", status: "" },
        ]);
      } else {
        //usb连接成功
        this.statusChange(2);
        this.setCurrentStep(0, [
          { index: 0, des: "Connecting Box", status: "finish" },
          { index: 1, des: "Reading", status: "process" },
          { index: 2, des: "Diagnosing", status: "" },
          { index: 3, des: "Replace transceiver", status: "" },
          { index: 4, des: "Matching", status: "" },
        ]);
      }
    },
    // 是否后台拿到型号名列表
    isgetProModel () {
      // 新型号名配置属性
      pnList.forEach((item) => {
        if (item.NewPn === this.deviceInfo.PartNumber) {
          // 如果是新型号名，显示对应的旧型号名
          // this.deviceInfo.PartNumber = item.OldPn;
          this.formData.ModalName = item.NewPn;
          let key2 = {};
          key2 =
            item["Distance/KM"] === ""
              ? { attrKey: "0", attrValue: 0 }
              : { attrKey: "2", attrValue: item["Distance/KM"] + "km" };
          this.attrArr = [
            {
              attrKey: "1," + key2.attrKey,
              attrValue: [
                item["Channel/band"],
                key2.attrValue ? key2.attrValue.toLowerCase() : key2.attrValue,
              ].join(","),
            },
          ];
          return false;
        }
      });
      //根据pn获取pn的id
      if (this.deviceInfo.PartNumber) {
        let model = "";
        model = this.proModelList.filter(
          (item) => this.deviceInfo.PartNumber === item.label
        );
        if (model.length > 0) {
          this.searchData.modelId = model[0].oldId
            ? model[0].oldId
            : model[0].value;
          var modelIdNew = { value: this.searchData.modelId };
          this.selectAttr(modelIdNew);
        } else {
          model = "";
          this.searchData.modelId = model;
        }
      }
    },
    // socketInfoWrite写码成功返回
    async socketInfoWrite (val) {
      console.log(val);
      if (val === null) return;
      if (val.Code === "0") {
        const driveResult = val;
        // this.deviceInfo = driveResult.Result;
        // this.deviceInfo.VesndorName = driveResult.Result.VendorName;
        this.replaceDeviceInfo = driveResult.Result;
        this.replaceDeviceInfo.VesndorName = driveResult.Result.VendorName;
        this.statusChange(5);
        this.setCurrentStep(4, [
          { index: 4, des: "Matching", status: "finish" },
        ]);
        if (this.isFirstDeviceInfo) {
          this.deviceInfo.CompatibleType = this.brandVal;
        } else {
          this.replaceDeviceInfo.CompatibleType = this.brandVal;
        }
        // 写码成功记录
        // await writeCodeRecord(this.formData);
        this.codeResultInfo.NowBase64 = val.Result.originBase64;
        this.codeResultInfo.ModalCode = val.Result.modalType;
        this.codeResultInfo.WriteCodeState = 1;
        this.saveCodeResult();
        this.WriteCodeAfterOption.CodeResult = 1;
      } else {
        // 写码失败状态图
        this.statusChange(6);
        // await writeCodeRecord(this.formData);
        this.codeResultInfo.WriteCodeState = -1;
        this.saveCodeResult();
        this.WriteCodeAfterOption.CodeResult = 0;
      }
      // 写码后操作
      this.WriteCodeAfterOption.ModelName = val.Result.PartNumber;
      this.handleAfterCode();
      this.isFirstSuccess = true;
    },
    //配置成功返回
    // socketInfoTry写码前配置
    async socketInfoTry (val) {
      if (val === null) return;
      if (val.Code === "0") {
        // this.formData.ConfigId = val.Result.configId;
        // this.formData.IP = val.Result.IP;
        // 配置成功后写码
        this.startCode();
      } else {
        // 写码失败状态图
        this.connStatusNum = 4;
        this.status.isConfiguationFailed = true;
        // await writeCodeRecord(this.formData);
        // 保存写码记录
        this.codeResultInfo.ConfigState = -1;
        this.codeResultInfo.WriteCodeState = 0;
        this.saveCodeResult();
        this.$Message.error({
          content:
            "Matching failed, please try again or replace the transceiver.",
          duration: 5,
        });
        // 配置文件错误
        this.setCurrentStep(4, [
          { index: 0, des: "Connecting Box", status: "finish" },
          { index: 1, des: "Reading", status: "finish" },
          { index: 2, des: "Diagnosing", status: "finish" },
          { index: 3, des: "Replace transceiver", status: "finish" },
          { index: 4, des: "Matching", status: "error" },
        ]);
      }
      this.isFirstSuccess = true;
    },
    replaceBand () {
      this.isSnRule = !this.snRuleValidate() ? true : false;
    },
    isShowBrandModel (newVal) {
      !newVal && (this.serchBrandVal = "");
    },
    isReplace (val) {
      this.isOpenDeviceInfo = !val;
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      // 通过 `vm` 访问组件实例
      if (vm.isDriveStart) {
        vm.chat.then((result) => {
          result.server.send("GetInfo", "0");
        });
      }
    });
  },
};
</script>
