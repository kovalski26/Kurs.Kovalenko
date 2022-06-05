var ctx = document.getElementById('myChart');
var chart =  new Chart(ctx, {
  
        type: 'line',
        data: 
      
    
    {
        labels: ["January",
        "February",
        "March",
        "April",
        "May",
        "June",],
        datasets: [{
            label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
        }]
    },

});
