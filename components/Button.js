import React from "react";
import { Stylesheet, Button } from "react-native";

export default (Button = ({ children, onPress }) => (
  <Button style={styles.button} onPress={onPress}>{children}</Button>
));

const styles = StyleSheet.create({
  button: {
    padding: 16
  }
});
