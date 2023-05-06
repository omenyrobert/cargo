<template>
  <div class="flex h-screen w-full bg-slate-50">
    <div class="w-[300px]">
      <sidebar />
    </div>
    <div class="w-full">
      <navbar />
      <div class="flex -mt-8">
        <div class="w-9/12">
          <Cards />
          <shipgraph />
          <shippingDashboard />
        </div>
        <div
          class="w-3/12 border border-gray-100 shadow bg-white p-2 mt-2 rounded-md h-[92vh]"
        >
          <shipdoughtnut />
          <br />
          <p class="font-semibold mt-2">Out Standarding Invoices</p>
          <div
            class="flex justify-between mt-3 rounded-md bg-slate-50 hover:bg-slate-100 cursor-pointer"
          >
            <div class="p-2">
              <p class="text-sm">Laptop</p>
              <p class="text-xs text-gray-500">Dell</p>
            </div>
            <div class="p-2">
              <p class="text-gray-500 text-sm">Omeny Robert</p>
            </div>
            <div class="p-2">
              <p class="text-blue-500">250,000</p>
            </div>
          </div>
          <div
            class="flex justify-between mt-3 rounded-md bg-slate-50 hover:bg-slate-100 cursor-pointer"
          >
            <div class="p-2">
              <p class="text-sm">Laptop</p>
              <p class="text-xs text-gray-500">Dell</p>
            </div>
            <div class="p-2">
              <p class="text-gray-500 text-sm">Omeny Robert</p>
            </div>
            <div class="p-2">
              <p class="text-blue-500">250,000</p>
            </div>
          </div>
          <div
            class="flex justify-between mt-3 rounded-md bg-slate-50 hover:bg-slate-100 cursor-pointer"
          >
            <div class="p-2">
              <p class="text-sm">Laptop</p>
              <p class="text-xs text-gray-500">Dell</p>
            </div>
            <div class="p-2">
              <p class="text-gray-500 text-sm">Omeny Robert</p>
            </div>
            <div class="p-2">
              <p class="text-blue-500">250,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import sidebar from "../components/sidebar.vue";
import navbar from "../components/navbar.vue";
import Cards from "../components/Cards.vue";
import shipgraph from "../components/shipgraph.vue";
import shippingDashboard from "../components/shippingDashboard.vue";
import shipdoughtnut from "../components/shipdoughtnut.vue";

import {
  MagnifyingGlassIcon,
  ChevronUpIcon,
  ArrowUpOnSquareIcon,
  Squares2X2Icon,
  ChevronDownIcon,
  StarIcon,
  ChartBarIcon,
  InboxIcon,
  ViewfinderCircleIcon,
  TrashIcon,
  PencilIcon,
} from "@heroicons/vue/24/solid";
import { Switch, Dialog, DialogPanel, DialogTitle } from "@headlessui/vue";

let db = new Localbase("db");
export default {
  name: "dashboard",
  components: {
    sidebar,
    navbar,
    PencilIcon,
    MagnifyingGlassIcon,
    ChevronUpIcon,
    Switch,
    TrashIcon,
    ArrowUpOnSquareIcon,
    Squares2X2Icon,
    ChevronDownIcon,
    shippingDashboard,
    shipgraph,
    Cards,
    StarIcon,
    ChartBarIcon,
    InboxIcon,
    ViewfinderCircleIcon,
    shipdoughtnut,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
