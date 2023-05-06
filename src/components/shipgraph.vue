<template>
  <div class="bg-white p-3 border border-slate-200 m-2 rounded-md">
    <div class="flex justify-between">
      <div>
        <p class="m-2 font-semibold text-xl">Analytics</p>
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
    <div class="h-[30vh]">
      <canvas style="height: 300px; width: 50%;"  id="myChart"> </canvas>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  mounted() {
    const ctx = document.getElementById("myChart");

    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "May",
          "June",
          "Jul",
          "Mar",
          "Rob",
          "John",
          "JJ",
        ],
        datasets: [
          {
            label: "Customers",
            data: [12, 69, 45, 34, 56, 44, 30, 25, 55],
            backgroundColor: [
              "rgba(2, 125, 247)",
              "rgba(2, 125, 247)",
              "rgba(2, 125, 247)",
              "rgba(2, 125, 247)",
              "rgba(2, 125, 247)",
              "rgba(2, 125, 247)",
              "rgba(2, 125, 247)",
              "rgba(2, 125, 247)",
              "rgba(2, 125, 247)",
            ],
            borderWidth: 1,
            barThickness: 30,
            // height: '100',
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
          xAxes: [
            {
              maxBarThickness: 10,
            },
          ],
        },
      },
    });
    myChart;
  },
};
</script>
