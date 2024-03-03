import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useLazyQuery } from "@apollo/client";
import { ALL_PRODUCTS, GET_PRODUCT } from "./queries";
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./mutations";
import { ProductProps, initialState } from "@/redux";

export const useProducts = () => {
  const allResult = useQuery(ALL_PRODUCTS, {
    errorPolicy: "all",
    onError: (error) => {
      const errorMessage = error.graphQLErrors[0]?.message;
      console.log("error", errorMessage);
    },
    onCompleted: (data) => {
      console.log("OK>>", data);
    },
  });

  //
  const getOneProduct = () => {
    const [currentProduct, setCurrentProduct] = React.useState<ProductProps>(
      initialState?.product
    );
    const [getProduct, { loading: productLoading }] = useLazyQuery(
      GET_PRODUCT,
      {
        errorPolicy: "all",
        onError: (error) => {
          const errorMessage = error.message;
          console.log("error", errorMessage);
        },
        onCompleted: (data) => {
          setCurrentProduct(data?.getProduct);
          console.log("Product reached: ", data?.getProduct);
        },
      }
    );

    return { currentProduct, getProduct, productLoading };
  };

  //
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
        const errorMessage = error.graphQLErrors[0]?.message;
        setErrorMsg(errorMessage);
        console.log("error", errorMessage);
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

  //
  const deleteProduct = useMutation(DELETE_PRODUCT, {
    onError: (error) => {
      const errorMessage = error.graphQLErrors[0]?.message;
      console.log("error", errorMessage);
    },
    onCompleted: (data) => {
      console.log("deleted: ", data.deleteProduct);
    },
    refetchQueries: [{ query: ALL_PRODUCTS }],
    errorPolicy: "all",
  })[0];

  const deleteOneProduct = (id: string) => {
    deleteProduct({ variables: { id: id } });
  };

  //
  const [updateProduct] = useMutation(UPDATE_PRODUCT, {
    errorPolicy: "all",

    onError: (error) => {
      const errorMessage = error.graphQLErrors[0]?.message;
      console.log("Error: ", errorMessage);
    },
    onCompleted: (data) => {
      console.log("Product updated: ", data.updateProduct);
    },
  });

  const updateDataProduct = (obj: ProductProps) => {
    const { id, name, quantity, code, price, company } = obj;
    updateProduct({
      variables: { id, name, quantity, code, price, company },
    });
  };

  return {
    allResult,
    getOneProduct,
    createProduct,
    deleteOneProduct,
    updateDataProduct,
  };
};
