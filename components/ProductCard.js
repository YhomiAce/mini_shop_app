import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ product }) => {
  const { image, title, price } = product;
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      className="w-full bg-white rounded-3xl p-3 my-5"
      onPress={() => navigate("ProductDetail", { product })}
    >
      <View className="bg-white rounded-xl">
        <Image
          source={{ uri: image }}
          className="w-full h-72"
          style={{ resizeMode: "contain" }}
        />
      </View>
      <View className="mt-5">
        <Text className="text-lg font-semibold dark:text-white">{title}</Text>
        <View className="justify-between my-3 flex-row-reverse">
          <Text className="text-2xl font-extrabold">${price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
