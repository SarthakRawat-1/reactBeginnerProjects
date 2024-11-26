import React from "react";
import { useState } from "react";
import Mealcards from "./Mealcards.jsx";

const Mainpage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState();
  const [msg, setMsg] = useState();

  const fetchAPI = async () => {
    if (search == "") {
      setMsg("Please Enter Something");
    } else {
      const result = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const jsonData = await result.json();
      setData(jsonData.meals);
      setMsg("");
    }
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <h1 className="head"> MealDB Recipe App </h1>
      <div className="container">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search Recipe"
            onChange={handleInput}
          />
          <button onClick={fetchAPI}>Search</button>
        </div>

        <h4 className="error"> {msg} </h4>

        <div>
          <Mealcards details={data} />
        </div>
      </div>
    </>
  );
};

export default Mainpage;
