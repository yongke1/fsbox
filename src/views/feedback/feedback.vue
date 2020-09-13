<style lang='scss' scoped>
@import "~@assets/styles/_vars";
@import "~@assets/styles/_mixins";

.content {
  @include pd(0, 40px);
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
    // @include pd(30px, 0);
    padding: 30px 0 20px;
    display: flex;
    position: relative;
    .main-l {
      flex: 1;
      border-right: 1px solid map-get($colors, "white-2");
      // @include pd(30px, 0, 30px);
      position: relative;
      .showSuc {
        @include wh(150px, 58px);
        // padding: 0 20px;
        @include p-center;
        background-color: map-get($colors, "white");
        border-radius: 5px;
        // box-shadow: 0 0 12px -3px #000;
        box-shadow: 0px 8px 20px 0px rgba(7, 49, 94, 0.1);
        display: flex;
        // flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 99;
        font-size: 18px;
        color: #7b8fa5;
        opacity: 0;
        &.sucAnimation {
          animation: suc 2s linear forwards;
        }
        & > div {
          @include mg(0, 10px, 0, 0);
          @include sprite(-50px, -492px, 20px, 20px);
          vertical-align: middle;
        }
      }
      // 成功弹框动画
      @include keyframe(suc) {
        0% {
          top: 80px;
          opacity: 1;
        }
        33.33% {
          top: 0;
          opacity: 1;
        }
        100% {
          top: 50px;
          opacity: 0;
        }
      }
      .ivu-form {
        /deep/ .ivu-form-item-label {
          width: 100%;
          // display: inline-block;
          text-align: left;
          @include pd(0, 0, 20px, 0);
          position: relative;
          color: #7b8fa5;
        }
        /deep/ .ivu-form-item-content {
          line-height: 0;
          .ivu-input {
            @include wh(95%, 70px);
            &[type="text"] {
              @include wh(375px, 46px);
            }
          }
          .ivu-btn-primary {
            // height: 38px;
            height: 46px;
            background: linear-gradient(to left, #379ff5, #377de9);
          }
          .ivu-radio-wrapper {
            margin-right: 20px;
          }
        }
        .ivu-form-item {
          width: 375px;
          @include mg(0, 20px, 20px, 0);
          &.radio {
            width: 100%;
            /deep/ .ivu-form-item-label {
              position: relative;
              &::before {
                position: absolute;
                left: 165px;
              }
            }
          }
          &.model-name {
            /deep/ .ivu-form-item-label {
              position: relative;
              &::before {
                position: absolute;
                left: 190px;
              }
            }
          }
          &.serial-number {
            /deep/ .ivu-form-item-label {
              position: relative;
              &::before {
                position: absolute;
                left: 200px;
              }
            }
          }
          &.compatible-type {
            /deep/ .ivu-form-item-label {
              position: relative;
              &::before {
                position: absolute;
                left: 205px;
              }
            }
          }
          &.textarea {
            width: 100%;
            /deep/ .ivu-form-item-label {
              position: relative;
              &::before {
                position: absolute;
                left: 140px;
              }
            }
          }
          &.upload {
            width: 100%;
            /deep/ .ivu-form-item-label {
              position: relative;
              &::after {
                content: "(Please provide the failed screenshoot and transceiver label image for faster and better service)";
                @include position(absolute, null, null, null, 100px);
                color: #ccc;
              }
            }
            /deep/ .ivu-upload-drag {
              @include wh(70px);
              border: 2px dashed map-get($colors, "white-3");
              transition: all 0.1s linear;
              &:hover {
                border: 2px dashed map-get($colors, "primary");
              }
            }
            /deep/ .ivu-form-item-label {
              @include pd(0, 0, 20px, 0);
            }
            .update-plus {
              @include wh(68px);
              display: flex;
              justify-content: center;
              align-items: center;
              color: map-get($colors, "white-3");
              font-weight: bolder;
              transition: all 0.1s linear;
              &:hover {
                color: map-get($colors, "primary");
              }
            }
            .uploadMsg {
              color: red;
            }
          }
        }
      }
    }
    .main-r {
      width: 468px;
      // @include pd(30px, 0, 0, 50px);
      background: url("~@assets/images/help/feedback_bg.png") no-repeat center;
      p {
        &:nth-child(1) {
          @include f-sc(14px, #666);
          &:hover {
            cursor: inherit;
            text-decoration: none;
          }
        }
        &:nth-last-child(1) {
          @include f-sc(14px, #666);
          &:hover {
            cursor: inherit;
            text-decoration: none;
          }
          span {
            @include mg(0, 0, 0, 5px);
            color: map-get($colors, "primary");
            &:hover {
              cursor: pointer;
              text-decoration: underline;
            }
          }
        }
      }
      .no-data {
        @include wh(100%, 200px);
        @include bgImage("/static/images/icon/no-data.png", left, center);
        span {
          display: inline-block;
          @include mg(47%, 0, 0, 8%);
          color: map-get($colors, "white-3");
        }
      }
      ul {
        max-height: 600px;
        overflow-y: auto;
        @include mg(10px, 0, 30px);
        li {
          @include mg(20px, 0, 0, 0);
          color: map-get($colors, "primary");
          width: 300px;
          @include ellipsis;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
    }
    .showPic {
      @include p-center;
      @include mg(auto);
      @include wh(800px, 500px);
      box-shadow: 0 0 20px 5px map-get($colors, "white-3");
      z-index: 99;
      i {
        @include f-sc(30px, #aaa);
        @include position(absolute, 0, 0);
        cursor: pointer;
        opacity: 0;
      }
      &:hover i {
        opacity: 1;
      }
      img {
        @include wh(100%);
      }
    }
  }
  .footer {
    border-top: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    color: #7b8fa5;
    padding: 24px 0;
    & > span {
      position: relative;
      .ivu-icon {
        font-size: 20px;
        cursor: pointer;
      }
      .driveInfo {
        position: absolute;
        right: -150px;
        top: -90px;
        padding: 10px;
        background: #fff;
        border-radius: 3px;
        box-shadow: 0 0 4px -1px #000;
        &::before {
          content: "";
          width: 10px;
          height: 10px;
          background: #fff;
          border-right: 1px solid #aaa;
          border-bottom: 1px solid #aaa;
          position: absolute;
          bottom: -6px;
          left: 40%;
          transform: rotate(45deg);
        }
        p {
          display: flex;
          justify-content: space-between;
          span + span {
            margin-left: 20px;
          }
        }
      }
    }
  }
}
// 上传
.demo-upload-list {
  display: inline-block;
  @include wh(70px);
  text-align: center;
  line-height: 60px;
  border-radius: 4px;
  background: map-get($colors, "white");
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  @include mg(0, 30px, 0, 0);
}
.demo-upload-list img {
  @include wh(100%);
  border-radius: 4px;
}
.demo-upload-list-cover {
  display: none;
  @include position(absolute, 0, 0, 0, 0);
  transition: all 0.1s linear;
  background: rgba(0, 0, 0, 0.1);
  &:hover {
    border: 2px solid #d8d8d8;
  }
}
.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}
.demo-upload-list-cover i {
  &.ivu-icon-md-close-circle {
    @include f-sc(15px, #bbbbbb);
    @include mg(0, 2px);
    @include position(absolute, -10px, -11px);
    cursor: pointer;
    z-index: 9;
  }
}
.demo-upload-list .ivu-load-loop {
  @include f-sc(20px);
  @include position(absolute, 50%, null, null, 50%);
  @include mg(-10px, 0, 0, -10px);
}
.showBg {
  @include position(absolute, 0, null, null, 0);
  @include wh(100%);
  background-color: transparent;
}
.tips {
  @include pd(50px, 0);
  text-align: center;
  @include f-sc(16px);
  span {
    color: red;
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>

<template>
  <div class="content">
    <header class="header">
      <div class="header-tab">
        <span>Feedback</span>
      </div>
      <span class="return"
            @click="$router.go(-1)">
        <Icon type="ios-arrow-round-back" />Return
      </span>
    </header>
    <!-- 主体 -->
    <div class="main">
      <div class="main-l">
        <!-- 成功提示 -->
        <div :class="['showSuc',{'sucAnimation':isSuccess}]">
          <div></div>
          Success
        </div>
        <Form ref="formInline"
              :model="feedbackForm"
              :rules="feedbackRules"
              inline>
          <FormItem class="radio"
                    prop="OsName"
                    label="Operating Syatem Type">
            <RadioGroup v-model="feedbackForm.OsName">
              <Radio label="Windows">Windows Driver</Radio>
              <Radio label="MacOS">MAC Driver</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem class="model-name"
                    prop="ModelName"
                    label="Part Number of Transceiver">
            <Input type="text"
                   v-model="feedbackForm.ModelName"
                   placeholder="Please flling">
            </Input>
          </FormItem>
          <FormItem class="serial-number"
                    prop="ModelSerialNumber"
                    label="Serial Number of Transceiver">
            <Input type="text"
                   v-model="feedbackForm.ModelSerialNumber"
                   placeholder="Please flling">
            </Input>
          </FormItem>
          <FormItem class="compatible-type"
                    prop="CompatibleType"
                    label="Configured Compatible Brand">
            <Input type="text"
                   v-model="feedbackForm.CompatibleType"
                   placeholder="Please flling">
            </Input>
          </FormItem>
          <FormItem prop="ModelOrderNumber"
                    label="Order Number of the Transceiver">
            <Input type="text"
                   v-model="feedbackForm.ModelOrderNumber"
                   placeholder="Please flling">
            </Input>
          </FormItem>
          <FormItem class="textarea"
                    prop="Content"
                    label="Problem Description">
            <Input type="textarea"
                   v-model="feedbackForm.Content"
                   placeholder="Please flling">
            </Input>
          </FormItem>
          <FormItem class="upload"
                    label="Upload Image">
            <transition-group name="list">
              <div class="demo-upload-list"
                   v-for="(item,i) in uploadList"
                   :key="item.url">
                <template v-if="item.status === 'finished'">
                  <img :src="item.url">
                  <div class="demo-upload-list-cover"
                       @click.prevent="showPic(i)">
                    <Icon type="md-close-circle"
                          @click.native="handleRemove($event,item,i)"></Icon>
                  </div>
                </template>
                <!-- 上传中 -->
                <Icon v-else
                      class="ivu-load-loop ivu-icon ivu-icon-ios-loading"></Icon>
              </div>
            </transition-group>
            <Upload v-if="isUpdatePlus"
                    ref="upload"
                    multiple
                    type="drag"
                    :action="uploadUrl"
                    :show-upload-list="false"
                    accept=".jpg,.jpeg,.png"
                    :before-upload="handleBeforeUpload"
                    :on-success="handleSuccess"
                    style="display: inline-block;width:58px;">
              <div class="update-plus">
                <Icon type="md-add"
                      size="20"></Icon>
              </div>
            </Upload>
            <!-- 上传错误提示 -->
            <div v-if="uploadMsg"
                 class="uploadMsg">{{uploadMsg}}</div>
          </FormItem>
          <FormItem>
            <Button type="primary"
                    :loading="loading"
                    @click="handleSubmit('formInline')">Submit</Button>
          </FormItem>
        </Form>
      </div>
      <div class="main-r">
        <!-- <p>Frequent Questions</p>
        <div v-if="questionList.length===0"
             class="no-data">
          <span>No Data</span>
        </div>
        <ul v-else>
          <li v-for="(item,index) in questionList"
              :title="item.title"
              @click="$router.push({name:item.name,params: { q:item.q }})"
              :key="index">{{item.title}}</li>
        </ul>
        <p>For more FQAs, see<span @click="toHelp"> Help and Support</span></p> -->
      </div>
      <!-- 预览图片 -->
      <div v-if="showUrl"
           class="showPic zoomIn">
        <img :src="showUrl"
             alt="">
        <Icon type="md-close"
              @click="showUrl=null"></Icon>
      </div>
    </div>
    <div class="footer">
      <span>
        System information
        <Icon @mouseenter.native="isShowInfo=true"
              @mouseleave.native="isShowInfo=false"
              type="md-help-circle" />
        <!-- 设备信息 -->
        <div v-show="isShowInfo"
             class="driveInfo">
          <p><span>Operating Syatem</span><span>{{deviceInfo.os}}</span></p>
          <p><span>Browser Type</span><span>{{deviceInfo.browser}}</span></p>
          <p><span>Driver Version</span><span>{{deviceInfo.drive}}</span></p>
        </div>
      </span>
      <span>
        Tips: he FS box system has access to device details. which will help US find solutions faster.
      </span>
    </div>
    <!-- <Alert :show="modelShow"
           title="Tips"
           :width="462"
           OkText="Confirm"
           CancelText="Cancel"
           @enter="exit"
           @cancel="modelShow=false">
      <div class="tips">
        The page has been edited. Are you sure to&nbsp;<span>exit</span>&nbsp;?
      </div>
    </Alert> -->
    <!-- 预览蒙层 -->
    <div v-if="showUrl"
         class="showBg"></div>
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex';
import { singleUploadUrl } from '@service/common/common';
import { addFeedBack } from '@service/feedback/feedback';
// import Alert from '@/components/alert/alert';

export default {
  props: ['chat'],
  components: {
    // Alert
  },
  data () {
    return {
      isShowInfo: false,
      isReload: true,
      next: null,
      modelShow: false,
      loading: false,
      isUpdatePlus: true, // 是否可以继续上传
      isSuccess: false, // 提交成功
      // 上传地址
      uploadUrl: singleUploadUrl,
      // 上传图片错误提示语
      uploadMsg: '',
      // 上传结果
      uploadRes: [],
      // 预览图片地址
      showUrl: null,
      // 设备信息
      deviceInfo: {
        os: '--',
        browser: '--',
        drive: '--'
      },
      feedbackForm: {
        OsName: this._hyTool.findOS(),
        ModelName: '',
        ModelSerialNumber: '',
        CompatibleType: '',
        ModelOrderNumber: '',
        Content: '',
        FilePath: []
      },
      feedbackRules: {
        OsName: [{
          required: true
        }],
        ModelName: [
          { required: true, message: 'Please enter the part number.', trigger: 'change' }
        ],
        ModelSerialNumber: [
          { required: true, message: 'Please enter the S/N number', trigger: 'change' },
          { required: true, message: 'Maximum characters are 16', trigger: 'change', max: 16 }
        ],
        CompatibleType: [
          { required: true, message: 'Please enter the compatible brand', trigger: 'change' }
        ],
        ModelOrderNumber: [
          { message: 'Maximum characters are 14', trigger: 'change', max: 14 }
        ],
        Content: [
          { required: true, message: 'Please enter the problem description', trigger: 'change' },
          { required: true, message: 'Maximum characters are 1000', trigger: 'change', max: 1000 }
        ]
      },
      uploadList: [],
      questionList: []
    };
  },
  computed: {
    ...mapState([
      'isDriveStart',
      'socketInfoUsb'
    ]),
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    exit () {
      this.next && this.next();
      this._hyTool.setStore('isReload', '');
    },
    handleSubmit (name) {
      this.$refs[name].validate(async (valid) => {
        if (valid) {
          this.isSuccess = false;
          this.loading = true;
          // 获取参数
          this.feedbackForm.UserId = this.userInfo.userNo;
          this.feedbackForm.Saler = this.userInfo.adminName;
          this.feedbackForm.BrowserVersion = this.deviceInfo.browser;
          this.feedbackForm.FsServicesVersion = this.deviceInfo.drive === '--' ? '' : this.deviceInfo.drive;
          this.feedbackForm.FilePath = this.feedbackForm.FilePath.join(',');
          let parme = this.feedbackForm;
          // 提交反馈
          let res = await addFeedBack(parme);
          this.feedbackForm.FilePath = [];
          if (res.code === 1) {
            this.isSuccess = true;
            this.loading = false;
          }
        }
      });
    },
    handleRemove (e, file, index) {
      // 阻止冒泡
      e.stopPropagation();
      const fileList = this.uploadList;
      this.uploadList.splice(fileList.indexOf(file), 1);
      this.uploadRes.splice(index, 1);// 移除显示的图片
      this.feedbackForm.FilePath.splice(index, 1);// 移除上传的路径
    },
    handleBeforeUpload (file) {
      // 限制上传数量
      let count = this.uploadList.length < 3;
      if (!count) return false;
      // 限制上传类型
      let fileType = ['jpg', 'jpeg', 'png'];
      let isType = fileType.includes(file.type.split('/')[1]);
      if (!isType) {
        this.uploadMsg = 'Please upload pictures in jpg, jpeg, or png format';
        return false;
      } else {
        this.uploadMsg = '';
      }
      // 限制上传大小
      let maxSize = 2048;// KB
      if (file.size / 1024 > maxSize) {
        this.uploadMsg = 'The upload file is too large, the maximum is 2M';
        return false;
      } else {
        this.uploadMsg = '';
      }
      this.uploadList.push({
        'status': 'null',
        'name': file.name,
        'url': this.getObjectURL(file)
      });
    },
    handleSuccess (res) {
      // 显示选择的图片
      if (res.code === 1) {
        this.uploadRes.push(res.code);
        this.uploadList[this.uploadRes.length - 1].status = 'finished';
        // 接收返回的路径
        this.feedbackForm.FilePath.push(res.obj.location);
      }
    },
    showPic (index) {
      this.showUrl = this.uploadList[index] && this.uploadList[index].url;
    },
    // 获取文件路径
    getObjectURL (file) {
      var url = null;
      if (window.createObjcectURL !== undefined) {
        url = window.createOjcectURL(file);
      } else if (window.URL !== undefined) {
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL !== undefined) {
        url = window.webkitURL.createObjectURL(file);
      }
      return url;
    },
    toHelp () {
      this.$router.push({ name: 'help.noviceQuestion', params: { q: 1 } });
    },
    reload () {
      // 存入session防止刷新进入死循环
      let res = this._hyTool.getStore('isReload');
      if (res) return false;
      this._hyTool.setStore('isReload', '1');
      window.location.reload(); // 刷新版本号
    }
  },
  watch: {
    // 监听usb连接，获取驱动版本号
    socketInfoUsb (val) {
      val && val.Status === 'Successed' && (this.deviceInfo.drive = `V${val.Result.versions}`);
    },
    // 是否显示上传按钮
    uploadRes (val) {
      val.length < 3 ? this.isUpdatePlus = true : this.isUpdatePlus = false;
    },
    // 成功重置数据
    isSuccess (val) {
      if (val) {
        // 重置数据
        this.uploadList = [];
        this.uploadRes = [];
        // 重置表单
        this.$refs['formInline'].resetFields();
      }
    }
  },
  created () {
    // 初始化设备信息
    this.deviceInfo.os = this._hyTool.findOsDetail();
    this.deviceInfo.browser = this._hyTool.findBrowser();
    this.reload();
  },
  beforeRouteLeave (to, from, next) {
    // 需要验证的字段
    let str = ['ModelName', 'ModelSerialNumber', 'CompatibleType', 'ModelOrderNumber', 'Content'];
    let flag = str.some(item => {
      return this.feedbackForm[item] !== '';
    });
    if (!flag) {
      this._hyTool.setStore('isReload', '');
      next(); return false;
    };
    this.modelShow = true;
    this.next = next;
  }
};

</script>
