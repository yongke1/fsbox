<style lang='scss' scoped>
@import "~@assets/styles/_mixins";

.content {
  @include pd(0, 30px);
  position: relative;
  .header {
    height: 83px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #eaeff5;
    position: relative;
    .header-link {
      span {
        &:nth-child(1) {
          color: #2d8cf0;
          cursor: pointer;
        }
      }
    }
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
      // @include position(absolute, 50%, 0px);
      // margin-top: -10px;
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
  .content-box {
    min-height: 677px;
    & > h3 {
      margin: 30px 0 20px;
      color: #435f87;
    }
    & > p {
      padding: 30px;
      line-height: 24px;
      color: #435f87;
      font-size: 14px;
      border: 1px solid #e9eff5;
    }
    .install-box {
      .download-box {
        border: 1px solid #e9eff5;
        padding: 30px;
        p {
          margin: 20px 0;
          line-height: 24px;
          span {
            display: block;
            position: relative;
            padding-left: 15px;
            &::before {
              content: "";
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background: #435f87;
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-3px);
            }
          }
        }
        .ivu-btn {
          width: 130px;
          height: 46px;
          background: linear-gradient(to left, #379ff5, #377de9);
          border-radius: 3px;
          padding-left: 35px;
          position: relative;
          &::before {
            content: "";
            display: inline-block;
            background: url("~@assets/images/icon/box_icon.png") no-repeat -322px -653px;
            width: 14px;
            height: 16px;
            position: absolute;
            left: 20px;
            top: 50%;
            opacity: 1;
            transform: translateY(-8px);
          }
        }
      }
    }
  }
  .step-detail {
    h3 {
      margin: 20px 0 10px;
    }
    p {
      span {
        margin-bottom: 20px;
        display: block;
        color: #7b8fa5;
        img {
          width: 22px;
          height: 22px;
        }
      }
    }
    .img-box {
      display: flex;
      div {
        flex: 0.48;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>

<template>
  <div class="content">
    <header class="header">
      <div class="header-link">
        <span @click="$router.push({name:'main.helpList'})">Help Center</span>
        <Icon type="ios-arrow-forward" />
        <span>{{titleList[id.split('-')[0]-1]}}</span>
      </div>
      <div class="header-tab">
        <span>Details</span>
      </div>
      <span class="return"
            @click="$router.go(-1)">
        <Icon type="ios-arrow-round-back" />Return
      </span>
    </header>
    <div class="content-box">
      <h3>{{formatTitle}}</h3>
      <p v-if="formatContent.length>0">{{formatContent}}</p>
      <div class="install-box"
           v-else>
        <div class="download-box">
          <RadioGroup v-model="systemType">
            <Radio label="0">
              <span>Windows Driver</span>
            </Radio>
            <Radio label="1">
              <span>MAC Driver</span>
            </Radio>
          </RadioGroup>
          <p>
            <span>Please reload the browser after the instation is complete</span>
            <span>It is recommended to activate your service in Google Chrome (68 version and late)</span>
          </p>
          <Button type="primary"
                  @click="handleDownload">Download</Button>
        </div>
        <div v-if="systemType==='0'"
             class="step-detail">
          <h3>Install Windows Driver</h3>
          <p>
            <span>
              Step1: After download the driver, double-click the driver file FSInstaller.zip
            </span>
            <span>
              Step2: FS service will be automatically activated when the driver isintalled, and you can check the FS logo <img src="~@assets/images/icon/favicon.png"
                   alt=""> in the notiflication bar. If FS service is not automatically activated, Lust reload the browser.
            </span>
          </p>
        </div>
        <div v-else
             class="step-detail">
          <h3>Install MACOS Driver</h3>
          <p>
            <span>
              Step1: After download the driver, double-click the driver file FsinstalMac_Beta.dmg
            </span>
            <span>
              Step2: Long click the FS Box and drag to the Application folder
            </span>
          </p>
          <div class="img-box">
            <img src="~@assets/images/help/step1.png"
                 alt="">
          </div>
          <p>
            <span>
              Step3: Find the FS Box application on the Launchpad, then double-click itand a system pop-up prompt will appear,click Open
            </span>
            <span>
              Step4: Click Install to enter the Mono download pae, then select Mono todownload
            </span>
          </p>
          <div class="img-box">
            <div>
              <img src="~@assets/images/help/step2.png"
                   alt="">
            </div>
            <div>
              <img src="~@assets/images/help/step3.png"
                   alt="">
            </div>
          </div>
          <p>
            <span>
              Step5: After download the Mono, double-click the file Monoframworkfor installation
            </span>
            <span>
              Step6: After the Mono installation is complete, click to restart
            </span>
          </p>
          <div class="img-box">
            <img src="~@assets/images/help/step2.png"
                 alt="">
          </div>
          <p>
            <span>
              Step7: Status displays in green means the driver is successfully installedand actvated normally
            </span>
          </p>
          <div class="img-box">
            <img src="~@assets/images/help/step4.png"
                 alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>   

<script> 

export default {
  computed: {
    formatTitle () {
      let index1 = this.id.split('-')[0] - 1, index2 = this.id.split('-')[1] - 1;
      console.log(index1, index2);
      return this.detailList[index1][index2].title;
    },
    formatContent () {
      let index1 = this.id.split('-')[0] - 1, index2 = this.id.split('-')[1] - 1;
      return this.detailList[index1][index2].content;
    }
  },
  data () {
    return {
      id: this.$route.params.id,
      downloadUrl: [
        "https://fsbox.com/upgrade/FSInstaller.zip",
        "https://fsbox.com/upgrade/FSInstall_Mac_Beta.dmg"
      ],
      titleList: [
        'Video Tutorial',
        'Driver Questions',
        'Login Questions',
        'Transceiver Questions'
      ],
      systemType: '0',
      detailList: [
        [],
        [
          {
            title: 'Driver download / Install',
            content: ''
          },
          {
            title: 'What should I do if the driver upgrade fails',
            content: 'Check if the firewall on your computer is blocking the fsbox.com driver application link.If so, please add this application to the white list.If the application is already on the white list and the driver still fails to upgrade, please contact us.'
          }
        ],
        [
          {
            title: 'How can I register an account?',
            content: 'The login account of fsbox.com is the account registered on fs.com. Click Create an account on the login page and fill in the correct information to register. Or register directly on fs.com.'
          },
          {
            title: 'What should I do if my account unable to log in?',
            content: 'Please make sure the account and password is entered correctly. If you cannot log in with the correct account and password, try to empty the browser cache.'
          },
          {
            title: 'What should I do if I forgot my account password',
            content: 'Click Forgot your password on the login page, and retrieve the password by entering the registered email address.'
          }
        ],
        [
          {
            title: 'Which compatible brands can be configured for FS transceiver through FS box?',
            content: `Ther are 14 compatible brands can be configured for FS transceivers in online 
            coding, including Cisco, Juniper, Arista, Brocade, Intel, Dell (Force 10), Extreme, 
            H3C, Huawei, IBM, Alcatel-Lucent, Netgear, Generic, Mellanox etc. For other 
            compatible brands, you can apply through the Box Pro service.`
          },
          {
            title: 'Can I configure the serial number of FS transceiver through the Online Configuration service?',
            content: `Yes, sure. But for some special configurations, such as Cisco, 1G and 10G Huawei, 
            etc., you need to apply through the Box Pro service.`
          },
          {
            title: `How should I configure the part number and vendor name of the FS transceiver to 
            what I want?`,
            content: `You can customize the part number you want through the Box Pro service. The 
            vendor name is not customizable, only FS and OEM can choose.`
          },
          {
            title: `Is it possible to configure the compatibility of the original transceiver or other 
            manufacturers’ transceiver through FS BOX?`,
            content: `The FS box only provides configuration services for FS transceivers.`
          },
          {
            title: `Why can't the part number of the 40G BiDi transceiver be configured?`,
            content: `Due to hardware limitations, the part number of 40G BiDi transceiver and HPE 
            compatible transceiver cannot be configured at present.`
          }
        ]
      ]
    }
  },
  methods: {
    handleDownload () {
      window.location.href = this.downloadUrl[Number(this.systemType)];
    }
  },
  created () {
    this.systemType = this._hyTool.findOS() === 'Windows' ? '0' : '1';
  },
}

</script>