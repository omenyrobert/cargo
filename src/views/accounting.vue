<template>
  <div class="flex h-screen w-full bg-slate-50">
    <div class="w-[300px]">
      <sidebar />
    </div>
    <div class="w-full">
      <navbar />
      <div class="bg-white h-full p-3 -mt-5">
        <div>
          <p class="text-xl font-semibold">Finance</p>
        </div>
        <div class="flex w-1/2">
          <div class="w-1/4 p-2 m-2 bg-slate-50 rounded-md text-blue-500">
            Incomes
          </div>
          <div class="w-1/4 p-2 m-2 bg-slate-50 rounded-md text-blue-500">
            Expenses
          </div>
          <div class="w-1/4 p-2 m-2 bg-slate-50 rounded-md text-blue-500">
            Reports
          </div>
          <div class="w-1/4 p-2 m-2 bg-slate-50 rounded-md text-blue-500">
            Assets
          </div>
          <div class="w-1/4 p-2 m-2 bg-slate-50 rounded-md text-blue-500">
            Accounts
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "../components/sidebar.vue";
import navbar from "../components/navbar.vue";

export default {
  components: {
    sidebar,
    navbar,
  },
};
</script>
