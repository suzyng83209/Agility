import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addTodo, toggleTodo, setVisibility } from "../actions";
import TodoList from "../components/TodoList";

const mapStateToProps = state => ({ todos: state });

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  setVisibility: filter => dispatch(setVisibility(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);