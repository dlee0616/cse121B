function getWeather() 
{
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(function(position){
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude
            getWeather(latitude, longitude)
        })
    }
    else{
        console.log("Unable to find your location")
    }
}

function displayWeather(latitude, longitude)
{
    let url = `https://api.darksky.net/forecast/f672ff13193bfcc40427a678ebfdbc71/${latitude},${longitude}` + `?format=jsonp&callback=displayWeather`;
    var msg = document.createElement("msg");
    msg.type = "text/javascript";
    msg.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
    displayWeather(object)

}

let humidity;
let pressure;
let uvIndex;
let temperature;
let windBearing;
let windSpeed;
let weatherSummary;

window.onload = function() {
  humidity = document.getElementById("humidity");
  pressure = document.getElementById("pressure");
  uvIndex = document.getElementById("uvIndex");
  temperature = document.getElementById("temperature");
  windBearing = document.getElementById("windBearing");
  windSpeed = document.getElementById("currentWindSpeed");
  weatherSummary = document.getElementById("weatherSummary");
}

function farenToCel(k) {
    return Math.round((k - 32) * 0.5556 );
  }
  
  function hPercentage(h) {
    return Math.round(h * 100);
  }
  
  function degreesToDirection(degrees) {
      var range = 360/16;
      var low = 360 - range/2;
      var high = (low + range) % 360;
      var angles = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]
      for (i in angles) {
  
          if(degrees>= low && degrees < high)
              return angles[i];
  
          low = (low + range) % 360;
          high = (high + range) % 360;
      }
  }
  
  function knotsToKilometres(knot) {
    return Math.round(knot * 1.852);
  }

  var obj;

 function displayWeather(obj) {
    humidity.innerHTML = "Humidity: " + humidityPercentage(object.currently.humidity) + "%";
    pressure.innerHTML = "Pressure: " + object.currently.pressure + " mb";
    uvIndex.innerHTML = "uvIndex: " + object.currently.uvIndex;
   
    temperature.innerHTML = farenToCel(object.currently.temperature) + " C" + " / " + object.currently.temperature + " F";
    windBearing.innerHTML = "Wind Direction: " + degreesToDirection(object.currently.windBearing);
    windSpeed.innerHTML = "Wind Speed: " + knotsToKilometres(object.currently.windSpeed) + " km/h";
    weatherSummary.innerHTML = "Current Location: " + object.timezone + " <br/> <br/> Weather Summary: " + object.currently.summary;

    document.getElementById("weather-summary").style.backgroundColor = "#002db3"; 
    console.log(obj);

 }