/**路由文件 */
const App = resolve => require(['../App'], resolve);
const Login = () => import("@views/login/login.vue");
const Main = () => import("@views/main.vue");
const notFound = () => import("@views/404/404.vue");
const OnLine = () => import("@views/onLine/onLine.vue");
const Diagnosing = () => import("@views/diagnosing/diagnosing.vue");
const BoxPro = () => import("@views/boxPro/boxPro.vue");
const order = () => import("@views/order/order.vue");
const apply = () => import("@views/order/apply.vue");
const applyDetail = () => import("@views/order/detail.vue");
const configuration = () => import("@views/configuration/configuration.vue");
const afterSales = () => import("@views/afterSales/afterSales.vue");
const ddm = () => import("@views/ddm/ddm.vue");
const announcement = () => import("@views/announcement/announcement.vue");
const helpList = () => import("@views/helpCenter/helpList.vue");
const helpDetail = () => import("@views/helpCenter/helpDetail.vue");
const feedback = () => import("@views/feedback/feedback.vue");
// const test = () => import("@views/test/test.vue");

export default [
  {
    path: "*",
    name: "404",
    component: notFound
  },
  {
    path: '/',
    component: App,
    children: [{
      path: '',
      redirect: 'login'
      // redirect: '404' //维护使用
    },
    {
      path: "login",
      name: "login",
      component: Login
    },
    {
      path: "main",
      name: "main",
      component: Main,
      children: [
        {
          path: 'onLine',
          component: OnLine,
          name: 'main.onlineCoding'
        },
        {
          path: 'diagnosing',
          component: Diagnosing,
          name: 'main.Diagnosing'
        },
        {
          path: 'boxPro',
          component: BoxPro,
          name: 'main.BoxPro'
        },
        {
          path: 'order',
          component: order,
          name: 'main.order'
        },
        {
          path: 'apply',
          component: apply,
          name: 'main.apply'
        },
        {
          path: 'applyDetail',
          component: applyDetail,
          name: 'main.applyDetail'
        },
        {
          path: 'configuration',
          component: configuration,
          name: 'main.configuration'
        },
        {
          path: 'afterSales',
          component: afterSales,
          name: 'main.afterSales'
        },
        {
          path: 'ddm',
          component: ddm,
          name: 'main.ddm'
        },
        {
          path: 'announcement',
          component: announcement,
          name: 'main.announcement'
        },
        {
          path: 'helpList',
          component: helpList,
          name: 'main.helpList'
        },
        {
          path: 'helpDetail/:id',
          component: helpDetail,
          name: 'main.helpDetail'
        },
        {
          path: 'feedback',
          component: feedback,
          name: 'main.feedback'
        }
      ]
    },
      // {
      //   path: "/test",
      //   name: "test",
      //   component: test
      // }
    ],
  }
];
