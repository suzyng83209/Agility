import React from "react";
import { addTodo } from "../actions";
import { connect } from "react-redux";
import AddTodo from "../components/AddTodo";

const mapStateToProps = state => ({ todos: state });

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
