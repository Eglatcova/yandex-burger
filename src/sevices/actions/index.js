//запрос к апи, получение всех ингредиентов
export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_ERROR = "GET_INGREDIENTS_ERROR";

//запрос к апи, заказ
export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_ERROR = "GET_ORDER_ERROR";

//получение ингредиентов конструктора
export const GET_CONSTRUCTOR_INGREDIENTS = "GET_CONSTRUCTOR_INGREDIENTS";

//получение ингредиента модального окна
export const LOOKED_INGREDIENT = "LOOKED_INGREDIENT";

//добавление названия подствечиваемого таба
export const ADD_GLOW_INGREDIENTS_TAB = "ADD_GLOW_INGREDIENTS_TAB";

//добавление ингредиента в конструктор
export const ADD_INGREDIENT = "ADD_INGREDIENT";

//удаление ингредиента в конструктор
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";

//перемещение ингредиента в конструкторе
export const MOVING_INGREDIENT = "MOVING_INGREDIENT";

const urlIngredients = "https://norma.nomoreparties.space/api/ingredients";
const urlOrder = "https://norma.nomoreparties.space/api/orders";

export const getAllIngredients = () => (dispatch) => {
  dispatch({
    type: GET_INGREDIENTS_REQUEST,
  });
  fetch(urlIngredients)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        dispatch({
          type: GET_INGREDIENTS_ERROR,
        });
      }
    })
    .then((data) => {
      dispatch({
        type: GET_INGREDIENTS_SUCCESS,
        ingredients: data.data,
      });
    })
    .catch((e) => {
      dispatch({
        type: GET_INGREDIENTS_ERROR,
      });
    });
};

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
