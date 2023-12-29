import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const CustomInput = ({ value, setValue, placeholder, isSecure }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={setValue}
        secureTextEntry={isSecure}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    padding: 10,
  },
});

export default CustomInput;
