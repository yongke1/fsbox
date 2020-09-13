/**挂载vue原型上的全局方法 */
/**
 *  描述：基于vue的扩展
 */
import _hyTool from "@assets/js/utils/tool";//公共方法
import hyPage from '@components/pageServices/pageServices';//分页组件
import Steping from "@components/steping/steping";//进度条组件
import ModuleInfo from "@components/moduleInfo/moduleInfo";//光模块信息组件
// 全局方法
const install = function (Vue) {
  Vue.prototype._hyTool = Vue._hyTool = Vue.prototype._hyTool || _hyTool;
  Vue.component('hyPage', hyPage);
  Vue.component(Steping.name, Steping);
  Vue.component(ModuleInfo.name, ModuleInfo);
}

const core = {
  install
}

export default core
