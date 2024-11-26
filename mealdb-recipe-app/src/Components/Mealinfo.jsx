import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Mealinfo = () => {
  const { mealid } = useParams();

  const [info, setInfo] = useState();

  const getInfo = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    );
    const mealInfo = await data.json();
    setInfo(mealInfo.meals[0]);
  };

  if (info != "") {
    getInfo();
  }

  return (
    <div>
      {!info ? (
        "Not Found"
      ) : (
        <div className="mealInfo">
          <img src={info.strMealThumb} />
          <div className="info">
            <h1>Recipe Detail</h1>
            <button> {info.strMeal} </button>
            <h3>Instructions</h3>
            <p>{info.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mealinfo;
