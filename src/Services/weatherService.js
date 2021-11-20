import { storageService } from './async-storage.service.js'
const axios = require('axios').default;
const WEATHER_KEY = "weatherDB"

let defaultWeather = storageService.loadFromStorage(WEATHER_KEY)
if (!defaultWeather) defaultWeather = _cacheWeather();

export const weatherService = {
    query,
    searchCity,
    getForecast,
}



function query() {
    return defaultWeather
}

async function searchCity(cityName) {
    try{
        const res= await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=yG9cwpzS3KYzHg0h5iejNAFOvOcWmYz2&q=${cityName}`)
        return res.data
    }

    catch(err){
        alert('something went wrong!',err)
    }
//    const city= axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=yG9cwpzS3KYzHg0h5iejNAFOvOcWmYz2&q=${cityName}`)
//         .then(res => {
//             return res.data
//         })
}


async function getForecast(cityKey) {
 
    return axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=yG9cwpzS3KYzHg0h5iejNAFOvOcWmYz2&language=en-us&metric=true HTTP/1.1`)
        .then((res) => {
            res = res.data.DailyForecasts
            return res
        })
}

async function _cacheWeather() {
    try {
            const res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=yG9cwpzS3KYzHg0h5iejNAFOvOcWmYz2&language=en-us&metric=true HTTP/1.1`)
          let weather = res.data.DailyForecasts
            storageService.saveToStorage(WEATHER_KEY, weather)
        return weather;

    } catch (error) {
    }



}