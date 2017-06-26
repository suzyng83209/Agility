import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { List, ListItem } from "react-native-elements";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  renderTodos = () =>
    this.props.todos.map(todo => (
      <Todo {...todo} onPress={this.props.toggleTodo(todo.id)} />
    ));

  render() {
    return (
      <View style={styles.container}>
        <List>
          <FlatList
            data={this.props.todos.todos}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Todo
                {...item}
                onPress={this.props.toggleTodo.bind(null, item.id)}
              />
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
  }
});
