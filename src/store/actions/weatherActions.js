
import { weatherService } from "../../Services/weatherService"

export function getForecast(key) {
  return async (dispatch) => {
    const fiveDaysForecast = await weatherService.getForecast(key)

    dispatch({ type: "SET_FORECAST", fiveDaysForecast })
  }
}

export function getCity(cityName) {
  return async (dispatch) => {
    try {
      let city = await weatherService.searchCity(cityName)
      if (city[0]) {
        city = city[0]
        dispatch({ type: "GET_CITY", city })
        const fiveDaysForecast = await weatherService.getForecast(city.Key)
        dispatch({ type: "SET_FORECAST", fiveDaysForecast })
      }
      else alert('could not find city!');
    }


    catch (err) {
      console.log('something went wrong!');
    }


  }
}

export function changeMeasure(measure) {
  console.log(measure);
  return async (dispatch) => {
    dispatch({ type: "CHANGE_MEASURE", measure })
  }
}

