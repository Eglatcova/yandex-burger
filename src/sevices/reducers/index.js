import { combineReducers } from "redux";
import { userReducer } from "./user";
import { ingredientsReducer } from "./ingredients";
import { orderReducer } from "./order";

export const rootReducer = combineReducers({
  user: userReducer,
  ingredients: ingredientsReducer,
  order: orderReducer,
});
