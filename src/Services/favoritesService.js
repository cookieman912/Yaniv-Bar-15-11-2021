import { storageService } from './async-storage.service.js'
const axios = require('axios').default;
const FAVORITE_KEY = "weatherFavoritesDB"

let favorites = storageService.loadFromStorage(FAVORITE_KEY)
if (!favorites) favorites = [];




export const favoriteService = {
    query,
    saveFavorite,
    deleteFavorite
}



function query() {
    return favorites
}

async function saveFavorite(favorite) {
    try {
        favorite.weather = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${favorite.cityKey}?apikey=yG9cwpzS3KYzHg0h5iejNAFOvOcWmYz2&details=false`)
            .then(res => {
                return res.data[0]
            })

        favorite._id = makeId();
        favorites.push(favorite)
        storageService.saveToStorage(FAVORITE_KEY, favorites)
        return favorites
    }
    catch {
        favorite._id = makeId();
        favorites.push(favorite)
        storageService.saveToStorage(FAVORITE_KEY, favorites)
        return favorites
    }
}

 function deleteFavorite(_id) {
    const idx = favorites.findIndex(favorite => favorite._id === _id)
    favorites.splice(idx, 1)
    storageService.saveToStorage(FAVORITE_KEY, favorites)
    return favorites

}



function makeId(length = 7) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}