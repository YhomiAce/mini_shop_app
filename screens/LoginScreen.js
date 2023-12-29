import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import Logo from "../assets/images/shopping.gif";
import { useLoginMutation } from "../services/authApi";
import { Formik } from "formik";
import * as Yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState({
    showPassword: false,
    obsecureText: true,
  });
  const { height } = useWindowDimensions();

  // form schema validation
  const validationSchema = Yup.object({
    username: Yup.string().trim().required("This is a required field"),
    password: Yup.string()
      .required("This is a required field")
      .min(6, "Password character is too short"),
  });

  // rtk login mutation
  const [login, { isSuccess, data, error, isError }] = useLoginMutation();

  // show error message alert
  const showErrorMessage = (message) => {
    Alert.alert("Oops Something went wrong", message, [
      {
        text: "Cancel",
      },
    ]);
  };

  // show success  alert
  const showSuccessMessage = () => {
    Alert.alert("Welldone", 'Login Successful', [
      {
        text: "Continue",
        onPress: () => navigation.navigate("Home")
      },
    ]);
  };

  // make api request to fake store login api
  const onSignIn = async (values, setSubmitting) => {
    await login(values);
    setSubmitting(false);
  };

  // show alert error when there is an error
  useEffect(() => {
    if (isError && error) {
      showErrorMessage(error.data);
    }
  }, [isError, error]);

  const storeTokenInLocalStorage = async (token) => {
    try {
      await AsyncStorage.setItem('token', token);
      showSuccessMessage();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(isSuccess && data){
      console.log(data.token);
      storeTokenInLocalStorage(data.token);
    }
  },[data, isSuccess]);

  console.log({ data, isSuccess, error });

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <Text style={styles.loginText}>Login To App</Text>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            onSignIn(values, setSubmitting);
          }}
        >
          {({
            handleChange,
            errors,
            handleBlur,
            values,
            isSubmitting,
            handleSubmit,
            touched,
          }) => (
            <View style={{ flex: 1, marginHorizontal: 20 }}>
              <CustomInput
                placeholder="Username"
                value={values.username}
                onChange={handleChange("username")}
                onBlur={handleBlur("username")}
                prefixIcon="person"
              />
              {touched.username && errors.username && (
                <Text style={styles.error}>{errors.username}</Text>
              )}
              <CustomInput
                placeholder="Password"
                value={values.password}
                onChange={handleChange("password")}
                onBlur={handleBlur("password")}
                isSecure={visible.obsecureText}
                prefixIcon="lock-closed"
                suffixIcon={visible.showPassword ? "eye-off" : "eye"}
                toggleIcon={() =>
                  setVisible({
                    obsecureText: visible.showPassword,
                    showPassword: !visible.showPassword,
                  })
                }
              />
              {touched.password && errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
              <CustomButton
                title="SignIn"
                onPress={handleSubmit}
                type="Primary"
                isLoading={isSubmitting}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 400,
    maxHeight: 200,
    marginBottom: 20,
  },
  loginText: {
    marginBottom: 20,
    fontSize: 20,
    fontFamily: "bold",
    textAlign: "center",
  },
  error: {
    color: "red",
    fontSize: 12,
    fontFamily: "regular",
  },
});

export default LoginScreen;
