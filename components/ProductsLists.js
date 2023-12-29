import { FlatList } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";

const ProductsLists = ({ products }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id}
      renderItem={({ item }) => <ProductCard product={item} />}
      contentContainerStyle={{ paddingHorizontal: 15 }}
    />
  );
};

export default ProductsLists;
