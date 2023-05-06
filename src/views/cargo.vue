<template>
  <div class="flex h-screen w-full bg-slate-50">
    <div class="w-[300px]">
      <sidebar />
    </div>
    <div class="w-full">
      <navbar />
      <div class="bg-white h-full p-3 -mt-5">
        <!-- ttile -->
        <div class="flex justify-between">
          <div
            class="w-[200px] p-2 m-2 bg-slate-50 text-2xl font-semibold rounded-md text-blue-500"
          >
            Cargo
          </div>
          <div
            class="w-[150px] h-10 cursor-pointer m-2 bg-blue-500 rounded-md text-white flex"
          >
            <div class="ml-2">
              <i class="bi bi-plus font-bold text-4xl"></i>
            </div>
            <div class="mt-2">Add Cargo</div>
          </div>
        </div>

        <div class="flex justify-between">
          <div>
            <p class="m-2 font-semibold text-xl">Analytics</p>
          </div>
          <div class="w-[500px]">
            <input
              type="text"
              placeholder="search for cargo"
              class="py-2 px-5 w-full text-sm border border-gray-200 rounded-3xl"
            />
          </div>
          <div class="flex">
            <div
              class="border border-blue-300 text-blue-500 rounded-xl m-2 cursor-pointer text-center w-16 p-1 text-xs"
            >
              Day
            </div>
            <div
              class="border border-blue-300 text-blue-500 rounded-xl m-2 cursor-pointer text-center w-16 p-1 text-xs"
            >
              Week
            </div>
            <div
              class="border border-blue-300 text-blue-500 rounded-xl m-2 cursor-pointer text-center w-16 p-1 text-xs"
            >
              Month
            </div>
            <div
              class="border border-blue-300 bg-blue-500 text-white m-2 cursor-pointer rounded-xl text-center w-16 p-1 text-xs"
            >
              Dates
            </div>
          </div>
        </div>

        <!-- heading -->
        <div class="flex text-gray-600 border-b border-gray-100 font-medium">
          <div class="w-2/12 p-3">Cargo</div>
          <div class="w-3/12 p-3">Shipper</div>
          <div class="w-2/12 p-3">Status</div>
          <div class="w-3/12 p-3">Customer</div>
          <div class="w-2/12 p-3">Payment Status</div>
        </div>

        <div
          class="flex text-gray-500 border-b border-gray-100 font-light text-sm hover:border-l-blue-500 hover:border-l-2 cursor-pointer hover:bg-slate-50"
        >
          <div class="w-2/12 p-3">#t232</div>
          <div class="w-3/12 p-3">John Doe - +256 7578 786 55</div>
          <div class="w-2/12 p-3">
            <span class="text-green-600">Reached</span>
          </div>
          <div class="w-3/12 p-3">Mary Doe - +256 7578 786 55</div>
          <div class="w-2/12 p-3"><span class="text-blue-500">60%</span></div>
        </div>
        <div
          class="flex text-gray-500 border-b border-gray-100 font-light text-sm hover:border-l-blue-500 hover:border-l-2 cursor-pointer hover:bg-slate-50"
        >
          <div class="w-2/12 p-3">#t232</div>
          <div class="w-3/12 p-3">John Doe - +256 7578 786 55</div>
          <div class="w-2/12 p-3">
            <span class="text-green-600">Reached</span>
          </div>
          <div class="w-3/12 p-3">Mary Doe - +256 7578 786 55</div>
          <div class="w-2/12 p-3"><span class="text-blue-500">60%</span></div>
        </div>
        <div
          class="flex text-gray-500 border-b border-gray-100 font-light text-sm hover:border-l-blue-500 hover:border-l-2 cursor-pointer hover:bg-slate-50"
        >
          <div class="w-2/12 p-3">#t232</div>
          <div class="w-3/12 p-3">John Doe - +256 7578 786 55</div>
          <div class="w-2/12 p-3">
            <span class="text-green-600">Reached</span>
          </div>
          <div class="w-3/12 p-3">Mary Doe - +256 7578 786 55</div>
          <div class="w-2/12 p-3"><span class="text-blue-500">60%</span></div>
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
