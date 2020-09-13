<style lang='scss' scoped>
@import "~@assets/styles/_mixins";

.content {
  @include pd(0, 30px);
  position: relative;
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
  .main {
    padding-top: 20px;
    height: 645px;
    overflow-y: auto;
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
    .help-list {
      & > h3 {
        margin: 0 0 20px;
      }
      .content-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        div {
          width: 49%;
          height: 180px;
          border: 1px solid #eee;
          border-radius: 3px;
          margin-bottom: 20px;
          padding: 30px;
          &:hover {
            background: hsl(0, 14%, 99%);
          }
          h3 {
            font-weight: normal;
            color: #666;
            margin-bottom: 20px;
          }
          p {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            color: #aaa;
            &.br {
              margin-bottom: 20px;
            }
            a {
              &:hover {
                text-decoration: underline;
              }
              display: flex;
              align-items: center;
              .video-icon {
                margin-right: 5px;
                @include sprite(-458px, -651px, 16px, 16px);
              }
            }
          }
        }
      }
    }
  }
  .footer {
    padding: 20px 0;
    border-top: 1px solid #eee;
    span {
      color: #2d8cf0;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .video-box {
    width: 96%;
    height: 725px;
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translate(-50%);
    background: #000;
    span {
      position: absolute;
      top: 0;
      right: -56px;
      width: 35px;
      height: 35px;
      background: url("~@assets/images/login/2/close_icon.png") no-repeat;
      cursor: pointer;
    }
    iframe {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

<template>
  <div class="content">
    <header class="header">
      <div class="header-tab">
        <span>Help Center</span>
      </div>
      <span class="return"
            @click="$router.go(-1)">
        <Icon type="ios-arrow-round-back" />Return
      </span>
    </header>
    <div class="main">
      <div class="help-list">
        <h3>Video Tutorial</h3>
        <div class="content-list">
          <div>
            <h3>Window Operation Video Tutorial</h3>
            <p class="br">By watching this video, you will learn how to operate the box.</p>
            <p>
              <a @click="openVideo(0)">
                <span class="video-icon"></span> Watch Video
              </a>
            </p>
          </div>
          <div>
            <h3>Mac OS Opration Video Tutorial</h3>
            <p class="br">By watching this video, you will learn how to operate the box.</p>
            <p>
              <a @click="openVideo(1)">
                <span class="video-icon"></span> Watch Video
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="help-list">
        <h3>Driver Questions</h3>
        <div class="content-list">
          <div>
            <h3>Driver download / install</h3>
            <p>● Install Window Driver</p>
            <p class="br">● Install MACOS Driver</p>
            <p>
              <a @click="$router.push({name:'main.helpDetail',params:{id:'2-1'}})">More
                <Icon type="ios-arrow-forward" />
              </a>
            </p>
          </div>
          <div @click="$router.push({name:'main.helpDetail',params:{id:'2-2'}})">
            <h3>What should I do if the driver upgrade fails?</h3>
            <p>Check if the firewall on your computer is blocking the fsbox.com driver application
              link. If so, please add this application to the white list. If the application is already
              on the white list and the driver still fails to upgrade, please contact us.</p>
          </div>
        </div>
      </div>
      <div class="help-list">
        <h3>Login Questions</h3>
        <div class="content-list">
          <div @click="$router.push({name:'main.helpDetail',params:{id:'3-1'}})">
            <h3>How can I register an account?</h3>
            <p>The login account of fsbox.com is the account registered on fs.com. Click Create an
              account on the login page and fll in the correct information to register. Or register
              directly on fs.com.</p>
          </div>
          <div @click="$router.push({name:'main.helpDetail',params:{id:'3-2'}})">
            <h3>What should I do if my account unable to log in?</h3>
            <p>Please make sure the account and password is entered correctly. If you cannot log
              in with the correct account and password, try to empty the browser cache.</p>
          </div>
          <div @click="$router.push({name:'main.helpDetail',params:{id:'3-3'}})">
            <h3>What should I do if I forgot my account password?</h3>
            <p>Click Forgot your password on the login page, and retrieve the password by
              entering the registered email address.</p>
          </div>
        </div>
      </div>
      <div class="help-list">
        <h3>Transceiver Questions</h3>
        <div class="content-list">
          <div @click="$router.push({name:'main.helpDetail',params:{id:'4-1'}})">
            <h3>Which compatible brands can be configured for FS transceiver through FS box?</h3>
            <p>Ther are 14 compatible brands can be configured for FS transceivers in online
              coding, including Cisco, Juniper, Arista, Brocade, Intel, Dell (Force 10), Extreme,
              H3C, Huawel, IBM, Alcatel-Lucent, Netgear, Generic, Mellanox etc. For other
              compatible brands, you can apply through the Box Pro service.</p>
          </div>
          <div @click="$router.push({name:'main.helpDetail',params:{id:'4-2'}})">
            <h3>Can I configure the serial number of FS transceiver through the Online Configuration service?</h3>
            <p>Yes, sure. But for some special configurations, such as Cisco, 1G and 10G Huawei,
              etc.. you need to apply through the Box Pro service.</p>
          </div>
          <div @click="$router.push({name:'main.helpDetail',params:{id:'4-3'}})">
            <h3>How should I configure the part number and vendor name of the FS transceiver to what I want?</h3>
            <p>You can customize the part number you want through the Box Pro service. The
              vendor name is not customizable, only FS and OEM can choose.</p>
          </div>
          <div @click="$router.push({name:'main.helpDetail',params:{id:'4-4'}})">
            <h3>Is it possible to configure the compatibllity of the original transceiver or other manufacturers' transceiver through FS BOX?</h3>
            <p>The FS box only provides configuration services for FS transceivers.</p>
          </div>
          <div @click="$router.push({name:'main.helpDetail',params:{id:'4-5'}})">
            <h3>Why can't the part number of the 40G BiDi transceiver be configured?</h3>
            <p>Due to hardware limitations, the part number of 40G BiDi transceiver and HPE
              compatible transceiver cannot be configured at present.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      No solution found? Immediate <span @click="$router.push({name:'main.feedback'})">Feedback</span>
    </div>
    <!--视频弹框 -->
    <div class="video-box"
         v-if="isShowVideo">
      <span @click="isShowVideo = false"></span>
      <iframe :src="videoList[videoIndex]"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    formatTxt (val) {
      return val.slice(0, 200) + '...';
    }
  },
  components: {
  },
  computed: {
  },
  data () {
    return {
      videoList: [
        'https://www.youtube.com/embed/eRRUDewINEk?rel=0&amp;showinfo=0',
        'https://www.youtube.com/embed/6mQwrY4JyOQ?rel=0&amp;showinfo=0'
      ],
      videoIndex: 0,
      isShowVideo: false
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    openVideo (index) {
      this.videoIndex = index;
      this.isShowVideo = true;
    }
  },
  watch: {
  }
}

</script>