export const feesExpenseData = {
  type: "bar",
  data: {
    datasets: [
      {
        // one line graph
        label: "Fees Collected",
        data: [100],
        backgroundColor: ["rgba(59,134,255,.5)"],
        borderColor: ["#3b86ff"],
        borderWidth: 3
      },
      {
        // another line graph
        label: "Expenses",
        data: [200],
        backgroundColor: [
          "rgba(243, 113,104,.5)" // Green
        ],
        borderColor: ["#f37168"],
        borderWidth: 3
      },
      {
        // another line graph
        label: "Difference",
        data: [100],
        backgroundColor: [
          "rgba(87, 242,97,.5)" // Green
        ],
        borderColor: ["#57f261"],
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    lineTension: 1,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 5
          }
        }
      ]
    }
  }
};

export default feesExpenseData;
