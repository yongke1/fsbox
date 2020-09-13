<style lang="scss" scoped>
@import "@assets/styles/_mixins.scss";

#main {
  position: fixed;
  left: 0;
  top: 0;
  background: url("~@assets/images/login/1/bg.png") no-repeat 100% 100%;
  width: 100%;
  height: 100vh;
  // min-width: 1480px;
  // margin: auto;
  overflow: auto;
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
  .base {
    // width: 71%;
    // height: 84%;
    // @include wh(1360px, null);
    // width: 1360px;
    // margin: 25px auto 8.5vh auto;
    background: #ffffff;
    box-shadow: 0px 21px 27px 0px rgba(7, 49, 94, 0.08);
    width: 1360px;
    margin: 0px auto;
    position: relative;
    @media screen and (max-width: 1380px) {
      width: 1080px;
      // margin: 40px auto 8.5vh auto;
    }
    .header {
      background: #8895c2;
      position: relative;
      .tab-list {
        display: flex;
        width: 60%;
        height: 88px;
        .tab-item {
          padding: 0 3.1rem;
          display: inline-block;
          position: relative;
          background: #8895c2;
          overflow: hidden;
          span {
            white-space: nowrap;
            // opacity: 0.72;
            line-height: 88px;
            font-size: 24px;
            font-weight: 600;
          }
        }
        .online-before::before {
          content: ""; /*用伪元素来生成一个矩形*/
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: #ffffff;
          z-index: -1; /*背景色要在文字的下一层，以免挡住文字*/
          transform: scaleY(1.12) perspective(100px) rotateX(10deg);
          transform-origin: left bottom;
        }
        .diagnosing-before::before {
          content: ""; /*用伪元素来生成一个矩形*/
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: #ffffff;
          z-index: -1; /*背景色要在文字的下一层，以免挡住文字*/
          transform: scaleY(1.57) perspective(125px) rotateX(33deg);
          transform-origin: bottom;
        }
        .boxpro-before::before {
          content: ""; /*用伪元素来生成一个矩形*/
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: #ffffff;
          z-index: -1; /*背景色要在文字的下一层，以免挡住文字*/
          transform: scaleY(1.7) perspective(97px) rotateX(33deg);
          transform-origin: bottom;
        }
        // .tab-item::before {
        //   content: ""; /*用伪元素来生成一个矩形*/
        //   position: absolute;
        //   top: 0;
        //   right: 0;
        //   bottom: 0;
        //   left: 0;
        //   background: #ffffff;
        //   z-index: -1; /*背景色要在文字的下一层，以免挡住文字*/
        //   transform: scaleY(1.7) perspective(100px) rotateX(30deg);
        //   transform-origin: left bottom;
        //   width: 340px;
        // }
        .item-active {
          background: #ffffff;
          color: #445f87;
          font-weight: 600;
          opacity: 1;
          .tab-img {
            position: absolute;
          }
          .online-img {
            height: 60px;
            width: 157px;
            right: 20px;
            top: 23px;
            background: url("~@assets/images/online/onLineWriteCode.png")
              no-repeat;
          }
          .diagnosing-img {
            height: 60px;
            width: 157px;
            right: 20px;
            top: 20px;
            background: url("~@assets/images/online/diagnosisWriteCode.png")
              no-repeat;
          }
          .boxpro-img {
            height: 60px;
            width: 171px;
            right: 10px;
            top: 20px;
            background: url("~@assets/images/online/pro.png") no-repeat;
          }
        }
      }
      a {
        // color: #ffffff;
        color: rgba(255, 255, 255, 0.72);
      }
    }
  }
  .footer {
    @include wh(100%, auto);
    // position: absolute;
    // bottom: 0px;
    display: flex;
    align-items: center;
    flex-flow: column;
    // height: 90px;
    padding: 30px 0;
    // height: 163px;
    justify-content: center;
    // @include position(fixed, null, null, 0, 0);
    // @media screen and (max-width: 1380px) {
    //   height: 170px;
    //   // @include position(relative, null, null, null, null);
    //   // top: 200px;
    // }
    p {
      @include l-height(18px);
      @include f-sc(12px, #a5bad0);
      a {
        @include f-sc(12px, #a5bad0);
        &:hover {
          color: #3793f1;
          text-decoration: underline;
        }
      }
      span {
        &.terms {
          color: #7b8fa5;
          cursor: pointer;
          &:hover {
            // color: #3793f1;
            text-decoration: underline;
          }
        }
        &.system {
          @include mg(0, 5px, 0, 0);
          @include wh(10px);
          @include bgImage(
            "~@assets/images/login/2/version_icon.png",
            0,
            0,
            cover
          );
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
  <div id="main">
    <app-header ref="appHeader"></app-header>
    <div class="base">
      <div v-if="showHeader"
           class="header">
        <div class="tab-list">
          <router-link v-for="(item,i) in tabList"
                       :key="i"
                       @click.native="changeTab(i)"
                       :to="item.to"
                       :class="tabIndex===i?'item-active':''">
            <div :class="['tab-item',i==0?'online-before':i==1?'diagnosing-before':'boxpro-before']">
              <span>{{item.info}}</span>
            </div>
            <div :class="['tab-img',i==0?'online-img':i==1?'diagnosing-img':'boxpro-img']"></div>
          </router-link>
        </div>
      </div>
      <router-view :chat="chat"
                   @handelRefresh="handelRefresh"
                   style="min-height:702px;"></router-view>
    </div>
    <!-- 网站信息 -->
    <div class="footer">
      <p class="d-flex jc-center">
        Copyright © {{getYear}} FS.COM Inc.All Rights Reserved.<span style="margin-left:6px;margin-right:6px;">|</span>
        <!-- <span class="terms"
              @click="isShowArgreement = true">Terms of Use</span><span style="margin-left:6px;margin-right:6px;">|</span> -->
        <a href="http://www.beian.miit.gov.cn/"
           target="_blank"
           style="color:#7b8fa5;">粤ICP备12032516号</a>
      </p>
      <p class="d-flex jc-center ai-center">
        <span class="system"></span>
        System Version&nbsp;{{
        this.$store.state.fsVersion
        }}&nbsp;
        <span v-if="apiEnv">{{ apiEnv.obj ? "" : "DE" }}</span>
      </p>
    </div>
    <!-- 账号提示 -->
    <fs-modal :show="isAccountTip"
              :closeShow="false"
              :width="480"
              :footerHide="true">
      <div class="tip-box">
        <p>
          Since there is no record that this account
          has purchased FS Box or/and any fiber
          optical transceivers, it is in the trial period
          (7 days left). If you need to continue using
          this account after the trial, please contact
          your account manager or online customer
          service in time.
        </p>
        <Button type="primary"
                @click="handleContact">Contact Now</Button>
        <Button type="text"
                @click="isAccountTip = false">Cancle</Button>
      </div>
    </fs-modal>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import AppHeader from "@components/Header/AppHeader";
import { judgeApiEnv } from "@service/login/login";
import fsModal from '@components/modal/modals';
import { getCodingLimit } from "@service/common/common";

export default {
  components: {
    AppHeader, fsModal
  },
  computed: {
    ...mapState(["osName"]),
    ...mapGetters(['userInfo']),
    showHeader () {
      let path = ['/main/online', '/main/diagnosing', '/main/boxpro'];
      return path.includes(this.$route.path.toLocaleLowerCase());
    },
    getYear () {
      return new Date().getFullYear();
    }
  },
  data () {
    return {
      isAccountTip: false,
      chat: null,
      tabList: [
        { to: './onLine', info: 'Online Configuration', isDisabled: false },
        { to: './diagnosing', info: 'Diagnosing Configuration', isDisabled: false },
        { to: './boxPro', info: 'Box Pro', isDisabled: false }
      ],
      tabIndex: 0,
      apiEnv: null
    };
  },
  methods: {
    ...mapActions(["signalrConnect", "getProModelList"]),
    handelRefresh () {
      this.$refs.appHeader.getNotice();
    },
    changeTab (index) {
      this.tabIndex = index;
      this.tabActive()
    },
    tabActive () {
      this.$nextTick(function () {
        document.getElementsByClassName('tab-item').forEach((element, index) => {
          if (this.tabIndex == index) { element.style.zIndex = 5; return };
          element.style.zIndex = "auto"
        });
      })
    },
    handleContact () {
      // 打开聊天界面
      window.LC_API.open_chat_window();
      this.isAccountTip = false;
    },
    handleCodingLimit () {
      // 判断用户是否可以写码
      let options = {
        // 邮箱需要base64反转义
        emailAddress: window.atob(this.userInfo.emailAddress),
        UserId: this.userInfo.userNo
      }
      getCodingLimit(options).then(res => {
        this._hyTool.setStore('isCanWrite', res.obj.result === true);
      });
    }

  },
  async created () {
    // 获取所有型号名
    this.getProModelList();
    // 判断tab状态
    (this.$route.path === '/main/onLine') && (this.tabIndex = 0);
    (this.$route.path === '/main/diagnosing') && (this.tabIndex = 1);
    (this.$route.path === '/main/boxPro') && (this.tabIndex = 2);
    // 判断正式/测试站
    this.apiEnv = await judgeApiEnv();
    // 判断试用期账号
    let { accountStatus } = this.userInfo;
    this.isAccountTip = accountStatus === 11 ? true : false;
    // 判断用户是否可以写码
    this.handleCodingLimit();
  },
  mounted () {
    // 连接驱动，利用main页面，把chat分发到子页面，公用一个链接
    this.chat = this.signalrConnect(this.osName);
    this.tabActive(this.tabIndex);
  },
  watch: {
    '$route' () {
      // 监听路由变化，更新tab状态显示
      (this.$route.path === '/main/onLine') && (this.tabIndex = 0, this.tabActive());
      (this.$route.path === '/main/diagnosing') && (this.tabIndex = 1, this.tabActive());
      (this.$route.path === '/main/boxPro') && (this.tabIndex = 2, this.tabActive());
    }
  }
};
</script>
