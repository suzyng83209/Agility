import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    const { todos, addTodo, toggleTodo, setVisibility } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={todos}
          renderItem={({ todo }) => <Todo onPress={toggleTodo(todo.id)} />}
        />
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
