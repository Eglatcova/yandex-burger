import React from "react";
import Card from "./card/card";
import PropTypes from "prop-types";
import { ingredientsTypes } from "../../../prop-types";
import cardsBoxStyles from "./cards-box.module.css";

function CardsBox({ allIngredient, title, id, handleSelectIngredient }) {
  return (
    <>
      <h2 className="text text_type_main-medium" id={id}>
        {title}
      </h2>
      <div className={`${cardsBoxStyles.cardsBox} pt-6 pr-4 pb-2 pl-4`}>
        {allIngredient.map((ingredient) => {
          return (
            <Card
              ingredient={ingredient}
              key={ingredient._id}
              handleSelectIngredient={handleSelectIngredient}
            />
          );
        })}
      </div>
    </>
  );
}
export default CardsBox;

CardsBox.propTypes = {
  allIngredient: ingredientsTypes,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleSelectIngredient: PropTypes.func.isRequired,
};
