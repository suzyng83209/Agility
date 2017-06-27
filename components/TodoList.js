import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { List, ListItem } from "react-native-elements";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  renderTodos = () => {
    const { todos, toggleTodo } = this.props;
    todos.map(todo => <Todo {...todo} onPress={toggleTodo(todo.id)} />);
  };

  render() {
    const { todos, toggleTodo } = this.props;
    return (
      <View style={styles.container}>
        <List>
          <FlatList
            data={todos}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Todo {...item} onPress={toggleTodo.bind(null, item.id)} />

              </View>
            )}
          />
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    paddingTop: 22
  },
  listItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16
  }
});
