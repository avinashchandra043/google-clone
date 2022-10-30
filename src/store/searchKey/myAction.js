export const initialState = {
  search: "",
};

export const CHANGE_SEARCH = "CHANGE_SEARCH";

export const changeSearch = (search) => {
  return {
    type: CHANGE_SEARCH,
    payload: search,
  };
};
