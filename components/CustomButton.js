import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ title, onPress, type, bgColor, fgColor }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    margin: 5,
    alignItems: "center",
    borderRadius: 5,
  },
  container_Primary: {
    backgroundColor: "#3b71f3",
  },
  container_Tertiary: {},
  container_Secondary: {
    borderColor: "#3b71f3",
    borderWidth: 2,
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
  },
  text_Tertiary: {
    color: "gray",
  },
  text_Secondary: {
    color: "#3b71f3",
  },
});

export default CustomButton;
