var canvasElement = document.getElementById("chart_content");

$.getJSON("result.json", (json) => {
  var result = json.evals;
  var datasets = [];

  for (var i = 0; i < result.length; i++) {
    datasets.push({
      label: result[i].name,
      data: result[i].eval_result,
    });
  }

  function drawChart() {
    var config = {
      type: "radar",
      data: {
        labels: [
          "Past simple/past continuous",
          "Conditional",
          "Forms of the future",
          "Comparatives",
          "Prepositions",
          "Verb constructions",
          "Adverbs",
          "Passive form",
          "Coordination/subordination",
          "Present simple/present continuous",
          "Modals",
          "Conjunctive adverbs",
          "Noun",
          "Used to/be used to",
        ],
        datasets: datasets,
      },
      options: {
        plugins: {
          legend: {
            labels: {
              font: {
                size: 20,
              },
            },
          },
        },
      },
    };

    var content_chart = new Chart(canvasElement, config);
  }

  window.onload = function () {
    Chart.defaults.font.size = 20;
    drawChart();
  };
});
