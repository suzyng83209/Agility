import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default (Todo = ({ onPress, completed, inSprint, text, id }) => (
  <Text
    onPress={onPress}
    style={{ paddingLeft: 16, textDecorationLine: completed ? "line-through" : "none" }}
  >
    {text},
    id: {id}
  </Text>
));