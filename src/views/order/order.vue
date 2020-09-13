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
        color: #7b8fa5;
        font-weight: 600;
        cursor: pointer;
        &:nth-child(1) {
          margin-right: 30px;
        }
        &.active {
          font-weight: bold;
          color: #445f87;
        }
      }
      .active-box {
        @include wh(40px, 0);
        border-width: 0 3px 6px 3px;
        border-style: none solid solid;
        border-color: transparent transparent #37a0f6;
        // background-image: linear-gradient(to right, #37a0f6, #387ee9);
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
      justify-content: space-between;
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
        // user-select: none;
        .ivu-collapse-item {
          border: none;
          &.ivu-collapse-item-active {
            /deep/ i {
              transform: rotate(270deg);
            }
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
                border-top: 1px solid #e8eaec;
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
        }
        .no-data {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
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
</style>

<template>
  <div class="content">
    <header class="header">
      <div class="header-tab">
        <span :class="{'active':tabIndex===0}"
              @click="$router.push({name:'main.order',query:{tabIndex:0}})">My Order</span>
        <span :class="{'active':tabIndex===1}"
              @click="$router.push({name:'main.order',query:{tabIndex:1}})">My Application</span>
        <div :class="['active-box',{'first':tabIndex===0,'second':tabIndex===1}]"></div>
      </div>
      <span class="return"
            @click="$router.go(-1)">
        <Icon type="ios-arrow-round-back" />Return
      </span>
    </header>
    <div class="main">
      <div :class="['main-header',{'tab':tabIndex===1}]">
        <Button v-if="tabIndex===0"
                type="primary"
                @click="applyCode">Apply</Button>
        <div class="search">
          <Select v-if="tabIndex===0"
                  v-model="selType"
                  placeholder="Please filling"
                  style="width:240px">
            <Option v-for="item in selOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </Option>
          </Select>
          <Input v-model="selContent"
                 style="width: 320px"
                 @keyup.enter.native="_getList(tabIndex,pageParam.current)"
                 :placeholder="selType===0?'Please filling Order No':selType===1?'Please filling Product Id':'Please filling P/N'"></Input>
          <span class="search-icon"
                @click="_getList(tabIndex,pageParam.current)"></span>

        </div>
      </div>
      <div class="main-content">
        <div v-if="list.length===0"
             class="no-data">
          <img src="~@assets/images/icon/no-data.png"
               alt="">
          <span>No data</span>
        </div>
        <Collapse v-else-if="tabIndex===0"
                  v-model="showPanelVal"
                  accordion>
          <div class="no-data"
               v-if="tabIndex===0&&list.length===0">
            no data
          </div>
          <Panel v-for="(item,i) in list"
                 :key="i"
                 :name="`${i}`">
            <span>Order No/Date: {{item.orderNumber}} / {{item.orderDate}}</span>
            <div slot="content"
                 class="scroll">
              <Table ref="selection"
                     :columns="orderColumns"
                     :data="item.orderProducts"
                     @on-select="selOnce"
                     @on-select-all="selAll"
                     @on-select-cancel="cancelOnce"
                     @on-selection-change="handleSelectionChange($event, i)">
              </Table>
            </div>
          </Panel>
        </Collapse>
        <Table v-else
               disabled-hover
               class="tb-apply"
               :columns="applyColumns"
               no-data-text="No Data"
               :data="list"></Table>
        <page-services :key="pageRender"
                       :totalElement="pageParam.totalElement"
                       @current-change="currentChange"></page-services>
      </div>
    </div>
    <my-spin :loading='isloading'></my-spin>
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
          <p><span>P/N</span><span>{{DetailsInfo.proModel}}</span></p>
          <p><span>Product ID</span><span>{{DetailsInfo.proId}}</span></p>
          <p><span>Interface</span><span>{{DetailsInfo.proDetails.Interface}}</span></p>
          <p><span>Max Cable Distance</span>{{DetailsInfo.proDetails['Max Cable Distance']}}</p>
        </div>
        <div class="detail-content-r">
          <p><span>Vendor Name</span><span>{{DetailsInfo.proDetails['Vendor Name']}}</span></p>
          <p><span>Wavelength</span><span>{{DetailsInfo.proDetails.Wavelength}}</span></p>
          <p><span>Brand</span><span>{{DetailsInfo.proCompatible}}</span></p>
          <p><span>S/N</span><span>{{DetailsInfo.proSeriesNumber}}</span></p>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import pageServices from '@components/pageServices/pageServices';
import { mapGetters } from 'vuex';
import { getProList, allParam, CancelLication } from "@service/applyWriteCode/applyWriteCode"
export default {
  components: {
    pageServices
  },
  computed: {
    ...mapGetters(['userInfo']),
  },
  data () {
    return {
      pageRender: 0,
      isShowDetail: false,
      tabIndex: 0,
      selType: 0,
      selContent: '',
      //查询类型
      selOptions: [
        { label: 'Order No', value: 0 },
        { label: 'Product Id', value: 1 },
        { label: 'P/N', value: 2 }
      ],
      //我的订单title绑定
      orderColumns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: 'Product ID',
          key: 'proId'
        },
        {
          title: 'Description',
          key: 'proName',
          width: 500
        },
        {
          title: 'P/N',
          key: 'proModel',
        },
        {
          title: 'Qty',
          key: 'proQty'
        },
        {
          title: 'Brand',
          key: 'proCompatible',
          render: (h, params) => {
            let text = '';
            params.row.proCompatible ? text = params.row.proCompatible : text = '--';
            return h('div', text);
          }
        },
        {
          title: 'Vendor Name',
          key: 'proFactory',
          width: 130
        },
        {
          title: 'Action',
          key: 'action',
          render: (h, params) => {
            return h('span', {
              style: {
                color: '#3880EA',
                cursor: 'pointer'
              },
              on: {
                click: () => {
                  this.isShowDetail = true;
                  this.DetailsInfo = params.row
                }
              }
            }, 'Details');
          },
        }
      ],
      //我的申请title绑定
      applyColumns: [
        {
          type: 'index',
          width: 60,
          align: 'center'
        },
        {
          title: 'Order No',
          key: 'orderNumber'
        },
        {
          title: 'Application No',
          key: 'applyNo'
        },
        {
          title: 'Application Note',
          key: 'applyRemarks'
        },
        {
          title: 'Application/Audit Date',
          width: 300,
          render: (h, params) => {
            // let timeZone = new Date().getTimezoneOffset();
            // 申请日期
            if (!params.row.date) return false;
            let createDate = params.row.date.createDate || '';
            let checkDate = params.row.date.checkDate || '';
            // let valiEndDate = params.row.date.valiEndDate || '';
            let valiEndDate = '';
            return h('div', {
              style: {
                margin: '17px 0'
              }
            }, [
              h('p', [
                h('span', {
                  style: {
                    color: '#d1d4db'
                  }
                }, createDate ? '[Application Date]' : ''),
                h('span', createDate)
              ]),
              h('p', [
                h('span', {
                  style: {
                    color: '#d1d4db'
                  }
                }, checkDate ? '[Audit Date]' : ''),
                h('span', checkDate)
              ]),
              h('p', [
                h('span', {
                  style: {
                    color: '#d1d4db'
                  }
                }, valiEndDate ? '[有效日期] ' : ''),
                h('span', valiEndDate)
              ])
            ]);
          }
        },
        {
          title: 'Status',
          width: 150,
          key: 'checkStatus',
          render: (h, params) => {
            const row = params.row;
            const colorArr = ['#f78e4a', '#59cca5', 'red', '#f78e4a', '', 'blue'];
            const textArr = ['Unaudited', 'Pass', 'Fail', 'Unaudited', '', 'Cancel'];
            const color = colorArr[row.checkStatus];
            // const text = row.checkStatus === '0' ? this.$t('status.unaudited') : row.checkStatus === '1' ? this.$t('status.pass') : this.$t('status.fail');
            const text = textArr[row.checkStatus];
            return h('span', {
              style: {
                color: color
              }
            }, text);
          }
        },
        {
          title: 'Action',
          width: 100,
          render: (h, params) => {
            return h('div', {
              style: {
                display: 'flex',
                flexDirection: 'column'
              }
            }, [
              h('span', {
                style: {
                  color: '#3880EA',
                  cursor: 'pointer',
                },
                on: {
                  click: () => {
                    this.$router.push({
                      name: 'main.applyDetail',
                      query: {
                        id: params.row.id,
                        // readStatus: params.row.readStatus,
                        // beforePage: this.pageParam.current
                      }
                    });
                  }
                }
              }, 'Details'),
              h('span', {
                style: { color: '#3880EA', cursor: 'pointer', display: params.row.checkStatus !== '0' ? 'none' : 'block' },
                on: {
                  click: async () => {
                    const res = await CancelLication({
                      Id: params.row.id
                    });
                    if (res.code === 1) {
                      this.$Message.success({
                        content: "cancel success",
                        duration: 3
                      });
                      this.getApplyList(this.pageParam.current);
                    }
                    else if (res.code === -1) {
                      this.$Message.error({
                        content: "cancel success",
                        duration: 3
                      });
                    }
                  }
                }
              }, 'Cancel'),
              h('span', {
                style: { color: '#3880EA', cursor: 'pointer', display: params.row.checkStatus !== '2' ? 'none' : 'block', width: "100px" },
                on: {
                  click: async () => {
                    let orderInfo = {}
                    orderInfo.isformFail = 'applyAgain'
                    orderInfo.rowId = params.row.id
                    this._hyTool.setStore('orderInfo', JSON.stringify(orderInfo));
                    this.$router.push({ name: 'main.apply' });
                  }
                }
              }, 'Apply again')
            ]);
          }
        }
      ],
      //分页参数
      pageParam: {
        totalElement: 0, //总共默认0条
        current: 1, //默认第一页
        size: 10 //默认每页十行
      },
      searchData: {},
      //列表数据
      list: [],
      //手风琴默认展开第一个
      showPanelVal: ["0"],
      //DetailsInfo
      DetailsInfo: {
        proDetails: {}
      },
      //选中的要传给apply的订单
      applyAry: [],
      isloading: false
    }
  },
  created () {
    this.tabIndex = this.$route.query.tabIndex ? parseInt(this.$route.query.tabIndex) : 0;
    this._getList(this.tabIndex)
  },
  methods: {
    applyCode () {
      if (this.applyAry.length === 0) {
        this.$Message.warning('Please check the order first');
        return
      }
      let id = +(this.showPanelVal)
      let orderInfo = this._hyTool.deepCopy(this.list[id]);
      orderInfo.orderProducts = this.applyAry
      orderInfo.isformFail = ''
      this._hyTool.setStore('orderInfo', JSON.stringify(orderInfo));
      this.$router.push({ name: 'main.apply' });
    },
    ok () {

    },
    cancel () {

    },
    //数据初始化
    _getList (page) {
      if (page) this.pageParam.current = page
      this.isloading = true
      switch (page) {
        case 0:
          this.getOrders(page);
          break;
        case 1:
          this.getApplyList(page);
          break;
      }
    },
    //分页切换事件
    currentChange (val) {
      this.pageParam.current = val
      if (this.tabIndex === 0) {
        this.getOrders(val)
      } else {
        this.getApplyList(val)
      }
    },
    //获取订单数据
    async getOrders (page) {
      let payload = {
        current: 1,
        size: 10
      }
      let options = {
        param: {
          token: this.userInfo.token,
          userNo: this.userInfo.userNo,
          size: this.pageParam.size,
          page: page || this.pageParam.current,
        }
      };
      switch (this.selType) {
        case 0: {
          payload.proId = ''
          payload.proModel = ''
          payload.orderNumber = this.selContent
          break;
        }
        case 1: {
          payload.proModel = ''
          payload.orderNumber = ''
          payload.proId = this.selContent
          break;
        }
        case 2: {
          payload.orderNumber = ''
          payload.proId = ''
          payload.proModel = this.selContent
          break
        }
      }
      options.param.search = payload
      const result = await getProList(options);
      if (result.code === -1 || result.code) {
        // this.$Message.error({
        //   content: result.msg,
        //   duration: 3
        // });
        this.isloading = false
        return
      }
      this.isloading = false
      result && (this.pageParam.totalElement = result.data.totalSize);
      // 订单列表处理
      this.list = result.data.orders || [];
    },
    //获取定制数据
    async getApplyList (page) {
      let payload = {
        current: page || this.pageParam.current,
        size: 10,
        fsUserId: this.userInfo.userNo,
        orderNumber: this.selContent
      }
      this.isloading = true
      let result = await allParam(payload);
      if (result.code === -1) {
        // this.$Message.error({
        //   content: result.msg,
        //   duration: 3
        // });
        this.isloading = false
        return
      }
      result && (this.pageParam.totalElement = result.obj.total);
      this.list = result.obj.records || [];
      this.isloading = false
      // 处理时间数据
      result.obj.records.forEach((item) => {
        item.date = {
          checkDate: item.checkDate,
          createDate: item.createDate,
          valiEndDate: item.valiEndDate
        };
      });
    },
    selOnce (res, row) {
      this.unCheck(false)
      let flag = true;
      this.applyAry.forEach(item => {
        item.proId === row.proId && (flag = false);
      });
      flag && this.applyAry.push(row);
      this.beforePaneVal = +(this.showPanelVal[0])
    },
    selAll (rows) {
      this.unCheck(false)
      this.applyAry = []
      rows.forEach(item => {
        this.applyAry.push(item)
      });
    },
    //table 取消选中某一项
    cancelOnce (res, row) {
      this.applyAry.forEach((item, index) => {
        item.proId === row.proId && this.applyAry.splice(index, 1);
      });
    },
    handleSelectionChange (selection) {
      this.applyAry = []
      selection.forEach(item => {
        this.applyAry.push(item)
      });
    },
    //只能选择当前apply的选项，其他apply选项取消勾选
    unCheck (status) {
      let id = +(this.showPanelVal[0])
      for (let i = 0; i < this.list.length; i++) {
        if (!(i === id)) {
          this.$refs.selection[i].selectAll(status);
        }
      }
    }
  },
  watch: {
    $route (to) {
      this.tabIndex = +(to.query.tabIndex);
      this._getList(this.tabIndex)
    },
    tabIndex () {
      this.selContent = '';
      this.pageRender = Date.now();
    }
  }
}

</script>