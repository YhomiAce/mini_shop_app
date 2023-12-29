import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFetchProductsQuery } from "../services/productApi";
import Spinner from "../components/Spinner";
import ProductsLists from "../components/ProductsLists";

const ProductScreen = () => {
  const { data, isFetching } = useFetchProductsQuery();
  return (
    <SafeAreaView>
      {isFetching && !data ? <Spinner /> : <ProductsLists products={data} />}
    </SafeAreaView>
  );
};

export default ProductScreen;
