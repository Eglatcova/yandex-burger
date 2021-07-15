import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { DELETE_INGREDIENT } from "../../../sevices/actions/index.js";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientConstructorStyles from "./ingredient-constructor.module.css";

export default function IngredientConstructor({ cardData, id, moveCard }) {
  const dispatch = useDispatch();
  const handleDeleteIngredient = (item) => {
    dispatch({ type: DELETE_INGREDIENT, item });
  };
  const ref = useRef(null);
  let dragIndex;
  let hoverIndex;
  const [, drop] = useDrop({
    accept: "ingredientConstructor",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      dragIndex = item.id;
      hoverIndex = id;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
    },
    drop() {
      moveCard(dragIndex, hoverIndex);
    },
  });

  const [, drag] = useDrag({
    type: "ingredientConstructor",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));
  return (
    <div className={`${ingredientConstructorStyles.element} pl-2`} ref={ref}>
      <div className="pr-2">
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        value={cardData}
        text={cardData.name}
        price={cardData.price}
        thumbnail={cardData.image_mobile}
        handleClose={() => {
          handleDeleteIngredient(cardData);
        }}
      />
    </div>
  );
}
