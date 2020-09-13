<style lang='scss' scoped>
</style>

<template>
  <div :id="id"
       :style="style">
  </div>
</template>

<script>
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/line');
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');
require('echarts/lib/component/markLine');// 标记线
require('echarts/lib/component/dataZoom');
require('echarts/lib/component/markPoint');
require('echarts/lib/component/markArea');
export default {
  props: {
    id: { type: String, required: true },
    width: { type: String, default: '100%' },
    height: { type: String, default: '100%' },
    options: { type: Object, required: true }
  },
  computed: {
    style () {
      return {
        height: this.height,
        width: this.width
      };
    }
  },
  data () {
    return {
      myCharts: null,
    }
  },
  mounted () {
    this.init(this.id, this.options);
  },
  methods: {
    init (id, options) {
      this.myCharts = echarts.init(document.querySelector(`#${id}`));
      // 自适应窗口
      window.addEventListener('resize', () => {
        this.myCharts.resize();
      });
      // this.myCharts.on('mouseover', () => {
      //   this.myCharts.setOption({
      //     series: {
      //       // name: params.seriesName,
      //       symbolSize: 10,
      //       itemStyle: {
      //         normal: {
      //           color: "#3880EA",  // 会设置点和线的颜色，所以需要下面定制 line
      //           borderWidth: 3,
      //           borderColor: "#fff"  // 点边线的颜色
      //         }
      //       },
      //       lineStyle: {
      //         width: 3
      //       }

      //     }
      //   });
      // });
      // this.myCharts.on('mouseout', () => {
      //   this.myCharts.setOption({
      //     series: {
      //       // name: params.seriesName,
      //       symbolSize: 0,
      //       lineStyle: {
      //         width: 2
      //       }
      //     }
      //   });
      // });
      // 设置配置
      this.myCharts.setOption(options);
    }
  },
  watch: {
    options: {
      deep: true,
      handler (newVal) {
        this.init(this.id, newVal);
      }
    }
  }
}

</script>