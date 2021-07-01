import React, { useState, useMemo, useCallback } from "react";
import IngredientsTab from "./ingredients-tab/ingredients-tab";
import CardsBox from "./cards-box/cards-box";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import ingredientsStyles from "./burger-ingredients.module.css";
import { ingredientsTypes } from "../../prop-types";

export default function BurgerIngredients({ data }) {
  const [state, setState] = useState({
    isOpen: false,
    ingredient: {},
  });

  const bunData = useMemo(
    () => data.filter((ingredient) => ingredient.type === "bun"),
    [data]
  );
  const sauceData = useMemo(
    () => data.filter((ingredient) => ingredient.type === "sauce"),
    [data]
  );
  const mainData = useMemo(
    () => data.filter((ingredient) => ingredient.type === "main"),
    [data]
  );

  const handleScrollToBox = useCallback((current) => {
    const element = document.getElementById(current);
    element.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleSelectIngredient = (ingredientData) => {
    setState({
      isOpen: true,
      ingredient: ingredientData,
    });
  };

  const handleCloseModal = useCallback(() => {
    setState({
      ...state,
      isOpen: false,
    });
  }, [state]);

  const { isOpen, ingredient } = state;

  return (
    <>
      <div className={ingredientsStyles.mainBox}>
        <h2 className="text text_type_main-large mt-10">Соберите бургер</h2>
        <IngredientsTab scrollTo={handleScrollToBox} />
        <div className={`${ingredientsStyles.scrollBox} scrollBox mt-10`}>
          <CardsBox
            allIngredient={bunData}
            title="Булки"
            id="buns"
            handleSelectIngredient={handleSelectIngredient}
          />
          <CardsBox
            allIngredient={sauceData}
            title="Соусы"
            id="sauces"
            handleSelectIngredient={handleSelectIngredient}
          />
          <CardsBox
            allIngredient={mainData}
            title="Начинки"
            id="mains"
            handleSelectIngredient={handleSelectIngredient}
          />
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        title="Детали ингредиента"
      >
        <IngredientDetails checkedIngredient={ingredient} />
      </Modal>
    </>
  );
}

BurgerIngredients.propTypes = ingredientsTypes;
