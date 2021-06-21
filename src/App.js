import React from "react";
import "./App.css";
import AppHeader from "./components/app-header/app-header";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import data from "./utils/data.js";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="container">
        <BurgerConstructor />
        <BurgerIngredients data={data} />
      </div>
    </div>
  );
}

export default App;
