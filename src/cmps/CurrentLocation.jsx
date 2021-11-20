import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveFavorite } from "../store/actions/favoriteActions";
import cloudyDayImg from "../imgs/cloudy-day.png";
import rainImg from "../imgs/rain.png";
import sunImg from "../imgs/sun.png";
import cloudWithRainImg from "../imgs/cloud-with-rain.png";

export default function CurrentLocation() {
  const cityState = useSelector((state) => state.weatherModule.city);
  const weatherState = useSelector((state) => state.weatherModule.forecast);
  const favoriteState = useSelector((state) => state.favoriteModule.favorites);

  function checkFavorites() {

    const isInFavorites = favoriteState.find((favorite) => {
      return favorite.cityKey === cityState.Key;
    });
    if (isInFavorites) return <p>♥</p> ;
    else return <p>♡</p> ;
  }
  checkFavorites();
  const dispatch = useDispatch();

  function showWeatherConditions(condition) {
    switch (condition) {
      case "Mostly cloudy":
        return <img src={cloudyDayImg}></img>;
      case "Rain" || "Showers":
        return <img src={rainImg}></img>;
      case "Sunny":
        return <img src={sunImg}></img>;
      case "Mostly cloudy w/ showers":
        return <img src={cloudWithRainImg}></img>;

      default:
        return <img src={sunImg}></img>;
    }
  }

  return (
    <div className="current-location">
      <div className="current-location-details">
        {showWeatherConditions(weatherState[0].Day.IconPhrase)}

        <p>
          It is currently {weatherState[0].Day.IconPhrase} in{" "}
          {cityState.LocalizedName}{" "}
        </p>
      </div>
      <div className="save-details">
        {checkFavorites()}
        <button
          onClick={() => {
            const favoriteToSave = {
              cityName: cityState.LocalizedName,
              cityKey: cityState.Key,
            };
            dispatch(saveFavorite(favoriteToSave));
          }}
        >
          save
        </button>
      </div>
    </div>
  );
}
