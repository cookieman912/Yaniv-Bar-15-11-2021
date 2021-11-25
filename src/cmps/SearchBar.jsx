import React from "react";
import { useInput } from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { getCity } from "../store/actions/weatherActions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const { value: nameValue, bind, reset } = useInput("");


  return (
    <form
      className="search-bar"
      onSubmit={() => {
        dispatch(getCity(nameValue));
      }}
    >
      <input type="text" {...bind} placeholder="Type here your desired city" />
      <button>Search</button>
    </form>
  );
}
