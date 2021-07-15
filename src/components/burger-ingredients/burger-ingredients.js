import React, { useState, useMemo, useCallback, useEffect } from "react";
import IngredientsTab from "./ingredients-tab/ingredients-tab";
import CardsBox from "./cards-box/cards-box";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import ingredientsStyles from "./burger-ingredients.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllIngredients,
  LOOKED_INGREDIENT,
  ADD_GLOW_INGREDIENTS_TAB,
} from "../../sevices/actions/index.js";

export default function BurgerIngredients() {
  const [state, setState] = useState({
    isOpen: false,
  });

  const scrollContainerRef = React.useRef(null);

  const { data, ingredient, currentTabGlow } = useSelector((store) => ({
    data: store.ingredients.allingredients,
    ingredient: store.ingredients.lookedIngredient,
    currentTabGlow: store.ingredients.glowIngredientsTab,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllIngredients());
  }, [dispatch]);

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

  //подсветка табов при скролле
  const handleScrollGlow = () => {
    //массив из тайтлов скроллбокса
    const titlesArr = Array.from(scrollContainerRef.current.children).filter(
      (elem, index) => index % 2 === 0
    );
    //позиция тайтлов относительно верха скроллконтейнера по модулю
    const titlesArrTopPos = titlesArr.map((elem) =>
      Math.abs(
        elem.getBoundingClientRect().top -
          scrollContainerRef.current.getBoundingClientRect().top
      )
    );
    //индекс самого близкго к веху скроллбокаса тайтла
    const indexMin = titlesArrTopPos.indexOf(
      Math.min.apply(null, titlesArrTopPos)
    );

    const glowTitle = titlesArr[indexMin].id;

    dispatch({ type: ADD_GLOW_INGREDIENTS_TAB, tabName: glowTitle });
  };

  const handleSelectIngredient = (ingredientData) => {
    setState({
      isOpen: true,
    });

    dispatch({ type: LOOKED_INGREDIENT, lookedIngredient: ingredientData });
  };

  const handleCloseModal = useCallback(() => {
    setState({
      ...state,
      isOpen: false,
    });
    dispatch({ type: LOOKED_INGREDIENT, lookedIngredient: {} });
  }, [state, dispatch]);

  const { isOpen } = state;

  return (
    <>
      <div className={ingredientsStyles.mainBox}>
        <h2 className="text text_type_main-large mt-10">Соберите бургер</h2>
        <IngredientsTab
          scrollTo={handleScrollToBox}
          currentTabGlow={currentTabGlow}
        />
        <div
          className={`${ingredientsStyles.scrollBox} scrollBox mt-10`}
          ref={scrollContainerRef}
          onScroll={handleScrollGlow}
        >
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
