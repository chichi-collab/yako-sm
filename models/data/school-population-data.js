// data generated from the database
// it consist of the school population

export const schoolPopulationData = {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{ // one line graph
        label: "Teachers",
        data: [101, 90, 11, 12, 67, 62, 127, 140],
        backgroundColor: [
          "rgba(59,134,255,.5)"
        ],
        borderColor: [
          "#3b86ff"
        ],
        borderWidth: 3
      },
      {
        // one line graph
        label: "Students",
        data: [0, 0, 1, 2, 67, 62, 27, 14, 70, 90],
        backgroundColor: [
          "rgba(243, 113,104,.5)"
        ],
        borderColor: [
          "#f37168"
        ],
        borderWidth: 3
      },
      { // another line graph
        label: "Parents",
        data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2],
        backgroundColor: [
          "rgba(87, 242,97,.5)", // Green
        ],
        borderColor: [
          "#57f261",
        ],
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          padding: 25,
        }
      }]
    }
  }
};

export default schoolPopulationData;