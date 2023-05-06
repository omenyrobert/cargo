<template>
  <div class="p-5 h-full w-full bg-blue-500">
    <div class="bg-white p-3 rounded-t-md flex">
      <div><TruckIcon class="text-blue-500 w-7 h-7" /></div>
      <div class="ml-2">
        <h1 class="font-medium text-2xl">Cargo</h1>
      </div>
    </div>
    <div class="bg-yellow-400 h-3 rounded-b-md"></div>

    <br /><br/><br/>
    <RouterLink to="/dashboard" class="p-2 font-light hover:bg-white hover:text-blue-500 rounded-md flex text-white cursor-pointerp-2">
      <div>
      
        <i class="bi bi-grid-fill text-lg"></i>
      </div>
      <div class="ml-5">Dashboard</div>
    </RouterLink>
    <RouterLink to="/" class="p-2 font-light hover:bg-white hover:text-blue-500 rounded-md flex text-white cursor-pointerp-2">
      <div>
        <UserGroupIcon class="w-5 h-5" />
      </div>
      <div class="ml-5">Shipping</div>
    </RouterLink>
    <RouterLink to="/" class="flex font-light text-sm bg-white text-blue-500 p-2 rounded-md cursor-pointer mt-2">
      <div>
        <UsersIcon class="w-5 h-5" />
      </div>
      <div class="ml-5">Clients</div>
    </RouterLink>
    <RouterLink to="/" class="flex font-light text-sm text-white hover:bg-white hover:text-blue-500 p-2 rounded-md cursor-pointer mt-2">
      <div>
        <i class="bi bi-file-earmark-easel text-lg"></i>
      </div>
      <div class="ml-5">Inlanding Cargo</div>
    </RouterLink>
    <RouterLink to="/cargo" class="flex font-light text-sm text-white hover:bg-white hover:text-blue-500 p-2 rounded-md cursor-pointer mt-2">
      <div>
        <BeakerIcon class="w-5 h-5" />
      </div>
      <div class="ml-5">Cargos</div>
    </RouterLink>
    <RouterLink to="/" class="flex font-light text-sm text-white hover:bg-white hover:text-blue-500 p-2 rounded-md cursor-pointer mt-2">
      <div>
        <i class="bi bi-receipt text-lg"></i>
      </div>
      <div class="ml-5">Invoices</div>
    </RouterLink>
    <RouterLink to="/" class="flex text-sm font-light text-white hover:bg-white hover:text-blue-500 p-2 rounded-md cursor-pointer mt-2">
      <div>
        <ShieldCheckIcon class="w-5 h-5" />
      </div>
      <div class="ml-5">Receipts</div>
    </RouterLink>
    <RouterLink to="/" class="flex text-sm font-light text-white hover:bg-white hover:text-blue-500 p-2 rounded-md cursor-pointer mt-2">
      <div>
        <i class="bi bi-kanban text-lg"></i>
      </div>
      <div class="ml-5">Human Resource</div>
    </RouterLink>
    <RouterLink to="/accounting" class="flex text-sm font-light text-white hover:bg-white hover:text-blue-500 p-2 rounded-md cursor-pointer mt-2">
      <div>
        <i class="bi bi-cash-coin text-lg"></i>
      </div>
      <div class="ml-5">Accounting</div>
    </RouterLink>
  </div>
</template>
<script>
import {
  FolderIcon,
  ChevronDownIcon,
  TruckIcon,
  UserGroupIcon,
  UsersIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
} from "@heroicons/vue/24/solid";
import { BeakerIcon } from '@heroicons/vue/24/outline'
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
export default {
  name: "sidebar",
  components: {
    FolderIcon,
    Disclosure,
    DisclosureButton,
    UsersIcon,
    ChevronDownIcon,
    TruckIcon,
    UserGroupIcon,
    BeakerIcon,
    DocumentTextIcon,
    ShieldCheckIcon,
    
  },

  methods: {},

  created() {},

  data() {
    return {};
  },
};
</script>
