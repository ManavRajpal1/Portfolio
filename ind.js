document.addEventListener("DOMContentLoaded", function() {
  // Example data for GeeksforGeeks chart
  const gfgData = {
    labels: ['Easy', 'Medium', 'Hard'], // Labels for the chart segments
    datasets: [{
      data: [278, 170, 39], // Example data representing the number of questions for each difficulty level
      backgroundColor: ['#4caf50', '#ff9800', '#f44336'], // Colors for each segment
      borderWidth: 1 // Border width for the segments
    }]
  };

  // Example data for LeetCode chart
  const lcData = {
    labels: ['Easy', 'Medium', 'Hard'], // Labels for the chart segments
    datasets: [{
      data: [158, 165, 37], // Example data representing the number of questions for each difficulty level
      backgroundColor: ['#4caf50', '#ff9800', '#f44336'], // Colors for each segment
      borderWidth: 1 // Border width for the segments
    }]
  };

  // Options for GeeksforGeeks chart
  const gfgOptions = {
    responsive: true, // Make the chart responsive to window resizing
    plugins: {
      legend: {
        position: 'top', // Position of the legend
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            // Customize the tooltip label to show the number of questions
            return `${tooltipItem.label}: ${tooltipItem.raw} questions`;
          }
        }
      }
    }
  };

  // Options for LeetCode chart
  const lcOptions = {
    responsive: true, // Make the chart responsive to window resizing
    plugins: {
      legend: {
        position: 'top', // Position of the legend
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            // Customize the tooltip label to show the number of questions
            return `${tooltipItem.label}: ${tooltipItem.raw} questions`;
          }
        }
      }
    }
  };

  // Create GeeksforGeeks chart
  const gfgCtx = document.getElementById('gfgChart').getContext('2d'); // Get the 2D rendering context of the canvas
  new Chart(gfgCtx, {
    type: 'doughnut', // Chart type: doughnut
    data: gfgData, // Data for the chart
    options: gfgOptions // Options for the chart
  });

  // Create LeetCode chart
  const lcCtx = document.getElementById('lcChart').getContext('2d'); // Get the 2D rendering context of the canvas
  new Chart(lcCtx, {
    type: 'doughnut', // Chart type: doughnut
    data: lcData, // Data for the chart
    options: lcOptions // Options for the chart
  });

  // Calculate total number of questions for GeeksforGeeks
  const totalGFGQuestions = gfgData.datasets[0].data.reduce((a, b) => a + b, 0);
  // Calculate total number of questions for LeetCode
  const totalLCQuestions = lcData.datasets[0].data.reduce((a, b) => a + b, 0);

  // Update the total questions count on the webpage
  document.getElementById('totalGFGQuestions').textContent = totalGFGQuestions;
  document.getElementById('totalLCQuestions').textContent = totalLCQuestions;
});
