import React from "react";
import Card from "./card/card";
import cardsBoxStyles from "./cards-box.module.css";
import PropTypes from "prop-types";
import { mainTypes } from "../../../prop-types";

function CardsBox({ allIngredient, title, id }) {
  return (
    <>
      <h2 className="text text_type_main-medium" id={id}>
        {title}
      </h2>
      <div className={`${cardsBoxStyles.cardsBox} pt-6 pr-4 pb-2 pl-4`}>
        {allIngredient.map((ingredient) => {
          return <Card {...ingredient} key={ingredient._id} />;
        })}
      </div>
    </>
  );
}
export default CardsBox;

CardsBox.propTypes = {
  allIngredient: mainTypes,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
