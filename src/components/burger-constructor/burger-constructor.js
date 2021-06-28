import React from "react";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import constructorStyles from "./burger-constructor.module.css";

export default function BurgerConstructor({ data }) {
  return (
    <div className={`${constructorStyles.mainBox} mt-25`}>
      <div className={`${constructorStyles.element} pr-7`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail="https://code.s3.yandex.net/react/code/sauce-02-mobile.png"
          key={777}
        />
      </div>

      <div className={`${constructorStyles.scrollBox} scrollBox mt-4 mb-4`}>
        <div className={`${constructorStyles.elements} mr-4`}>
          {data.map((cardData) => {
            return (
              <div
                className={`${constructorStyles.element} pl-2`}
                key={cardData._id}
              >
                <div className="pr-2">
                  <DragIcon type="primary" />
                </div>
                <ConstructorElement
                  text={cardData.name}
                  price={cardData.price}
                  thumbnail={cardData.image_mobile}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${constructorStyles.element} pr-7`}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail="https://code.s3.yandex.net/react/code/sauce-02-mobile.png"
          key={778}
        />
      </div>
      <div className={`${constructorStyles.total} mt-10 pr-4`}>
        <div className={`${constructorStyles.totalPrice} mr-10`}>
          <span className="text text_type_digits-medium mr-2">610</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(
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
      __v: PropTypes.number.isRequired,
      _id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
