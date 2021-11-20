import React from "react";
import { useSelector } from "react-redux";
export default function TemperatureCard(props) {
  const measureState = useSelector((state) => state.weatherModule.measure);

  function forecastDay() {
    let weatherDate = props.day.Date.split("-");
    weatherDate[2] = weatherDate[2].substring(0, weatherDate[2].length - 15);
    return (
      <p>
        {getDayName(
          `${weatherDate[1]}/${weatherDate[2]}/${weatherDate[0]}`,
          "en-UK"
        )}
      </p>
    );
  }

  function renderTemperature() {
    if (measureState === "farenheit") {
      return (
        <p>
          {" "}
          {(props.day.Temperature.Maximum.Value +
            props.day.Temperature.Minimum.Value) /
            2}
          ℉
        </p>
      );
          }
      else return (
        <p>
        {" "}
        {parseInt(((props.day.Temperature.Maximum.Value-32)*(5/9)) +
         ((props.day.Temperature.Minimum.Value-32)*(5/9))/2)}
        ℃
      </p>
      )
    
  }

  return (
    <li>
      {forecastDay()}
      {renderTemperature()}
      <p> {props.day.Day.IconPhrase}</p>
    </li>
  );
}
function getDayName(dateStr, locale) {
  var date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: "long" });
}
