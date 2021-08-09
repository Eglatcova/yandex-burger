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

//получение данных о пользователе
export const GET_USER_DATA_REQUEST = "GET_USER_DATA_REQUEST";
export const GET_USER_DATA_SUCCESS = "GET_USER_DATA_SUCCESS";
export const GET_USER_DATA_ERROR = "GET_USER_DATA_ERROR";

//перезапись данных пользователя
export const PATCH_USER_DATA_REQUEST = "PATCH_USER_DATA_REQUEST";
export const PATCH_USER_DATA_SUCCESS = "PATCH_USER_DATA_SUCCESS";
export const PATCH_USER_DATA_ERROR = "PATCH_USER_DATA_ERROR";

//urls
const urlRegister = "https://norma.nomoreparties.space/api/auth/register";
const urlLogin = "https://norma.nomoreparties.space/api/auth/login";
const urlToken = "https://norma.nomoreparties.space/api/auth/token";
const urlLogout = "https://norma.nomoreparties.space/api/auth/logout";
const urlUser = "https://norma.nomoreparties.space/api/auth/user";

//запрос к апи, регистрация
export const postRegister =
  (userName, userEmail, userPassword) => async (dispatch) => {
    dispatch({
      type: POST_REGISTER_REQUEST,
    });

    const response = await fetch(urlRegister, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
        name: userName,
      }),
    }).catch((e) => {
      alert("Register error");
      dispatch({
        type: POST_REGISTER_ERROR,
      });
    });

    if (response.ok) {
      const data = await response.json();
      dispatch({
        type: POST_REGISTER_SUCCESS,
        success: data.success,
        accessToken: data.accessToken.split("Bearer ")[1],
        refreshToken: data.refreshToken,
        name: data.user.name,
        email: data.user.email,
      });
      if (data.refreshToken) {
        setCookie("token", data.refreshToken, { path: "/" });
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

  const response = await fetch(urlLogin, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userEmail,
      password: userPassword,
    }),
  }).catch((e) => {
    alert("Login error");
    dispatch({
      type: POST_AUTH_ERROR,
    });
  });

  if (response.ok) {
    const data = await response.json();
    dispatch({
      type: POST_AUTH_SUCCESS,
      success: data.success,
      accessToken: data.accessToken.split("Bearer ")[1],
      refreshToken: data.refreshToken,
      name: data.user.name,
      email: data.user.email,
    });
    if (data.refreshToken) {
      setCookie("token", data.refreshToken, { path: "/" });
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

  const response = await fetch(urlToken, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: userToken,
    }),
  }).catch((e) => {
    alert("Token error");
    dispatch({
      type: POST_TOKEN_ERROR,
    });
  });

  if (response.ok) {
    const data = await response.json();
    dispatch({
      type: POST_TOKEN_SUCCESS,
      success: data.success,
      accessToken: data.accessToken.split("Bearer ")[1],
    });
    if (data.refreshToken) {
      setCookie("token", data.refreshToken, { path: "/" });
    }
  } else {
    console.log("Не зарегистрирован");
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

  const response = await fetch(urlLogout, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: userToken,
    }),
  }).catch((e) => {
    alert("Logout error");
    dispatch({
      type: POST_LOGOUT_ERROR,
    });
  });

  if (response.ok) {
    const data = await response.json();
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

  const response = await fetch(urlUser, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  }).catch((e) => {
    alert("User get data error");
    dispatch({
      type: GET_USER_DATA_ERROR,
    });
  });

  if (response.ok) {
    const data = await response.json();
    dispatch({
      type: GET_USER_DATA_SUCCESS,
      name: data.user.name,
      email: data.user.email,
    });
  } else {
    alert("User get data error");
    dispatch({
      type: GET_USER_DATA_ERROR,
    });
  }
};

//запрос к апи, перезапись данных
export const patchUserData =
  (accessToken, userName, userEmail) => async (dispatch) => {
    dispatch({
      type: PATCH_USER_DATA_REQUEST,
    });
    const response = await fetch(urlUser, {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
      body: JSON.stringify({
        email: userEmail,
        name: userName,
      }),
    }).catch((e) => {
      alert("User patch data error");
      dispatch({
        type: PATCH_USER_DATA_ERROR,
      });
    });

    if (response.ok) {
      const data = await response.json();
      alert("Ваши данные обновлены");
      dispatch({
        type: PATCH_USER_DATA_SUCCESS,
        name: data.user.name,
        email: data.user.email,
      });
    } else {
      alert("User  patch data error");
      dispatch({
        type: PATCH_USER_DATA_ERROR,
      });
    }
  };
