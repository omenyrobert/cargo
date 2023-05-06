<template>
  <div class="flex justify-between m-3">
    <div>
      <p class="text-xl font-semibold">Tracking</p>
    </div>
    <div>
      <i
        class="bi bi-three-dots-vertical font-semibold text-xl cursor-pointer"
      ></i>
    </div>
  </div>
  <div class="bg-slate-50 p-3 m-2 rounded-lg">
    <div class="h-[30vh] flex justify-center">
      <div class="progress">
        <span class="title timer text-blue-500" data-from="0" data-to="65" data-speed="1800"
          >85 %</span
        >
        <div class="overlay"></div>
        <div class="left"></div>
        <div class="right"></div>
      </div>
    </div>
    <div class="flex justify-between mt-5 cursor-pointer hover:bg-white p-2">
      <div>
        <p class="text-gray-800 text-sm">Tracking Number</p>
        <p class="text-gray-500 text-xs font-light">X46745445</p>
      </div>
      <div><i class="bi bi-chevron-down cursor-pointer text-lg"></i></div>
    </div>
    <div class="flex justify-between mt-5 cursor-pointer hover:bg-white p-2">
      <div>
        <p class="text-gray-800 text-sm">Tracking Number</p>
        <p class="text-gray-500 text-xs font-light">X46745445</p>
      </div>
      <div><i class="bi bi-chevron-down cursor-pointer text-lg"></i></div>
    </div>
    <div class="flex justify-between mt-5 cursor-pointer hover:bg-white p-2">
      <div>
        <p class="text-gray-800 text-sm">Tracking Number</p>
        <p class="text-gray-500 text-xs font-light">X46745445</p>
      </div>
      <div><i class="bi bi-chevron-down cursor-pointer text-lg"></i></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>


.progress {
  width: 200px;
  height: 200px;
  font-size: 30px;
  color: #fff;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  background: #f5f5f5;
  text-align: center;
  line-height: 200px;
  margin: 20px;
}

.progress .title {
  position: relative;
  z-index: 100;
}

.progress .overlay {
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #f5f5f5;
}

.progress .left,
.progress .right {
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: 10px solid #3B82F6;
  border-radius: 100px 0px 0px 100px;
  border-right: 0;
  transform-origin: right;
}

.progress .left {
  animation: load1 1s linear forwards;
}

.progress:nth-of-type(2) .right,
.progress:nth-of-type(3) .right {
  animation: load2 0.5s linear forwards 1s;
}

.progress:last-of-type .right,
.progress:first-of-type .right {
  animation: load3 0.8s linear forwards 1s;
}

@keyframes load1 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(180deg);
  }
}

@keyframes load2 {
  0% {
    z-index: 100;
    transform: rotate(180deg);
  }

  100% {
    z-index: 100;
    transform: rotate(270deg);
  }
}

@keyframes load3 {
  0% {
    z-index: 100;
    transform: rotate(180deg);
  }

  100% {
    z-index: 100;
    transform: rotate(315deg);
  }
}
</style>
