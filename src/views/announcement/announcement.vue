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
    min-height: 677px;
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
        height: 500px;
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
          &.ivu-collapse-item-active {
            /deep/ i {
              transform: rotate(270deg);
            }
            /deep/ .ivu-collapse-header {
              margin-bottom: 0px;
              border-bottom: none;
            }
            /deep/ .ivu-collapse-content {
              border: 1px solid #eaeff5;
              border-top: none;
              /deep/ .announcement-info {
                margin: 0 20px;
                padding: 20px 0;
                color: #7b8fa5;
                border-top: 1px solid #eaeff5;
                word-break: break-all;
              }
            }
          }
          /deep/ .ivu-collapse-header {
            @include l-height(52px);
            @include f-sc(14px, #7b8fa5);
            border: 1px solid #eaeff5;
            margin-bottom: 10px;
            padding: 0 60px 0 20px;
            display: flex;
            justify-content: space-between;
            i {
              @include position(absolute, 50%, 20px);
              transform: rotate(90deg);
              margin-top: -7px;
            }
            span {
              position: relative;
              &.new {
                margin-left: 16px;
                &::before {
                  content: "";
                  display: inline-block;
                  width: 8px;
                  height: 8px;
                  background: red;
                  position: absolute;
                  left: -15px;
                  top: 50%;
                  transform: translateY(-4px);
                  border-radius: 50%;
                }
              }
            }
          }
          /deep/ .ivu-collapse-content {
            // @include pd(0);
            margin-bottom: 10px;
            /deep/ .announcement-info {
              margin: 0 20px;
              padding: 20px 0;
              color: #7b8fa5;
              border-top: 1px solid #eaeff5;
              word-break: break-all;
            }
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
</style>

<template>
  <div class="content">
    <header class="header">
      <div class="header-tab">
        <span>Announcement</span>
      </div>
      <span class="return"
            @click="$router.go(-1)">
        <Icon type="ios-arrow-round-back" />Return
      </span>
    </header>
    <div class="main">
      <div :class="['main-header',{'tab':tabIndex===1}]">
        <div class="search">
          <Input v-model="pageParam.content"
                 style="width: 320px"
                 @keyup.enter.native="_getList(1)"
                 placeholder="Please filling "></Input>
          <span class="search-icon"
                @click="_getList(1)"></span>
        </div>
      </div>
      <div class="main-content">
        <Collapse v-model="openDefault"
                  @on-change="clickNotice"
                  v-if="list.length>0"
                  accordion>
          <Panel v-for="(item,i) in list"
                 :key="i"
                 :name="`${i}`">
            <span :class="{'new':item.state===0}">{{item.enTitle}}</span>
            <span>{{item.createtime.replace('T',' ')}}</span>
            <div slot="content"
                 class="scroll">
              <div class="announcement-info"
                   v-html="item.enContent"></div>
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
    <my-spin :loading="isloading"></my-spin>
  </div>
</template>

<script>
import pageServices from '@components/pageServices/pageServices';
import { noticeLoginPage, saveNoticeLogin } from '@service/announcement/announcement';
import { mapGetters } from 'vuex';
import mixin from "@assets/js/mixin/mixin";
export default {
  components: {
    pageServices,
  },
  props: ['chat'],
  mixins: [mixin],
  computed: {
    ...mapGetters(['userInfo'])
  },
  data () {
    return {
      tabIndex: 0,
      //默认展开
      openDefault: '0',
      list: [],
      //分页参数
      pageParam: {},
      isloading: false,
    }
  },
  created () {
    this._getList();
  },
  mounted () {
  },
  methods: {
    async clickNotice (val) {
      if (val.length === 0) return false;
      let data = {
        'noticeId': this.list[val].id,
        'userId': this.userInfo.userNo
      };
      await saveNoticeLogin(data);
      this.list[val].state = 1;
      this.$emit('handelRefresh');
    },
    // 取得通告消息
    async _getList (page) {
      this.isloading = true;
      let opt = {
        userId: this.userInfo.userNo,
        current: (this.pageParam.current = page ? page : 1),
        size: this.pageParam.size || 10,
        content: this.pageParam.content
      };
      const res = await noticeLoginPage(opt);
      this.list = res.obj.records;
      // 获取默认展开的列
      this.list.forEach((item, index) => {
        if (item.id === this.$route.params.id) {
          return this.openDefault = String(index);
        }
      })
      this.pageParam.totalElement = res.obj.total;
      this.isloading = false;
    },
    currentChange (val) {
      this._getList(val)
    },
  },
  watch: {
    $route (to) {
      this.tabIndex = to.query.tabIndex;
    }
  }
}

</script>