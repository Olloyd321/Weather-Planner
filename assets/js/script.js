const APIURL = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={74190a20c1ddbdc4f115b7fc58fd24ac}'

function getWeatherByLocation(location){
    const response = fetch(APIURL+'/location/search/?query='+location);
}

getWeatherByLocation('London')