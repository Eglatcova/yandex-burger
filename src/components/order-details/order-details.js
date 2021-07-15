import React from "react";
import orderDetailsStyles from "./order-details.module.css";
import iconBg from "../../images/graphics.png";
import { useSelector } from "react-redux";

export default function OrderDetails() {
  const orderNumber = useSelector((store) => store.order.orderNumber);
  return (
    <div className={`${orderDetailsStyles.modalBody}`}>
      <p
        className={`${orderDetailsStyles.identifier} text text_type_digits-large mt-15`}
      >
        {orderNumber}
      </p>
      <p
        className={`${orderDetailsStyles.identifierTitle} text text_type_main-medium mt-8`}
      >
        идентификатор заказа
      </p>
      <img src={iconBg} alt="graphics" className="mt-15" />
      <p
        className={`${orderDetailsStyles.orderStatus} text text_type_main-default mt-15`}
      >
        Ваш заказ начали готовить
      </p>
      <p
        className={`${orderDetailsStyles.orderRecommendation} text text_type_main-default text_color_inactive mt-2 mb-15`}
      >
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}
