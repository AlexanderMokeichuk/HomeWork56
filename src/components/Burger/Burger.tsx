import "./Burger.css";
import {IngredientInState} from "../../types";
import React from "react";

const Burger: React.FC<IngredientInState[]> = (ingredients) => {


  return (
    <div className={"Burger"}>
      <div className={"BreadTop"}>
        <div className={"Seeds1"}></div>
        <div className={"Seeds2"}></div>
      </div>
      <>
        {ingredients.map((ingredient: IngredientInState) => {
          const arrayIngredients:JSX.Element[] = [];
          if (ingredient.count !== 0) {
            for (let i = 0; i < ingredient.count; i++) {
              arrayIngredients.push(<div className={`ing ${ingredient.name}`} key={`${ingredient.name + i}`}></div>);
            }
          }
          return arrayIngredients;
        })}
      </>
      <div className={"BreadBottom"}></div>
    </div>
  )
    ;
};

export default Burger;