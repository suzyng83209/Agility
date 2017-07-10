import { ADD_TODO, TOGGLE_TODO_COMPLETED, TOGGLE_TODO_INSPRINT, SET_VISIBILITY_FILTER } from "./types";

let todoNum = 1;

export const addTodo = todo => ({
  type: ADD_TODO,
  id: todoNum++,
  text: todo.text,
  dueDate: todo.dueDate
});

export const toggleTodoCompleted = id => ({
  type: TOGGLE_TODO_COMPLETED,
  id
});

export const toggleTodoInSprint = id => ({
  type: TOGGLE_TODO_INSPRINT,
  id
});