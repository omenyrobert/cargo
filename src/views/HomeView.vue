<template>
  <div
    class=""
    style="
      background-image: url('https://images.unsplash.com/photo-1585713181935-d5f622cc2415?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80');
      background-size: cover;
      height: 100vh;
    "
  >
    <div class="flex backdrop-brightness-50 h-full">
      <div class="w-7/12">
        <h1 class="text-white z-50 text-4xl font-bold text-center mt-[40vh]">
          Cargo Management
        </h1>
      </div>
      <div class="w-5/7">
        <div
          class="w-[500px] rounded-2xl p-10 bg-white mr-20 h-[600px] mt-[20vh]"
        >
          <h1
            class="text-blue-500 z-50 text-4xl font-bold text-center mt-[5vh]"
          >
            Cargo Management
          </h1>
          <p class="text-blue-500 text-2xl font-semibold mt-10">Login</p>
          <div class="mt-10">
            <label class="text-gray-500 mt-5">Email</label>
            <input
              type="text"
              class="w-full border border-gray-300 rounded h-10 px-5 text-sm mt-1"
              placeholder="Email"
            />
          </div>
          <div class="mt-5">
            <label class="text-gray-500">Email</label>
            <input
              type="text"
              class="w-full border border-gray-300 rounded h-10 px-5 text-sm mt-1"
              placeholder="Email"
            />
          </div>
          <div class="flex justify-between">
            <div></div>
            <div class="mt-5">
              <p class="text-blue-500 font-medium cursor-pointer">
                Forgot Password?
              </p>
            </div>
          </div>
          <RouterLink to="/dashboard">
            <div
              class="text-center text-white cursor-pointer bg-blue-500 font-semibold rounded p-2 mt-5"
            >
              Login
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
