import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { changeMeasure } from "../store/actions/weatherActions";
import { useDispatch } from "react-redux";
export default function AppHeader() {
  const measureState = useSelector((state) => state.weatherModule.measure);

  const dispatch = useDispatch();

  function measureButton() {
    if (measureState === "farenheit")
      return (
        <button onClick={() => dispatch(changeMeasure("celsius"))}>℉</button>
      );

    return (
      <button onClick={() => dispatch(changeMeasure("farenheit"))}>℃</button>
    );
  }

  return (
    <header className="main-header">
      <div className="header-container">
        <p>Forecastio</p>
        <ul>
          <li>{measureButton()}</li>
          <li>
            <NavLink activeClassName="active-nav" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-nav" exact to="/favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
