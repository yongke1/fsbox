// 按需引入iview
import Vue from "vue";
import mySpin from "@components/spin/spin"
import {
  Button,
  Table,
  Steps,
  Step,
  LoadingBar,
  DropdownMenu,
  Dropdown,
  DropdownItem,
  FormItem,
  Form,
  Modal,
  Input,
  Badge,
  Panel,
  Avatar,
  Icon,
  Switch,
  Radio,
  RadioGroup,
  Tooltip,
  Collapse,
  Select,
  Option,
  Message,
  Spin,
  Alert,
  Notice,
  Upload
} from "view-design";

// iview组件
Vue.component("Button", Button);
Vue.component("Table", Table);
Vue.component("Steps", Steps);
Vue.component("Step", Step);
Vue.component("LoadingBar", LoadingBar);
Vue.component("DropdownMenu", DropdownMenu);
Vue.component("Dropdown", Dropdown);
Vue.component("DropdownItem", DropdownItem);
Vue.component("Form", Form);
Vue.component("FormItem", FormItem);
Vue.component("Modal", Modal);
Vue.component("Input", Input);
Vue.component("Badge", Badge);
Vue.component("Panel", Panel);
Vue.component("Avatar", Avatar);
Vue.component("Icon", Icon);
Vue.component("i-switch", Switch);
Vue.component("Radio", Radio);
Vue.component("RadioGroup", RadioGroup);
Vue.component("Tooltip", Tooltip);
Vue.component("Collapse", Collapse);
Vue.component("Select", Select);
Vue.component("Option", Option);
Vue.component("Option", Option);
Vue.component("Spin", Spin);
Vue.component('mySpin', mySpin);// 自定义的组件
Vue.component('Alert', Alert);
Vue.component('Upload', Upload);
// Message弹框配置
Vue.prototype.$Message = Message;
Vue.prototype.$Notice = Notice;
Vue.prototype.$Message.config({
  top: '500',
  duration: 2
});

export default Vue;
