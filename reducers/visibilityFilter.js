import { SET_VISIBILITY_FILTER } from "../actions/types";

const SHOW_ALL = "SHOW_ALL";
const SHOW_UNCOMPLETED = "SHOW_UNCOMPLETED";

export default (visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
});
