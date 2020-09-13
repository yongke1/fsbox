import Vue from "@components/iview/iview";
import { LoadingBar } from "view-design";
import VueRouter from "vue-router";
import routes from "./router";
import { parseUrl } from "@assets/js/utils/tool.js";
import { checkToken } from "@service/login/login.js";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 从fs.com跳过来,进行token验证和注册
async function toCheckToken () {
  if (!window.location.href.includes("token")) return false;
  var parseObj = parseUrl(window.location.href);
  var payload = {
    param: {
      token: parseObj.token,
      userNo: parseObj.userNo
    }
  };
  var res = await checkToken(payload);
  return res.obj.status === 1;
}

// 路由未登录拦截
router.beforeEach(async (to, from, next) => {
  LoadingBar.start();
  let token = Vue._hyTool.getStore("token");
  if (to.path === "/login") {
    next();
  }
  // fs.com跳转过来的验证
  else if (
    to.path === "" ||
    to.path === ""
  ) {
    (await toCheckToken())
      ? next()
      : next({
        path: "/login"
      });
  }
  else {
    // 如果token失效
    if (!token) {
      next({
        path: "/login"
      });
    } else {
      next();
    }
  }
});

router.afterEach(() => {
  LoadingBar.finish();
});

export default router;
