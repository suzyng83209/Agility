import { ADD_TODO, TOGGLE_TODO_COMPLETED, TOGGLE_TODO_INSPRINT } from "../actions/types";

const INITIAL_STATE = [{ id: 0, text: "Add a todo", completed: false, dueDate: new Date() }];

export default (todos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { id, text, dueDate } = action
      return [
        ...state,
        {
          id: id,
          text: text,
          dueDate: dueDate,
          completed: false,
          inSprint: false
        }
      ];

    case TOGGLE_TODO_COMPLETED:
      return state.map(
        todo =>
          (todo.id === action.id
            ? { ...todo, completed: !todo.completed }
            : todo)
      );

    case TOGGLE_TODO_INSPRINT:
      return state.map(
        todo =>
          (todo.id === action.id
            ? { ...todo, inSprint: !todo.inSprint }
            : todo)
      );
    default:
      return state;
  }
});
