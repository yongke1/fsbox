<style lang='scss' scoped>
@import "~@assets/styles/_mixins";

.content {
  @include pd(0, 40px);
  padding-bottom: 40px;
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
      justify-content: center;
      span {
        color: #445f87;
        cursor: pointer;
        font-weight: bold;
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
  .main {
    .main-header {
      .ivu-alert {
        height: 84px;
        background: #fff8f3;
        border: none;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 20px;
        margin-top: 30px;
        /deep/ .ivu-alert-close {
          top: 50%;
          margin-top: -13px;
          .ivu-icon {
            color: #ff9c5d;
            font-size: 30px;
            font-weight: bold;
          }
        }
        p {
          font-weight: 400;
          color: #ff9c5d;
          line-height: 25px;
        }
      }
    }
    .main-content {
      & > span {
        font-weight: 600;
        font-size: 16px;
        color: #445f87;
        display: inline-block;
        margin: 20px 0;
      }
      /deep/ .ivu-collapse {
        background: #fff;
        border: none;
        // max-height: 300px;
        // overflow-y: auto;
        .ivu-collapse-item {
          border: none;
          &:not(:nth-last-child(1)) {
            /deep/ .ivu-collapse-header {
              margin-bottom: 10px;
            }
          }
          &.ivu-collapse-item-active {
            /deep/ i {
              transform: rotate(270deg);
            }
            /deep/ .ivu-collapse-header {
              margin-bottom: 0px;
              border-bottom: none;
            }
          }
          /deep/ .ivu-collapse-header {
            // @include l-height(105px);
            height: 52px;
            overflow: hidden;
            @include f-sc(14px, #7b8fa5);
            border: 1px solid #eaeff5;
            padding-left: 20px;
            // display: flex;
            // align-items: center;
            i {
              @include position(absolute, 50%, 20px);
              transform: rotate(90deg);
              margin-top: -7px;
            }
            .header-content {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              width: 100%;
              div {
                line-height: 52px;
                display: flex;
                color: #aeb9c6;
                span {
                  font-weight: 400;
                  color: #7b8fa5;
                }
              }
            }
          }
          /deep/ .ivu-collapse-content {
            @include pd(0, 20px);
            margin-bottom: 10px;
            border: 1px solid #eaeff5;
            border-top: none;
            .ivu-collapse-content-box {
              @include pd(0);
              .body-content {
                .body-top {
                  border-bottom: 1px solid #eaeff5;
                  & > div {
                    display: flex;
                    margin-bottom: 15px;
                    div {
                      width: 33%;
                      color: #aeb9c6;
                      span {
                        color: #7b8fa5;
                      }
                    }
                  }
                }
                .body-bottom {
                  .title {
                    line-height: 54px;
                    display: flex;
                    justify-content: space-between;
                    span {
                      &:nth-child(1) {
                        font-weight: 600;
                        font-size: 16px;
                        color: #445f87;
                      }
                      &:nth-child(2) {
                        color: #3880ea;
                        position: relative;
                        cursor: pointer;
                        &::before {
                          content: "";
                          display: inline-block;
                          @include sprite(-143px, -341px, 14px, 14px);
                          @include position(absolute, 50%, null, null, -18px);
                          margin-top: -7px;
                        }
                      }
                    }
                  }
                  .body-table {
                    & > div {
                      margin-bottom: 27px;
                      &.th {
                        display: flex;
                        justify-content: space-between;
                        color: #7b8fa5;
                        & > span {
                          display: inline-block;
                          width: 13%;
                          margin-right: 20px;
                          span {
                            color: red;
                          }
                          &:nth-last-child(1) {
                            width: 26px;
                          }
                          &:nth-last-child(2) {
                            flex: 1;
                          }
                        }
                      }
                      &.td {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        /deep/ .ivu-form {
                          width: 100%;
                          display: flex;
                          align-items: center;
                          /deep/ .ivu-form-item {
                            width: 13%;
                            margin-right: 20px;
                            margin-bottom: 0;
                            .ivu-form-item-error-tip {
                              padding-top: 0;
                              font-size: 12px;
                            }
                            /deep/ .ivu-form-item-content {
                              .ivu-icon {
                                display: none;
                              }
                            }
                          }
                        }
                        /deep/ .ivu-form :nth-last-child(2) {
                          flex: 0.95;
                        }
                        /deep/ .ivu-select:nth-child(1) {
                          width: 100%;
                        }
                        /deep/ .ivu-select {
                          width: 13%;
                          margin-right: 20px;
                          /deep/ .ivu-select-selection {
                            @include l-height(46px);
                            border-radius: 3px;
                            /deep/ .ivu-select-selected-value {
                              // padding-left: 12px;
                              line-height: 46px;
                              height: 46px;
                            }
                            .ivu-select-placeholder {
                              @include l-height(46px);
                            }
                            .ivu-select-arrow {
                              margin-top: -7px;
                            }
                          }
                        }
                        /deep/ .ivu-input-wrapper {
                          // width: 13%;
                          width: 100%;
                          margin-right: 20px;
                          margin-bottom: 0;
                          .ivu-input {
                            border-radius: 3px;
                            height: 46px;
                          }
                          &:nth-last-child(2) {
                            flex: 1;
                          }
                        }
                        .delete {
                          @include wh(26px);
                          @include sprite(-255px, -336px);
                          cursor: pointer;
                          &:hover {
                            @include sprite(-209px, -336px);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      .ivu-btn-primary {
        @include wh(90px, 46px);
        margin-top: 20px;
        border-radius: 3px;
        background-image: linear-gradient(to right, #37a0f6, #387ee9);
      }
    }
  }
}
/deep/ .ivu-modal-content {
  border-radius: 3px !important;
  /deep/ .ivu-modal-body {
    padding: 50px 0 0;
    h3 {
      @include f-sc(24px, #445f87);
      text-align: center;
    }
    .detail-content {
      display: flex;
      justify-content: space-between;
      div {
        width: 50%;
        height: 186px;
        margin: 40px 0;
        padding: 0 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        p {
          display: flex;
          justify-content: space-between;
          color: #7b8fa5;
        }
      }
      .detail-content-l {
        border-right: 1px solid #eaeff5;
      }
    }
  }
}
/deep/ .main-content ::-webkit-scrollbar {
  //隐藏所有纵向滚动条
  display: none;
}
</style>

<template>
  <div class="content">
    <header class="header">
      <div class="header-tab">
        <span>Apply</span>
      </div>
      <span class="return"
            @click="$router.go(-1)">
        <Icon type="ios-arrow-round-back" />Return
      </span>
    </header>
    <div class="main">
      <div class="main-header">
        <Alert banner
               closable
               type="warning">
          <p>● Please fill in more information regarding the switch so that we can better serve you.</p>
          <p>● We’re sorry that the serivce of changing vendor is off now.</p>
        </Alert>
      </div>
      <div class="main-content">
        <span>Application Information</span>
        <Collapse v-model="openDdefault"
                  accordion>
          <Panel v-for="(item,i) in orderInfo.orderProducts"
                 :key="i"
                 :name="`${i}`">
            <div class="header-content">
              <div>Description：<span>{{item.proName}}</span> </div>
            </div>
            <div slot="content"
                 class="body-content">
              <div class="body-top">
                <div>
                  <div>Product ID：<span>#{{item.proId}}</span></div>
                  <div>P/N：<span>{{item.proModel}}</span></div>
                  <div>Qty：<span>{{item.proQty}}</span></div>
                </div>
                <div v-if="!orderInfo.isformFail==='applyAgain'">
                  <div>Wevelength：<span>{{item.proDetails.Wavelength}}</span></div>
                  <div>Max Cable Distance：<span>{{item.proDetails['Max Cable Distance']}}</span></div>
                  <div>Interface：<span>{{item.proDetails.Interface}}</span></div>
                </div>
                <div v-else>
                  <div>Wevelength：<span>{{item.proWavelength}}</span></div>
                  <div>Max Cable Distance：<span>{{item.proMaxCableDistance}}</span></div>
                  <div>Interface：<span>{{item.proInterface}}</span></div>
                </div>
              </div>
              <div class="body-bottom">
                <div class="title"><span>Configuration Details</span><span @click="addApplyForm(i,item)">Add</span></div>
                <div class="body-table">
                  <div class="th">
                    <span>Compatspanble brands<span>*</span></span>
                    <span v-show="formData.applyWcPros[i].isShowBrandInput">brands<span>*</span></span>
                    <span>Vendor Name<span>*</span></span>
                    <span>P/N<span>*</span></span>
                    <span>S/N<span>*</span></span>
                    <span>Qty<span>*</span></span>
                    <span>Switch Information ( P/N,OS,Version )</span>
                    <span>Action</span>
                  </div>
                  <div class="td"
                       v-for="(formDataItem,applyWcProsIndex) in formData.applyWcPros[i].applyBins"
                       :key="applyWcProsIndex">
                    <Form ref="form"
                          :model="formData.applyWcPros[i]">
                      <FormItem :prop="'applyBins.' + applyWcProsIndex + '.brand'"
                                :rules="[{ required: true, message:'Please choose compatible brand', trigger: 'change' }]">
                        <Select filterable
                                v-model="formDataItem.brand"
                                placeholder="Please Select"
                                @on-change="showBrands($event,i)">
                          <Option v-for="(compatibleTypeItem,compatibleTypeIndex) in compatibleType"
                                  :value="compatibleTypeItem.value"
                                  :key="compatibleTypeIndex">{{compatibleTypeItem.value}}</Option>
                        </Select>
                      </FormItem>
                      <FormItem :prop="'applyBins.' + applyWcProsIndex + '.compatibleTypeInput'"
                                :rules="[
                                  { required: true, message:'Please choose compatible brand.', trigger: 'blur' },
                                  { type: 'string', max: 16, message: 'Compatible Brand is limilited to 16 characters.', trigger: 'blur' }
                                ]"
                                v-if="formDataItem.brand === 'other'">
                        <Input v-model="formDataItem.compatibleTypeInput"
                               placeholder="Please Filling" />
                      </FormItem>
                      <Select v-model="formDataItem.proBus">
                        <Option value="FS">FS</Option>
                        <Option value="OEM">OEM</Option>
                      </Select>
                      <FormItem :prop="'applyBins.' + applyWcProsIndex + '.proModel'"
                                :rules="[{ required: true, message: 'P/N is limilited to 16 characters.', trigger: 'change' },
                                  { type: 'string', max: 16, message: 'P/N is limilited to 16 characters.', trigger: 'change' },
                                  {pattern: /^[\dA-Za-z-+]+[\dA-Za-z-+\s]*$/, message: 'rule.pnRegExp', trigger: 'change'}]">
                        <Input v-model="formDataItem.proModel"
                               placeholder="Please Filling" />
                      </FormItem>
                      <FormItem :prop="'applyBins.' + applyWcProsIndex + '.serialNumber'"
                                :rules="[
                                { required: true, message: 'Please Fill SN', trigger: 'change'},
                                { type: 'string', max: 16, message: 'S/N is limilited to 16 characters.', trigger: 'change' }]">
                        <Input v-model="formDataItem.serialNumber"
                               placeholder="Please filling" />
                      </FormItem>
                      <FormItem :prop="'applyBins.' + applyWcProsIndex + '.proQty'"
                                :rules="[
                                    { required: true,validator: validateQty, trigger: 'change'}]">
                        <Input type="text"
                               v-model="formDataItem.proQty"
                               placeholder="Filling" />
                      </FormItem>
                      <Input v-model="formDataItem.Switch"
                             placeholder="Please Filling" />
                      <div class="delete"
                           @click="delApply(i,applyWcProsIndex)"></div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </Panel>
        </Collapse>
        <span>Application Note</span>
        <Input v-model="formData.applyRemarks"
               type="textarea"
               :rows="3"
               placeholder="Please Input" />
        <Button type="primary"
                :loading="submitLoading"
                @click="submitApply">Submit</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { applyservice, getDetail } from "@service/applyWriteCode/applyWriteCode"
export default {
  components: {
  },
  computed: {
    ...mapGetters(['compatibleType', 'userInfo']),
  },
  data () {
    return {
      submitLoading: false,
      openDdefault: ['0'],
      orderInfo: {},
      formData: {
        applyRemarks: '',
        applyWcPros: []
      },
      isShowNotice: false,
    }
  },
  methods: {
    ok () { },
    cancel () { },
    async submitApply () {
      let isValid = true;// 标识，是否验证通过
      for (let i = 0; i < this.$refs['form'].length; i++) {
        this.$refs['form'][i].validate((valid) => {
          console.log(valid)
          if (!valid) isValid = false;// 验证失败
        });
      }
      if (this.isShowNotice) {
        this.$Notice.error({
          title: 'Error tip',
          desc: 'Products you apply for coding should be less than products in your order.'
        });
        return
      }
      if (!isValid) return
      // if (window) {
      //   console.log(213)
      //   return
      // }
      // 需要兼容品牌信息
      this.formData.applyWcPros.forEach(item => {
        item.applyBins.forEach(item2 => {
          // item2.compatibleType = item2.brand;
          if (item2.brand === 'other') {
            item2.compatibleType = item2.compatibleTypeInput;
          } else {
            item2.compatibleType = item2.brand;
          }
        });
      });
      // 配置参数
      // 表单信息及用户信息
      this.formData.orderNumber = this.orderInfo.orderNumber;
      this.formData.orderDate = this.orderInfo.orderDate;
      console.log(this.orderInfo);
      this.formData.OrderAdminEmail = this.orderInfo.orderAdminEmail;
      this.formData.orderAdmin = this.userInfo.adminName;
      this.formData.applyFsuserId = this.userInfo.userNo;
      this.formData.fsUserLevel = this.userInfo.userLevel;
      this.formData.emailAddress = this.userInfo.emailAddress;
      // 序列化参数
      let payload = this._hyTool.deepCopy(this.formData);
      // 移除applyWcPros数组
      delete payload.applyWcPros;
      this.formData.applyWcPros.forEach((item, index) => {
        if (item.applyBins.length > 0) {
          for (let i in item) {
            if (i !== 'applyBins') {
              payload['applyWcPros[' + index + '].' + i] = item[i];
            }
          }
          item.applyBins.forEach((item2, index2) => {
            for (let j in item2) {
              payload['applyWcPros[' + index + '].applyBins[' + index2 + '].' + j] = item2[j];
            }
          });
        }
      });
      // 提交申请表单
      try {
        this.submitLoading = true;
        const result = await applyservice(payload);
        if (result.code === 1 && result.success) {
          this.submitLoading = false;
          this.$Message.success({
            content: "Submit succeeeded",
            duration: 3
          });
          this.$router.back();
        }
      } catch (error) {
        this.submitLoading = false;
        // this.$Message.error({
        //   content: 'Products you apply coding should be less than products in you order',
        //   duration: 3
        // });
      }
    },
    addApplyForm (index) {
      this.formData.applyWcPros[index].applyBins.length < 3 && this.formData.applyWcPros[index].applyBins.push({ proBus: 'FS' });
    },
    delApply (index, applyWcProsIndex) {
      this.formData.applyWcPros[index].applyBins.length > 1 && this.formData.applyWcPros[index].applyBins.splice(applyWcProsIndex, 1);
    },
    async _initOrder () {
      let orderInfo = JSON.parse(this._hyTool.getStore('orderInfo'));
      this.orderInfo = orderInfo;
      if (this.orderInfo.isformFail === "applyAgain") {
        let res = await getDetail({ id: this.orderInfo.rowId })
        orderInfo = {}
        orderInfo.orderProducts = []
        orderInfo.orderNumber = res.obj.orderNumber;
        orderInfo.orderDate = res.obj.orderDate;
        orderInfo.orderAdminEmail = res.obj.emailAddress;
        orderInfo.orderProducts.push(res.obj.applyWcPros[0])
        this._hyTool.setStore('orderInfo', JSON.stringify(orderInfo));
        orderInfo = JSON.parse(this._hyTool.getStore('orderInfo'));
        this.orderInfo = orderInfo;
      }
      orderInfo.orderProducts.forEach((item) => {
        // 合并详情对象
        item = Object.assign(item, item.proDetails);
        // 创建兼容项,配置默认参数
        this.formData.applyWcPros.push({
          isAlert: false,
          applyBins: [{ proBus: 'FS', proModel: item.proModel }],
          proId: item.proId,
          proName: item.proName,
          proModel: item.proModel,
          proQty: item.proQty,
          proWaveLength: item.Wavelength || item.proWaveLength,
          proMaxCableDistance: item['Max Cable Distance'] || item.proMaxCableDistance,
          proInterface: item.Interface || item.proInterface,
          isShowBrandInput: false
        });
      });
    },
    showBrands (val, i) {
      if (val === 'other') {
        this.formData.applyWcPros[i].isShowBrandInput = true
      } else {
        this.formData.applyWcPros[i].isShowBrandInput = false
      }
    },
    // 验证申请数量是否超过购买数量
    validateQty (rule, val, callback) {
      if (!/^[0-9]*$/.test(val)) {
        return callback(new Error('Please enter an integer greater than 1'))
      }
      if (val === '') {
        callback(new Error('Please Fill Qty'));
      } else {
        let itemCount = 0;
        this.isShowNotice = false;
        let buyQty = this.formData.applyWcPros[+(this.openDdefault[0])].proQty;
        // this.formData.applyWcPros[+(this.openDdefault[0])].isAlert = false;
        this.formData.applyWcPros[+(this.openDdefault[0])].applyBins.forEach(item => {
          if (item.proQty < 1) {
            return callback(new Error('Please enter an integer greater than 1'))
          }
          // 当前配置总数
          itemCount += +(item.proQty === undefined ? 0 : item.proQty);
        });
        // 判断是否超出购买数量并提示
        if (itemCount > buyQty) {
          // this.formData.applyWcPros[+(this.openDdefault[0])].isAlert = true;
          callback(new Error('Products you apply for coding should be less than products in your order.'));
          this.isShowNotice = true;
        }
        // if (this.formData.applyWcPros[+(this.openDdefault[0])].isAlert) {
        // callback(new Error('Products you apply for coding should be less than products in your order.'));
        // }
      }
    }
  },
  created () {
    this._initOrder();
  }
}

</script>