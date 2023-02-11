function rel(){fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    // do something with the data
    var d1 = JSON.stringify(data);
    var d2 = d1.split('"');
    var advice = d2[7];
    var d3 = d2[4];
    var id = d3.slice(1,-1);
 document.getElementById("head").innerText=id;
document.getElementById("advice").innerText=advice;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
rel();
