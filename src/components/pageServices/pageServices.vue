<template>
  <div class="padding">
    <span class="total-size">{{`Total ${totalElement} items`}}</span>
    <ul class="pagination">
      <!-- <li class="first"
          :class="{'disabled': internalCurrentPage == 1}">
        <a href="javascript:void(0)"
           @click="go(1)">Home</a>
      </li> -->
      <li v-show="hasPrevious">
        <a href="javascript:void(0)"
           @click="prev()">
          <Icon type="ios-arrow-back"
                size="16" />
        </a>
      </li>
      <li :class="{'active': internalCurrentPage == i}"
          v-for="(i, index) in pages"
          :key="index">
        <a href="javascript:void(0)"
           @click="go(i)">{{i}}</a>
      </li>
      <li v-show="hasNextVar">
        <a href="javascript:void(0)"
           @click="next()">
          <Icon type="ios-arrow-forward"
                size="16" />
        </a>
      </li>
      <!-- <li class="end"
          :class="{'disabled': internalCurrentPage == totalPage}">
        <a href="javascript:void(0)"
           @click="go(totalPage)">Last</a>
      </li> -->
      <!-- <li class="end disabled">
        <a href="javascript:void(0)">总数{{totalElement}}</a>
      </li> -->
    </ul>
    <!-- 跳转页面 -->
    <Select v-model="skipSize"
            style="width:100px;">
      <Option value="1"
              label="10/page"></Option>
    </Select>
    <div class="goto"><span>Go to</span>
      <Input v-model.number="pageVal"
             @keyup.enter.native="go(pageVal)"
             placeholder="Page"
             style="width: 56px" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'hyPage',
  props: {
    // 当前页
    currentPage: {
      type: Number,
      default: 1
    },
    // 展示多少
    showItem: {
      type: Number,
      default: 5
    },
    limit: {
      type: Number,
      default: 10
    },
    //总共有多少条数据
    totalElement: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      skipSize: '1',
      internalCurrentPage: 1,
      pageVal: null
    };
  },
  computed: {
    totalPage: function () {
      return Math.ceil(this.totalElement / this.limit);
    },
    pages: function () {
      let pages = [];
      if (this.internalCurrentPage < this.showItem) {
        let i = Math.min(this.showItem, this.totalPage);
        while (i) {
          pages.unshift(i--);
        }
      } else {
        let middle = this.internalCurrentPage - Math.floor(this.showItem / 2);
        let i = this.showItem;
        let calc = this.totalPage - this.showItem;
        if (middle > calc) {
          middle = calc + 1;
        }
        while (i--) {
          middle > 0 ? pages.push(middle++) : middle++;
        }
      }
      return pages;
    },
    hasPrevious: function () {
      return this.internalCurrentPage > 1;
    },
    hasNextVar: function () {
      return this.internalCurrentPage < this.totalPage;
    }
  },
  methods: {
    next () {
      if (this.hasNextVar) {
        this.internalCurrentPage++;
        this.load();
      }
    },
    go (currentPage) {
      if (this.internalCurrentPage === currentPage) return;
      this.internalCurrentPage = currentPage;
      this.load();
    },
    prev () {
      if (this.hasPrevious) {
        this.internalCurrentPage--;
        this.load();
      }
    },
    load () {
      this.$emit('current-change', this.internalCurrentPage);
      this.pageVal = null;
    }
  },
  watch: {
    'currentPage': {
      immediate: true,
      handler (val) {
        this.internalCurrentPage = val;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "src/assets/styles/vars";
.padding {
  padding: 20px 0 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .total-size {
    margin-right: 20px;
    color: #8296ab;
  }
  .pagination {
    display: inline-block;
    user-select: none;
    li {
      border: 1px solid #e9edf8;
      border-radius: 3px;
      background: #fff;
      float: left;
      margin-right: 10px;
      a {
        display: block;
        text-align: center;
        width: 32px;
        font-size: 12px;
        height: 32px;
        line-height: 32px;
        border-radius: 4px;
        color: #8296ab;
        cursor: pointer;
      }
      &:hover,
      &.active {
        border-color: #3880ea;
        a {
          color: #3880ea;
          i {
            color: #3880ea;
          }
        }
      }
      &.first,
      &.end {
        border-radius: 3px;
        // border-color: #3880ea;
        background: #fff;
        a {
          // color: #3880ea;
          width: auto;
          height: auto;
          line-height: 1.5;
          padding: 7px 14px;
        }
      }
      &.disabled,
      &.disabled:hover {
        background: #fff;
        border-color: #e9edf8;
        a {
          cursor: not-allowed;
          color: #8296ab;
        }
      }
      &:active,
      &:focus,
      &:visited {
        // background: #0781d4;
        border-color: #0781d4;
        color: #fff;
      }
    }
  }
}
/deep/ .ivu-select-selection {
  height: 34px;
  border-color: #e9edf8;
  .ivu-select-placeholder,
  .ivu-select-selected-value {
    color: #8296ab;
  }
}
.icon-pre {
  position: relative;
  left: -1px;
  color: #97a1ac;
}

.icon-next {
  position: relative;
  left: 1px;
  color: #97a1ac;
}
.goto {
  span {
    color: #8296ab;
    margin: 0 10px;
  }
  /deep/ .ivu-input {
    color: #a5bad0;
  }
}
</style>
