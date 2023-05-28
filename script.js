var ctx1 = document.getElementById("pieChart").getContext("2d");
     var myChart1 = new Chart(ctx1, {
     type: "pie",
     data: {
         labels: [
         "Sunday",
         "Monday",
         "Tuesday",
         "Wednesday",
         "Thursday",
         "Friday",
         "Saturday",
          ],
         datasets: [
         {
             label: "Temparature in C",
             data: [23, 27, 22, 25, 30, 33, 28],
             backgroundColor: ["grey", "green", "red", "gold", "aqua", "royalblue", "black"]
        },
        ],
     },
     });