document.addEventListener('DOMContentLoaded', cityWeather)

function weatherDataFetch(city) {
    let key = '0832bb9b1cea97eb426c2202fb77ca17';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function (resp) {
            return resp.json()})
        .then(function (data) {
            console.log(data);
        })
        .catch(function(){
        });
}
function cityWeather(e) {
    weatherDataFetch('Elva')
}






