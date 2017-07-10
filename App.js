import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import store from "./store";
import Footer from "./components/Footer";
import TodoContainer from "./containers/TodoContainer";
import AddTodoContainer from "./containers/AddTodoContainer";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AddTodoContainer />
          <TodoContainer />
          <Footer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
