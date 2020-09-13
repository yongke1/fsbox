<style lang='scss' scoped>
@import "~@assets/styles/_mixins";

.content {
  @include pd(0, 20px);
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
  .main {
    min-height: 650px;
    .main-header {
      display: flex;
      justify-content: flex-end;
      margin-top: 30px;
      &.tab {
        justify-content: flex-end;
      }
      .ivu-btn {
        height: 46px;
        border-radius: 3px;
        background-image: linear-gradient(to right, #37a0f6, #387ee9);
      }
      .search {
        display: flex;
        position: relative;
        /deep/ .ivu-select-selection {
          border-radius: 0px;
          height: 46px;
          border-right: none;
          .ivu-select-selected-value {
            @include l-height(46px);
            color: #445f87;
          }
        }
        /deep/ .ivu-input {
          border-radius: 0px;
          height: 46px;
        }
        .search-icon {
          @include position(absolute, 50%, 10px);
          margin-top: -8px;
          display: inline-block;
          cursor: pointer;
          @include sprite(-316px, -90px, 16px, 16px);
        }
      }
    }
    .main-content {
      margin-top: 20px;
      /deep/ .ivu-collapse {
        background: #fff;
        border: none;
        height: 527px;
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
        .ivu-collapse-item {
          border: none;
          y &.ivu-collapse-item-active {
            /deep/ .ivu-collapse-header {
              margin-bottom: 0px;
              border-bottom: none;
            }
            /deep/ .ivu-collapse-content {
              .ivu-table {
                border-top: none;
              }
            }
          }
          /deep/ .ivu-collapse-header {
            @include l-height(52px);
            @include f-sc(14px, #7b8fa5);
            border: 1px solid #eaeff5;
            margin-bottom: 10px;
            i {
              @include position(absolute, 50%, 20px);
              transform: rotate(90deg);
              margin-top: -7px;
            }
            span {
              margin-right: 57px;
            }
          }
          /deep/ .ivu-collapse-content {
            @include pd(0);
            margin-bottom: 10px;
            .ivu-collapse-content-box {
              @include pd(0);
            }
            .ivu-table {
              border: 1px solid #eaeff5;
              // border-bottom: none;
              padding: 0 20px;
              &::before {
                height: 0;
              }
              th,
              td {
                height: 50px;
                background: #fff;
              }
              th {
                @include f-w(normal);
                @include f-sc(14px, #7b8fa5);
                // border-top: 1px solid #e8eaec;
              }
              td {
                @include f-sc(14px, #445f87);
              }
              tr {
                &:nth-last-child(1) {
                  td {
                    border: none;
                  }
                }
              }
              .ivu-table-overflowX {
                overflow: hidden;
              }
              .ivu-checkbox-inner {
                border: 2px solid #a5bad0;
              }
            }
          }
          &.ivu-collapse-item-active {
            /deep/ i {
              transform: rotate(270deg);
            }
          }
        }
      }
      /deep/ .tb-apply {
        /deep/ .ivu-table-header {
          th {
            background: #fff;
            color: #7b8fa5;
            font-weight: normal;
          }
        }
        /deep/ td {
          color: #445f87;
        }
      }
      .no-data {
        height: 520px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {
          font-size: 16px;
          color: #7b8fa5;
        }
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
  <div class="content">
    <header class="header">
      <div class="header-tab">
        <span>After sales configuration</span>
      </div>
      <span class="return"
            @click="$router.go(-1)">
        <Icon type="ios-arrow-round-back" />Return
      </span>
    </header>
    <div class="main">
      <div :class="['main-header',{'tab':tabIndex===1}]">
        <div class="search">
          <Input v-model="selContent"
                 style="width: 320px"
                 @keyup.enter.native="_getList(1)"
                 placeholder="Order NO"></Input>
          <span class="search-icon"
                @click="_getList(1)"></span>

        </div>
      </div>
      <div class="main-content">
        <Collapse v-model="openDefault"
                  v-if="list.length>0"
                  accordion>
          <Panel v-for="(item,i) in list"
                 :key="i"
                 :name="`${i}`">
            <span>Order No: {{item.orderNumber}}</span>
            <span>After sales NO: {{item.saleNumber}}</span>
            <div slot="content"
                 class="scroll">
              <Table ref="selection"
                     :columns="orderColumns"
                     :data="item.vAfterSaleCodingBins"
                     no-data-text="No Data">
              </Table>
            </div>
          </Panel>
        </Collapse>
        <div v-else
             class="no-data">
          <img src="~@assets/images/icon/no-data.png"
               alt="">
          <span>No data</span>
        </div>
        <page-services :totalElement="pageParam.totalElement"
                       @current-change="currentChange"></page-services>
      </div>
    </div>
    <modal v-model="isOpenWrite"
           :width="1280"
           :footer-hide="true"
           :mask-closable="false"
           :closable="isClose"
           class-name="vertical-center-modal"
           @on-ok="ok"
           @on-cancel="cancel">
      <coding :CodeType="3"
              :data="modalData"
              :chat="chat"
              @close-icon="closeIcon"
              :key="refreshData"></coding>
    </modal>
    <my-spin :loading="isloading"></my-spin>
    <!-- 禁止写码提示 -->
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
import pageServices from '@components/pageServices/pageServices';
import { getAfterSaleList } from "@/service/applyWriteCode/applyWriteCode"
import { mapGetters, mapState } from 'vuex';
import coding from "@components/coding/coding"
import fsModal from '@components/modal/modals';
import mixin from "@assets/js/mixin/mixin";
export default {
  components: {
    pageServices,
    coding,
    fsModal
  },
  props: ['chat'],
  mixins: [mixin],
  computed: {
    ...mapGetters(['userInfo']),
    ...mapState([
      'isDriveStart',
      'socketInfoUsb',
      'socketInfoLight',
      'socketInfoTry',
      'socketInfoWrite',
    ])
  },
  data () {
    return {
      isClose: true,
      tabIndex: 0,
      selType: 0,
      selContent: '',
      selOptions: [
        { label: 'Application No', value: 0 },
        { label: 'Order No', value: 1 },
        { label: 'S/N', value: 2 }
      ],
      //默认展开
      openDefault: '0',
      //title数据
      orderColumns: [
        {
          type: 'index',
          width: 60,
          align: 'center'
        },
        {
          title: 'P/N',
          key: 'pn'
        },
        {
          title: 'Brand',
          key: 'brand',
        },
        {
          title: 'S/N',
          key: 'sn'
        },
        {
          title: 'Attribute1',
          key: 'attributes1'
        },
        {
          title: 'Attribute2',
          key: 'attributes2'
        },
        {
          title: 'Action',
          render: (h, item) => {
            return h('span', {
              style: {
                color: '#3880EA',
                cursor: 'pointer'
              },
              on: {
                click: () => {
                  // 检测不通过禁止写码
                  if (!JSON.parse(this._hyTool.getStore("isCanWrite"))) return this.isCanWriteCode = true;
                  this.isOpenWrite = true
                  this.modalData = item.row
                  this.chat.then((result) => {
                    result.server.send('GetInfo', '0');
                  });
                }
              }
            }, 'Configuration');
          },
        }
      ],
      applyColumns: [
        {
          title: 'Order No',
          key: 'orderNo'
        },
        {
          title: 'Application No',
          key: 'applicationNo'
        },
        {
          title: 'Application Note',
          key: 'applicationNote'
        },
        {
          title: 'Application/Audit Date',
          key: 'auditDate'
        },
        {
          title: 'Status',
          key: 'status'
        },
        {
          title: 'Action',
          render: (h) => {
            return h('span', {
              style: {
                color: '#3880EA',
                cursor: 'pointer'
              },
              on: {
                click: () => {
                  this.$router.push({ name: 'main.applyDetail' })
                }
              }
            }, 'Detail');
          }
        }
      ],
      list: {},
      //分页参数
      pageParam: {},
      isloading: false,
      //是否打开写码modal
      isOpenWrite: false,
      modalData: {},
      refreshData: '',
      isCanWriteCode: false
    }
  },
  created () {
    this._getList()
  },
  mounted () {
  },
  methods: {
    handleContact () {
      // 打开聊天界面
      window.LC_API.open_chat_window();
      this.isCanWriteCode = false;
    },
    closeIcon (flag) {
      this.isClose = flag;
    },
    applyCode () {
      this.$router.push({ name: 'main.apply' });
      this.$Message.warning('Please check the order first');
    },
    ok () {

    },
    cancel () {
      this.refreshModal();
      // this.reset_server()
    },
    _getList (page) {
      // 查询列表的参数
      let listParam = {
        current: page ? page : 1,
        size: 10,
        orderNumber: this.selContent,
        emailAddress: window.atob(this.userInfo.emailAddress)
      };
      this.isloading = true;
      getAfterSaleList(listParam).then(res => {
        this.list = res.obj.records;
        this.pageParam.totalElement = res.obj.total;
        this.isloading = false;
        this.openDefault = '0'
      });
    },
    currentChange (val) {
      this._getList(val)
    },
    // reset_server () {
    //   this.status.isConnecDrive = false
    //   this.status.isWriteSuccess = false
    //   this.status.isWriteFail = false
    //   this.status.isInsertUsb = false
    //   this.status.isInsertLight = false
    //   this.status.isWriteingCode = false
    //   this.connStatusNum = 0
    //   this.modalData = ''
    // },
    //重绘modal达到重置状态的效果
    refreshModal () {
      this.refreshData = Date.now()
    }
  },
  watch: {
    $route (to) {
      this.tabIndex = to.query.tabIndex;
    }
  }
}

</script>