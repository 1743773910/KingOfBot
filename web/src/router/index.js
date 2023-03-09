import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from "@/views/pk/PkIndexView"
import RecordIndexView from "@/views/record/RecordIndexView"
import RanklistIndexView from "@/views/ranklist/RanklistIndexView"
import BotIndexView from "@/views/user/bots/BotIndexView"
import NotFund from "@/views/error/NotFund"


const routes = [
  // 路径映射
  {
    path:"/",
    name:"home",
    conponent: PkIndexView
  },
  {
    // path为相对路径，即localhost:8080 + path
    path: '/pk/',
    name: "pk_index",
    component: PkIndexView,
  },
  {
    path: '/record/',
    name: "record_index",
    component: RecordIndexView,
  },
  {
    path: '/ranklist/',
    name: "ranklist_index",
    component: RanklistIndexView,
  },
  {
    path: '/user/bot/',
    name: "user_bot_index",
    component: BotIndexView,
  }, 
  {
    path: '/404/',
    name: "not_found_404",
    component: NotFund,
  },
  {
    path:"/:catchAll(.*)",
    redirect:"/404/"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
