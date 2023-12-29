import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateToken } from "../store/authSlice";
import ProductStackNavigator from "./productStack";
import AuthStackNavigator from "./authStack";

const NavigationComponent = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  // get token from storage
  const isAuthenticated = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        dispatch(updateToken(token));
      }
    } catch (error) {}
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <ProductStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default NavigationComponent;
