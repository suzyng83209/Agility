import React from "react";
import { connect } from "react-redux";
import { View, Button, TextInput, StyleSheet } from "react-native";

export default class AddTodo extends React.Component {
  state = { todo: "Add Todo" };

  onTodoAdd = () => {
    const { todo } = this.state;
    if (todo.length) {
      this.props.addTodo(todo);
      this.setState(() => ({ todo: "" }));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40 }}
          onChangeText={todo => this.setState({ todo })}
          value={this.state.todo}
        />
        <Button onPress={this.onTodoAdd} title="Add" color="#841584" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 22
  }
});
