import React from "react";
import { addTodo } from "../actions";
import AddTodo from "../components/AddTodo";

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo))
});

export default connect({}, mapDispatchToProps)(AddTodo);
