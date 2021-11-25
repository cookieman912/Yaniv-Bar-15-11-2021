import React from "react";
import { useSelector } from "react-redux";
import TemperatureCard from "./TemperatureCard";

export default function TemperatureList() {

  const weatherState= useSelector(state=> state.weatherModule.forecast)
  if(weatherState) return (
    <ul className='temperature-list'>
       { weatherState.map(day =>{
         return <TemperatureCard day={day} key={day.Date} />
       })}
    </ul>

  );
 else return (
   <h1>loading</h1>
 )
     

}


