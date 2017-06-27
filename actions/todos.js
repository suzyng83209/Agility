import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from "./types";

let todoNum = 1;

export const addTodo = todo => ({
  type: ADD_TODO,
  id: todoNum++,
  text: todo
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});
