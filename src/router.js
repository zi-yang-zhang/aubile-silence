import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Gallery from "./views/Gallery.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
    meta: { title: "Audible Silence" },
    children: [
      {
        path: "",
        name: "home",
        component: Home,
        meta: { title: "Audible Silence" }
      },
      {
        path: "/home",
        name: "home",
        component: Home,
        meta: { title: "Audible Silence" }
      },
      {
        path: "/about",
        name: "about",
        component: About,
        meta: { title: "About" }
      },
      {
        path: "/gallery",
        name: "gallery",
        component: Gallery,
        meta: { title: "Gallery" }
      }
    ]
  }
];

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  //beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) {
    //判断是否有标题
    document.title = to.meta.title;
  }
  next(); //执行进入路由，如果不写就不会进入目标页
});

export default router;
