import React from "react";
import PropTypes from "prop-types";
import {
  Counter,
  Tab,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import constructorStyles from "./burger-constructor.module.css";

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

const CardsBox = ({ allIngredient, title }) => {
  return (
    <>
      <h2 className="text text_type_main-medium">{title}</h2>
      <div className={`${constructorStyles.cardsBox} pt-6 pr-4 pb-2 pl-4`}>
        {allIngredient.map((ingredient) => {
          return <Card {...ingredient} key={ingredient._id} />;
        })}
      </div>
    </>
  );
};

const Card = (ingredient) => {
  return (
    <div className={`${constructorStyles.card} pr-2 pb-6 pl-2 mb-8`}>
      <img
        className={`${constructorStyles.img}`}
        src={ingredient.image_large}
        alt="bun"
      />
      <div className={`${constructorStyles.price} mt-1`}>
        <div className="text text_type_digits-default mr-2">
          {ingredient.price}
        </div>
        <CurrencyIcon type="primary" />
      </div>
      <h4
        className={`${constructorStyles.name} text text_type_main-default mt-1`}
      >
        {ingredient.name}
      </h4>
      <Counter count={1} size="default" />
    </div>
  );
};

const BurgerConstructor = ({ data }) => {
  const bunData = data.filter((ingredient) => ingredient.type === "bun");
  const sauceData = data.filter((ingredient) => ingredient.type === "sauce");
  const mainData = data.filter((ingredient) => ingredient.type === "main");
  return (
    <div className={constructorStyles.mainBox}>
      <h2 className="text text_type_main-large mt-10">Соберите бургер</h2>
      <ConstructorTab />
      <div className={`${constructorStyles.scrollBox} scrollBox mt-10`}>
        <CardsBox allIngredient={bunData} title="Булки" />
        <CardsBox allIngredient={sauceData} title="Соусы" />
        <CardsBox allIngredient={mainData} title="Начинки" />
      </div>
    </div>
  );
};

BurgerConstructor.propTypes = {
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

export default BurgerConstructor;
