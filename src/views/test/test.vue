<style lang="scss" scoped></style>
<template>
  <div id="main">
    <div class="step">
      <Steping :list="stepList"
               :current='currentStep'></Steping>

      <div slot="content">
        <Table :columns="applyColumnsTitle"
               :data="list"
               :no-data-text="'orderPage.tableContent'"></Table>
      </div>
      <hy-page :current-page="searchData.current"
               :limit="searchData.size"
               :total-element="totalElement"
               @current-change="currentChange"></hy-page>
    </div>
    <Module-Info></Module-Info>
    <div>
      <input type="text"
             v-model="search">
      <ul>
        <li v-for="(item,index) in items"
            :key="index">
          <span>{{item.name}}</span>
          <span>{{item.msg}}</span>
        </li>
      </ul>
      <!-- <input v-model='search' />
      <ul>
        <li v-for="(item,i) in test"
            :key="i">
          <label>价格</label><span v-html="item.name"></span>
          <label>￥</label><span v-html="item.price"></span>
        </li>
      </ul> -->
    </div>

  </div>
</template>

<script>
// import { getProList } from '@/service/orderService/orderService';
import { allParam } from '@/service/applyWriteCode/applyWriteCode';
import tool from "@assets/js/utils/tool.js";
export default {
  components: {

  },
  computed: {
    //过滤方法
    items: function () {
      var _search = this.search;
      console.log(this.search);
      if (_search) {
        //不区分大小写处理
        var reg = new RegExp(_search, 'ig')
        //es6 filter过滤匹配，有则返回当前，无则返回所有
        return this.lists.filter(function (e) {
          //匹配所有字段
          return Object.keys(e).some(function (key) {
            return e[key].match(reg);
          })
          //匹配某个字段
          //  return e.name.match(reg);
        })
      };
      return this.lists;
    },
    test: function () {
      var _search = this.search;
      if (_search) {
        return this.products.filter(function (product) {
          return Object.keys(product).some(function (key) {
            return String(product[key]).toLowerCase().indexOf(_search) > -1
          })
        })
      }
      return this.products;
    }
  },
  data () {
    return {
      totalElement: 10,
      loading: true,
      // 初始化
      stepList: [
        {
          title: "",
          des: "",
          status: 'process'
        },
        {
          title: "",
          des: '--',
          status: ''
        },
        {
          title: "",
          des: '--',
          status: ''
        }
      ],
      currentStep: 0,
      // 申请列
      applyColumnsTitle: [
        { type: 'index', width: 60, align: 'center' },
        {
          title: 'label.orderNo',
          key: 'orderNumber',
          render: (h, params) => {
            const row = params.row;
            const text = row.orderNumber;
            const readStatus = row.readStatus;
            let count = 0;
            if (readStatus === '0') count = 1;
            return h('Badge',
              {
                props: {
                  dot: '',
                  count: count
                }
              },
              [h('span',
                {
                  on: {
                    'click': () => {
                      this.applyDetail(row);
                    }
                  }
                },
                text
              )]
            );
          }
        },
        { title: 'label.applicationNo', key: 'applyNo' },
        {
          title: 'label.applicationNote',
          key: 'applyRemarks',
          render: (h, params) => {
            let text = '';
            params.row.applyRemarks ? text = params.row.applyRemarks : text = '--';
            return h('span', text);
          }
        },
        {
          title: 'Date',
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
                }, createDate ? `[${'label.applicationDate'}] ` : ''),
                h('span', createDate)
              ]),
              h('p', [
                h('span', {
                  style: {
                    color: '#d1d4db'
                  }
                }, checkDate ? `[${'label.auditDate'}] ` : ''),
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
          title: 'label.status',
          key: 'checkStatus',
          width: 100,
          render: (h, params) => {
            const row = params.row;
            const colorArr = ['#f78e4a', '#59cca5', 'red', '#f78e4a', '', 'blue'];
            const textArr = ['status.unaudited', 'status.pass', 'status.fail', 'status.unaudited', '', 'Cancel'];
            const color = colorArr[row.checkStatus];
            // const text = row.checkStatus === '0' ? 'status.unaudited') : row.checkStatus === '1' ? 'status.pass') : 'status.fail');
            const text = textArr[row.checkStatus];
            return h('span', {
              style: {
                color: color
              }
            }, text);
          }
        },
        {
          title: 'label.opt',
          key: 'action',
          align: 'center',
          width: 100,
          render: (h, params) => {
            // let valiStartDate = new Date(Date.parse(params.row.valiStartDate));
            // let valiEndDate = new Date(Date.parse(params.row.valiEndDate));
            // let isWriteBtn = valiEndDate - valiStartDate > 0 ? this._hyTool.createSpan(h, params, this.writeCode, 'btn.code'), { 'color': '#0582d2', 'display': 'block', 'cursor': 'pointer' }) : '';
            return h('div', {
              on: {
                mouseenter: (e) => {
                  for (let i = 0; i < e.target.children.length; i++) {
                    e.target.children[i].style.textDecoration = 'underline ';
                  }
                },
                mouseleave: (e) => {
                  for (let i = 0; i < e.target.children.length; i++) {
                    e.target.children[i].style.textDecoration = 'none ';
                  }
                }
              }
            }, [
              this._hyTool.createSpan(h, params, this.applyDetail, 'btn.details'), { 'color': '#0582d2', 'display': 'block', 'cursor': 'pointer' },
              params.row.checkStatus === '2' ? this._hyTool.createSpan(h, params, this.reapplyWriteCode, 'btn.applyAgain', { 'color': '#0582d2', 'display': 'block', 'cursor': 'pointer' }) : ''
            ]);
          }
        }
      ],
      list: [],
      panelShow: '0',
      searchData: {
        current: 4,
        size: 8
      },
      search: '',
      lists: [
        { name: 'AAA', msg: 'aaa文本s介绍12' },
        { name: 'BBB', msg: 'bbb文本f介绍2' },
        { name: 'CCC', msg: 'ccc文本e介绍3' },
        { name: 'DDD', msg: 'ddd文本t介绍4' },
        { name: 'EEE', msg: 'eee文本y介绍5' },
      ],
      products: [{
        name: '苹果',
        price: 25
      }, {
        name: '香蕉',
        price: 15
      }, {
        name: '雪梨',
        price: 65
      }, {
        name: '宝马',
        price: 2500
      }, {
        name: '奔驰',
        price: 10025
      }, {
        name: '柑橘',
        price: 15
      }, {
        name: '奥迪',
        price: 25
      }]
    }
  },
  created () {
    // this.getOrders();
    this.currentChange(1);
  },
  methods: {
    // 设置当前步骤
    setCurrentStep (curIndex, res) {
      this.currentStep = curIndex;
      if (typeof res === "object") {
        res.forEach(item => {
          this.stepList[item.index].des = item.des || "--";
          this.stepList[item.index].status = item.status || "";
        });
      }
    },
    //操作分页
    currentChange (val) {
      this.searchData.current = val;
      this.getOrders();
    },
    // 查询我的订单
    async getOrders () {
      let userInfo = JSON.parse(tool.getStore("userInfo"));
      let rw = {
        current: this.searchData.current,
        size: this.searchData.size,
        fsUserId: userInfo.userNo
      }
      console.log(rw);
      let result = await allParam(rw);
      this.list = result.obj.records;
      this.totalElement = result.obj.total;
    }
  },
  mounted () {
    this.setCurrentStep(1, [{ index: 0, des: "connection Box", status: 'finish' }, { index: 1, des: "Reading", status: 'wait' }, { index: 2, des: "Diagnosing", status: 'error' }, { index: 3, des: "Reading", status: 'wait' }, { index: 4, des: "Diagnosing", status: 'error' }]);
    setTimeout(() => {
      this.setCurrentStep(2, [{ index: 0, des: "connection Box", status: 'finish' }, { index: 1, des: "Reading", status: 'finish' }, { index: 2, des: "Diagnosing", status: 'wait' }]);
    }, 3000)
  }
};
</script>
