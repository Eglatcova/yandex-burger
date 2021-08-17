import React from "react";
import ingredientDetailsStyles from "./ingredient-details.module.css";
import { useSelector } from "react-redux";

export default function IngredientDetails() {
  const checkedIngredient = useSelector(
    (store) => store.ingredients.lookedIngredient
  );

  const { image_large, name, calories, proteins, fat, carbohydrates } =
    checkedIngredient;
  const txtClasses = "text text_type_main-default text_color_inactive";
  const numsClasse = "text text_type_digits-default text_color_inactive mt-2";

  return (
    <div className={`${ingredientDetailsStyles.modalBody}`}>
      <img
        className={`${ingredientDetailsStyles.img} mt-4`}
        src={image_large}
        alt="ingredient"
      />
      <h3
        className={`${ingredientDetailsStyles.name} text text_type_main-medium mt-4`}
      >
        {name}
      </h3>
      <div className={`${ingredientDetailsStyles.grid} mt-8`}>
        <div className={ingredientDetailsStyles.cell}>
          <div className={`${ingredientDetailsStyles.cellTitle} ${txtClasses}`}>
            Калории,ккал
          </div>
          <div className={`${ingredientDetailsStyles.cellNum} ${numsClasse}`}>
            {calories}
          </div>
        </div>
        <div className={ingredientDetailsStyles.cell}>
          <div className={`${ingredientDetailsStyles.cellTitle} ${txtClasses}`}>
            Белки, г
          </div>
          <div className={`${ingredientDetailsStyles.cellNum} ${numsClasse}`}>
            {proteins}
          </div>
        </div>
        <div className={ingredientDetailsStyles.cell}>
          <div className={`${ingredientDetailsStyles.cellTitle} ${txtClasses}`}>
            Жиры, г
          </div>
          <div className={`${ingredientDetailsStyles.cellNum} ${numsClasse}`}>
            {fat}
          </div>
        </div>
        <div className={ingredientDetailsStyles.cell}>
          <div className={`${ingredientDetailsStyles.cellTitle} ${txtClasses}`}>
            Углеводы, г
          </div>
          <div className={`${ingredientDetailsStyles.cellNum} ${numsClasse}`}>
            {carbohydrates}
          </div>
        </div>
      </div>
    </div>
  );
}
