import React from "react";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientsStyles from "./burger-ingredients.module.css";

const BurgerIngredients = ({ data }) => {
  return (
    <div className={ingredientsStyles.mainBox}>
      <div className="mt-25">
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
                  key={cardData.id}
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
    </div>
  );
};

export default BurgerIngredients;
