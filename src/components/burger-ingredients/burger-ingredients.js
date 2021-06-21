import React from "react";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientsStyles from "./burger-ingredients.module.css";

const BurgerIngredients = ({ data }) => {
  return (
    <div className={`${ingredientsStyles.mainBox} mt-25`}>
      <div className={`${ingredientsStyles.element} pr-4`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail="https://code.s3.yandex.net/react/code/sauce-02-mobile.png"
          key={777}
        />
      </div>

      <div className={`${ingredientsStyles.scrollBox} scrollBox mt-4 mb-4`}>
        <div className={ingredientsStyles.elements}>
          {data.map((cardData) => {
            return (
              <ConstructorElement
                text={cardData.name}
                price={cardData.price}
                thumbnail={cardData.image_mobile}
                key={cardData._id}
              />
            );
          })}
        </div>
      </div>

      <div className={`${ingredientsStyles.element} pr-4`}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail="https://code.s3.yandex.net/react/code/sauce-02-mobile.png"
          key={777}
        />
      </div>
      <div className={`${ingredientsStyles.total} mt-10 pr-4`}>
        <div className={`${ingredientsStyles.totalPrice} mr-10`}>
          <span className="text text_type_digits-medium mr-2">610</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

BurgerIngredients.propTypes = {
  arrayWithShape: PropTypes.arrayOf(
    PropTypes.shape({
      calories: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      image_large: PropTypes.string.isRequired,
      image_mobile: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      proteins: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      v: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default BurgerIngredients;
