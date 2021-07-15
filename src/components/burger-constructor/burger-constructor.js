import React, { useState, useCallback, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  GET_CONSTRUCTOR_INGREDIENTS,
  getAllOrder,
  ADD_INGREDIENT,
  MOVING_INGREDIENT,
} from "../../sevices/actions/index.js";
import { useDrop } from "react-dnd";

import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientConstructor from "./ingredient-constructor/ingredient-constructor";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import constructorStyles from "./burger-constructor.module.css";

export default function BurgerConstructor() {
  const [isModalState, setStateModal] = useState(false);
  const dispatch = useDispatch();

  const addIngredient = (item) => {
    dispatch({
      type: ADD_INGREDIENT,
      item,
    });
  };

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      addIngredient(item);
    },
  });

  const data = useSelector((store) => store.ingredients.constructorIngredients);
  const scrollBoxData = data.filter((ingredient) => ingredient.type !== "bun");
  const bunData = data.find((ingredient) => ingredient.type === "bun");

  const sumResult = useMemo(() => {
    return data.reduce((acc, item) => acc + item.price, 0);
  }, [data]);

  useEffect(() => {
    dispatch({ type: GET_CONSTRUCTOR_INGREDIENTS });
  }, [dispatch]);

  const handleOpenModal = useCallback(() => {
    dispatch(getAllOrder(data.map((elem) => elem._id)));
    setStateModal(true);
  }, [dispatch, data]);

  const handleCloseModal = useCallback(() => {
    setStateModal(false);
  }, []);

  const moveCard = (dragIndex, hoverIndex) => {
    dispatch({
      type: MOVING_INGREDIENT,
      fromIndex: dragIndex,
      toIndex: hoverIndex,
    });
  };
  return (
    <div className={`${constructorStyles.mainBox} mt-25`} ref={dropTarget}>
      {bunData && (
        <div className={`${constructorStyles.element} pr-7`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bunData.name} (верх)`}
            price={bunData.price}
            thumbnail={bunData.image_mobile}
          />
        </div>
      )}
      <div className={`${constructorStyles.scrollBox} scrollBox mt-4 mb-4`}>
        <div className={`${constructorStyles.elements} mr-4`}>
          {scrollBoxData.map((cardData, id) => {
            return (
              <IngredientConstructor
                cardData={cardData}
                key={id}
                id={id}
                moveCard={moveCard}
              />
            );
          })}
        </div>
      </div>
      {bunData && (
        <div className={`${constructorStyles.element} pr-7`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bunData.name} (низ)`}
            price={bunData.price}
            thumbnail={bunData.image_mobile}
          />
        </div>
      )}
      <div className={`${constructorStyles.total} mt-10 pr-4`}>
        <div className={`${constructorStyles.totalPrice} mr-10`}>
          <span className="text text_type_digits-medium mr-2">{sumResult}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" onClick={handleOpenModal}>
          Оформить заказ
        </Button>
      </div>
      <Modal isOpen={isModalState} handleCloseModal={handleCloseModal}>
        <OrderDetails />
      </Modal>
    </div>
  );
}
