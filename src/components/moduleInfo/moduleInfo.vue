<style lang="scss" scoped>
.flex {
  display: flex;
}
.diagnose-info {
  flex-flow: nowrap;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  .diagnose-content-item:nth-child(1) {
    border-right: 0;
  }
  .diagnose-content-item:nth-child(2) {
    border-right: 0;
  }
  .diagnose-content-item:nth-child(3) {
    position: relative;
    &:hover {
      cursor: pointer;
      div {
        color: #3793f1;
        &.product-box {
          display: flex;
        }
      }
    }
    .product-box {
      background: #fff;
      position: absolute;
      bottom: -128px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 99;
      display: none;
      width: 466px;
      min-height: 126px;
      padding: 30px 20px;
      border-radius: 3px;
      border: 1px solid rgba(222, 229, 237, 0.5);
      box-shadow: 0 15px 35px 1px rgba(7, 49, 94, 0.08);
      .box-l {
        img {
          width: 96px;
          display: block;
        }
        margin-right: 20px;
      }
      .box-r {
        p {
          color: #3793f1;
          font-size: 14px;
          line-height: 18px;
          margin-bottom: 20px;
          &:hover {
            text-decoration: underline;
          }
        }
        span {
          color: #445f87;
          font-weight: 600;
          font-size: 16px;
        }
      }
    }
  }
  .diagnose-content-item {
    flex: 0.22;
    flex-flow: row;
    justify-content: flex-start;
    border: 2px solid #eaeff5;
    padding: 1rem;
    .content-brand-img {
      width: 54px;
      height: 54px;
      margin-right: 20px;
      display: inline-block;
      background: url("~@assets/images/icon/box_icon.png") no-repeat -50px -252px;
    }
    .content-sn-img {
      width: 54px;
      height: 49px;
      margin-right: 20px;
      display: inline-block;
      background: url("~@assets/images/icon/box_icon.png") no-repeat -124px -252px;
    }
    .content-pn-img {
      width: 40px;
      height: 54px;
      margin-right: 20px;
      display: inline-block;
      background: url("~@assets/images/icon/box_icon.png") no-repeat -198px -252px;
    }
    .content-item-info {
      flex-flow: column;
      justify-content: space-around;
      .content-title {
        color: #7b8fa5;
      }
      .content-text {
        color: #445f87;
        font-size: 20px;
        font-weight: 600;
      }
    }
    .content-pn-icon {
      width: 15px;
      height: 15px;
      background: url("~@assets/images/icon/box_icon.png") no-repeat -247px -89px;
      position: relative;
      top: 32px;
      left: 10px;
    }
  }
}
.status-success-img {
  text-align: center;
}
.status-success-msg {
  margin-top: 59px;
  font-size: 34px;
  color: #ff9c5d;
  text-align: center;
  .success-color {
    color: #32d7b0;
  }
  .error-color {
    color: #f66767;
  }
  .batch-config-btn {
    text-align: center;
    height: 46px;
    line-height: 46px;
    width: 240px;
    margin: auto;
    border: 2px solid rgba(123, 143, 165, 0.3);
    border-radius: 3px;
    font-size: 14px;
    color: rgba(123, 143, 165, 1);
    margin-top: 32px;
  }
}
.diagnose-content {
  .diagnose-table {
    width: 21.9vw;
    margin: auto;

    .table-desc {
      color: #7b8fa5;
    }
    .table-aster {
      color: red;
      margin-left: 5px;
    }
    .table-input {
      width: 100%;
      padding: 18px;
      margin: 10px 0 20px 0;
      border: 1px solid #dee5ed;
    }
    .table-input-warning {
      border: 1px solid #f66767;
    }
    .table-input:nth-child(1) {
      margin-bottom: 0;
    }
    .table-input[disabled] {
      background: rgba(245, 248, 251, 1);
    }
    .table-sn-yes {
      width: 15px;
      height: 17px;
      position: absolute;
      top: 25px;
      right: -35px;
      background: url("~@assets/images/icon/box_icon.png") no-repeat -56px -340px;
    }
    .table-sn-no {
      width: 15px;
      height: 17px;
      position: absolute;
      top: 25px;
      right: -35px;
      background: url("~@assets/images/icon/box_icon.png") no-repeat -102px -340px;
    }
    .table-brand {
      position: relative;
      cursor: pointer;
      .input-icon-down {
        position: absolute;
        right: 10px;
        top: 30px;
      }
      ul {
        flex-flow: row wrap;
        color: #445f87;
        position: relative;
        right: 15%;
        text-align: center;
        background: #ffffff;
        z-index: 1;
        box-shadow: 0 5px 15px 5px rgba(7, 49, 94, 0.1);
        li {
          width: 25%;
          border: 0.5px solid #dee5ed;
          padding: 7px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .active {
        color: #ffffff;
        background-color: #3793f1;
      }
      .table-brand-desc {
        text-align: left;
        padding: 22px 63px 21px 40px;
      }
    }
    .brand-select-model {
      position: absolute;
      width: 140%;
    }
    .table-revise-sn {
      justify-content: space-between;
      margin-top: 22px;
      margin-bottom: 26px;
      color: #7b8fa5;
      .revise-sn-left {
        position: relative;
        .sn-left-icon {
          width: 20px;
          height: 20px;
          position: absolute;
          top: 0;
          right: -30px;
          background: url("~@assets/images/icon/box_icon.png") no-repeat -157px -389px;
        }
        .sn-left-icon:hover {
          background: url("~@assets/images/icon/box_icon.png") no-repeat -194px -389px;
        }
        .revise-sn-hint {
          z-index: -1;
          position: absolute;
          width: 310px;
          font-size: 14px;
          color: #7b8fa5;
          padding: 17px 20px 12px 20px;
          box-shadow: 0px 2px 15px 0px rgba(22, 81, 131, 0.15);
          left: -90%;
          background: #fff;
        }
        .sn-left-icon:hover ~ .revise-sn-hint {
          z-index: 1;
        }
      }
      .revise-sn-right {
        div {
          display: flex;
        }
        div:nth-child(2) {
          margin-left: 22px;
        }
      }
      .revise-sn-no {
        width: 20px;
        height: 20px;
        cursor: pointer;
        background: url("~@assets/images/icon/box_icon.png") no-repeat -50px -389px;
      }
      .revise-sn-yes {
        width: 20px;
        height: 20px;
        cursor: pointer;
        background: url("~@assets/images/icon/box_icon.png") no-repeat -84px -389px;
      }
      .revise-sn-none {
        width: 20px;
        height: 20px;
        cursor: pointer;
        background: url("~@assets/images/icon/box_icon.png") no-repeat -122px -389px;
      }
    }
    .table-switch {
      justify-content: space-between;
      margin-bottom: 25px;
      .revise-batch-left {
        position: relative;
        div {
          width: 20px;
          height: 20px;
          position: absolute;
          top: 0;
          right: -30px;
          background: url("~@assets/images/icon/box_icon.png") no-repeat -157px -389px;
        }
        div:hover {
          background: url("~@assets/images/icon/box_icon.png") no-repeat -194px -389px;
        }
        p {
          z-index: -1;
          position: absolute;
          width: 310px;
          font-size: 14px;
          color: #7b8fa5;
          padding: 17px 20px 12px 20px;
          box-shadow: 0px 2px 15px 0px rgba(22, 81, 131, 0.15);
          left: 0%;
          background: #fff;
        }
        div:hover ~ p {
          z-index: 1;
        }
      }
    }
    .writeCode-btn {
      width: 100%;
      padding: 17px;
      background: linear-gradient(to right, #37a0f6, #387ee9);
      margin: auto;
      text-align: center;
      color: #ffffff;
      cursor: pointer;
      border-radius: 3px;
    }
    .writeCode-btn:hover {
      opacity: 0.9;
    }
    .table-brand-warning {
      color: #f66767;
    }
    .brand-right-warning {
      position: absolute;
      right: -200px;
      top: 22px;
    }
    .band {
      margin-top: 20px;
    }
    .transmission-distance {
      margin-top: 20px;
    }
  }
}
</style>
<template>
  <div>
    <!-- 模块信息 -->
    <div class="diagnose-info flex">
      <div class="diagnose-content-item flex">
        <div class="content-brand-img"></div>
        <div class="content-item-info flex">
          <div class="content-title">Brand</div>
          <div class="content-text">{{Brand||'--'}}</div>
        </div>
      </div>
      <div class="diagnose-content-item flex">
        <div class="content-sn-img"></div>
        <div class="content-item-info flex">
          <div class="content-title">S/N</div>
          <div class="content-text">{{SN}}</div>
        </div>
      </div>
      <div class="diagnose-content-item flex">
        <div class="content-pn-img"></div>
        <div class="content-item-info flex">
          <div class="content-title">P/N</div>
          <div class="content-text">{{PN}}</div>
        </div>
        <div class="content-pn-icon"></div>
        <!-- 产品链接 -->
        <div class="product-box">
          <div class="box-l">
            <img :src="moduleData.productsImage"
                 alt="">
          </div>
          <div class="box-r">
            <a :href="moduleData.productsHref"
               target="_blank">
              <p>{{moduleData.productsName}}</p>
            </a>
            <span v-html="moduleData.productsPrice"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModuleInfo",
  props: {
    Brand: {
      type: String,
      default: ""
    },
    SN: {
      type: String,
      default: ""
    },
    PN: {
      type: String,
      default: ""
    },
    moduleData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
}
</script>