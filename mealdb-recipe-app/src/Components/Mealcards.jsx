import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Mealinfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState();

  useEffect(() => {
    const getInfo = async () => {
      const data = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
      );
      const mealInfo = await data.json();
      setInfo(mealInfo.meals[0]);
    };

    getInfo();
  }, [mealid]);

  return (
    <div>
      {!info ? (
        "Not Found"
      ) : (
        <div className="mealInfo">
          <img src={info.strMealThumb} alt={info.strMeal} />
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
