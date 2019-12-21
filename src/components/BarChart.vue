<template>
  <div class="about">
    <canvas id="fees-expense-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

// data imports
import feesExpenseData from "../../models/data/fees-expense-data";

export default {
  mounted() {
    this.createChart("fees-expense-chart", this.feesExpenseData);
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
      feesExpenseData
    };
  }
};
</script>