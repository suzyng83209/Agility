import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from "./types.js";

let todoNum = 0;

export const addTodo = todo => ({
  type: ADD_TODO,
  num: todoNum++,
  todo
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});
