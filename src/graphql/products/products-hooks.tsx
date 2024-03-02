import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ALL_PRODUCTS, GET_PRODUCT } from "./queries";
import { CREATE_PRODUCT } from "./mutations";

export const useProducts = () => {
  const allResult = useQuery(ALL_PRODUCTS);

  const getOneProduct = useQuery(GET_PRODUCT);

  const createProduct = () => {
    const [errorMsg, setErrorMsg] = React.useState(null);

    const [product] = useMutation(CREATE_PRODUCT, {
      refetchQueries: [{ query: ALL_PRODUCTS }],
      onError: (error) => {
        const errorMessage = error.graphQLErrors[0].message;
        setErrorMsg(errorMessage);
        console.log("here", errorMessage);
      },
      onCompleted: () => {
        console.log("Refetched user list");
      },
    });

    const clearError = () => {
      setTimeout(() => {
        setErrorMsg(null);
      }, 5000);
    };
    return { product, errorMsg, clearError };
  };

  return { allResult, getOneProduct, createProduct };
};
