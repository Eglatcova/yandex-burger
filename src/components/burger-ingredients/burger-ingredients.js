import React, { useState, useMemo } from "react";
import IngredientsTab from "./ingredients-tab/ingredients-tab";
import CardsBox from "./cards-box/cards-box";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import ingredientsStyles from "./burger-ingredients.module.css";
import { mainTypes } from "../../prop-types";

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

  const handleScrollToBox = (current) => {
    const element = document.getElementById(current);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const handleSelectedIngredient = (ingredientData) => {
    setState({
      isOpen: true,
      ingredient: ingredientData,
    });
  };

  const handleCloseModal = () => {
    setState({
      ...state,
      isOpen: false,
    });
  };

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
            selectedIngredient={handleSelectedIngredient}
          />
          <CardsBox
            allIngredient={sauceData}
            title="Соусы"
            id="sauces"
            selectedIngredient={handleSelectedIngredient}
          />
          <CardsBox
            allIngredient={mainData}
            title="Начинки"
            id="mains"
            selectedIngredient={handleSelectedIngredient}
          />
        </div>
      </div>
      <Modal isOpen={isOpen} closeModal={handleCloseModal}>
        <IngredientDetails checkedIngredient={ingredient} />
      </Modal>
    </>
  );
}

BurgerIngredients.propTypes = mainTypes;
