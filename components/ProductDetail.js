import React from "react";
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { AirbnbRating } from "react-native-ratings";

export function ProductDetails({ product }) {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <Image
          source={{ uri: product.image }}
          resizeMode="contain"
          className="w-full h-72"
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.title}</Text>
          <View className="mb-4">
            <AirbnbRating
              style={{ paddingVertical: 10, columnGap: 2 }}
              showRating={false}
              size={20}
              defaultRating={product.rating.rate}
            />
          </View>
          <View className="flex-row justify-between mb-4">
            <Text style={styles.price}>${product.price}</Text>
            <Text style={styles.category}>Category: {product.category}</Text>
          </View>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontFamily: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    fontFamily: "semiBold",
  },
  category: {
    fontFamily: "italic",
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#787878",
    marginBottom: 16,
    fontFamily: "regular",
  },
});
