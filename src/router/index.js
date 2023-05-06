import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Receipts from "../views/Receipts.vue"
import Printreceipt from "../views/Printreceipt.vue"
import printInvoice from "../views/printInvoice.vue"
import dashboard from "../views/dashboard.vue"
import accounting from "../views/accounting.vue"
import cargo from "../views/cargo.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/receipts",
      name: "receipts",
      component: Receipts,
    },
    {
      path: '/printreceipt/:id',
      name: "Printreceipt",
      component: Printreceipt,
    },
    {
      path: '/printInvoice/:id',
      name: "printInvoice",
      component: printInvoice,
    },
    {
      path: '/dashboard',
      name: "dashboard",
      component: dashboard,
    },
    {
      path: '/accounting',
      name: "accounting",
      component: accounting,
    },
    {
      path: '/cargo',
      name: "cargo",
      component: cargo,
    },
    
  ],
});

export default router;
