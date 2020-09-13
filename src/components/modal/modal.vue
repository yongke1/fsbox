<style lang="scss" scoped>
#modal-all {
  /deep/ .ivu-modal-header {
    padding: 0;
    background: url("../../assets/images/login/modal/modal-header.png");
    height: 68px;
    background-size: cover;
    display: flex;
    align-items: center;
    padding-left: 20px;
    border-radius: 6px 6px 0 0;
    border: 0;
    /deep/ .modal-inner {
      display: flex;
      align-items: center;
      span {
        margin-left: 10px;
        color: #fff;
        font-size: 15px;
        font-weight: bold;
      }
    }
  }
  /deep/ .ivu-modal-body {
    padding: 0;
    .modal-inner {
      display: flex;
      align-items: center;
      background: url("/static/images/modal-header.png") repeat-y;
      padding-left: 20px;
      width: 100%;
      height: 68px;
      border-radius: 5px 5px 0 0;
      span {
        width: 80%;
        display: inline-block;
        margin-left: 10px;
        font-size: 15px;
        color: #fff;
        white-space: nowrap;
        overflow-x: hidden;
      }
    }
  }
  /deep/ .ivu-modal-footer {
    display: flex;
    justify-content: center;
    border-top: none;
    padding-top: 0;
    padding-bottom: 30px;
    button + button {
      margin-left: 20px;
    }
    .ivu-btn-ghost {
      border-color: #2d8cf0;
      color: #2d8cf0;
    }
  }
  /deep/ .ivu-icon-ios-close-empty {
    top: 10px;
    color: #fff;
  }
  .default-slot {
    line-height: 50px;
    text-align: center;
  }
}
</style>
<template>
  <div id="content">
    <Modal id="modal-all"
           v-model="shows"
           :width="width"
           :styles="{ top: `${top}px` }"
           :footerHide="footerShow"
           :mask-closable="maskClose"
           @on-ok="ok"
           @on-cancel="cancel">
      <template #header>
        <div class="modal-inner">
          <!-- <img src="/static/images/modal-logo.png" /> -->
          <img src="../../assets/images/login/modal/modal-logo.png" />
          <span>{{ title }}</span>
        </div>
      </template>
      <slot>
        <div class="default-slot"></div>
      </slot>
      <template #footer>
        <Button type="primary"
                :style="btnStyle"
                size="large"
                @click.native="ok">{{ OkText }}</Button>
        <Button type="ghost"
                :style="btnStyle"
                size="large"
                @click.native="cancel">{{ CancelText }}</Button>
      </template>
    </Modal>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    // 模态框是否显示
    show: {
      type: Boolean,
      default: false
    },
    // 模态框宽度
    width: {
      type: Number,
      default: 500
    },
    // 模态框的标题
    title: {
      type: String,
      default: "这是默认的标题"
    },
    maskClose: {
      type: Boolean,
      default: true
    },
    // footer是否显示
    footerShow: {
      type: Boolean,
      default: false
    },
    // 按钮文本
    CancelText: {
      type: String,
      default: "取消"
    },
    OkText: {
      type: String,
      default: "确认"
    },
    // 距离顶部的间距
    top: {
      type: Number,
      default: 200
    },
    // 按钮样式
    btnStyle: {
      type: Object
    }
  },
  data () {
    return {
      // 必须重新定义值接收父组件传入的值（props数据单向流动）
      shows: this.show
    };
  },
  methods: {
    ok () {
      this.$emit("enter");
    },
    cancel () {
      this.$emit("cancel");
    }
  },
  watch: {
    show (val) {
      this.shows = val;
    }
  }
};
</script>
