import React from "react";
import { View, Text, Stylesheet } from "react-native";

export default (Todo = ({ onPress, completed, text, id }) => (
  <Text
    onPress={onPress}
    style={{ textDecorationLine: completed ? "line-through" : "none" }}
  >
    {text},
    id: {id}
  </Text>
));
