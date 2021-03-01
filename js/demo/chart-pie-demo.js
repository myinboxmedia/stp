// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
// var ctx = document.getElementById("myPieChart");
// var myPieChart = new Chart(ctx, {
//   type: 'doughnut',
//   data: {
//     labels: ["Direct", "Referral", "Social"],
//     datasets: [{
//       data: [55, 30, 15],
//       backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
//       hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
//       hoverBorderColor: "rgba(234, 236, 244, 1)",
//     }],
//   },
//   options: {
//     maintainAspectRatio: false,
//     tooltips: {
//       backgroundColor: "rgb(255,255,255)",
//       bodyFontColor: "#858796",
//       borderColor: '#dddfeb',
//       borderWidth: 1,
//       xPadding: 15,
//       yPadding: 15,
//       displayColors: false,
//       caretPadding: 10,
//     },
//     legend: {
//       display: false
//     },
//     cutoutPercentage: 80,
//   },
// });

var ctx = document.getElementById("myPieChart").getContext('2d');
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Client ID", "SMPP A/C", "No of SMS"],
        datasets: [{
            backgroundColor: [
                "#37a2eb",
                "#1cc88a",
                "#ff6384"
            ],
            data: [12975, 19335, 3663]
        }]
    },
    options: {
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
        },
        legend: {
            display: false
        },
        cutoutPercentage: 50,
    },
});



var ctx = document.getElementById("myPieChart1").getContext('2d');
var myPieChart1 = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Client ID", "SMS Submitted", "Delivered", "Failed", "Unknown"],
        datasets: [{
            backgroundColor: [
                "#37a2eb",
                "#f8ce6b",
                "#1cc88a",
                "#ff6384",
                "#8e8e8e"
            ],
            data: [12975, 19335, 3663, 77887, 8880]
        }]
    },
    options: {
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
        },
        legend: {
            display: false
        },
        cutoutPercentage: 30,
    },
});

var ctx = document.getElementById("myPieChart2").getContext('2d');
var myPieChart1 = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["SMPP Provider", "Total SMS Submitted ", "Unknown Del"],
        datasets: [{
            backgroundColor: [
                "#37a2eb",
                "#f8ce6b",
                "#1cc88a"
            ],
            data: [12975, 19335, 3663]
        }]
    },
    options: {
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
        },
        legend: {
            display: false
        },
        cutoutPercentage: 30,
    },
});


var ctx = document.getElementById("myPieChart3").getContext('2d');
var myPieChart1 = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Error Wise", "Oprator Wise", "Client Wise"],
        datasets: [{
            backgroundColor: [
                "#1cc88a",
                "#ff6384",
                "#8e8e8e"
            ],
            data: [3663, 77887, 8880]
        }]
    },
    options: {
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
        },
        legend: {
            display: false
        },
        cutoutPercentage: 30,
    },
});