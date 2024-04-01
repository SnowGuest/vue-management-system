import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      component: () => import("@/views/login/index.vue"),
      meta: {
        white: true
      }
    },
    {
      path: "/",
      redirect:"/dashborder",
      meta: {
        title: "首页"
      },
      component: () => import("@/layouts/homePage/index.vue"),
      children: [
        {
          path: "dashborder",
          meta: {
            title: "仪表盘",
          },
          component: () => import("@/pages/dashborder/index.vue")
        },
        {
          path: "table",
          meta: {
            title: "table测试页",
          },
          component: () => import("@/pages/table/index.vue")
        }, {
          path: "menu",
          meta: {
            title: "菜单管理",
          },
          component: () => import("@/pages/menu/index.vue")
        }, {
          path: "user",
          meta: {
            title: "用户管理",
          },
          component: () => import("@/pages/user/index.vue")
        }, {
          path: "role",
          meta: {
            title: "角色管理",
          },
          component: () => import("@/pages/role/index.vue")
        },
      ]
    }
  ]
});




export default router
