<style lang='scss' scoped>
@import "~@assets/styles/_mixins";

.ddm-content {
  &.active {
    @include pd(0, 40px);
  }
  // position: relative;
  .box-bg {
    // position: absolute;
    // top: 0;
    // left: 0;
    width: 100%;
    height: 788px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url("~@assets/images/ddm/ddm-bg.png") no-repeat center / cover;
    p {
      &.msg1 {
        margin-top: 50px;
        font-size: 36px;
        color: #f88d49;
        font-weight: bold;
      }
      &.msg2 {
        font-size: 16px;
        color: #7b8fa5;
      }
    }
  }
  .ddm-info {
    .header {
      height: 83px;
      display: flex;
      justify-content: center;
      border-bottom: 2px solid #eaeff5;
      position: relative;
      .header-tab {
        position: relative;
        display: flex;
        align-items: center;
        span {
          color: #445f87;
          font-weight: bold;
          font-size: 16px;
        }
        .active-box {
          @include wh(40px, 6px);
          background-image: linear-gradient(to right, #37a0f6, #387ee9);
          @include position(absolute, null, null, 0, 5%);
          transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          &.first {
            transform: translateX(0px);
          }
          &.second {
            transform: translateX(115px);
          }
        }
      }
      .return {
        @include position(absolute, 50%, 0px);
        margin-top: -10px;
        color: #7b8fa5;
        cursor: pointer;
        &:hover {
          color: #3880ea;
        }
        .ivu-icon {
          margin-right: 10px;
          font-size: 21px;
          font-weight: bold;
        }
      }
    }
    .main-t {
      height: 68px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .main-t-l {
        span {
          position: relative;
          color: #435f87;
          &:nth-child(1) {
            margin-left: 25px;
            &.normal {
              &::before {
                content: "";
                display: inline-block;
                position: absolute;
                top: 0;
                left: -25px;
                @include sprite(-50px, -697px, 16px, 20px);
              }
            }
            &.fault {
              &::before {
                content: "";
                display: inline-block;
                position: absolute;
                top: 0;
                left: -25px;
                @include sprite(-86px, -697px, 16px, 20px);
              }
            }
          }
          &:nth-child(2) {
            margin-left: 55px;
            &::before {
              content: "";
              display: inline-block;
              position: absolute;
              top: 0;
              left: -20px;
            }
            &.normal {
              &::before {
                content: "";
                display: inline-block;
                position: absolute;
                top: 0;
                left: -25px;
                @include sprite(-50px, -697px, 16px, 20px);
              }
            }
            &.fault {
              &::before {
                content: "";
                display: inline-block;
                position: absolute;
                top: 0;
                left: -25px;
                @include sprite(-86px, -697px, 16px, 20px);
              }
            }
          }
        }
      }
      .main-t-r {
        display: flex;
        align-items: center;
        div {
          margin-left: 30px;
          display: flex;
          span {
            &.test {
              font-weight: 600;
              color: #a5bad0;
              margin-right: 10px;
              &.active {
                color: #32d7b0;
              }
            }
          }
          /deep/ .ivu-switch-checked {
            border-color: #31d7af;
            background-color: #31d7af;
          }
        }
        /deep/ .ivu-dropdown-rel {
          a {
            color: #a5b9cf;
            .ddm-time {
              color: #435f87;
              margin: 0 10px;
            }
            .ddm-download {
              display: inline-block;
              @include sprite(-254px, -651px, 14px, 16px);
              // & + .ivu-icon-ios-arrow-down:before {
              //   content: "";
              // }
              &:hover {
                @include sprite(-288px, -651px, 14px, 16px);
              }
            }
            .ivu-icon {
              color: #a5bad0;
            }
          }
        }
      }
    }
    .main-b {
      display: flex;
      padding-bottom: 55px;
      .main-b-l {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-right: 30px;
        & > div {
          height: 175px;
          border: 1px solid #e9eff5;
          border-radius: 3px;
          padding: 58px 39px 0 0;
          display: flex;
          flex-direction: column;
          // justify-content: center;
          align-items: flex-end;
          &:nth-child(2n) {
            margin: 30px 0;
          }
          &:nth-child(1) {
            background: url("~@assets/images/ddm/temperature.png") no-repeat
              40px center;
          }
          &:nth-child(2) {
            background: url("~@assets/images/ddm/voltage.png") no-repeat 40px
              center;
          }
          &:nth-child(3) {
            background: url("~@assets/images/ddm/bias-current.png") no-repeat
              40px center;
          }
          .title {
            color: #445f87;
            font-size: 14px;
          }
          .value {
            color: #445f87;
            font-size: 16px;
            span {
              font-size: 36px;
            }
          }
          .values {
            color: #445f87;
            font-size: 16px;
            display: flex;
            flex-wrap: wrap;
            max-width: 164px;
            & > div {
              width: 50%;
              text-align: right;
              span {
                font-size: 18px;
              }
            }
            & > span {
              font-size: 36px;
            }
          }
          span {
            &.warn {
              display: inline-block;
              padding: 0 10px;
              line-height: 18px;
              border-radius: 3px;
              &.high1 {
                color: #f0a728;
                background: #fffaf3e1;
              }
              &.high2 {
                color: #ff9c5d;
                background: #faede5;
              }
              &.low1 {
                color: #f78ea7;
                background: #ffe9ee;
              }
              &.low2 {
                color: #f66767;
                background: #ffe6e6;
              }
            }
          }
        }
      }
      .main-b-r {
        flex: 2;
        & > div {
          height: 277px;
          border-radius: 3px;
          border: 1px solid #e9eff5;
          display: flex;
          &:nth-child(2n) {
            margin-top: 30px;
          }
          .charts-t-l,
          .charts-b-l {
            flex: 2;
          }
          .charts-t-r,
          .charts-b-r {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            .title {
              color: #445f87;
              font-size: 14px;
            }
            .value {
              color: #445f87;
              font-size: 16px;
              & > span {
                font-size: 36px;
              }
            }
            .values {
              color: #445f87;
              font-size: 16px;
              display: flex;
              flex-wrap: wrap;
              max-width: 164px;
              & > div {
                width: 50%;
                text-align: center;
                span {
                  font-size: 18px;
                }
              }
              & > span {
                font-size: 36px;
              }
            }
          }
          .charts-t-r {
            padding-bottom: 48px;
            background: url("~@assets/images/ddm/transmit-power.png") no-repeat
              center 20px;
          }
          .charts-b-r {
            padding-bottom: 40px;
            background: url("~@assets/images/ddm/receive-power.png") no-repeat
              center 20px;
          }
        }
      }
    }
  }
  .attr-info {
    & > div {
      font-size: 12px;
      color: #445f87;
      span {
        font-weight: 600;
      }
    }
    &::before {
      content: "";
      display: inline-block;
      width: 10px;
      height: 10px;
      transform: rotate(45deg);
      position: absolute;
      top: -6px;
      left: 50%;
      background-color: #fff;
      margin-left: -5px;
      border-top: 1px solid #3880ea;
      border-left: 1px solid #3880ea;
    }
  }
}
.toogle-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  p {
    width: 292px;
    color: #445f87;
    font-size: 18px;
    line-height: normal;
    position: relative;
    span {
      color: #ffab75;
    }
    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      left: -30px;
      top: 0;
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
.download-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  p {
    width: 292px;
    color: #445f87;
    font-size: 18px;
    line-height: normal;
    position: relative;
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
.continuous-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  .time-box {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .note {
      @include wh(80px, 37px);
      @include mg(5px, 25px, 0, 10px);
      display: flex;
      justify-content: space-around;
      span {
        background: #495060;
        display: inline-block;
        @include wh(7px, 35px);
        @include mg(auto, 0);
        animation-name: scale;
        -webkit-animation-name: scale;
        -moz-animation-name: scale;
        -ms-animation-name: scale;
        -o-animation-name: scale;
        animation-duration: 1.2s;
        -webkit-animation-duration: 1.2s;
        -moz-animation-duration: 1.2s;
        -ms-animation-duration: 1.2s;
        -o-animation-duration: 1.2s;
        animation-iteration-count: infinite;
        -webkit-animation-iteration-count: infinite;
        -moz-animation-iteration-count: infinite;
        -ms-animation-iteration-count: infinite;
        -o-animation-iteration-count: infinite;
      }
    }
    .time {
      font-size: 30px;
      font-weight: 600;
    }
    .item-1 {
      animation-delay: -1s;
      -webkit-animation-delay: -1s;
      -moz-animation-delay: -1s;
      -ms-animation-delay: -1s;
      -o-animation-delay: -1s;
    }
    .item-2 {
      animation-delay: -0.9s;
      -webkit-animation-delay: -0.9s;
      -moz-animation-delay: -0.9s;
      -ms-animation-delay: -0.9s;
      -o-animation-delay: -0.9s;
    }
    .item-3 {
      animation-delay: -0.8s;
      -webkit-animation-delay: -0.8s;
      -moz-animation-delay: -0.8s;
      -ms-animation-delay: -0.8s;
      -o-animation-delay: -0.8s;
    }
    .item-4 {
      animation-delay: -0.7s;
      -webkit-animation-delay: -0.7s;
      -moz-animation-delay: -0.7s;
      -ms-animation-delay: -0.7s;
      -o-animation-delay: -0.7s;
    }
    .item-5 {
      animation-delay: -0.6s;
      -webkit-animation-delay: -0.6s;
      -moz-animation-delay: -0.6s;
      -ms-animation-delay: -0.6s;
      -o-animation-delay: -0.6s;
    }
    .item-6 {
      animation-delay: -0.5s;
      -webkit-animation-delay: -0.5s;
      -moz-animation-delay: -0.5s;
      -ms-animation-delay: -0.5s;
      -o-animation-delay: -0.5s;
    }
    .item-7 {
      animation-delay: -0.4s;
      -webkit-animation-delay: -0.4s;
      -moz-animation-delay: -0.4s;
      -ms-animation-delay: -0.4s;
      -o-animation-delay: -0.4s;
    }
    @-webkit-keyframes scale {
      0%,
      40%,
      100% {
        -moz-transform: scaleY(0.2);
        -ms-transform: scaleY(0.2);
        -o-transform: scaleY(0.2);
        -webkit-transform: scaleY(0.2);
        transform: scaleY(0.2);
      }
      20%,
      60% {
        -moz-transform: scaleY(1);
        -ms-transform: scaleY(1);
        -o-transform: scaleY(1);
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
      }
    }
    @-moz-keyframes scale {
      0%,
      40%,
      100% {
        -moz-transform: scaleY(0.2);
        -ms-transform: scaleY(0.2);
        -o-transform: scaleY(0.2);
        -webkit-transform: scaleY(0.2);
        transform: scaleY(0.2);
      }
      20%,
      60% {
        -moz-transform: scaleY(1);
        -ms-transform: scaleY(1);
        -o-transform: scaleY(1);
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
      }
    }
    @-ms-keyframes scale {
      0%,
      40%,
      100% {
        -moz-transform: scaleY(0.2);
        -ms-transform: scaleY(0.2);
        -o-transform: scaleY(0.2);
        -webkit-transform: scaleY(0.2);
        transform: scaleY(0.2);
      }
      20%,
      60% {
        -moz-transform: scaleY(1);
        -ms-transform: scaleY(1);
        -o-transform: scaleY(1);
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
      }
    }
    @keyframes scale {
      0%,
      40%,
      100% {
        -moz-transform: scaleY(0.2);
        -ms-transform: scaleY(0.2);
        -o-transform: scaleY(0.2);
        -webkit-transform: scaleY(0.2);
        transform: scaleY(0.2);
      }
      20%,
      60% {
        -moz-transform: scaleY(1);
        -ms-transform: scaleY(1);
        -o-transform: scaleY(1);
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
      }
    }
  }
  p {
    color: #445f87;
    font-size: 16px;
    line-height: normal;
    position: relative;
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
</style>

<template>
  <div :class="['ddm-content',{'active':isInsertLight!==false}]">
    <div v-if="isInsertLight===false"
         class="box-bg">
      <img :src="statusImg[connStatusIndex].imgUrl"
           alt="">
      <p class="msg1">{{statusImg[connStatusIndex].msg}}</p>
      <p class="msg2">{{statusImg[connStatusIndex].msg2}}</p>
    </div>
    <div v-else
         class="ddm-info">
      <header class="header">
        <div class="header-tab">
          <span>DDM Information</span>
        </div>
        <span class="return"
              @click="$router.go(-1)">
          <Icon type="ios-arrow-round-back" />Return
        </span>
      </header>
      <div class="main">
        <div class="main-t">
          <div class="main-t-l">
            <span v-if="this.ddmInfo&&(this.ddmInfo.TxFault!==undefined)"
                  :class="[(this.ddmInfo!==null&&this.ddmInfo.TxFault==='False')?'normal':'fault']">{{(this.ddmInfo!==null&&this.ddmInfo.TxFault==='False')?'TX Nomal':'TX Fault'}}</span>
            <span v-if="this.ddmInfo&&(this.ddmInfo.RxLOS!==undefined)"
                  :class="[(this.ddmInfo!==null&&this.ddmInfo.RxLOS==='False')?'normal':'fault']">{{(this.ddmInfo!==null&&this.ddmInfo.RxLOS==='False')?'RX Nomal':'RX Los'}}</span>
          </div>
          <div class="main-t-r">
            <div>
              <Dropdown @on-click="chooseTime">
                <a>
                  Frequency<span class="ddm-time">{{testTime}}s</span>
                  <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem :name="1">1s</DropdownItem>
                  <DropdownItem :name="2">2s</DropdownItem>
                  <DropdownItem :name="3">3s</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div>
              <span :class="['test',{'active':testStatus}]">Testing</span>
              <i-switch v-model="testStatus"
                        @on-change="testChange" />
            </div>
            <div>
              <Dropdown @on-click="exportData">
                <a>
                  <span class="ddm-download"></span>
                  <!-- <Icon type="ios-arrow-down"></Icon> -->
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem :disabled="!testStatus"
                                :name="1">Export Current Data</DropdownItem>
                  <DropdownItem :disabled="!testStatus"
                                :name="2">Export Continuous Data</DropdownItem>
                  <DropdownItem :name="3"
                                divided>Open Folder</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div class="main-b">
          <div class="main-b-l">
            <div @mousemove="moveShowInfo($event,'Temperature')"
                 @mouseleave="moveHideInfo">
              <span class="title">Temperature</span>
              <div class="value"><span>{{option1}}</span>°C</div>
              <span :class="['warn',getWarnStatus('Temperature',option1)[1]]">{{getWarnStatus('Temperature',option1)[0]}}</span>
            </div>
            <div @mousemove="moveShowInfo($event,'Voltage')"
                 @mouseleave="moveHideInfo">
              <span class="title">Voltage</span>
              <div class="value"><span>{{option2}}</span>V</div>
              <span :class="['warn',getWarnStatus('Voltage',option2)[1]]">{{getWarnStatus('Voltage',option2)[0]}}</span>
            </div>
            <div @mousemove="moveShowInfo($event,'Tx_Bias')"
                 @mouseleave="moveHideInfo">
              <span class="title">Bias current</span>
              <div class="value"
                   v-if="typeof option3==='number'"><span>{{option3}}</span>mA</div>
              <div class="values"
                   v-else>
                <div><span>{{option3[0]}}</span>mA</div>
                <div><span>{{option3[1]}}</span>mA</div>
                <div><span>{{option3[2]}}</span>mA</div>
                <div><span>{{option3[3]}}</span>mA</div>
              </div>
              <span v-if="typeof option3==='number'"
                    :class="['warn',getWarnStatus('Tx_Bias',option3)[1]]">{{getWarnStatus('Tx_Bias',option3)[0]}}</span>
            </div>
          </div>
          <div class="main-b-r">
            <div class="charts-t">
              <div class="charts-t-l">
                <fs-echarts id="charts1"
                            :options="option6"></fs-echarts>
              </div>
              <div class="charts-t-r">
                <span class="title">Transmit power</span>
                <div class="value"
                     v-if="typeof option4==='number'"><span>{{option4}}</span>dBm</div>
                <div class="values"
                     v-else>
                  <div><span>{{option4[0]}}</span>dBm</div>
                  <div><span>{{option4[1]}}</span>dBm</div>
                  <div><span>{{option4[2]}}</span>dBm</div>
                  <div><span>{{option4[3]}}</span>dBm</div>
                </div>
              </div>
            </div>
            <div class="charts-b">
              <div class="charts-b-l">
                <fs-echarts id="charts2"
                            :options="option7"></fs-echarts>
              </div>
              <div class="charts-b-r">
                <span class="title">Receive power</span>
                <div class="value"
                     v-if="typeof option5==='number'"><span>{{option5}}</span>dBm</div>
                <div class="values"
                     v-else>
                  <div><span>{{option5[0]}}</span>dBm</div>
                  <div><span>{{option5[1]}}</span>dBm</div>
                  <div><span>{{option5[2]}}</span>dBm</div>
                  <div><span>{{option5[3]}}</span>dBm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isEvent"
         class="attr-info"
         :style="attrStyle">
      <div>High alarm value: <span>{{modelAttrList[0]}}</span></div>
      <div>High warning value: <span>{{modelAttrList[1]}}</span></div>
      <div>Low warning value: <span>{{modelAttrList[2]}}</span></div>
      <div>Low alarm value: <span>{{modelAttrList[3]}}</span></div>
    </div>
    <!-- 切换检测频率提示 -->
    <fs-modal :show="toogleShow"
              :closeShow="false"
              :width="480"
              :footerHide="true">
      <div class="toogle-form">
        <p>Using <span>1s</span> detection frequency may cause the system to freeze~</p>
        <Button type="primary"
                @click="chooseTime(1,true)">Continue to use</Button>
        <Button type="text"
                @click="toogleShow = false">Cancle</Button>
      </div>
    </fs-modal>
    <!-- 下载成功提示 -->
    <fs-modal :show="downloadSuccessShow"
              :closeShow="false"
              :width="480"
              :footerHide="true">
      <div class="download-form">
        <p>Download successful, click the open button to view the file.</p>
        <Button type="primary"
                @click="downloadPath">Open File</Button>
        <Button type="text"
                @click="downloadSuccessShow = false">Cancle</Button>
      </div>
    </fs-modal>
    <!-- 下载提示 -->
    <fs-modal :show="continuousDownloadShow"
              :closeShow="false"
              :width="600"
              :footerHide="true">
      <div class="continuous-form">
        <div class="time-box">
          <div class="note">
            <span class="item-1"></span>
            <span class="item-2"></span>
            <span class="item-3"></span>
            <span class="item-4"></span>
            <span class="item-5"></span>
            <span class="item-6"></span>
            <span class="item-7"></span>
          </div>
          <span class="time">{{totalTime}}</span>
        </div>
        <p>Do not close the page or browser during continuous data download,</p>
        <p>otherwise the download will be interrupted</p>
        <Button type="primary"
                @click="continuousDownload">Download Ended</Button>
        <Button type="text"
                @click="continuousDownload">Cancle</Button>
      </div>
    </fs-modal>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import fsEcharts from '@components/echarts/echarts';
import fsModal from '@components/modal/modals';

export default {
  props: ['chat'],
  components: { fsEcharts, fsModal },
  data () {
    return {
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      option5: '',
      option6: {},
      option7: {},
      timer: null,
      testStatus: false,
      isInsertUsb: false,
      isInsertLight: false,
      statusImg: [
        { imgUrl: require('../../assets/images/ddm/ddm-usb.png'), msg: 'Please connect  FS BOX', msg2: '', status: 'none' },//插入usb前
        { imgUrl: require('../../assets/images/online/insertLightBefore.png'), msg: 'Please insert your transceiver for reading', msg2: 'Please insert your transceiver to view the DDM Information', status: 'none' },//插入光模块前
      ],
      connStatusIndex: 1,
      testTime: 2,
      isEvent: false,
      attrStyle: {
        pointerEvents: 'none',
        padding: '10px',
        backgroundColor: '#fff',
        zIndex: '10',
        cursor: 'pointer',
        boxSizing: 'border-box',
        borderBox: 'box-sizing',
        transtion: 'all 0.5s linear',
        border: '1px solid #3880EA',
        boxShadow: '1px 2px 3px 0px rgba(77,91,140,0.26)',
        position: 'fixed',
        top: 0,
        left: 0
      },
      modelAttrList: [],
      toogleShow: false,
      downloadSuccessShow: false,
      exportFileName: '',
      continuousDownloadShow: false,
      startTime: '',
      totalTime: '00:00:00:00'
    }
  },
  computed: {
    ...mapState(['ddmInfo', 'socketInfoUsb', 'socketInfoLight', 'exportInfo', 'isDriveStart', 'osName']),
  },
  mounted () {
    this._hyTool.setStore('first', '1');
  },
  methods: {
    ...mapMutations(['GETSOCKETINFO_USB']),
    moveShowInfo (e, type) {
      e.stopPropagation();
      e.preventDefault();
      this.isEvent = true;
      this.attrStyle.top = `${e.clientY + 30}px`;
      this.attrStyle.left = `${e.clientX - 80}px`;
      let flag = this.ddmInfo.ModuleType === 'QSFP' && type === 'Tx_Bias', company = { Temperature: '°C', Voltage: 'V', 'Tx_Bias': 'mA' };
      this.modelAttrList = [
        this.ddmInfo.Result[type][!flag ? 4 : 7] + company[type],
        this.ddmInfo.Result[type][!flag ? 3 : 6] + company[type],
        this.ddmInfo.Result[type][1] + company[type],
        this.ddmInfo.Result[type][0] + company[type]
      ];
    },
    moveHideInfo (e) {
      e.stopPropagation();
      e.preventDefault();
      this.isEvent = false;
    },
    exportData (type) {
      switch (type) {
        case 1:
          this.downloadSuccessShow = true;
          this.exportFileName = this._hyTool.DateFormat(new Date(), 'yyyyMMddhhmmss');
          this.chat.then(async (result) => {
            await result.server.send('ReadDdm', JSON.stringify({ FileName: this.exportFileName }));
          });
          break;
        case 2:
          // 打开连续导出弹框，开启定时器，向驱动发送消息fileName
          this.totalTime = '00:00:00:00';
          this.continuousDownloadShow = true;
          this.startTime = new Date();
          this.countDown();
          this.exportFileName = this._hyTool.DateFormat(new Date(), 'yyyyMMddhhmmss');
          break;
        case 3:
          this.chat.then(async (result) => {
            await result.server.send('DdmLog', '');
          });
          break;
      }
    },
    downloadPath () {
      this.chat.then(async (result) => {
        await result.server.send('ExportDdmInfo', JSON.stringify({ FileName: this.exportFileName }));
      });
      this.downloadSuccessShow = false;
    },
    countDown () {
      clearInterval(clock);
      let clock = setInterval(() => {
        let now = new Date();
        let msec = now - this.startTime;
        let d = parseInt(msec / 1000 / 60 / 60 / 24 % 30);
        let hr = parseInt(msec / 1000 / 60 / 60 % 24);
        let min = parseInt(msec / 1000 / 60 % 60);
        let sec = parseInt(msec / 1000 % 60);
        this.totalTime = `${d < 10 ? '0' + d : d}:${hr < 10 ? '0' + hr : hr}:${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;
        if (!this.continuousDownloadShow) { // 页面关闭时清除定时器
          clearInterval(clock);
        }
      }, 1000);
    },
    continuousDownload () {
      this.downloadSuccessShow = true;
      this.continuousDownloadShow = false;
    },
    testChange (bool) {
      bool ? bool = 'True' : bool = 'False';
      this.chat.then(async (result) => {
        // result.server.send('ReadDdm');
        await result.server.send('SetTXState', bool);
      });
    },
    chooseTime (name, flag = false) {
      //当检测频率为1s，给弹框提示
      if (name === 1 && !flag) return this.toogleShow = true;
      this.testTime = name;
      this.timer && clearInterval(this.timer);
      this.setTime(this.testTime * 1000);
      name === 1 && (this.toogleShow = false);//关闭提示弹框
    },
    startTest (time) {
      this.chat.then(async (result) => {
        await result.server.send('ReadDdm', JSON.stringify({ FileName: '' }));
        let obj = this._hyTool.deepCopy(this.ddmInfo);
        // 每一项配置初始化
        this.option1 = obj.Result.Temperature[2];
        this.option2 = obj.Result.Voltage[2];
        this.option3 = this.ddmInfo.ModuleType === 'QSFP' ? obj.Result.Tx_Bias.slice(2, 6) : obj.Result.Tx_Bias[2];
        this.option4 = this.ddmInfo.ModuleType === 'QSFP' ? obj.Result.Tx_Power.slice(2, 6) : obj.Result.Tx_Power[2];
        this.option5 = this.ddmInfo.ModuleType === 'QSFP' ? obj.Result.Rx_Power.slice(2, 6) : obj.Result.Rx_Power[2];
        //  初始化图表
        this.option6 = {
          grid: {//绘制区域配置
            left: "40px",
            top: "10px",
            right: "30px",
            bottom: "30px",
          },
          tooltip: {//提示框配置
            show: true,
            trigger: 'item',
            position: 'top',
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: '#3880EA',
            formatter: (params) => {
              var strArr = ['High Alarm Value', 'High Warning Value', 'Actual value', 'Low Warning Value', 'Low Alarm Value'];
              if (this.ddmInfo.ModuleType === 'QSFP') {
                strArr.splice(2, 0, 'Actual value', 'Actual value', 'Actual value');
              }
              var copyArr = this._hyTool.deepCopy(this.ddmInfo.Result.Tx_Power).reverse();
              var result = params.name + '<br>';
              copyArr.forEach((v, i) => {
                result += `<div style="color:#445F87;font-weight:600"><span style="color:#445F87;font-weight:normal">${strArr[i]}</span>：${v}dBm</div>`;
              });
              return result;
            },
            textStyle: {
              color: '#445F87',
            },
            extraCssText: 'min-width:190px;min-height:124px;padding:10px'//设置宽高
          },
          xAxis: {//x轴配置
            type: 'category',
            boundaryGap: false,//刻度从0开始
            axisLine: {
              lineStyle: {
                color: '#EAEFF5'
              }
            },
            axisTick: {
              lineStyle: {
                color: '#EAEFF5'
              }
            },
            axisLabel: {
              color: '#A5BAD0'
            },
            data: [this.getXDate()]
          },
          yAxis: {//y轴配置
            type: 'value',
            name: 'power(dBm)',
            nameLocation: 'middle',
            interval: 5,//刻度区间
            min: -40,
            max: 10,
            //分割线配置
            splitLine: {
              show: false,
              interval: 100
            },
            nameTextStyle: {
              color: '#A5BAD0',
              fontSize: 12,
              fontWeight: '400'
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
          },
          series: this.judgeModel(this.ddmInfo.ModuleType, this.ddmInfo.Result.Tx_Power)
        }
        this.option7 = {
          grid: {//绘制区域配置
            left: "40px",
            top: "10px",
            right: "30px",
            bottom: "30px",
          },
          tooltip: {//提示框配置
            show: true,
            trigger: 'item',
            position: 'top',
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: '#3880EA',
            formatter: (params) => {
              var strArr = ['High Alarm Value', 'High Warning Value', 'Actual value', 'Low Warning Value', 'Low Alarm Value'];
              if (this.ddmInfo.ModuleType === 'QSFP') {
                strArr.splice(2, 0, 'Actual value', 'Actual value', 'Actual value');
              }
              var copyArr = this._hyTool.deepCopy(this.ddmInfo.Result.Rx_Power).reverse();
              var result = params.name + '<br>';
              copyArr.forEach((v, i) => {
                result += `<div style="color:#445F87;font-weight:600"><span style="color:#445F87;font-weight:normal">${strArr[i]}</span>：${v}dBm</div>`;
              });
              return result;
            },
            textStyle: {
              color: '#445F87',
            },
            extraCssText: 'min-width:190px;min-height:124px;padding:10px'//设置宽高
          },
          xAxis: {//x轴配置
            type: 'category',
            boundaryGap: false,//刻度从0开始
            axisLine: {
              lineStyle: {
                color: '#EAEFF5'
              }
            },
            axisTick: {
              lineStyle: {
                color: '#EAEFF5'
              }
            },
            axisLabel: {
              color: '#A5BAD0'
            },
            data: [this.ddmInfo.CurrentDate]
          },
          yAxis: {//y轴配置
            type: 'value',
            name: 'power(dBm)',
            nameLocation: 'middle',
            interval: 5,//刻度区间
            min: -40,
            max: 10,
            //分割线配置
            splitLine: {
              show: false,
              interval: 100
            },
            nameTextStyle: {
              color: '#A5BAD0',
              fontSize: 12,
              fontWeight: '400'
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            }
          },
          series: this.judgeModel(this.ddmInfo.ModuleType, this.ddmInfo.Result.Rx_Power)
        }
        // 设置定时器
        this.setTime(time);
      });
    },
    getWarnStatus (name, val) {
      if (!this.ddmInfo) return '';
      let tip = [], data = this.ddmInfo.Result[name];
      if (val <= data[1] && val >= data[0]) tip = ['Low warning', 'low1'];
      if (val < data[0]) tip = ['Low alarm', 'low2'];
      if (val >= data[3] && val <= data[4]) tip = ['High warning', 'high1'];
      if (val > data[4]) tip = ['High alarm', 'high1'];
      return tip;
    },
    judgeModel (type, modelData) {
      if (type !== 'QSFP') {
        return [
          {
            data: [modelData[2]],
            type: 'line',
            symbol: "circle",
            symbolSize: 6,
            itemStyle: {
              normal: {
                color: "#3880EA",  // 会设置点和线的颜色，所以需要下面定制 line
                borderWidth: 2,
                borderColor: "#fff"  // 点边线的颜色
              }
            },
            lineStyle: {
              width: 2,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#62DFF5' // 0% 处的颜色
                }, {
                  offset: 1, color: '#90BAFB' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            },
            smooth: true,
          },
          {
            type: 'line',
            markArea: {
              silent: true,
              label: {
                show: true,
                position: 'insideLeft',
                distance: 10,
                color: '#A5BAD0',
                formatter: 'Low alarm value'
              },
              itemStyle: {
                color: '#FFE7E7'
              },
              data: [
                [{
                  yAxis: '-40'
                },
                {
                  yAxis: modelData[0]
                }]
              ]
            }
          },
          {
            type: 'line',
            markArea: {
              silent: true,
              label: {
                show: true,
                position: 'insideLeft',
                distance: 10,
                color: '#A5BAD0',
                formatter: 'Low warning value'
              },
              itemStyle: {
                color: '#FFF5F5'
              },
              data: [
                [{
                  yAxis: modelData[0]
                },
                {
                  yAxis: modelData[1]
                }]
              ]
            }
          },
          {
            type: 'line',
            markArea: {
              silent: true,
              label: {
                show: true,
                position: 'insideLeft',
                distance: 10,
                color: '#A5BAD0',
                formatter: 'Normal value'
              },
              itemStyle: {
                color: '#FFFFFF'
              },
              data: [
                [{
                  yAxis: modelData[1]
                },
                {
                  yAxis: modelData[3]
                }]
              ]
            }
          },
          {
            type: 'line',
            markArea: {
              silent: true,
              label: {
                show: true,
                position: 'insideLeft',
                distance: 10,
                color: '#A5BAD0',
                formatter: 'High warning value'
              },
              itemStyle: {
                color: '#FFFAEB'
              },
              data: [
                [{
                  yAxis: modelData[3]
                },
                {
                  yAxis: modelData[4]
                }]
              ]
            }
          },
          {
            type: 'line',
            markArea: {
              silent: true,
              label: {
                show: true,
                position: 'insideLeft',
                distance: 10,
                color: '#A5BAD0',
                formatter: 'High alarm value'
              },
              itemStyle: {
                color: '#FFF1E0'
              },
              data: [
                [{
                  yAxis: modelData[4]
                },
                {
                  yAxis: '10'
                }]
              ]
            }
          }
        ]
      } else {
        return [
          {
            data: [modelData[2]],
            type: 'line',
            symbol: "circle",
            symbolSize: 6,
            itemStyle: {
              normal: {
                color: "#3880EA",  // 会设置点和线的颜色，所以需要下面定制 line
                borderWidth: 2,
                borderColor: "#fff"  // 点边线的颜色
              }
            },
            lineStyle: {
              width: 2,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#62DFF5' // 0% 处的颜色
                }, {
                  offset: 1, color: '#90BAFB' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            },
            smooth: true,
          },
          {
            data: [modelData[3]],
            type: 'line',
            symbol: "circle",
            symbolSize: 6,
            itemStyle: {
              normal: {
                color: "#3880EA",  // 会设置点和线的颜色，所以需要下面定制 line
                borderWidth: 2,
                borderColor: "#fff"  // 点边线的颜色
              }
            },
            lineStyle: {
              width: 2,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#62DFF5' // 0% 处的颜色
                }, {
                  offset: 1, color: '#90BAFB' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            },
            smooth: true,
          },
          {
            data: [modelData[4]],
            type: 'line',
            symbol: "circle",
            symbolSize: 6,
            itemStyle: {
              normal: {
                color: "#3880EA",  // 会设置点和线的颜色，所以需要下面定制 line
                borderWidth: 2,
                borderColor: "#fff"  // 点边线的颜色
              }
            },
            lineStyle: {
              width: 2,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#62DFF5' // 0% 处的颜色
                }, {
                  offset: 1, color: '#90BAFB' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            },
            smooth: true,
          },
          {
            data: [modelData[5]],
            type: 'line',
            symbol: "circle",
            symbolSize: 6,
            itemStyle: {
              normal: {
                color: "#3880EA",  // 会设置点和线的颜色，所以需要下面定制 line
                borderWidth: 2,
                borderColor: "#fff"  // 点边线的颜色
              }
            },
            lineStyle: {
              width: 2,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#62DFF5' // 0% 处的颜色
                }, {
                  offset: 1, color: '#90BAFB' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            },
            smooth: true,
          },
          {
            type: 'line',
            markArea: {
              silent: true,
              label: {
                show: true,
                position: 'insideLeft',
                distance: 10,
                color: '#A5BAD0',
                formatter: 'Low alarm value'
              },
              itemStyle: {
                color: '#FFE7E7'
              },
              data: [
                [{
                  yAxis: '-40'
                },
                {
                  yAxis: modelData[0]
                }]
              ]
            }
          },
          {
            type: 'line',
            markArea: {
              silent: true,
              label: {
                show: true,
                position: 'insideLeft',
                distance: 10,
                color: '#A5BAD0',
                formatter: 'Low warning value'
              },
              itemStyle: {
                color: '#FFF5F5'
              },
              data: [
                [{
                  yAxis: modelData[0]
                },
                {
                  yAxis: modelData[1]
                }]
              ]
            }
          },
          {
            type: 'line',
            markArea: {
              silent: true,
              label: {
                show: true,
                position: 'insideLeft',
                distance: 10,
                color: '#A5BAD0',
                formatter: 'Normal value'
              },
              itemStyle: {
                color: '#FFFFFF'
              },
              data: [
                [{
                  yAxis: modelData[1]
                },
                {
                  yAxis: modelData[6]
                }]
              ]
            }
          },
          {
            type: 'line',
            markArea: {
              silent: true,
              label: {
                show: true,
                position: 'insideLeft',
                distance: 10,
                color: '#A5BAD0',
                formatter: 'High warning value'
              },
              itemStyle: {
                color: '#FFFAEB'
              },
              data: [
                [{
                  yAxis: modelData[6]
                },
                {
                  yAxis: modelData[7]
                }]
              ]
            }
          },
          {
            type: 'line',
            markArea: {
              silent: true,
              label: {
                show: true,
                position: 'insideLeft',
                distance: 10,
                color: '#A5BAD0',
                formatter: 'High alarm value'
              },
              itemStyle: {
                color: '#FFF1E0'
              },
              data: [
                [{
                  yAxis: modelData[7]
                },
                {
                  yAxis: '10'
                }]
              ]
            }
          }
        ]
      }
    },
    setTime (tm) {
      this.timer = setInterval(() => {
        !this.continuousDownloadShow && this.chat.then(async (result) => {
          await result.server.send('ReadDdm', JSON.stringify({ FileName: '' }));
        });
        this.continuousDownloadShow && this.chat.then(async (result) => {
          await result.server.send('ReadDdm', JSON.stringify({ FileName: this.exportFileName }));
        });
        for (let key in this.ddmInfo.Result) {
          switch (key) {
            case 'Temperature':
              this.option1 = this.ddmInfo.Result[key][2];
              break;
            case 'Voltage':
              this.option2 = this.ddmInfo.Result[key][2];
              break;
            case 'Tx_Bias':
              this.option3 = this.ddmInfo.ModuleType === 'QSFP' ? this.ddmInfo.Result[key].slice(2, 6) : this.ddmInfo.Result[key][2];
              break;
            case 'Tx_Power':
              this.option4 = this.ddmInfo.ModuleType === 'QSFP' ? this.ddmInfo.Result[key].slice(2, 6) : this.ddmInfo.Result[key][2];
              this.option6.xAxis.data.push(this.getXDate());
              if (this.ddmInfo.ModuleType === 'QSFP') {
                this.option6.series.forEach((item, index) => {
                  // let ran1 = -20 * Math.random();
                  // let ran2 = -20 * Math.random();
                  // let ran3 = -20 * Math.random();
                  index === 0 && item.data.push(this.ddmInfo.Result[key][index + 2]);
                  index === 1 && item.data.push(this.ddmInfo.Result[key][index + 2]);
                  index === 2 && item.data.push(this.ddmInfo.Result[key][index + 2]);
                  index === 3 && item.data.push(this.ddmInfo.Result[key][index + 2]);
                });
              } else {
                this.option6.series[0].data.push(this.ddmInfo.Result[key][2]);
              }
              break;
            case 'Rx_Power':
              this.option5 = this.ddmInfo.ModuleType === 'QSFP' ? this.ddmInfo.Result[key].slice(2, 6) : this.ddmInfo.Result[key][2];
              this.option7.xAxis.data.push(this.getXDate());
              if (this.ddmInfo.ModuleType === 'QSFP') {
                this.option7.series.forEach((item, index) => {
                  // let ran1 = -20 * Math.random();
                  // let ran2 = -20 * Math.random();
                  // let ran3 = -20 * Math.random();
                  index === 0 && item.data.push(this.ddmInfo.Result[key][index + 2]);
                  index === 1 && item.data.push(this.ddmInfo.Result[key][index + 2]);
                  index === 2 && item.data.push(this.ddmInfo.Result[key][index + 2]);
                  index === 3 && item.data.push(this.ddmInfo.Result[key][index + 2]);
                });
              } else {
                this.option7.series[0].data.push(this.ddmInfo.Result[key][2]);
              }
              break;
          }
        }
        // 移除多余数据,只保留七条数据
        if (this.option6.xAxis.data.length >= 8) {
          // debugger;
          if (this.ddmInfo.ModuleType === 'QSFP') {
            this.option6.series[0].data.shift();
            this.option6.series[1].data.shift();
            this.option6.series[2].data.shift();
            this.option6.series[3].data.shift();
            this.option6.xAxis.data.shift();
          } else {
            this.option6.series[0].data.shift();
            this.option6.xAxis.data.shift();
          }
        }
        if (this.option7.xAxis.data.length >= 8) {
          if (this.ddmInfo.ModuleType === 'QSFP') {
            this.option7.series[0].data.shift();
            this.option7.series[1].data.shift();
            this.option7.series[2].data.shift();
            this.option7.series[3].data.shift();
            this.option7.xAxis.data.shift();
          } else {
            this.option7.series[0].data.shift();
            this.option7.xAxis.data.shift();
          }
        }
      }, tm);
    },
    getXDate () {
      var t = new Date();
      var h = t.getHours();
      var m = t.getMinutes();
      var s = t.getSeconds();
      return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
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
    isDriveStart (val) {
      if (val) {
        var resArr = ['False', null];
        (this._hyTool.isConArray(resArr, this.socketInfoUsb) || this._hyTool.isConArray(resArr, this.socketInfoLight)) &&
          this.chat.then((result) => {
            result.server.send('GetInfo', '0');
          });
      }
    },
    socketInfoUsb (val) {
      if (val === null) return false;
      if (val === 'False') {
        // usb断开
        this.isInsertUsb = false;
        this.isInsertLight = false;
        this.connStatusIndex = 0;
        this.testStatus = false;
        this.option6.series = [];
        this.option7.series = [];
        this.exportFileName = '';
        if (this.timer) clearInterval(this.timer);
      } else {
        // usb插入
        this.isInsertUsb = true;
        this.connStatusIndex = 1;
      }
    },
    socketInfoLight (val) {
      if (val === null) return false;
      // 模块断开情况 val===false,val.Code==='-1',val.Code === '1'
      if (val === 'False' || val.Code === '-1' || val.Code === '1') {
        // 断开模块
        if (val.Code === '1') {
          // 读码失败（发送getInfo无法触发usb状态，需要手动触发）
          return this.GETSOCKETINFO_USB({ message: JSON.stringify({ "Code": "Successed" }) });
        }
        this.isInsertLight = false;
        this.connStatusIndex = 1;
        this.testStatus = false;
        this.option6.series = [];
        this.option7.series = [];
        this.exportFileName = '';
        this._hyTool.setStore('first', '1');
        if (this.timer) clearInterval(this.timer);
      }
      else {
        // 插入模块
        if (this._hyTool.getStore('first')) {
          this.testChange(false);
          this._hyTool.removeStore('first');
        }
        this.isInsertLight = true;
        if (this.timer) clearInterval(this.timer);
        this.startTest(this.testTime * 1000);
      }
    }
  },
  // 实例销毁前清除定时器
  beforeDestroy () {
    clearInterval(this.timer);
  }
}

</script>