<style lang='scss' scoped>
@import "~@assets/styles/_mixins";

.content {
  @include pd(0, 40px);
  padding-bottom: 40px;
  .header {
    height: 83px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #eaeff5;
    // position: relative;
    .link {
      a {
        margin-right: 18px;
        color: #3880ea;
        position: relative;
        &::after {
          content: "";
          display: inline-block;
          @include sprite(-321px, -50px, 6px, 10px);
          position: absolute;
          right: -12px;
          top: 50%;
          margin-top: -5px;
        }
      }
    }
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
  .main {
    min-height: 637px;
    .main-header {
      margin-top: 30px;
      padding: 20px;
      border: 1px solid #eaeff5;
      height: 110px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      & > div {
        display: flex;
        justify-content: space-between;
        div {
          color: #7b8fa5;
          span {
            color: #445f87;
            &.bg {
              display: inline-block;
              border-radius: 3px;
              // width: 50px;
              padding: 1px 5px;
              line-height: 18px;
              text-align: center;
            }
            &.success {
              background: #e2f8f3;
              color: #32d7b0;
            }
            &.error {
              background: #ffe6e6;
              color: #f66767;
            }
            &.warn {
              background: #faede5;
              color: #ff9c5d;
            }
          }
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
        max-height: 500px;
        overflow-y: auto;
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
                  .ivu-table {
                    &::before {
                      height: 0;
                    }
                    /deep/ th {
                      background: #fff;
                      color: #7b8fa5;
                      height: 53px;
                      font-weight: normal;
                    }
                    /deep/ td {
                      color: #445f87;
                    }
                    /deep/ .ivu-table-row {
                      &:nth-last-child(1) {
                        td {
                          border-bottom: none;
                        }
                      }
                    }
                  }
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
                      margin-bottom: 20px;
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
                        /deep/ .ivu-select {
                          width: 13%;
                          margin-right: 20px;
                          /deep/ .ivu-select-selection {
                            @include l-height(46px);
                            border-radius: 3px;
                            /deep/ .ivu-select-selected-value {
                              // padding-left: 12px;
                              // line-height: 46px;
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
                          width: 13%;
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
</style>

<template>
  <div class="content">
    <header class="header">
      <span class="link"><a @click="$router.push({name:'main.order',query:{tabIndex:1}})">My Application</a>Detail</span>
      <div class="header-tab">
        <span>Detail</span>
      </div>
      <span class="return"
            @click="$router.go(-1)">
        <Icon type="ios-arrow-round-back" />Return
      </span>
    </header>
    <div class="main">
      <div class="main-header">
        <div>
          <div>Application No：<span>{{ordersInfo.applyNo}}</span></div>
          <div>Order No：<span>{{ordersInfo.orderNumber}}</span></div>
          <div>Audit Status： <span class="bg"
                  :class="ordersInfo.checkStatus==='0'||ordersInfo.checkStatus==='3'?'warn':ordersInfo.checkStatus==='1'?'success':'error'">{{statusFormat}}</span></div>
        </div>
        <div>
          <div>Application Date：<span>{{ordersInfo.orderDate}}</span></div>
          <div>Audit Date：<span>{{ordersInfo.createDate}}</span></div>
        </div>
        <div>
          <div>Application Note：<span>{{ordersInfo.applyRemarks}}</span></div>
        </div>
      </div>
      <div class="main-content">
        <span>Configuration Details</span>
        <Collapse v-model="openDefault"
                  accordion>
          <Panel v-for="(item,i) in ordersInfo.applyWcPros"
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
                <div>
                  <div>Wevelength：<span>{{item.proWaveLength}}</span></div>
                  <div>Max Cable Distance：<span>{{item.proMaxCableDistance}}</span></div>
                  <div>Interface：<span>{{item.proInterface}}</span></div>
                </div>
              </div>
              <div class="body-bottom">
                <Table disabled-hover
                       :columns="columns"
                       :data="item.applyBins"></Table>
              </div>
            </div>
          </Panel>
        </Collapse>
      </div>
    </div>
    <!-- 详情弹框 -->
    <Modal v-model="isShowDetail"
           :width="960"
           :footer-hide="true"
           class-name="vertical-center-modal"
           @on-ok="ok"
           @on-cancel="cancel">
      <h3>Details</h3>
      <div class="detail-content">
        <div class="detail-content-l">
          <p><span>P/N</span><span>Q28-AOxx</span></p>
          <p><span>Product ID</span><span>Product ID</span></p>
          <p><span>Interface</span><span>--</span></p>
          <p><span>Max Cable Distance</span><span>--</span></p>
        </div>
        <div class="detail-content-r">
          <p><span>Vendor Name</span><span>001X</span></p>
          <p><span>Wavelength</span><span>--</span></p>
          <p><span>Brand</span><span>Huawei</span></p>
          <p><span>S/N</span><span>--</span></p>
        </div>
      </div>
    </Modal>
    <my-spin :loading="isloading"></my-spin>
  </div>
</template>

<script>
import { getDetail } from '@/service/applyWriteCode/applyWriteCode';
export default {
  components: {
  },
  computed: {
    statusFormat () {
      // 过滤订单状态
      switch (this.ordersInfo.checkStatus) {
        case '0':
        case '3':
          return 'unaudited'
        case '1':
          return 'pass'
        case '2':
          return 'fail'
        case '5':
          return 'cancel'
      }
      return '--'
    }
  },
  data () {
    return {
      value6: '',
      applyForm: [
        { brand: '', vendorName: '', pn: '', sn: '', qty: '', switch: '' }
      ],
      isShowDetail: false,
      tabIndex: 0,
      selType: 0,
      selContent: '',
      selOptions: [
        { label: 'Application No', value: 0 },
        { label: 'Order No', value: 1 },
        { label: 'S/N', value: 2 }
      ],
      openDefault: ['0'],
      columns: [
        {
          title: 'Brand',
          key: 'compatibleType'
        },
        {
          title: 'Vendor Name',
          key: 'proBus'
        },
        {
          title: 'P/N',
          key: 'proModel'
        },
        {
          title: 'S/N',
          key: 'serialNumber'
        },
        {
          title: 'Qty',
          key: 'proQty'
        },
        {
          title: 'Bin',
          render: (h, params) => {
            let text = params.row.binNames || '';
            let textArray = [];
            if (text !== '') {
              if (text.indexOf(',') > -1) {
                textArray = text.split(',');
              } else if (text.indexOf(',') === -1) {
                textArray.push(text);
              }
            }
            let btnArry = [];
            // 生产bin文件
            if (textArray.length > 0) {
              for (const item of textArray) {
                btnArry.push(h('span', {
                  style: {
                    color: '#59cca7'
                  }
                }, item));
              }
            }
            return h('div', { style: { margin: '5px 0' } }, btnArry);
          }
        }
      ],
      data: [
        {
          brand: 'Huawei',
          vendorName: 'FS',
          pn: 'SFP28-25GSR-85',
          sn: 'A00010010',
          qty: '4',
          bin: 'A0010010.bin, A0010010.bin, A0010010.bin, A0010010.bin, A0010010.bin'
        },
        {
          brand: 'Huawei',
          vendorName: 'FS',
          pn: 'SFP28-25GSR-85',
          sn: 'A00010010',
          qty: '4',
          bin: 'A0010010.bin, A0010010.bin, A0010010.bin, A0010010.bin, A0010010.bin'
        },
        {
          brand: 'Huawei',
          vendorName: 'FS',
          pn: 'SFP28-25GSR-85',
          sn: 'A00010010',
          qty: '4',
          bin: 'A0010010.bin, A0010010.bin, A0010010.bin, A0010010.bin, A0010010.bin'
        }
      ],
      //订单信息
      ordersInfo: {},
      //加载loding
      isloading: false
    }
  },
  methods: {
    ok () {

    },
    cancel () {

    },
    submitApply () {

    },
    addApplyForm () {
      this.applyForm.push(
        { brand: '', vendorName: '', pn: '', sn: '', qty: '', switch: '' }
      )
    },
    delApply (index) {
      this.applyForm.length > 1 && this.applyForm.splice(index, 1);
    },
    async _initOrder () {
      let id = this.$route.query.id;
      // 获取订单数据
      this.isloading = true
      const result = await getDetail({ id: id });
      this.ordersInfo = result.obj;
      this.isloading = false
    }
  },
  created () {
    // 初始化多个表单
    this._initOrder();
  }
}

</script>