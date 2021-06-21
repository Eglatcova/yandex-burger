import React from "react";
import {
  Counter,
  Tab,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import constructorStyles from "./burger-constructor.module.css";

import data from "../../utils/data.js";

const ConstructorTab = () => {
  const [current, setCurrent] = React.useState("one");
  return (
    <div className={`${constructorStyles.constructorTabs} pt-5`}>
      <Tab value="one" active={current === "one"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === "two"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === "three"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
};

const Card = (cardData) => {
  return (
    <div
      className={`${constructorStyles.card} pr-2 pb-6 pl-2 mb-8`}
      key={cardData.id}
    >
      <img
        className={`${constructorStyles.img}`}
        src={cardData.image_large}
        alt="bun"
      />
      <div className={`${constructorStyles.price} mt-1`}>
        <div className="text text_type_digits-default mr-2">
          {cardData.price}
        </div>
        <CurrencyIcon type="primary" />
      </div>
      <h4
        className={`${constructorStyles.name} text text_type_main-default mt-1`}
      >
        {cardData.name}
      </h4>
      <Counter count={1} size="default" />
    </div>
  );
};

const BurgerConstructor = () => {
  return (
    <div className={constructorStyles.mainBox}>
      <h2 className="text text_type_main-large mt-10">Соберите бургер</h2>
      <ConstructorTab />
      <div className={`${constructorStyles.scrollBox} scrollBox mt-10`}>
        <h2 className="text text_type_main-medium">Булки</h2>
        <div className={`${constructorStyles.cardsBox} pt-6 pr-4 pb-2 pl-4`}>
          {data.map((cardData) => {
            if (cardData.type === "bun") {
              return <Card {...cardData} />;
            } else return null;
          })}
        </div>
        <h2 className="text text_type_main-medium mt-10">Соусы</h2>
        <div className={`${constructorStyles.cardsBox} pt-6 pr-4 pb-2 pl-4`}>
          {data.map((cardData) => {
            if (cardData.type === "sauce") {
              return <Card {...cardData} />;
            } else return null;
          })}
        </div>
        <h2 className="text text_type_main-medium mt-10">Начинки</h2>
        <div className={`${constructorStyles.cardsBox} pt-6 pr-4 pb-2 pl-4`}>
          {data.map((cardData) => {
            if (cardData.type === "main") {
              return <Card {...cardData} />;
            } else return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default BurgerConstructor;

console.log(data);
