import React from "react";
import { useSelector } from "react-redux";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import card from "./card.module.css";
import { ingredientTypes } from "../../../../prop-types";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";

export default function Card({ ingredient, handleSelectIngredient }) {
  const counter = useSelector(
    (store) => store.ingredients.constructorIngredients
  ).filter((elem) => elem === ingredient).length;

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: ingredient,
  });

  return (
    <>
      <div
        ref={dragRef}
        className={`${card.card} pr-2 pb-6 pl-2 mb-8`}
        onClick={() => {
          handleSelectIngredient(ingredient);
        }}
      >
        <img
          className={`${card.img}`}
          src={ingredient.image_large}
          alt="ingredient"
        />
        <div className={`${card.price} mt-1`}>
          <div className="text text_type_digits-default mr-2">
            {ingredient.price}
          </div>
          <CurrencyIcon type="primary" />
        </div>
        <h4 className={`${card.name} text text_type_main-default mt-1`}>
          {ingredient.name}
        </h4>
        <Counter count={counter} size="default" />
      </div>
    </>
  );
}

Card.propTypes = {
  ingredient: ingredientTypes,
  handleSelectIngredient: PropTypes.func.isRequired,
};
