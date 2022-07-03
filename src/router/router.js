import watchDocs from "@/pages/watchDocs.vue";
import addDocs from "@/pages/addDocs.vue"
import blankPage from "@/pages/blankPage.vue"
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: watchDocs
  },
  {
    path: "/add-card",
    component: addDocs
  },
  {
    path: "/blank",
    component: blankPage
  },
  {
    path: "/change-card/:id",
    component: addDocs
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router