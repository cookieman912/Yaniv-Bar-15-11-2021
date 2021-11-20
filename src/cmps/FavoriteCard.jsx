import React from "react";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCity } from "../store/actions/weatherActions";
import { deleteFavorite } from "../store/actions/favoriteActions";
import { useSelector } from "react-redux";

export default function FavoriteCard(props) {
  const dispatch = useDispatch();

  const measureState = useSelector((state) => state.weatherModule.measure);
  const [redirectState, setRedirect] = useState(false);

  async function favoriteClicked() {
    await dispatch(getCity(props.favorite.cityName));
    setRedirect(!redirectState);
  }

  function renderRedirect() {
    if (redirectState) return <Redirect to="/" />;
    else return null;
  }

  function renderTemperature() {
    if (measureState === "farenheit") {
      return <p>{props.favorite.weather.Temperature.Imperial.Value}℉</p>;
    } else
      return (
        <p>
          {" "}
          {parseInt((props.favorite.weather.Temperature.Imperial.Value - 32) * (5 / 9))}℃
        </p>
      );
  }

  return (
    <li
      onClick={() => {
        favoriteClicked();
      }}
    >
      {renderRedirect()}
      <p> {props.favorite.cityName}</p>
      {renderTemperature()}
      <p>{props.favorite.weather.WeatherText} </p>

      <button
        onClick={() => {
          dispatch(deleteFavorite(props.favorite._id));
        }}
      >
        Delete
      </button>
    </li>
  );
}
