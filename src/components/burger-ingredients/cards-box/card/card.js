import React from "react";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import card from "./card.module.css";
// import PropTypes from "prop-types";

export default function Card({ ingredient, selectedIngredient }) {
  return (
    <>
      <div
        className={`${card.card} pr-2 pb-6 pl-2 mb-8`}
        onClick={() => {
          selectedIngredient(ingredient);
        }}
      >
        <img className={`${card.img}`} src={ingredient.image_large} alt="bun" />
        <div className={`${card.price} mt-1`}>
          <div className="text text_type_digits-default mr-2">
            {ingredient.price}
          </div>
          <CurrencyIcon type="primary" />
        </div>
        <h4 className={`${card.name} text text_type_main-default mt-1`}>
          {ingredient.name}
        </h4>
        <Counter count={1} size="default" />
      </div>
    </>
  );
}

// Card.propTypes = {};
