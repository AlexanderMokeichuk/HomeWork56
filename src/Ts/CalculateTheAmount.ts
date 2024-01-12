import INGREDIENTS from "./INGREDIIENTS";
import React from "react";
import {IngredientInState} from "../types";

const CalculateTheAmount: React.FC<IngredientInState[]> = (ingredients) => {
  const sum = ingredients.map((ingredients, index) => {
    if (ingredients.count > 0) {
      return ingredients.count * INGREDIENTS[index].price;
    } else {
      return ingredients.count;
    }
  }).reduce((acc, ingredients) => {
    return acc + ingredients;
  }, 30);

  return sum;
};

export default CalculateTheAmount;