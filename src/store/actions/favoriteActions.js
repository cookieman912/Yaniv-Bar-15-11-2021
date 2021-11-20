import { favoriteService } from '../../Services/favoritesService'

export function saveFavorite(favorite) {
    return async (dispatch) => {
        try {
            const favorites = await favoriteService.saveFavorite(favorite)
            dispatch({ type: "ADD_FAVORITE", favorites })
        }
        catch {
            const favorites = [favorite]
            { dispatch({ type: "ADD_FAVORITE", favorites }) }
        }
    }

}


export function deleteFavorite(_id) {

    return async (dispatch) => {

        const favorites = JSON.parse(JSON.stringify(await favoriteService.deleteFavorite(_id)))
        dispatch({ type: "REMOVE_FAVORITE", favorites })
    }
}

