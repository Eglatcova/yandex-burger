import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_ERROR,
  GET_CONSTRUCTOR_INGREDIENTS,
  LOOKED_INGREDIENT,
  ADD_GLOW_INGREDIENTS_TAB,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  MOVING_INGREDIENT,
} from "../actions";

const initialStateIngredients = {
  allingredients: [],
  constructorIngredients: [],
  lookedIngredient: {},
  glowIngredientsTab: "buns",
};

const initialStateOrder = {
  orderNumber: "",
};

export const ingredientsReducer = (state = initialStateIngredients, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return { ...state };
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        allingredients: action.ingredients,
      };
    case GET_INGREDIENTS_ERROR:
      return { ...state, allingredients: [] };
    case GET_CONSTRUCTOR_INGREDIENTS:
      return { ...state };
    case LOOKED_INGREDIENT:
      return { ...state, lookedIngredient: action.lookedIngredient };
    case ADD_GLOW_INGREDIENTS_TAB: {
      return { ...state, glowIngredientsTab: action.tabName };
    }
    case ADD_INGREDIENT: {
      const ingredients = [...state.constructorIngredients];
      if (action.item.type === "bun") {
        return {
          ...state,
          constructorIngredients: [
            ...ingredients.filter((elem) => elem.type !== "bun"),
            action.item,
            action.item,
          ],
        };
      } else {
        return {
          ...state,
          constructorIngredients: [action.item, ...ingredients],
        };
      }
    }
    case DELETE_INGREDIENT: {
      const ingredients = [...state.constructorIngredients];
      ingredients.splice(ingredients.indexOf(action.item), 1);

      return {
        ...state,
        constructorIngredients: ingredients,
      };
    }

    case MOVING_INGREDIENT: {
      const ingredients = [...state.constructorIngredients];
      const { fromIndex, toIndex } = action;
      const element = ingredients[fromIndex];
      ingredients.splice(fromIndex, 1);
      ingredients.splice(toIndex, 0, element);

      return { ...state, constructorIngredients: ingredients };
    }

    default: {
      return { ...state };
    }
  }
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
      return { ...state };
    }
  }
};
