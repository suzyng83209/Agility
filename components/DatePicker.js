import React from "react";
import { View, Button, StyleSheet, DatePickerAndroid } from "react-native";

export default (DatePicker = ({ title, defaultDate, onChangeDate, color = "#841584" }) => (
  <Button
    onPress={getDate.bind(null, defaultDate, onChangeDate)}
    title={title}
  />
));

getDate = async function(defaultDate = new Date(), onChangeDate) {
  try {
    const { action, year, month, day } = await DatePickerAndroid.open({
      date: defaultDate
    });
    if (action !== DatePickerAndroid.dismissedAction && onChangeDate) {
      onChangeDate(new Date(year, month, day));
    }
  } catch ({ code, message }) {
    console.warn("Cannot open date picker", message);
  }
};