import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
  GET_CONSTRUCTOR_INGREDIENTS,
  DELETE_CONSTRUCTOR_INGREDIENTS,
  LOOKED_INGREDIENT,
  ADD_GLOW_INGREDIENTS_TAB,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  MOVING_INGREDIENT,
} from "../actions/ingredients";

const initialStateIngredients = {
  allingredients: [],
  constructorIngredients: [],
  lookedIngredient: {},
  glowIngredientsTab: "buns",
  ingredientsLoaded: false,
};

export const ingredientsReducer = (state = initialStateIngredients, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return { ...state, ingredientsLoaded: false };
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        allingredients: action.ingredients,
        ingredientsLoaded: true,
      };
    case GET_INGREDIENTS_ERROR:
      return { ...state, allingredients: [], ingredientsLoaded: false };
    case GET_CONSTRUCTOR_INGREDIENTS:
      return { ...state };
    case DELETE_CONSTRUCTOR_INGREDIENTS:
      return { ...state, constructorIngredients: [] };
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
      return state;
    }
  }
};
