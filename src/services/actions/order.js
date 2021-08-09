//запрос к апи, заказ
export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_ERROR = "GET_ORDER_ERROR";

const urlOrder = "https://norma.nomoreparties.space/api/orders";

export const getAllOrder = (allId) => (dispatch) => {
  dispatch({
    type: GET_ORDER_REQUEST,
  });
  fetch(urlOrder, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: allId,
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        dispatch({
          type: GET_ORDER_ERROR,
        });
      }
    })
    .then((data) => {
      dispatch({
        type: GET_ORDER_SUCCESS,
        orderNumber: data.order.number,
      });
    })
    .catch((e) => {
      dispatch({
        type: GET_ORDER_ERROR,
      });
    });
};
