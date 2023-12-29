import React from "react";
import { useRoute } from "@react-navigation/native";
import { ProductDetails } from "../components/ProductDetail";

const ProductDetailScreen = () => {
  const { params } = useRoute();
  return <ProductDetails product={params.product} />;
};

export default ProductDetailScreen;
