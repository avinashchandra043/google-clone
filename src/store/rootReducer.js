import { combineReducers } from "@reduxjs/toolkit";
import { myReducer } from "./searchKey/myReducer";
export default combineReducers({
  my: myReducer,
});
