// const APIURL = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={74190a20c1ddbdc4f115b7fc58fd24ac}'
// const GEOAPIURL = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={74190a20c1ddbdc4f115b7fc58fd24ac}'

const apiKey = "74190a20c1ddbdc4f115b7fc58fd24ac";
const APIURL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${apiKey}`;
const APIURLForecast = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${apiKey}`;

const urlApiCall = (location) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`;

function getWeatherByLocation(location){
    fetch (urlApiCall(location)).then(function (response){
        return response.json();
    }).then(function(data){
        document.getElementById("currentResultCity").innerHTML=(data.name);    
        document.getElementById("currentTemperatureResult").innerHTML=(data.main.temp)+" Degrees";
        document.getElementById("currentHumidityResult").innerHTML=(data.main.humidity);
        document.getElementById("currentWeatherResult").innerHTML=(data.weather[0].description);
        document.getElementById("currentWindResult").innerHTML=(data.wind.speed)+" mph";
    });
    // const response = fetch(urlApiCall(location));
    // console.log(response);
    // const responseData = response.json();
    // console.log(responseData);
}


getWeatherByLocation("London");
