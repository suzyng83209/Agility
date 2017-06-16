import { SET_VISIBILITY_FILTER } from "../actions/types";

const DEFAULT_STATE = "SHOW_ALL";

export default (visibilityFilter = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
});
