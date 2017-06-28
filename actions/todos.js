import { ADD_TODO, TOGGLE_TODO_COMPLETED, SET_VISIBILITY_FILTER } from "./types";

let todoNum = 1;

export const addTodo = todo => ({
  type: ADD_TODO,
  id: todoNum++,
  text: todo
});

export const toggleTodoCompleted = id => ({
  type: TOGGLE_TODO_COMPLETED,
  id
});
