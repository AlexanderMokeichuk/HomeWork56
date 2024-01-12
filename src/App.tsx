import "./App.css";
import "./components/Burger/Burger.css";
import burger from "./components/Burger/Burger";
import {useState} from "react";
import {IngredientInState} from "./types";
import INGREDIENTS from "./Ts/INGREDIIENTS";
import CalculateTheAmount from "./Ts/CalculateTheAmount";

function App() {
  const [ingredients, setIngredients] = useState<IngredientInState[]>([
    {name: "Salad", count: 0},
    {name: "Bacon", count: 0},
    {name: "Cheese", count: 0},
    {name: "Meat", count: 0},
  ]);

  console.log(ingredients);
  const changeState = (name: string, action?: string) => {
    setIngredients((prevState) => prevState.map((ingredient) => {
      if (ingredient.name === name) {
        if (action) {
          return {
            ...ingredient,
            count: ingredient.count + 1,
          };
        } else {
          return {
            ...ingredient,
            count: ingredient.count - 1,
          };
        }
      }
      return ingredient;
    }));
  };

  const addButtonInMenu = (name: string, image: string, index: number) => {
    let stateButton: string = "hiddenButtonMenuReduce";
    if (ingredients[index].count > 0) stateButton = "ButtonMenuReduce";
    return (
      <div className={"blockButtons"} key={`blockBtn${+index}`}>
        <button onClick={() => changeState(name, "+")} className={`buttonMenuIncrease ${image}`}></button>
        <h6 className={"quantityIngredients"}>x{ingredients[index].count}</h6>
        <button onClick={() => changeState(name)} className={`${stateButton}`}></button>
      </div>
    );
  };


  return (
    <div className={"container"}>
      <div className={"container_blockMenu"}>
        {INGREDIENTS.map((btn, index) => {
          return addButtonInMenu(btn.name, btn.image, index);
        })}
      </div>

      <div className={"blockBurger"}>
        {burger(ingredients)}
        <h1 className={"priceBurger"}>{CalculateTheAmount(ingredients)} сом</h1>
      </div>
    </div>

  );
}

export default App;
