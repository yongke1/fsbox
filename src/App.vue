<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "~@assets/styles/_mixins";
#app {
  font-family: "Open Sans", "Microsoft YaHei", Arial, Helvetica, sans-serif;
  // 字体抗锯齿渲染
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
// * {
//   -moz-user-select: -moz-none;
//   -moz-user-select: none;
//   -o-user-select: none;
//   -khtml-user-select: none;
//   -webkit-user-select: text;
//   -ms-user-select: none;
//   user-select: text;
// }
body::-webkit-scrollbar {
  display: none;
}

html,
body {
  // background: url("~@assets/images/login/1/bg.png") no-repeat;
  // width: 100%;
  margin: 0;
  padding: 0;
}
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  .ivu-modal {
    top: 0;
  }
}
// 全局小提示框样式
.ivu-message {
  /deep/ .ivu-message-notice-content {
    padding: 0 20px;
    line-height: 58px;
    /deep/ .ivu-icon-ios-checkmark-circle:before {
      content: "";
      display: inline-block;
      @include sprite(-50px, -492px, 20px, 20px);
    }
    /deep/ .ivu-icon-ios-close-circle:before {
      content: "";
      display: inline-block;
      @include sprite(-90px, -492px, 20px, 20px);
    }
    span {
      font-size: 18px;
      color: #7b8fa5;
      font-weight: 600;
    }
  }
}
</style>
<script>
export default {
  components: {

  },
  data () {
    return {

    }
  },
  methods: {
  },
  created () { },
  mounted () {

  }
}
</script>

