import React from "react";
import { View, Button, StyleSheet, DatePickerAndroid, TimePickerAndroid } from "react-native";

export default (DatePicker = ({ title, defaultDate, onChangeDate, color = "#841584" }) => (
  <Button
    onPress={getDate.bind(null, defaultDate, onChangeDate)}
    title={title}
    color={color}
  />
));

getDate = async function(defaultDate = new Date(), onChangeDate) {
  try {
    const { dateAction, year, month, day } = await DatePickerAndroid.open({
      date: defaultDate
    });
    const { timeAction, hour, minute } = await TimePickerAndroid.open({
      hour: defaultDate.getHours(),
      minute: defaultDate.getMinutes()
    })
    if (dateAction !== DatePickerAndroid.dismissedAction && timeAction !== TimePickerAndroid.dismissedAction && onChangeDate) {
      onChangeDate(new Date(year, month, day, hour, minute));
    }
  } catch ({ code, message }) {
    console.warn("Cannot open date picker", message);
  }
};