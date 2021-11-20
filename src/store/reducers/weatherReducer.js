import { weatherService } from "../../Services/weatherService"

// const initialState = weatherService.query()
const INITIAL_STATE={
    city: {Key: '21584', LocalizedName: 'Tel Aviv'},
    forecast:weatherService.query(),
    measure:'farenheit'
}


export function weatherReducer(state = INITIAL_STATE, action) {
  
    switch (action.type) {
        case "SET_FORECAST":
            return {
                ...state,
                forecast: action.fiveDaysForecast
            }
            case "GET_CITY":
            return{
                ...state,
               city:action.city
            }
            default: return state

            case "CHANGE_MEASURE":
            return{
                ...state,
                measure:action.measure
            }
          
    }
}