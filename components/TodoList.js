import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  
  renderTodos = () =>
    this.props.todos.map(todo => (
      <Todo {...todo} onPress={this.props.toggleTodo(todo.id)} />
    ));

  render() {
    const { todos } = this.state;
    const { addTodo, toggleTodo, setVisibility } = this.props;
    return (
      <View style={styles.container}>
        <Text>hello world</Text>
        {this.renderTodos()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  }
});
