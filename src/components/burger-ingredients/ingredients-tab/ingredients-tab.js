import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import ingredientsTabStyles from "./ingredients-tab.module.css";

export default function IngredientsTab({ scrollTo, currentTabGlow }) {
  const handleClick = (e) => {
    scrollTo(e);
  };
  return (
    <div className={`${ingredientsTabStyles.ingredientsTabs} pt-5`}>
      <Tab
        value="buns"
        active={currentTabGlow === "buns"}
        onClick={handleClick}
      >
        Булки
      </Tab>
      <Tab
        value="sauces"
        active={currentTabGlow === "sauces"}
        onClick={handleClick}
      >
        Соусы
      </Tab>
      <Tab
        value="mains"
        active={currentTabGlow === "mains"}
        onClick={handleClick}
      >
        Начинки
      </Tab>
    </div>
  );
}

IngredientsTab.propTypes = {
  scrollTo: PropTypes.func.isRequired,
  currentTabGlow: PropTypes.string.isRequired,
};
