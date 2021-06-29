import React, { useEffect } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import ingredientsTabStyles from "./ingredients-tab.module.css";

export default function IngredientsTab({ scrollTo }) {
  const [current, setCurrent] = React.useState("buns");

  useEffect(() => {
    scrollTo(current);
  }, [current, scrollTo]);

  return (
    <div className={`${ingredientsTabStyles.ingredientsTabs} pt-5`}>
      <Tab value="buns" active={current === "buns"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="sauces" active={current === "sauces"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="mains" active={current === "mains"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
}

IngredientsTab.propTypes = {
  scrollTo: PropTypes.func.isRequired,
};
