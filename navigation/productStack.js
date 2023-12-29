import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ProductScreen from "../screens/ProductScreen";

const Stack = createStackNavigator();

const ProductStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={({ navigation }) => ({
          title: "Product details",
          headerTitleStyle: { fontSize: 20 },
        })}
      />
    </Stack.Navigator>
  );
};

export default ProductStackNavigator;
