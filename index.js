let mykey = "57295fe4d594f40aedb429220f9dc5e9"

function citySearch() {
  var theInput = document.getElementById('city').value;
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+theInput+'&units=metric&appid=57295fe4d594f40aedb429220f9dc5e9')
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response);

      let cityname = document.getElementById('cityname');
      cityname.innerText = theInput;

      var dt = new Date();
      dt.setMinutes( dt.getMinutes() + response.timezone/60);
      let time = document.getElementById('time');
      let timeString = dt.toUTCString()
      let timeChild = document.createElement('div')
      timeChild.innerText = timeString.substring(0, timeString.length-3)
      timeChild.setAttribute('class', 'data')
      cityname.appendChild(timeChild)

      let temp = document.getElementById('temp');
      let tempChild = document.createElement('div')
      tempChild.innerText = response.main.temp + '; Feels like: ' + response.main.feels_like;
      tempChild.setAttribute('class', 'data')
      temp.appendChild(tempChild)

      let weather = document.getElementById('weather');
      let weatherChild = document.createElement('div')
      let weatherString = response.weather[0].description;
      weatherString = weatherString.charAt(0).toUpperCase() + weatherString.slice(1)
      weatherChild.innerText = weatherString
      weatherChild.setAttribute('class', 'data')
      weather.appendChild(weatherChild)

      let wind = document.getElementById('wind');
      let windChild = document.createElement('div')
      windChild.innerText = response.wind.speed + ' meters per second';
      windChild.setAttribute('class', 'data')
      wind.appendChild(windChild)

      let cloud = document.getElementById('cloud');
      let cloudChild = document.createElement('div')
      cloudChild.innerText = response.clouds.all + '%';
      cloudChild.setAttribute('class', 'data')
      cloud.appendChild(cloudChild)

    theInput[0].reset()
    });
}


