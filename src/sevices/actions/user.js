import { getCookie } from "../../utils/getCookie";
import { setCookie } from "../../utils/setCookie";
import { deleteCookie } from "../../utils/deleteCookie";

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

//авторизация
export const POST_AUTH_REQUEST = "POST_AUTH_REQUEST";
export const POST_AUTH_SUCCESS = "POST_AUTH_SUCCESS";
export const POST_AUTH_ERROR = "POST_AUTH_ERROR";

// повторный токен
export const POST_TOKEN_REQUEST = "POST_TOKEN_REQUEST";
export const POST_TOKEN_SUCCESS = "POST_TOKEN_SUCCESS";
export const POST_TOKEN_ERROR = "POST_TOKEN_ERROR";

// выход
export const POST_LOGOUT_REQUEST = "POST_LOGOUT_REQUEST";
export const POST_LOGOUT_SUCCESS = "POST_LOGOUT_SUCCESS";
export const POST_LOGOUT_ERROR = "POST_LOGOUT_ERROR";

//получение кода для создания нового пароля
export const POST_CODE_FOR_PASS_REQUEST = "POST_CODE_FOR_PASS_REQUEST";
export const POST_CODE_FOR_PASS_SUCCESS = "POST_CODE_FOR_PASS_SUCCESS";
export const POST_CODE_FOR_PASS_ERROR = "POST_CODE_FOR_PASS_ERROR";

//получение кода для создания нового пароля
export const GET_USER_DATA_REQUEST = "GET_USER_DATA_REQUEST";
export const GET_USER_DATA_SUCCESS = "GET_USER_DATA_SUCCESS";
export const GET_USER_DATA_ERROR = "GET_USER_DATA_ERROR";

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
    ).catch((e) => {
      alert("Register error");
      dispatch({
        type: POST_REGISTER_ERROR,
      });
    });

    if (response.ok) {
      let data = await response.json();
      dispatch({
        type: POST_REGISTER_SUCCESS,
        success: data.success,
        accessToken: data.accessToken.split("Bearer ")[1],
        refreshToken: data.refreshToken,
        name: data.user.name,
        email: data.user.email,
      });
      if (data.refreshToken) {
        setCookie("token", data.refreshToken);
      }
    } else {
      alert("Register error");
      dispatch({
        type: POST_REGISTER_ERROR,
      });
    }
  };

//запрос к апи, авторизация
export const postAuth = (userEmail, userPassword) => async (dispatch) => {
  dispatch({
    type: POST_AUTH_REQUEST,
  });

  let response = await fetch(
    "https://norma.nomoreparties.space/api/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    }
  ).catch((e) => {
    alert("Login error");
    dispatch({
      type: POST_AUTH_ERROR,
    });
  });

  if (response.ok) {
    let data = await response.json();
    dispatch({
      type: POST_AUTH_SUCCESS,
      success: data.success,
      accessToken: data.accessToken.split("Bearer ")[1],
      refreshToken: data.refreshToken,
      name: data.user.name,
      email: data.user.email,
    });
    if (data.refreshToken) {
      setCookie("token", data.refreshToken);
    }
  } else {
    alert("Login error");
    dispatch({
      type: POST_AUTH_ERROR,
    });
  }
};

//запрос к апи, получение нового accessToken
export const postToken = (userToken) => async (dispatch) => {
  dispatch({
    type: POST_TOKEN_REQUEST,
  });

  let response = await fetch(
    "https://norma.nomoreparties.space/api/auth/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: userToken,
      }),
    }
  ).catch((e) => {
    alert("Token error");
    dispatch({
      type: POST_TOKEN_ERROR,
    });
  });

  if (response.ok) {
    let data = await response.json();
    dispatch({
      type: POST_TOKEN_SUCCESS,
      success: data.success,
      accessToken: data.accessToken.split("Bearer ")[1],
    });
    if (data.refreshToken) {
      setCookie("token", data.refreshToken);
    }
  } else {
    alert("Token error");
    dispatch({
      type: POST_TOKEN_ERROR,
    });
  }
};

//запрос к апи на выход
export const postLogout = (userToken) => async (dispatch) => {
  dispatch({
    type: POST_LOGOUT_REQUEST,
  });

  let response = await fetch(
    "https://norma.nomoreparties.space/api/auth/logout",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: userToken,
      }),
    }
  ).catch((e) => {
    alert("Logout error");
    dispatch({
      type: POST_LOGOUT_ERROR,
    });
  });

  if (response.ok) {
    let data = await response.json();
    dispatch({
      type: POST_LOGOUT_SUCCESS,
    });
    if (data.success) {
      deleteCookie("token");
    }
  } else {
    alert("Logout error");
    dispatch({
      type: POST_LOGOUT_ERROR,
    });
  }
};

//запрос к апи, получение данных о пользователе
export const getUserData = (accessToken) => async (dispatch) => {
  dispatch({
    type: GET_USER_DATA_REQUEST,
  });

  let response = await fetch(
    "https://norma.nomoreparties.space/api/auth/user",
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    }
  ).catch((e) => {
    alert("User data error1");
    dispatch({
      type: GET_USER_DATA_ERROR,
    });
  });

  if (response.ok) {
    let data = await response.json();
    dispatch({
      type: GET_USER_DATA_SUCCESS,
      name: data.user.name,
      email: data.user.email,
    });
  } else {
    alert("User data error2");
    dispatch({
      type: GET_USER_DATA_ERROR,
    });
  }
};
