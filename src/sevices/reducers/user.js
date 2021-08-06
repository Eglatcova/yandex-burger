import data from "../../utils/data";
import {
  ADD_NAME,
  ADD_EMAIL,
  ADD_PASSWORD,
  POST_REGISTER_REQUEST,
  POST_REGISTER_SUCCESS,
  POST_REGISTER_ERROR,
  POST_AUTH_REQUEST,
  POST_AUTH_SUCCESS,
  POST_AUTH_ERROR,
  POST_TOKEN_REQUEST,
  POST_TOKEN_SUCCESS,
  POST_TOKEN_ERROR,
  POST_LOGOUT_REQUEST,
  POST_LOGOUT_SUCCESS,
  POST_LOGOUT_ERROR,
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
} from "../actions/user";

const initialUser = {
  name: "",
  email: "",
  password: "",
  accessToken: "",
  auth: false,
};

export const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case ADD_NAME:
      return { ...state, name: action.name };
    case ADD_EMAIL:
      return { ...state, email: action.email };
    case ADD_PASSWORD:
      return { ...state, password: action.password };

    case POST_REGISTER_REQUEST:
      return { ...state };
    case POST_REGISTER_SUCCESS: {
      return {
        ...state,
        name: action.name,
        email: action.email,
        accessToken: action.accessToken,
        auth: action.success,
      };
    }
    case POST_REGISTER_ERROR:
      return { ...state };
    case POST_AUTH_REQUEST:
      return { ...state };
    case POST_AUTH_SUCCESS: {
      return {
        ...state,
        name: action.name,
        email: action.email,
        accessToken: action.accessToken,
        auth: action.success,
      };
    }
    case POST_AUTH_ERROR:
      return { ...state };
    case POST_TOKEN_REQUEST:
      return { ...state };
    case POST_TOKEN_SUCCESS: {
      return {
        ...state,
        auth: action.success,
        accessToken: action.accessToken,
      };
    }
    case POST_TOKEN_ERROR:
      return { ...state };
    case POST_LOGOUT_REQUEST:
      return { ...state };
    case POST_LOGOUT_SUCCESS: {
      return { ...state, auth: false };
    }
    case POST_LOGOUT_ERROR:
      return { ...state };
    case GET_USER_DATA_REQUEST:
      return { ...state };
    case GET_USER_DATA_SUCCESS:
      return { ...state, name: action.name, email: action.email };
    case GET_USER_DATA_ERROR:
      return { ...state };
    default: {
      return state;
    }
  }
};
