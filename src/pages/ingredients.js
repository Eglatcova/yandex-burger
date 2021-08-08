import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import styles from "./ingredients.module.css";

export default function Ingredients() {
  const { ingredients, ingredientsLoaded } = useSelector((store) => ({
    ingredients: store.ingredients.allingredients,
    ingredientsLoaded: store.ingredients.ingredientsLoaded,
  }));

  const { id } = useParams();

  if (!ingredientsLoaded) {
    return null;
  }

  const ingredient = ingredients?.find((elem) => id === elem._id) || [];

  const { image_large, name, calories, proteins, fat, carbohydrates } =
    ingredient;

  const txtClasses = "text text_type_main-default text_color_inactive";
  const numsClasse = "text text_type_digits-default text_color_inactive mt-2";

  if (ingredient.length === 0) {
    return <div className="mt-4 ml-4">Ингредиент не найден</div>;
  }

  return (
    <div className={`${styles.modalBody}`}>
      <img
        className={`${styles.img} mt-4`}
        src={image_large}
        alt="ingredient"
      />
      <h3 className={`${styles.name} text text_type_main-medium mt-4`}>
        {name}
      </h3>
      <div className={`${styles.grid} mt-8`}>
        <div className={styles.cell}>
          <div className={`${styles.cellTitle} ${txtClasses}`}>
            Калории,ккал
          </div>
          <div className={`${styles.cellNum} ${numsClasse}`}>{calories}</div>
        </div>
        <div className={styles.cell}>
          <div className={`${styles.cellTitle} ${txtClasses}`}>Белки, г</div>
          <div className={`${styles.cellNum} ${numsClasse}`}>{proteins}</div>
        </div>
        <div className={styles.cell}>
          <div className={`${styles.cellTitle} ${txtClasses}`}>Жиры, г</div>
          <div className={`${styles.cellNum} ${numsClasse}`}>{fat}</div>
        </div>
        <div className={styles.cell}>
          <div className={`${styles.cellTitle} ${txtClasses}`}>Углеводы, г</div>
          <div className={`${styles.cellNum} ${numsClasse}`}>
            {carbohydrates}
          </div>
        </div>
      </div>
    </div>
  );
}
