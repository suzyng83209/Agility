import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addTodo, toggleTodo, setVisibility } from "../actions";
import { Todo as TodoComponent } from "../components/TodoComponent";

const mapStateToProps = state => ({ todos: state });

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  toggleTodo: id => dispatch(toggleTodo(id)),
  setVisibility: filter => dispatch(setVisibility(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);
