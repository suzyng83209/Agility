import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addTodo, toggleTodoCompleted, setVisibility } from "../actions";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = state => ({ todos: getVisibleTodos(state.todos, state.visibilityFilter)});

const mapDispatchToProps = dispatch => ({
  toggleTodoCompleted: id => dispatch(toggleTodoCompleted(id)),
  setVisibility: filter => dispatch(setVisibility(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);