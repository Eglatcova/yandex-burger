import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";

import IngredientDetails from "../../components/ingredient-details/ingredient-details";

import styles from "./home.module.css";

export function ConstructorPage() {
  const history = useHistory();
  const { path } = useRouteMatch();

  const isActionPop = history.action === "POP";

  if (path === "/ingredients/:id" && isActionPop) {
    return <IngredientDetails />;
  }

  return (
    <div className={styles.container}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
    </div>
  );
}
