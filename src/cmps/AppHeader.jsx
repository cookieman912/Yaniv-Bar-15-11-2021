import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { changeMeasure } from "../store/actions/weatherActions";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import hamburgerImg from '../imgs/hamburger.png';

export default function AppHeader() {
  const measureState = useSelector((state) => state.weatherModule.measure);

  const dispatch = useDispatch();

  const navEl = useRef(null);

  function hamburgerClicked() {
    console.log(navEl);
    if (navEl.current.className.includes("visible")) {
      navEl.current.className = "hidden";
    } else navEl.current.className = "visible";
  }

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
        <ul ref={navEl}>
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
        <button className="hamburger" onClick={() => hamburgerClicked()}>
          <img src={hamburgerImg} alt="hamburger menu" />
        </button>
      </div>
    </header>
  );
}
