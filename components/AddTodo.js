import React from "react";
import { connect } from "react-redux";
import DatePicker from "./DatePicker";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  DatePickerAndroid
} from "react-native";
import Moment from "moment"

export default class AddTodo extends React.Component {
  state = {
    todoName: "Add Todo",
    date: new Date()
  };

  onTodoAdd = () => {
    const { todoName, date } = this.state;
    if (todoName.length) {
      this.props.addTodo({
        text: todoName,
        dueDate: date
      });
      this.setState(() => ({ todoName: "" }));
    }
  };

  render() {
    const { todoName, date } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.addTodo}>
          <TextInput
            style={{ height: 40 }}
            onChangeText={todoName => this.setState({ todoName })}
            value={this.state.todoName}
          />
          <Button onPress={this.onTodoAdd} title="Add" color="#841584" />
          <DatePicker
            title="Set Due Date"
            defaultDate={date}
            onChangeDate={date => this.setState({date})}
          />
          <Text>
            {Moment(date).format("MMM D h a")}
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
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 22
  },
  addTodo: {
    flex: 1,
    width: 270,
    alignSelf: "center"
  }
});
