<template>
  <div class="about">
    <canvas id="school-population-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

// school population data
import schoolPopulationData from "../../models/data/school-population-data";

export default {
  mounted() {
    this.createChart("school-population-chart", this.schoolPopulationData);
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);

      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });

      console.log(myChart);
    }
  },
  data() {
    return {
      schoolPopulationData
    };
  }
};
</script>
