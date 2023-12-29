import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CustomInput = ({
  value,
  onChange,
  placeholder,
  isSecure,
  onBlur,
  prefixIcon,
  suffixIcon,
  toggleIcon,
}) => {
  return (
    <View style={styles.container}>
      <Ionicons name={prefixIcon} size={20} />
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={onChange}
        secureTextEntry={isSecure}
        onBlur={onBlur}
      />
      {suffixIcon && (
        <Ionicons name={suffixIcon} size={20} onPress={toggleIcon} />
      )}
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
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    padding: 10,
    flex: 1,
  },
  suffixIconStyle: {
    marginRight: 20,
  },
});

export default CustomInput;
