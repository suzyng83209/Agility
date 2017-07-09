import React from "react";
import { connect } from "react-redux";
import { View, Text, Button, TextInput, StyleSheet, DatePickerAndroid } from "react-native";

export default class AddTodo extends React.Component {
  state = { todoName: "Add Todo",
            date: new Date() };

  onTodoAdd = () => {
    const { todoName } = this.state;
    if (todoName.length) {
      this.props.addTodo(todoName);
      this.setState(() => ({ todoName: "" }));
    }
  };

  getDate = async function() {
    const { date } = this.state;
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: date
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({ date: new Date(year, month, day) });
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.addTodo}>
          <TextInput
            style={{ height: 40 }}
            onChangeText={todoName => this.setState({ todoName })}
            value={this.state.todoName}
          />
          <Button onPress={this.onTodoAdd} title="Add" color="#841584" />
          <Button onPress={this.getDate.bind(this)} title="Set Due Date" color="#841584" />
          <Text>
            {this.state.date.toString()}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 22
  },
  addTodo: {
    flex: 1,
    width: 250,
    alignSelf: "center"
  }
});
