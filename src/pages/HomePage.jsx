import React from "react";
import SearchBar from "../cmps/SearchBar";
import CurrentLocation from '../cmps/CurrentLocation'
import TemperatureList from '../cmps/TemperatureList'
export default function HomePage() {
  return (
    <div className="home-page">
      <SearchBar/>
      <main> 
      <CurrentLocation/>
      <TemperatureList/>
      </main>
   
    </div>
  );
}
