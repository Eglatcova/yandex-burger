import { combineReducers } from "redux";
import { ingredientsReducer, orderReducer } from "./all";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
});
