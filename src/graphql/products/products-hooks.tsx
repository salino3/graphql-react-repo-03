import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ALL_PRODUCTS, GET_PRODUCT } from "./queries";
import { CREATE_PRODUCT } from "./mutations";
import { ProductProps, initialState } from "@/redux";

export const useProducts = () => {
  const allResult = useQuery(ALL_PRODUCTS);

  const getOneProduct = (id: string) => {
    return useQuery(GET_PRODUCT, {
      variables: { id: id },
    });
  };

  const createProduct = () => {
    const [errorMsg, setErrorMsg] = React.useState(null);
    const [modalMsg, setModalMsg] = React.useState<string | null>(null);
    const [newUserData, setNewUserData] = React.useState<ProductProps>(
      initialState?.product
    );

    const [addProduct] = useMutation(CREATE_PRODUCT, {
      refetchQueries: [{ query: ALL_PRODUCTS }],
      errorPolicy: "all",

      onError: (error) => {
        const errorMessage = error.graphQLErrors[0].message;
        setErrorMsg(errorMessage);
        console.log("here", errorMessage);
      },
      onCompleted: (data) => {
        console.log("newObject: ", data.addProduct);
        setNewUserData(data.addProduct);
        setModalMsg("Product created!");
      },
    });

    const clearModal = () => {
      setTimeout(() => {
        setModalMsg(null);
      }, 2000);
    };

    const clearError = () => {
      setTimeout(() => {
        setErrorMsg(null);
      }, 5000);
    };
    return {
      addProduct,
      errorMsg,
      clearError,
      modalMsg,
      clearModal,
      newUserData,
    };
  };

  return { allResult, getOneProduct, createProduct };
};
