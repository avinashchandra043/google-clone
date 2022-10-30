import { initialState } from "./myAction";

export const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
