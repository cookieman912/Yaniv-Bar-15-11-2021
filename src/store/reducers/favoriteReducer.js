import { favoriteService } from '../../Services/favoritesService'

const INITIAL_STATE = {
    favorites: favoriteService.query()
}


export function favoriteReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case "ADD_FAVORITE":
            return {
                ...state,
               favorites:action.favorites
            }
        case "REMOVE_FAVORITE":
            return {
                ...state,
                favorites:action.favorites
            }   
        default: return state
    }
}