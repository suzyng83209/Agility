import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

export default (todoApp = combineReducers({
  todos,
  visibilityFilter
}));
