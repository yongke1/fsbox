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
        // border-image: linear-gradient(to right, #37a0f6, #387ee9);
        @include position(absolute, null, null, 0, 15%);
        transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        &.first {
          transform: translateX(0px);
        }
        &.second {
          transform: translateX(155px);
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
    min-height: 687px;
    .main-header {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
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
        height: 500px;
        overflow-y: auto;
        .ivu-collapse-item {
          border: none;
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
            .ivu-checkbox-inner {
              border: 2px solid #a5bad0;
            }
          }
        }
        /deep/ td {
          color: #445f87;
          .ivu-checkbox-inner {
            border: 2px solid #a5bad0;
          }
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
  .note-form {
    padding: 40px 40px 30px;
  }
  .delete-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    span {
      color: #445f87;
      font-size: 18px;
      position: relative;
      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        left: -30px;
        top: 50%;
        margin-top: -12px;
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
/deep/ .ivu-table-cell {
  white-space: nowrap;
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
        <span :class="{'active':tabIndex===0}"
              @click="$router.push({name:'main.configuration',query:{tabIndex:0}})">My Configuration</span>
        <span :class="{'active':tabIndex===1}"
              @click="$router.push({name:'main.configuration',query:{tabIndex:1}})">Configuration History</span>
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
                @click="delSelect">Delete</Button>
        <div class="search">
          <Input v-model="searchText"
                 style="width: 320px"
                 v-on:keyup.enter.native="myRecord(true)"
                 placeholder="Please filling P/N Brand"></Input>
          <span class="search-icon"
                @click="myRecord(true)"></span>

        </div>
      </div>
      <div class="main-content">
        <!-- <Collapse v-if="tabIndex===0"
                  v-model="value2"
                  accordion>
          <Panel v-for="item in 5"
                 :key="item"
                 :name="`${item}`">
            <span>Order No/Date: FS200114276598 / 2020-01-14 08:16:09</span>
            <div slot="content"
                 class="scroll">
              <Table ref="selection"
                     :columns="configurationColumns"
                     :data="configurationData"
                     no-data-text="No Data">
              </Table>
            </div>
          </Panel>
        </Collapse> -->
        <div v-if="configurationData.length===0&&historyData.length===0"
             class="no-data">
          <img src="~@assets/images/icon/no-data.png"
               alt="">
          <span>No data</span>
        </div>
        <Table v-else-if="tabIndex===0"
               disabled-hover
               class="tb-apply"
               @on-select-all="selAll"
               @on-select="selOnce"
               @on-select-cancel="cancelOnce"
               @on-selection-change="handleSelectionChange($event)"
               :columns="configurationColumns"
               :data="configurationData"
               :key="refresh"></Table>
        <Table v-else
               disabled-hover
               class="tb-apply"
               :columns="historyColumns"
               :data="historyData"></Table>
        <!-- <page-services :totalElement="10"
                       :current-page="1"
                       @current-change="1"></page-services> -->
        <page-services :key="pageRender"
                       :totalElement="pageParam.totalElement"
                       @current-change="currentChange"></page-services>
      </div>
    </div>
    <modal v-model="isOpenWrite"
           :width="1280"
           :footer-hide="true"
           :closable="isClose"
           :mask-closable="false"
           class-name="vertical-center-modal"
           @on-ok="ok"
           @on-cancel="writeCodeCancel">
      <coding :CodeType="2"
              :data="modalData"
              :from="'configuration'"
              :chat="chat"
              @close-icon="closeIcon"
              :key="refreshData"></coding>
    </modal>
    <my-spin :loading="isLoading"></my-spin>
    <!-- note弹框 -->
    <fs-modal :show="noteShow"
              title="Note"
              :width="480"
              :footerHide="false"
              @cancel="cancel"
              @ok="ok">
      <div class="note-form">
        <Input v-model="notePayload.noteText"
               type="textarea"
               :rows="3"
               placeholder="Enter something..." />
      </div>
    </fs-modal>
    <!-- 删除提示 -->
    <fs-modal :show="deleteShow"
              :closeShow="false"
              :width="480"
              :footerHide="true">
      <div class="delete-form">
        <span>Are you sure confirm to delete?</span>
        <Button type="primary"
                @click="delEnter">Delete</Button>
        <Button type="text"
                @click="deleteShow = false">Cancle</Button>
      </div>
    </fs-modal>
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
import fsModal from '@components/modal/modals';
import coding from "@components/coding/coding"
import { mapGetters } from 'vuex';
import mixin from "@assets/js/mixin/mixin";
import { myRecordPage, DeleteUserWarehouse, UpdateRemark, userWriteRecord } from '@service/orderService/orderService';

export default {
  components: {
    pageServices,
    fsModal,
    coding
  },
  mixins: [mixin],
  computed: {
    ...mapGetters(['userInfo'])
  },
  props: ['chat'],
  data () {
    return {
      pageRender: 0,
      isClose: true,
      deleteShow: false,
      noteShow: false,
      notePayload: {
        noteText: '',
        noteRowId: ''
      },
      tabIndex: 0,
      selType: 0,
      searchText: '',
      selOptions: [
        { label: 'Application No', value: 0 },
        { label: 'Order No', value: 1 },
        { label: 'S/N', value: 2 }
      ],
      value2: '1',
      //configuration 表单的table title
      configurationColumns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          type: 'index',
          width: 30,
          align: 'center'
        },
        {
          title: 'P/N',
          key: 'modalName',
          width: 160
        },
        {
          title: 'Brand',
          key: 'compatibleType'
        },
        {
          title: 'S/N',
          key: 'binSn',
          width: 180
        },
        {
          title: 'Device Model Number',
          key: 'equipmentName'
        },
        {
          title: 'Note',
          key: 'remark'
        },
        {
          title: 'Operating Date',
          key: 'createDate',
          width: 180,
          render: (h, params) => {
            return h('span', params.row.createDate.replace('T', ' '))
          }
        },
        {
          title: 'Action',
          key: 'action',
          align: 'right',
          render: (h, params) => {
            return h('div', {
              style: {
                display: 'flex',
                flexDirection: 'column'
              }
            }, [
              h('span', {
                style: { color: '#3880EA', cursor: 'pointer' },
                on: {
                  click: () => {
                    // 检测不通过禁止写码
                    if (!JSON.parse(this._hyTool.getStore("isCanWrite"))) return this.isCanWriteCode = true;
                    // this.deleteShow = true;
                    this.isOpenWrite = true
                    this.modalData = params.row
                    this.chat.then((result) => {
                      result.server.send('GetInfo', '0');
                    });
                  }
                }
              }, 'Matching'),
              h('span', {
                style: { color: '#3880EA', cursor: 'pointer' },
                on: {
                  click: () => {
                    this.noteShow = true;
                    this.notePayload.noteRowId = params.row.id
                    this.notePayload.noteText = params.row.remark
                  }
                }
              }, 'Note')
            ]);
          },
        }
      ],
      configurationData: [],
      //表单table头部title
      historyColumns: [
        {
          type: 'index',
          width: 60,
          align: 'center'
        },
        {
          title: 'P/N',
          key: 'modalName',
          width: 180,
          render: (h, params) => {
            let text = '';
            params.row.modalName ? text = params.row.modalName : text = '--';
            return h('div', text);
          }
        },
        {
          title: 'S/N',
          key: 'originBinSn',
          render: (h, params) => {
            let text = '';
            params.row.originBinSn ? text = params.row.originBinSn : text = '--';
            return h('div', text);
          }
        },
        {
          title: 'New S/N',
          key: 'nowBinSn',
          render: (h, params) => {
            let text = '';
            params.row.nowBinSn ? text = params.row.nowBinSn : text = '--';
            return h('div', text);
          }
        },
        {
          title: 'Brand',
          key: 'compatibleType',
          render: (h, params) => {
            let text = '';
            params.row.compatibleType ? text = params.row.compatibleType : text = '--';
            return h('div', text);
          }
        },
        {
          title: 'Supplier',
          key: 'proName',
          render: (h, params) => {
            let text = '';
            params.row.proName ? text = params.row.proName : text = '--';
            return h('div', text);
          }
        },
        {
          title: 'Code Date',
          key: 'createDate',
          width: 180
        },
        {
          title: 'State',
          align: 'right',
          render: (h, params) => {
            return h('span', {
              style: {
                color: +(params.row.writeCodeState) === 1 ? '#32D7B0' : '#F66767',
              }
            }, +(params.row.writeCodeState) === 1 ? 'Succeed' : 'Failed');
          }
        }
      ],
      //表单table数据
      historyData: [],
      //查询接口的参数对象
      searchData: {},
      //分页参数
      pageParam: {
        totalElement: 0, //总共默认0条
        current: 1, //默认第一页
        size: 10 //默认每页十行
      },
      //配置选中数组
      delItemAry: [],
      //刷新表单数据
      refresh: '',
      //loading
      isLoading: false,
      //打开写码弹窗
      isOpenWrite: false,
      modalData: {},
      refreshData: '',
      isCanWriteCode: false
    }
  },
  created () {
    this.tabIndex = parseInt(this.$route.query.tabIndex);
    this.changeList()
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
    //表单初始化数据
    async changeList (page) {
      this.isLoading = true
      this.historyData = []
      this.searchData = {
        userId: this.userInfo.userNo,
        current: this.pageParam.current = page ? page : 1,
        size: this.pageParam.size
      };
      let payload = {
        fsUserId: this.userInfo.userNo,
        current: this.pageParam.current = page ? page : 1,
        size: this.pageParam.size
      };
      let res = {}
      if (this.tabIndex === 0) {
        res = await myRecordPage(this.searchData);
      }
      if (this.tabIndex === 1) {
        res = await userWriteRecord(payload)
      }
      this.pageParam.totalElement = res.obj.total;
      if (this.tabIndex === 0) {
        this.configurationData = res.obj.records ? res.obj.records : [];
      } else if (this.tabIndex === 1) {
        this.historyData = res.obj.records ? res.obj.records : [];
      }
      this.isLoading = false
    },
    //查询数据
    async myRecord (factor) {
      try {
        // this.searchData.userId = this.userInfo.userNo;
        let listParam = {
          userId: this.userInfo.userNo,
          current: this.pageParam.current,
          size: this.pageParam.size
        };
        let historyListParam = {
          fsUserId: this.userInfo.userNo,
          current: this.pageParam.current,
          size: this.pageParam.size
        };
        if (factor) {
          this.isLoading = true;
          // this.searchFlag = true;
          listParam.modelOrBrand = this.searchText;
          historyListParam.modelOrBrand = this.searchText;
        }
        //参数相同不能连续发送，防抖
        if (this.debounce(this.searchData, this.tabIndex === 0 ? listParam : historyListParam)) {
          this.isLoading = false;
          return
        }
        this.searchData = this.tabIndex === 0 ? listParam : historyListParam;
        let res = {}
        res = this.tabIndex === 0 ? await myRecordPage(this.searchData) : await userWriteRecord(this.searchData);
        this.pageParam.totalElement = res.obj.total;
        if (this.tabIndex === 0) {
          this.configurationData = res.obj.records ? res.obj.records : [];
        } else if (this.tabIndex === 1) {
          this.historyData = res.obj.records ? res.obj.records : [];
        }
        this.isLoading = false;
      } catch (error) {
        this.isloading = false;
        this.$Notice.error({
          title: 'error',
          desc: error.message
        });
      }
    },
    //点击删除按钮
    delSelect () {
      if (this.delItemAry.length === 0) {
        this.$Message.warning({
          content: "Please check at least one item",
          duration: 3
        });
        return false;
      }
      this.deleteShow = true;
    },
    //备注modal的submit事件
    ok () {
      this.remarks();
      this.noteShow = false;
    },
    //备注modal的cancel事件
    cancel () {
      this.noteShow = false;
    },
    //确定删除按钮
    async delEnter () {
      this.deleteShow = false;
      this.isLoading = true
      try {
        for (let i = 0; i < this.delItemAry.length; i++) {
          let payload = { Id: this.delItemAry[i].id }
          await DeleteUserWarehouse(payload);
        }
        let res = await myRecordPage({ userId: this.userInfo.userNo });
        this.pageParam.totalElement = res.obj.total;
        this.configurationData = res.obj.records ? res.obj.records : [];

        this.delItemAry = []
        this.refresh = Date.now()
        this.isLoading = false
        this.$Message.success({
          content: "deleted successfully",
          duration: 3
        });
      }
      catch (e) {
        this.$Message.error({
          content: "Delete failed",
          duration: 3
        });
      }
    },
    //分页切换事件
    currentChange (val) {
      this.changeList(val)
    },
    //查询列表getList防抖
    debounce (a, b) {
      var aProps = Object.getOwnPropertyNames(a);
      var bProps = Object.getOwnPropertyNames(b);
      if (aProps[3] == "__ob__" || bProps[3] == "__ob__") {
        delete aProps[3] || bProps[3]; //删除arr原型链的属性时 length并未改变
      }
      for (var i = 0; i < bProps.length; i++) {
        var propName = bProps[i];
        if (a[propName] !== b[propName]) {
          return false;
        }
      }
      return true; //相等返回true
    },
    //全选
    selAll (data) {
      if (this.delItemAry.length === 0) {
        data.forEach(items => {
          this.delItemAry.push(items);
        });
        return;
      } else {
        data.forEach(item => {
          let flag = true;
          this.delItemAry.forEach(item1 => {
            item.id === item1.id && (flag = false);
          });
          flag && this.delItemAry.push(item);
        });
      }
    },
    //选中一行
    selOnce (res, row) {
      // this.updateCodingAry('add', item)
      let flag = true;
      this.delItemAry.forEach(item => {
        item.id === row.id && (flag = false);
      });
      flag && this.delItemAry.push(row);
    },
    //table 取消选中某一项
    cancelOnce (res, row) {
      // this.updateCodingAry('remove', item)
      this.delItemAry.forEach((item, index) => {
        item.id === row.id && this.delItemAry.splice(index, 1);
      });
    },
    //全不选
    handleSelectionChange (selection) {
      if (selection.length > 0) return false;
      this.configurationData.forEach(item => {
        this.delItemAry.forEach((item1, index1) => {
          item.id === item1.id && this.delItemAry.splice(index1, 1);
        });
      });
    },
    //备注提交事件
    async remarks () {
      let payload = {
        Id: this.notePayload.noteRowId,
        remark: this.notePayload.noteText
      }
      this.isLoading = true
      await UpdateRemark(payload)
      this.notePayload.noteRowId = ''
      this.notePayload.noteText = ''
      let res = await myRecordPage({ userId: this.userInfo.userNo });
      this.pageParam.totalElement = res.obj.total;
      this.configurationData = res.obj.records ? res.obj.records : [];
      this.refresh = Date.now()
      this.isLoading = false
      this.$Message.success({
        content: "submit successfully",
        duration: 3
      });
    },
    writeCodeCancel () {
      this.refreshModal()
    },
    //重绘modal达到重置状态的效果
    refreshModal () {
      this.refreshData = Date.now()
    }
  },
  mounted () {

  },
  watch: {
    $route (to) {
      this.tabIndex = +(to.query.tabIndex);
      this.changeList(this.tabIndex)
    },
    tabIndex () {
      this.searchText = '';
      this.pageRender = Date.now();
      this.configurationData = [];
      this.historyData = [];
    }
  }
}

</script>