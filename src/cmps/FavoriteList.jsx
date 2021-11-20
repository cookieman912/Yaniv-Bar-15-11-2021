import React from "react";
import { useSelector } from "react-redux";
import FavoriteCard from "./FavoriteCard";

export default function FavoriteList() {

  const favoriteState= useSelector(state=> state.favoriteModule.favorites)
   console.log(favoriteState);
  if(favoriteState) return (
    <ul>
       { favoriteState.map(favorite =>{
         return <FavoriteCard favorite={favorite} />
       })}
    </ul>

  );
 else return (
   <h1>no favorites!</h1>
 )

}
