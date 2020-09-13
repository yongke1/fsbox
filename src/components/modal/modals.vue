<style lang='scss' scoped>
/deep/ .ivu-modal {
  /deep/ .ivu-modal-content {
    border-radius: 3px;
    padding: 40px 0 30px;
  }
  .ivu-modal-body {
    padding: 0;
    .body-content {
      h3 {
        color: #445f87;
        font-size: 24px;
        text-align: center;
        line-height: normal;
      }
    }
  }
  .ivu-modal-footer {
    border: none;
    padding: 0 40px;
    .row {
      display: flex;
      flex-direction: column;
      .ivu-btn {
        button + button {
          margin: 0;
        }
      }
    }
    .ivu-btn {
      height: 46px;
      min-width: 90px;
      border-radius: 3px;
      font-weight: bold;
      &.ivu-btn-default {
        color: #7b8fa5;
        border: 2px solid #7b8fa5;
        &:hover {
          color: #7b8fa5;
        }
      }
      &.ivu-btn-primary {
        background-image: linear-gradient(to right, #37a0f6, #387ee9);
      }
    }
  }
}
</style>

<template>
  <div class="content">
    <Modal v-model="isShow"
           :mask-closable="false"
           :width="width"
           :closable="closeShow"
           :footer-hide="footerHide">
      <template slot="close">
        <Icon type="ios-close"
              @click="cancel"></Icon>
      </template>
      <div class="body-content">
        <h3 v-if="title">{{title}}</h3>
        <!-- 自定义插槽内容 -->
        <slot></slot>
      </div>
      <!-- 底部插槽 -->
      <template slot="footer">
        <Button @click="cancel">{{btnTxt[0]}}</Button>
        <Button type="primary"
                @click="ok">{{btnTxt[1]}}</Button>
      </template>
    </Modal>
  </div>
</template>

<script>

export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    footerHide: {
      type: Boolean,
      default: false
    },
    closeShow: {
      type: Boolean,
      default: true
    },
    width: {
      type: Number,
      default: 500,
    },
    title: {
      type: String,
      default: ''
    },
    btnTxt: {
      type: Array,
      default: () => {
        return ['Cancel', 'Sumbit']
      }
    }
  },
  data () {
    return {
      isShow: this.show
    }
  },
  methods: {
    ok () {
      this.$emit('ok');
    },
    cancel () {
      this.$emit('cancel');
    }
  },
  watch: {
    show (val) {
      this.isShow = val;
    }
  }
}

</script>