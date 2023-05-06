<template>
  <div class="w-full flex">
    <div class="p-5 w-9/12 flex">
      <div class="bg-orange-400 rounded-md pt-1 px-2 h-6 mt-1 text-white">
        <StarIcon class="h-4" />
      </div>
      <h3 class="font-medium text-xl ml-2 text-blue-500">Hi Omeny Robert</h3>
    </div>
    <div class="py-5 -mt-1 w-3/12 flex">
      <div class="w-2/3">
        <input
          type="search"
          class="w-full border rounded-2xl p-1 border-gray-200"
        />
      </div>
      <div class="px-3 w-1/3 flex">
        <div class="mx-3">
          <i class="bi bi-bell text-2xl"></i>
        </div>
        <div class="flex relative">
          <div>
            <img
              class="rounded-full w-8 h-8"
              src="https://images.pexels.com/photos/4010484/pexels-photo-4010484.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
          </div>
          <div>
            <i class="bi bi-chevron-down cursor-pointer text-xl" @click="openProfile"></i>
          </div>
        </div>
        <div
          v-if="isProfile"
          class="absolute bg-white h-32 flex justify-between flex-col w-36 z-50 shadow-lg -ml-7 mt-8 rounded-md border border-gray-200"
        >
          <div class="m-2">
            <p class="text-gray-700">Omeny Robert</p>
            <p class="text-sm text-blue-500">men@gamil.com</p>
          </div>

          <div
            class="flex bg-gray-200 text-blue-500 pl-4 py-1 cursor-pointer rounded-b-md"
          >
            <p class="text-sm">LogOut</p>
            <i class="bi bi-box-arrow-in-left ml-2 text-xl -mt-1"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

  <br />
</template>
<script>
import {
  Squares2X2Icon,
  ChevronDownIcon,
  StarIcon,
  ChartBarIcon,
  InboxIcon,
  ViewfinderCircleIcon,
} from "@heroicons/vue/24/solid";
export default {
  name: "navbar",
  components: {
    Squares2X2Icon,
    ChevronDownIcon,
    StarIcon,
    ChartBarIcon,
    InboxIcon,
    ViewfinderCircleIcon,
  },
  data() {
    return {
      isProfile: false,
    };
  },
  methods: {
    openProfile() {
      this.isProfile = !this.isProfile;
    },
  },
};
</script>
