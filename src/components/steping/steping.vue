<!--写码步骤调-->
<style lang="scss" scoped>
// status值的颜色变量
$errorColor: #ff5353;
$finishColor: #5dcda9;
$processColor: #ff9c5d;
$waitColor: #f88d49;
.coding-step {
  font-size: 0;
  width: 100%;
  // 步骤头
  .head-list {
    width: 80%;
    // margin: 0 auto 10px auto;
    margin: auto;
    position: relative;
    top: 1rem;
    // margin: 0;
    .steps-head {
      // background: #fff;
      position: relative;
      display: inline-block;
      text-align: center;
      z-index: 1;
      .steps-head-inner {
        display: inline-block;
        width: 31px;
        height: 31px;
        line-height: 26px;
        line-height: 24px;
        text-align: center;
        vertical-align: middle;
        color: #e6e6e6;
        border-radius: 50%;
        font-size: 16px;
        transition: background-color 0.2s ease-in-out;
        .ivu-steps-icon {
          font-weight: 700;
          font-size: 16px;
          line-height: 1;
        }
        span {
          font-size: 12px;
          color: #ccc;
        }
      }
      .steps-head-inner- {
        background: url("../../assets/images/icon/box_icon.png") no-repeat -198px -135px;
        // background-color: #fff;
      }
      .steps-head-inner-finish {
        background: url("../../assets/images/icon/box_icon.png") no-repeat -152px -135px;
        background-color: #fff;
      }
      .steps-head-inner-error {
        background: url("../../assets/images/icon/box_icon.png") no-repeat -101px -135px;
        background-color: #fff;
      }
      .steps-head-inner-process {
        background: url("../../assets/images/icon/box_icon.png") no-repeat -50px -135px;
        background-color: #fff;
      }
      .steps-head-inner-wait {
        background: url("../../assets/images/icon/box_icon.png") no-repeat -242px -135px;
        background-color: #fff;
        // 加载动画
        animation: rotation 1.5s linear infinite;
        @keyframes rotation {
          from {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(180deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      }
    }
  }
  // 进度条
  .progress {
    width: 100%;
    text-align: center;
    .progress-inner {
      // 确保与tab的中线对齐
      width: 66%;
      display: inline-block;
      background-color: #f1f2f3;
      border-radius: 100px;
      vertical-align: middle;
      .progress-bg {
        border-radius: 100px;
        background: linear-gradient(to right, #58cca7, #95e15d);
        transition: all 0.5s linear;
        position: relative;
        width: 33.33%;
        height: 3px;
      }
    }
  }
  // 内容
  .des-list {
    width: 80%;
    display: flex;
    align-items: flex-start;
    margin: 15px auto 0 auto;
    .des-item {
      display: inline-block;
      text-align: center;
      font-size: 0;
      .des-item-inner {
        text-align: center;
        .des-item-title {
          font-size: 14px;
          color: #666;
        }
        .des-item-content {
          font-size: 16px;
          color: #7b8fa5;
          .des-item-text {
            position: relative;
            font-size: 16px;
          }
        }
        .status-error {
          color: $errorColor;
        }
        .status-finish {
          color: $finishColor;
        }
        .status-process {
          color: $processColor;
        }
        .status-wait {
          color: $waitColor;
        }
      }
    }
    .des-item:first {
      background: #2d8cf0;
    }
  }
}
</style>
<template>
  <div class="coding-step"
       v-if="list.length > 0">
    <div class="head-list"
         :style="{width: headDesWidth + '%'}">
      <!-- 步骤头 -->
      <div class="steps-head"
           v-for="(item, index) in list"
           :key="index"
           :style="{width: desWidth + '%'}">
        <div class="steps-head-inner"
             :class="'steps-head-inner-' + item.status">
          <!-- <span :class="item.status">{{item.status ? '' : index + 1}}</span> -->
        </div>
      </div>
    </div>
    <!-- 进度条 -->
    <div class="progress">
      <div class="progress-inner">
        <div class="progress-bg"
             :style="progress"></div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="des-list"
         :style="{width: headDesWidth + '%'}">
      <div class="des-item"
           v-for="(item, index) in list"
           :key="index"
           :style="{width: desWidth + '%'}">
        <div class="des-item-inner">
          <div class="des-item-title">{{item.title}}</div>
          <div class="des-item-content"
               :class="'status-' + item.status">
            <span class="des-item-text">{{item.des}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Steping',
  props: {
    list: {
      type: Array,
      default: function () {
        return [];
      }
    },
    // eslint-disable-next-line vue/require-prop-type-constructor
    current: 0
  },
  computed: {
    // 进度条的背景渐变色
    progress () {
      // let linear = '';
      // if (this.list.length === 3) {
      //   switch (this.current) {
      //     case 1:
      //       linear = 'linear-gradient(to right, #59cca7 , #a8e250)';
      //       break;
      //     case 2:
      //       linear = 'linear-gradient(to right, #59cca7 , #a8e250, #68a5fe)';
      //       break;
      //   }
      // } else {
      //   switch (this.current) {
      //     case 1:
      //       linear = 'linear-gradient(to right, #59cca7 , #85db71)';
      //       break;
      //     case 2:
      //       linear = 'linear-gradient(to right,  #59cca7 , #84db71, #a8e250)';
      //       break;
      //     case 3:
      //       linear = 'linear-gradient(to right, #58cca7 , #84db71, #a8e250, #8dc5a1)';
      //       break;
      //     case 4:
      //       linear = 'linear-gradient(to right, #58cca7 , #84db71, #a8e250, #8dc5a1, #68a5fd)';
      //       break;
      //   }
      // }
      return {
        width: this.curProcess + '%',
        // background: linear
        background: 'linear-gradient(to right, #32D7B0 , #58F6B5)'
      };
    }
  },
  data () {
    return {
      curProcess: 0,
      desWidth: 0,
    };
  },
  created () {
    this._curProcess();
  },
  mounted () {
    this.setProcessContent();
  },
  methods: {
    // 计算每步所占百分比
    _curProcess () {
      let len = this.list.length;
      let w = 100 / (len - 1);
      // 进度条宽度
      this.curProcess = w * this.current;
      this.desWidth = 100 / len;
      this.headDesWidth = 80
      // 根据list的长度确定headDesWidth的长度
      if (len === 3) {
        this.headDesWidth = 100;
      } else if (len === 5) {
        this.headDesWidth = 83;
      } else if (len === 4) {
        this.headDesWidth = 87;
      } else if (len === 6) {
        this.headDesWidth = 80;
      }
    },
    setProcessContent () {
      this.$nextTick(function () {
        let span = document.getElementsByClassName('des-item-text');
        let firstSpan, firstSpanW, afterSpan, afterSpanW;
        firstSpan = span[0];
        firstSpanW = span[0].offsetWidth;
        afterSpan = span[span.length - 1];
        afterSpanW = span[span.length - 1].offsetWidth;
        firstSpan.style.left = firstSpanW / 2 - 13 + "px";
        afterSpan.style.right = afterSpanW / 2 - 13 + "px";
      })
    }
  },
  watch: {
    // 监听当前步骤
    current () {
      this._curProcess();
    }
  }
};
</script>

