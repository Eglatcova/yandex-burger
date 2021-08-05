import { setCookie } from "../../utils/setCookie";

//добавление имени юзера
export const ADD_NAME = "ADD_NAME";

//добавление емеила юзера
export const ADD_EMAIL = "ADD_EMAIL";

//добавление пароля юзера
export const ADD_PASSWORD = "ADD_PASSWORD";

//регистрация
export const POST_REGISTER_REQUEST = "POST_REGISTER_REQUEST";
export const POST_REGISTER_SUCCESS = "POST_REGISTER_SUCCESS";
export const POST_REGISTER_ERROR = "POST_REGISTER_ERROR";

//получение кода для создания нового пароля
export const POST_CODE_FOR_PASS_REQUEST = "POST_CODE_FOR_PASS_REQUEST";
export const POST_CODE_FOR_PASS_SUCCESS = "POST_CODE_FOR_PASS_SUCCESS";
export const POST_CODE_FOR_PASS_ERROR = "POST_CODE_FOR_PASS_ERROR";

//запрос к апи, регистрация
export const postRegister =
  (userName, userEmail, userPassword) => async (dispatch) => {
    dispatch({
      type: POST_REGISTER_REQUEST,
    });

    let response = await fetch(
      "https://norma.nomoreparties.space/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          password: userPassword,
          name: userName,
        }),
      }
    );

    if (response.ok) {
      let data = await response.json();
      dispatch({
        type: POST_REGISTER_SUCCESS,
        authToken: data.accessToken.split("Bearer ")[1],
        name: data.user.name,
        email: data.user.email,
      });
      if (data.authToken) {
        setCookie("token", data.authToken);
      }
    } else {
      alert("Register error");
      dispatch({
        type: POST_REGISTER_ERROR,
      });
    }
  };
