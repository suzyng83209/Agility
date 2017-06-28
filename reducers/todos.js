import { ADD_TODO, TOGGLE_TODO_COMPLETED } from "../actions/types";

const INITIAL_STATE = [{ id: 0, text: "Add a todo", completed: false }];

export default (todos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];

    case TOGGLE_TODO_COMPLETED:
      return state.map(
        todo =>
          (todo.id === action.id
            ? { ...todo, completed: !todo.completed }
            : todo)
      );

    default:
      return state;
  }
});
