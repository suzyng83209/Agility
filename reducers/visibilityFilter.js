import { SET_VISIBILITY_FILTER, SHOW_ALL } from "../actions/types";

export default (visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
});
