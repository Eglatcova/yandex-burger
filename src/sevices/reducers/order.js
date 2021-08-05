import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_ERROR,
} from "../actions/order";

const initialStateOrder = {
  orderNumber: "",
};

export const orderReducer = (state = initialStateOrder, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return { ...state };
    case GET_ORDER_SUCCESS:
      return { ...state, orderNumber: action.orderNumber };
    case GET_ORDER_ERROR:
      return { ...state, orderNumber: "error" };
    default: {
      return state;
    }
  }
};
