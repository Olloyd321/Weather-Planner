const apiKey = "74190a20c1ddbdc4f115b7fc58fd24ac";
const form = document.getElementById('form');
const main = document.getElementById('main');
const search = document.getElementById('search');
const noCitySelected = document.getElementById('currentResultCity')

// This function is for hiding "undefined" before user searches but still working on
// function hideNoCitySelected () {
//     if (noCitySelected = "undefined"){
//         noCitySelected.style.display = "none";
//     }
    
// }

// API call to get weather by location
function getWeatherByLocation(location){
    const urlApiCall = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`;
    const APIURLForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`;

    fetch (urlApiCall).then(function (response){
        return response.json();
    }).then(function(data){
        console.log(data);
        document.getElementById("currentResultCity").innerHTML=(data.name);    
        document.getElementById("currentTemperatureResult").innerHTML=(data.main.temp)+" °F";
        document.getElementById("currentHumidityResult").innerHTML=(data.main.humidity);
        document.getElementById("currentWeatherResult").innerHTML=(data.weather[0].description);
        document.getElementById("currentWindResult").innerHTML=(data.wind.speed)+" mph";
    });
    
    fetch (APIURLForecast).then ((response) => response.json()).then(function(data){
        console.log(data)

    });
   
    // const response = fetch(urlApiCall(location));
    // console.log(response);
    // const responseData = response.json();
    // console.log(responseData);
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = document.getElementById('formUserTextInput').value;

    if (location) {
        getWeatherByLocation(location);
    }
});

getWeatherByLocation(location);