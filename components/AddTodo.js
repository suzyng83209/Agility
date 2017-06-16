import React from "react";
import { connect } from "react-redux";
import { View, Button, TextInput } from "react-native";

export default class AddTodo extends React.Component {
  state = { todo: "" };

  onTodoAdd = () => {
    const { todo } = this.state;
    if (todo.length) {
      this.props.addTodo(todo);
    }
  };

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40 }}
          placeholder="Add Todo"
          onChangeText={todo => this.setState({ todo })}
        />
        <Button onPress={this.onTodoAdd} title="Add" color="#841584" />
      </View>
    );
  }
}
