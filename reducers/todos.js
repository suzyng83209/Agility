import { ADD_TODO, TOGGLE_TODO } from "../actions/types";

export default (todos = (state = [{id: 500, text: "hello World", completed: "false" }], action) => {
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

    case TOGGLE_TODO:
      return state.map(todo => todo.id === action.id)
        ? { ...todo, completed: !todo.completed }
        : todo;

    default:
      return state;
  }
});
