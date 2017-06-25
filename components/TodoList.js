import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  state = { todos: [] };

  componentDidMount = () => this.setState(() => ({ todos: this.props.todos }));

  render() {
    const { todos } = this.state;
    const { addTodo, toggleTodo, setVisibility } = this.props;
    return (
      <View style={styles.container}>
        <Text>hello world</Text>
        <FlatList
          data={todos}
          extraData={todos}
          renderItem={({ todo }) => (
            <Todo onPress={toggleTodo(todo.id)} {...todo} />
          )}
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
