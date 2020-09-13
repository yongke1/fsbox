<style lang="scss" scoped>
@import "@assets/styles/_mixins.scss";
.content-bg {
  @include wh(100%, 100%);
  @include position(fixed, 0, 0);
  overflow-x: auto;
  @include bgImage("~@assets/images/login/1/bg.png", 0, 0, 100% 100%);
  .header {
    max-width: 1880px;
    @include pd(20px);
    @include mg(0, auto);

    .logo {
      @include wh(75px, 36px);
      @include bgImage("~@assets/images/login/1/logo.png", 0, 0, cover);
      @include position(relative);
      &::before {
        @include before-after(null, null);
        @include position(absolute, 7px, -10px);
        @include wh(1px, 23px);
        background: #7b8fa5;
        opacity: 0.3;
      }
      &::after {
        @include before-after(null, null, "Box");
        @include f-sc(27px, #364658);
        @include f-w(400);
        @include position(absolute, 50%, -66px);
        transform: translateY(-20px);
      }
    }
    .action {
      @include f-sc(14px, #7b8fa5);
      /deep/ .ivu-dropdown {
        @include position(relative);
        &:hover {
          .language {
            &::after {
              @include bgImage(
                "~@assets/images/login/1/arrow_top.png",
                0,
                0,
                cover
              );
            }
          }
        }
        /deep/ .ivu-select-dropdown {
          @include wh(117px, auto);
          @include br(3px);
          @include pd(9px, 0);
          @include position(
            absolute,
            25px !important,
            null,
            null,
            50% !important
          );
          @include mg(0, 0, 0, -73px);
          will-change: auto !important;
          background: #fff;
          border: 1px solid #eef2f6;
          // box-shadow: 0 5px 15px 0px #dee5ed;
          box-shadow: 0 5px 15px -2px rgba(0, 0, 0, 0.08);
          .ivu-dropdown-item {
            @include pd(10px, 20px);
            @include f-sc(14px !important, #7b8fa5);
            &:hover {
              background: #eef2f6;
            }
          }
        }
      }
      .language {
        @include mg(0, 50px, 0, 0);
        @include position(relative);
        &::after {
          @include before-after(10px, 6px);
          @include position(absolute, 6px, -15px);
          @include bgImage(
            "~@assets/images/login/1/arrow_bottom.png",
            0,
            0,
            cover
          );
        }
      }
    }
  }
  .main {
    min-width: 1475px;
    min-height: 690px;
    margin-left: 205px;
    margin-top: 105px;
    margin-right: 240px;
    // height: 66%;
    width: 76.8%;
    bottom: 50px;
    // @media screen and (max-width: 1380px) {
    //   min-width: 1047px;
    //   margin-left: 147px;
    //   margin-top: 76px;
    //   margin-right: 173px;
    //   position: relative;
    //   top: 50px;
    // }
    @include position(relative);
    .banner-tips {
      width: 100%;
      @include position(absolute, 0, null, null, 0);
      z-index: 9;
      img {
        display: block;
        height: 100%;
        // @media screen and (max-width: 1380px) {
        //   width: 55%;
        // }
      }
      .tips-txt {
        width: 100%;
        @include position(absolute, 0, null, null, 0);
        li {
          width: 100%;
          @include position(absolute, 0, null, null, 0);
        }
      }
      .tips-btn {
        @include position(absolute, 200px);
        // @media screen and (max-width: 1380px) {
        //   @include position(absolute, 141px);
        // }
        width: 100%;
        li {
          @include position(absolute, 0, null, null, 0);
          cursor: pointer;
        }
      }
    }
    .main-l {
      @include position(absolute);
      width: 47.5%;
      height: 92.5%;
      left: 6.3rem;
      top: 5.5rem;
      // @media screen and (max-width: 1380px) {
      //   width: 504px;
      //   height: 411px;
      //   left: 72px;
      //   top: 63px;
      // }
      .banner-box {
        .bannerImg {
          // @include wh(31vw, 59vh);
          // width: 36.5vw;
          // height: 29.8vw;
          //?
          width: 700px;
          height: 572px;
          // @media screen and (max-width: 1380px) {
          //   width: 503px;
          //   height: 411px;
          // }
          @include position(relative);
          li {
            @include position(absolute);
            right: 0;
            // @media screen and (max-width: 1380px) {
            //   width: 100%;
            //   img {
            //     width: 100%;
            //   }
            // }
          }
        }
        .banner-radius {
          @include wh(124px, 16px);
          z-index: 1;
          margin-top: 48px;
          // @media screen and (max-width: 1380px) {
          //   @include wh(90px, 16px);
          //   margin-top: 34.5px;
          // }
          li {
            @include wh(16px);
            @include br(50%);
            border: 2px solid #c0cdf1;
            cursor: pointer;
            &.active {
              background: #c0cdf1;
            }
          }
        }
      }
    }
    .main-r {
      padding-left: 200px;
      // margin-top: 5vw;
      margin-top: 96px;
      // @media screen and (max-width: 1380px) {
      //   padding-left: 143.5px;
      //   margin-top: 0px;
      // }
      .login-box {
        // @include wh(25vw, 521px);
        @include wh(480px, 521px);
        @include pd(50px);
        background: #fff;
        box-shadow: 0 15px 35px 1px rgba(7, 49, 94, 0.08);
        // @media screen and (max-width: 1380px) {
        //   // width: 30vw;
        //   @include wh(345px, 375px);
        //   @include pd(36px);
        // }
        // @include pd(2.6vw);

        h1 {
          @include f-w(bold);
          @include f-sc(30px, #364658);
          @include l-height(31px);
          margin: 0;
        }
        .login-form {
          // padding-top: 5.2vw;
          padding-top: 100px;
          flex-flow: column;
          // @media screen and (max-width: 1380px) {
          //   padding-top: 36px;
          // }
          .btn-submit {
            // @include wh(21.5vw, 78px);
            @include wh(412px, 78px);
            // @media screen and (max-width: 1380px) {
            //   // @include wh(26.5vw, 78px);
            //   @include wh(291px, 55px);
            // }
            @include bgImage(
              "~@assets/images/login/1/Login.png",
              center,
              center,
              100%
            );
            cursor: pointer;
            position: relative;
            &:hover {
              opacity: 0.9;
            }
            &.loading {
              &::before {
                content: "";
                display: inline-block;
                position: absolute;
                top: 50%;
                left: 145px;
                transform: translateY(-22px) scale(0.7) rotate(0deg);
                @include sprite(-293px, -135px, 31px, 31px);
                animation: xz 1s linear infinite;
              }
            }
            @keyframes xz {
              0% {
                transform: translateY(-23px) scale(0.7) rotate(0deg);
              }
              100% {
                transform: translateY(-23px) scale(0.7) rotate(360deg);
              }
            }
          }
          .ivu-form-item {
            width: 100%;
            text-align: center;
            margin-bottom: 40px;
            // @media screen and (max-width: 1380px) {
            //   margin-bottom: 29px;
            // }
            &:nth-child(2) {
              // margin-bottom: 4vw;
              margin-bottom: 77px;
              // @media screen and (max-width: 1380px) {
              //   margin-bottom: 55px;
              // }
            }
            &:nth-child(3) {
              width: auto;
              margin-bottom: 18px;
            }
            &:nth-last-child(1) {
              margin-top: 12px;
            }
            .forgot-pwd {
              @include l-height(15px);
              @include position(absolute, null, 0, -34px);
              @include f-sc(14px, #7b8fa5);
              @include f-w(600);
              cursor: pointer;
              &:hover {
                text-decoration: underline;
              }
            }
            .eye {
              @include wh(16px, 10px);
              @include position(absolute, 12px, 0);
              cursor: pointer;
            }
            .validate-err {
              @include l-height(13px);
              @include position(absolute, null, null, -18px, 0);
              @include f-sc(12px, #ff4a4a);
            }
            /deep/ .ivu-input {
              border: none;
              border-bottom: 2px solid #dee5ed;
              @include f-sc(14px, #7b8fa5);
              @include pd(0);
              @include br(0);
              -webkit-box-shadow: 0 0 0 1000px white inset; //去除输入框默认背景
              box-shadow: 0 0 0 1000px white inset;
              &:hover {
                background: #fff;
              }
              &:focus {
                border-bottom: 2px solid transparent;
                border-image: linear-gradient(to right, #37a0f6, #387ee9) 1 10;
              }
              &::-webkit-input-placeholder {
                color: #a5bad0;
              }
            }
            /deep/ .validate {
              .ivu-input {
                border-bottom: 2px solid red;
              }
            }

            .create-account {
              @include f-sc(14px, #7b8fa5);
              @include f-w(600);
              @include position(relative);
              @include l-height(11px);
              cursor: pointer;
              &:hover {
                text-decoration: underline;
              }
              &::after {
                @include before-after(5px, 8px);
                @include position(absolute, 50%, -10px);
                transform: translateY(-4px);
                @include bgImage(
                  "~@assets/images/login/1/arrow.png",
                  0,
                  0,
                  cover
                );
              }
            }
          }
        }
      }
      .system-maintenance {
        // @include wh(480px, 521px);
        width: 520px;
        background: #fff url("~@assets/images/login/1/system_maintenance.png")
          no-repeat center 53px;
        padding-top: 279px;
        padding-bottom: 50px;
        .maintenance-txt {
          @include f-sc(18px, #7b8fa5);
          @include f-w(400);
        }
        .maintenance-tip {
          margin-top: 109px;
          // @media screen and (max-width: 1380px) {
          //   margin-top: 79px;
          // }
          p {
            padding: 0 106px;
            line-height: normal;
            &:nth-child(1) {
              @include f-sc(30px, #364658);
              @include f-w(bold);
            }
            &:nth-child(2) {
              @include f-sc(14px, #7b8fa5);
              margin-top: 18px;
            }
          }
        }
      }
    }
  }
  .main::after {
    content: "";
    width: 100px;
    height: 1px;
    position: absolute;
    right: -100px;
  }
  .footer {
    @include wh(100%, auto);
    @include pd(26px, 0);
    display: flex;
    flex-flow: column;
    // height: 210px;
    // height: 90px;
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
  // 视频弹框样式
  .video-bg {
    @include wh(100%);
    @include position(fixed, 0, 0);
    background: rgba(25, 32, 40, 0.2);
    z-index: 10;
    .video-box {
      max-width: 1280px;
      height: 70%;
      background: black;
      background-image: url("~@assets/images/login/modal/loading.png");
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: 3%;
      @include position(absolute, 0, 0, 0, 0);
      // margin: 16.7vh 16.3vw;
      margin: 180px 313px;
      // @media screen and (max-width: 1380px) {
      //   margin: 130px 225px;
      // }
      .close {
        @include position(absolute, 0, -56px);
        @include wh(35px);
        @include bgImage(
          "~@assets/images/login/2//close_icon.png",
          0,
          0,
          cover
        );
        cursor: pointer;
      }
      iframe {
        @include wh(100%, 100%);
      }
    }
  }
}
// 提示框样式
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
// 轮播图动画
.fs-enter-active,
.fs-leave-active {
  transition: opacity 300ms ease-in-out 0s;
}
.fs-enter,
.fs-leave-to {
  opacity: 0;
}
.fs-enter-to,
.fs-leave {
  opacity: 1;
}
</style>

<template>
  <div class="content-bg">
    <app-header></app-header>
    <!-- 内容区 -->
    <div class="main d-flex jc-end ai-center">
      <!-- 提示文字 -->
      <div class="banner-tips">
        <transition-group tag="ul"
                          class="tips-txt"
                          name="fs">
          <li v-for="(item, index) in tipsTxtList"
              :key="item"
              v-show="index === bannerIndex">
            <img :src="item"
                 draggable="false"
                 alt />
          </li>
        </transition-group>
        <transition-group tag="ul"
                          class="tips-btn"
                          name="fs">
          <li v-for="(item, index) in tipsBtnList"
              :key="item.default"
              v-show="index === bannerIndex">
            <img :src="item.default"
                 @mouseenter="changeBtnSrc($event, 0)"
                 @mouseleave="changeBtnSrc($event, 1)"
                 @click.stop="tipsBtnAction"
                 draggable="false"
                 alt />
          </li>
        </transition-group>
      </div>
      <div class="main-l">
        <div class="banner-box f-column d-flex ai-center"
             @mouseenter="setBannerInterval(0)"
             @mouseleave="setBannerInterval(1)">
          <transition-group class="bannerImg"
                            tag="ul"
                            name="fs">
            <li v-for="(item,index) in bannerImgSrc"
                :key="item"
                v-show="index === bannerIndex">
              <img :src="item"
                   draggable="false"
                   alt />
            </li>
          </transition-group>
          <ul class="banner-radius d-flex jc-around">
            <li v-for="item in 4"
                transition-group
                :key="item"
                :class="{ active: item - 1 === bannerIndex }"
                @mouseenter="setBannerIndex(item - 1)"
                @mouseleave="timer === null && openSetInterval()"></li>
          </ul>
        </div>
      </div>
      <!-- 登录框 -->
      <div class="main-r">
        <div v-if="!isMaintenance"
             class="login-box">
          <h1 class="t-center">Sign in</h1>
          <Form class="login-form d-flex ai-center"
                ref="loginForm"
                :model="loginForm"
                :rules="loginFormValidate">
            <FormItem prop="username">
              <Input :class="isValidate ? 'validate' : ''"
                     type="text"
                     v-model="loginForm.username"
                     placeholder="Email address"></Input>
              <p v-if="isValidate"
                 class="validate-err t-left fadeInDown">Email address is incorrect</p>
            </FormItem>
            <FormItem prop="pwd">
              <Input :class="isValidate ? 'validate' : ''"
                     :type="isShowPwd ? 'text' : 'password'"
                     v-model="loginForm.pwd"
                     placeholder="Passwords"></Input>
              <p v-if="isValidate"
                 class="validate-err t-left fadeInDown">Passwords does not match the anccount</p>
              <!-- <span
                class="eye"
                :style="`background:url(${require('@assets/images/login/1/'isShowPwd ?'open_eye.png':'close_eye.png')}) no-repeat`"
                @click="isShowPwd = !isShowPwd"
              ></span>-->
              <span class="eye"
                    :style="`background:url(${getPwdUrl}) no-repeat`"
                    @click="isShowPwd = !isShowPwd"></span>
              <a class="forgot-pwd t-right"
                 target="_blank"
                 href="https://www.fs.com/index.php?main_page=password_forgotten">Forgot passwords?</a>
            </FormItem>
            <!-- <FormItem>
              <div class="btn-submit"
                   @click="handleLogin"></div>
            </FormItem> -->
            <div :class="['btn-submit',{'loading':loading}]"
                 @click="handleLogin"></div>
            <FormItem>
              <a class="create-account"
                 target="_blank"
                 href="https://www.fs.com/index.php?main_page=regist">Create an account</a>
            </FormItem>
          </Form>
        </div>
        <!-- 系统维护 -->
        <div v-else
             class="system-maintenance t-center">
          <div class="maintenance-txt">The system is under maintenance...</div>
          <div class="maintenance-tip">
            <p>The service will be resumed soon</p>
            <p>Estimated recovery time 2019/12/20 20:00</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <!-- 网站信息 -->
    <div class="footer">
      <p class="d-flex jc-center">
        Copyright © 2019 FS.COM Inc.All Rights Reserved.<span style="margin-left:6px;margin-right:6px;">|</span>
        <span class="terms"
              @click="isShowArgreement = true">Terms of Use</span><span style="margin-left:6px;margin-right:6px;">|</span>
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
    <!-- 用户协议 -->
    <fs-modal :show="isShowArgreement"
              title="Terms of Use"
              :width="900"
              :top="100"
              :footerShow="true"
              @cancel="isShowArgreement = false">
      <argreement></argreement>
    </fs-modal>
    <!-- enter-active-class="animate__animated animate__zoomIn"
         leave-active-class="animate__animated animate__zoomOut"-->
    <!-- 视频教程 -->
    <transition>
      <div v-if="isShowVideo"
           class="video-bg">
        <div class="video-box">
          <span class="close"
                @click="isShowVideo = false"></span>
          <iframe :src="
            osName === 'Windows'
              ? 'https://www.youtube.com/embed/eRRUDewINEk?rel=0&amp;showinfo=0'
              : 'https://www.youtube.com/embed/6mQwrY4JyOQ?rel=0&amp;showinfo=0'"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
        </div>
      </div>
    </transition>
    <!-- 试用账号过期提示 -->
    <fs-new-modal :show="isAccountTip"
                  :closeShow="false"
                  :width="480"
                  :footerHide="true">
      <div class="tip-box">
        <p>
          The trial period of your account has
          expired, please contact your account
          manager to activate it.
        </p>
        <Button type="primary"
                @click="handleContact">Contact Now</Button>
        <Button type="text"
                @click="isAccountTip = false">Cancle</Button>
      </div>
    </fs-new-modal>
  </div>
</template>

<script>
import { judgeApiEnv, userLogin } from "@service/login/login";
import { mapState, mapMutations } from "vuex";
import { parseUrl } from "@assets/js/utils/tool.js";
import fsModal from "@components/modal/modal";
import fsNewModal from '@components/modal/modals';
import argreement from "./agreement";
import AppHeader from "@components/Header/AppHeader";
import { Notice } from "view-design";
export default {
  computed: {
    ...mapState(["versonDownload"]),
    getPwdUrl () {
      return this.isShowPwd
        ? require("@assets/images/login/1/open_eye.png")
        : require("@assets/images/login/1/close_eye.png");
    }
  },
  components: { fsModal, argreement, AppHeader, fsNewModal },
  data () {
    return {
      isAccountTip: false,
      bannerImgSrc: Array(4)
        .fill()
        .map((item, i) =>
          require(`@assets/images/login/${i + 1}/bg_banner0${i + 1}.png`)
        ),
      currentLanguage: "English(US)",
      languageList: ["English(US)", "Chinese"],
      timer: null,
      isShowArgreement: false,
      loading: false,
      // isAutoPlay: false,
      osName: null,
      isShowVideo: false,
      bannerIndex: 0,
      tipsTxtList: Array(4)
        .fill()
        .map((item, i) =>
          require(`@assets/images/login/${i + 1}/tip_txt0${i + 1}.png`)
        ),
      tipsBtnList: [
        {
          default: require("@assets/images/login/1/tofsbox_no_active.png"),
          active: require("@assets/images/login/1/tofsbox_active.png")
        },
        {
          default: require("@assets/images/login/2/video_no_active.png"),
          active: require("@assets/images/login/2/video_active.png")
        },
        {
          default: require("@assets/images/login/3/download_no_active.png"),
          active: require("@assets/images/login/3/download_active.png")
        },
        {
          default: "/", active: "/"
        }
      ],
      isValidate: false,
      isMaintenance: false, // 是否维护中
      isShowPwd: false,
      address: null,
      apiEnv: null,
      loginFormValidate: {
        username: [
          {
            required: true,
            message: "Please input the email address",
            trigger: "blur"
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" }
        ],
        pwd: [
          {
            required: true,
            message: "Please enter the passwords",
            trigger: "blur"
          }
        ]
      },
      loginForm: {
        username: "",
        pwd: ""
      },
      userImage: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
      // 三角符号
      triangleSymbol: false,
      userName: '',
      languageIcon: '',
      //文档可视区的高  --解决fixed布局下无法横向滚动的问题
      clientHeight: 0
    };
  },
  methods: {
    ...mapMutations(["USER_INFO"]),
    handleContact () {
      // 打开聊天界面
      window.LC_API.open_chat_window();
      this.isAccountTip = false;
    },
    toggleLanguage (index) {
      this.currentLanguage = this.languageList[index];
    },
    tipsBtnAction () {
      this.bannerIndex === 0 &&
        window.open("https://www.fs.com/products/96657.html");
      this.bannerIndex === 1 && (this.isShowVideo = true);
      this.bannerIndex === 2 &&
        (window.location.href = this.versonDownload[this.osName]);
    },
    setBannerInterval (flag) {
      if (flag) return this.openSetInterval();
      window.clearInterval(this.timer);
      this.timer = null;
    },
    changeBtnSrc (e, type) {
      e.target.src = type
        ? this.tipsBtnList[this.bannerIndex].default
        : this.tipsBtnList[this.bannerIndex].active;
      // this.isAutoPlay = type === 1;
      if (type) return this.openSetInterval();
      window.clearInterval(this.timer);
      this.timer = null;
    },
    setBannerIndex (index) {
      clearInterval(this.timer);
      this.timer = null;
      this.bannerIndex = index;
    },
    openSetInterval () {
      if (this.timer !== null) return false; // 防止重复启动
      this.timer = setInterval(() => {
        this.bannerIndex < 3 ? this.bannerIndex++ : (this.bannerIndex = 0);
      }, 5000);
    },
    //点击登录
    handleLogin () {
      this.$refs["loginForm"].validate(async valid => {
        if (valid) {
          try {
            this.loading = true;
            var parseUrlObj = parseUrl(window.location.href); // 获取当前路由地址
            let data = { param: {} }; // 与后台保持结构一致
            // 获取账号和密码，进行base64转换
            data.param.emailAddress = window.btoa(this.loginForm.username);
            data.param.passWord = window.btoa(this.loginForm.pwd);
            // 调用登录接口
            await userLogin(data).then(result => {
              if (result.code === -1) {
                this.loading = false;
                // 登录失败验证
                this.isValidate = true;
                // 登录失败显示密码
                this.isShowPwd = true;
                return
              }
              console.log(result)
              if (result.obj.status === '2' || result.obj.status === '5') {
                // 退出登录
                Notice.error({
                  title: "login error",
                  desc: "The account is detected to be abnormal, login/code configuration has been restricted,please contact your account manager for processing"
                });
                this.loading = false;
                // 登录失败验证
                this.isValidate = true;
                // 登录失败显示密码
                this.isShowPwd = true;
                return
              }
              if (result.obj.status === '0' || result.obj.status === '3' || result.obj.status === '4') {
                this.loading = false;
                // 登录失败验证
                this.isValidate = true;
                // 登录失败显示密码
                this.isShowPwd = true;
                return
              }
              this.loading = false;
              result.obj.emailAddress = data.param.emailAddress;
              result.obj.type = ""; // 保留结构
              // 本地保存用户信息
              this._hyTool.setStore("userName", result.obj.userName);
              this._hyTool.setStore("token", result.obj.token);
              this._hyTool.setStore("userInfo", result.obj);
              this._hyTool.setStore("jwtToken", result.obj.jwtToken);
              this._hyTool.setStore("userImage", result.obj.userImage);
              // 销售人员姓名等级
              this._hyTool.setStore("adminName", result.obj.adminName);
              this._hyTool.setStore("userLevel", result.obj.userLevel);
              this.USER_INFO();
              // 判断是从fs.com还是正常登录
              parseUrlObj.applicationNo
                ? this.$router.push({
                  path: "/main/BoxPro",
                  query: { applicationNo: parseUrlObj.applicationNo }
                })
                : this.$router.push("/main/onLine");
              if (result.obj.status === 4 || result.obj.status === 2) {
                this.loading = false;
                // 登录失败验证
                this.isValidate = true;
                // 登录失败显示密码
                this.isShowPwd = true;
              }
              // 试用期账号过期提示
              if (result.obj.status === 12) {
                this.loading = false;
                this.isAccountTip = true;
              }
            })
          } catch (e) {
            this.loading = false;
            // 登录失败验证
            this.isValidate = true;
            // 登录失败显示密码
            this.isShowPwd = true;
          }
        }
      });
    },
    clickDropDown (name) {
      // 对象隐射写法
      const clickName = {
        'record': () => {
          this.$router.push('/main/myRecord?tab=1');
        },
        'coding': () => {
          this.$router.push('/main/myRecord?tab=2');
        },
        'apply': () => {
          this.$router.push('/main/order?name=apply');
        },
        'order': () => {
          this.$router.push('/main/order?name=order');
        },
        'custom': () => {
          this.$router.push('/main/custom');
        },
        'exit': () => {
          this.loginOut();
        }
      };
      clickName[name]();
    },
    // 设置三角符号
    setIcon (visible) {
      this.triangleSymbol = visible;
    },
    // 初始化语言
    initLanguage () {
      this.userName = this._hyTool.getStore('userName');
      this.userImage = this._hyTool.getStore('userImage') || 'https://i.loli.net/2017/08/21/599a521472424.jpg';
      this.languageIcon = this._hyTool.getStore('language');
      if (this.languageIcon === 'zh') {
        this.currentlanguage = '简体中文';
      } else {
        this.currentlanguage = 'English(US)';
      }
    },
  },
  async created () {
    // 判断正式/测试站
    this.apiEnv = await judgeApiEnv();
    // 判断国内外
    this.address = this._hyTool.getStore("address");
    // 获取当前系统
    this.osName = this._hyTool.findOS();
    // 轮播图
    this.openSetInterval();
  },
  mounted () {
    // 监听页面回车事件,触发登录
    document.onkeyup = e => {
      let event = e || window.event;
      event.keyCode === 13 && this.handleLogin();
    }
  },
  beforeDestroy () {
    // 销毁定时器
    window.clearInterval(this.timer);
    this.timer = null;
  },
  watch: {
    loginForm: {
      deep: true,
      handler () {
        this.isValidate && (this.isValidate = false);
      }
    }
  }
};
</script>
