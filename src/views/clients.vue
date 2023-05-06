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
            Clients
          </div>
          <div class="w-[500px]">
            <input
              type="text"
              placeholder="search for cargo"
              class="py-2 px-5 w-full text-sm border border-gray-200 rounded-3xl"
            />
          </div>
          <div
            class="w-[150px] h-10 cursor-pointer m-2 bg-blue-500 rounded-md text-white flex"
          >
            <div class="ml-2">
              <i class="bi bi-plus font-bold text-4xl"></i>
            </div>
            <div class="mt-2">Add Client</div>
          </div>
        </div>

        <!-- heading -->
        <div
          class="flex text-gray-600 border-b border-gray-300 mt-5 font-medium"
        >
          <div class="w-1/12 p-3">Name</div>
          <div class="w-2/12 p-3">Name</div>
          <div class="w-3/12 p-3">Gendar</div>
          <div class="w-2/12 p-3">Country</div>
          <div class="w-3/12 p-3">Place Of Residence</div>
          <div class="w-1/12 p-3">Email</div>
          <div class="w-2/12 p-3">Phone</div>
          <div class="w-1/12 p-3">Action</div>
        </div>

        <div
          class="flex text-gray-500 border-b border-gray-100 font-light text-sm hover:border-l-blue-500 hover:border-l-2 cursor-pointer hover:bg-slate-50"
        >
          <div class="w-1/12 p-3">1</div>
          <div class="w-2/12 p-3">Omeny Robert</div>
          <div class="w-3/12 p-3">John Doe - +256 7578 786 55</div>
          <div class="w-2/12 p-3">
            <span class="text-green-600">Uganda</span>
          </div>
          <div class="w-3/12 p-3">Kampala Namugongo</div>
          <div class="w-1/12 p-3">
            <span class="text-gray-500">rob£gmai.com</span>
          </div>
          <div class="w-2/12 p-3">
            <span class="text-gray-500">+256 75676755</span>
          </div>
          <div class="w-1/12 p-3 flex">
            <i class="bi bi-trash text-red-600"></i>
            <i class="bi bi-pencil-square ml-5 text-yellow-600"></i>
          </div>
        </div>
        <div
          class="flex text-gray-500 border-b border-gray-100 font-light text-sm hover:border-l-blue-500 hover:border-l-2 cursor-pointer hover:bg-slate-50"
        >
          <div class="w-1/12 p-3">1</div>
          <div class="w-2/12 p-3">Omeny Robert</div>
          <div class="w-3/12 p-3">John Doe - +256 7578 786 55</div>
          <div class="w-2/12 p-3">
            <span class="text-green-600">Uganda</span>
          </div>
          <div class="w-3/12 p-3">Kampala Namugongo</div>
          <div class="w-1/12 p-3">
            <span class="text-gray-500">rob£gmai.com</span>
          </div>
          <div class="w-2/12 p-3">
            <span class="text-gray-500">+256 75676755</span>
          </div>
          <div class="w-1/12 p-3 flex">
            <i class="bi bi-trash text-red-600"></i>
            <i class="bi bi-pencil-square ml-5 text-yellow-600"></i>
          </div>
        </div>
        <div
          class="flex text-gray-500 border-b border-gray-100 font-light text-sm hover:border-l-blue-500 hover:border-l-2 cursor-pointer hover:bg-slate-50"
        >
          <div class="w-1/12 p-3">1</div>
          <div class="w-2/12 p-3">Omeny Robert</div>
          <div class="w-3/12 p-3">John Doe - +256 7578 786 55</div>
          <div class="w-2/12 p-3">
            <span class="text-green-600">Uganda</span>
          </div>
          <div class="w-3/12 p-3">Kampala Namugongo</div>
          <div class="w-1/12 p-3">
            <span class="text-gray-500">rob£gmai.com</span>
          </div>
          <div class="w-2/12 p-3">
            <span class="text-gray-500">+256 75676755</span>
          </div>
          <div class="w-1/12 p-3 flex">
            <i class="bi bi-trash text-red-600"></i>
            <i class="bi bi-pencil-square ml-5 text-yellow-600"></i>
          </div>
        </div>
        <div
          class="flex text-gray-500 border-b border-gray-100 font-light text-sm hover:border-l-blue-500 hover:border-l-2 cursor-pointer hover:bg-slate-50"
        >
          <div class="w-1/12 p-3">1</div>
          <div class="w-2/12 p-3">Omeny Robert</div>
          <div class="w-3/12 p-3">John Doe - +256 7578 786 55</div>
          <div class="w-2/12 p-3">
            <span class="text-green-600">Uganda</span>
          </div>
          <div class="w-3/12 p-3">Kampala Namugongo</div>
          <div class="w-1/12 p-3">
            <span class="text-gray-500">rob£gmai.com</span>
          </div>
          <div class="w-2/12 p-3">
            <span class="text-gray-500">+256 75676755</span>
          </div>
          <div class="w-1/12 p-3 flex">
            <i class="bi bi-trash text-red-600"></i>
            <i class="bi bi-pencil-square ml-5 text-yellow-600"></i>
          </div>
        </div>
        <div
          class="flex text-gray-500 border-b border-gray-100 font-light text-sm hover:border-l-blue-500 hover:border-l-2 cursor-pointer hover:bg-slate-50"
        >
          <div class="w-1/12 p-3">1</div>
          <div class="w-2/12 p-3">Omeny Robert</div>
          <div class="w-3/12 p-3">John Doe - +256 7578 786 55</div>
          <div class="w-2/12 p-3">
            <span class="text-green-600">Uganda</span>
          </div>
          <div class="w-3/12 p-3">Kampala Namugongo</div>
          <div class="w-1/12 p-3">
            <span class="text-gray-500">rob£gmai.com</span>
          </div>
          <div class="w-2/12 p-3">
            <span class="text-gray-500">+256 75676755</span>
          </div>
          <div class="w-1/12 p-3 flex">
            <i class="bi bi-trash text-red-600"></i>
            <i class="bi bi-pencil-square ml-5 text-yellow-600"></i>
          </div>
        </div>
        <div
          class="flex text-gray-500 border-b border-gray-100 font-light text-sm hover:border-l-blue-500 hover:border-l-2 cursor-pointer hover:bg-slate-50"
        >
          <div class="w-1/12 p-3">1</div>
          <div class="w-2/12 p-3">Omeny Robert</div>
          <div class="w-3/12 p-3">John Doe - +256 7578 786 55</div>
          <div class="w-2/12 p-3">
            <span class="text-green-600">Uganda</span>
          </div>
          <div class="w-3/12 p-3">Kampala Namugongo</div>
          <div class="w-1/12 p-3">
            <span class="text-gray-500">rob£gmai.com</span>
          </div>
          <div class="w-2/12 p-3">
            <span class="text-gray-500">+256 75676755</span>
          </div>
          <div class="w-1/12 p-3 flex">
            <i class="bi bi-trash text-red-600"></i>
            <i class="bi bi-pencil-square ml-5 text-yellow-600"></i>
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
