import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addTodo, toggleTodoCompleted, toggleTodoInSprint, setVisibility } from "../actions";
import TodoList from "../components/TodoList";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE, SHOW_INSPRINT } from "../actions/types";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    case SHOW_INSPRINT:
      return todos.filter(t => t.inSprint)
  }
}

const mapStateToProps = state => ({ todos: getVisibleTodos(state.todos, state.visibilityFilter)});

const mapDispatchToProps = dispatch => ({
  toggleTodoCompleted: id => dispatch(toggleTodoCompleted(id)),
  toggleTodoInSprint: id => dispatch(toggleTodoInSprint(id)),
  setVisibility: filter => dispatch(setVisibility(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);