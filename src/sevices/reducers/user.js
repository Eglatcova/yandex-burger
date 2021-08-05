import {
  ADD_NAME,
  ADD_EMAIL,
  ADD_PASSWORD,
  POST_REGISTER_REQUEST,
  POST_REGISTER_SUCCESS,
  POST_REGISTER_ERROR,
} from "../actions/user";

const initialUser = {
  name: "",
  email: "",
  password: "",
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
      };
    }
    case POST_REGISTER_ERROR:
      return { ...state };
    default: {
      return state;
    }
  }
};
