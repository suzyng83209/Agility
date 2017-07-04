import React from "react";
import { StyleSheet, Text, View, Button, DatePickerAndroid } from "react-native";

export default class DatePicker extends React.Component {
  state = {date: new Date()};

  render() {
    const { date } = this.state;
    return (
      <View style={styles.container}>
        <Button onPress={this.getDate.bind(null, date)} title="fdfsdf"/>
        <Text>
          {date.toString()}
        </Text>
      </View>
    );
  }
  
  getDate = async function (defaultDate) {
    debugger;
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: defaultDate
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
        defaultDate = new Date(year, month, day);
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  }
});
