import { useQuery } from "@apollo/client";
import { ALL_PRODUCTS, GET_PRODUCT } from "./queries";

export const useProducts = () => {
  const allResult = useQuery(ALL_PRODUCTS);

  const getOneProduct = (id: string) => {
    return useQuery(GET_PRODUCT, {
      variables: { id: id },
    });
  };
  // const createProduct = () => {
  //   const [errorMsg, setErrorMsg] = React.useState(null);
  //   const [modalMsg, setModalMsg] = React.useState<boolean>(false);

  //   const [product] = useMutation(CREATE_PRODUCT, {
  //     refetchQueries: [{ query: ALL_PRODUCTS }],
  //     onError: (error) => {
  //       const errorMessage = error.graphQLErrors[0].message;
  //       setErrorMsg(errorMessage);
  //       console.log("here", errorMessage);
  //     },
  //     onCompleted: () => {
  //       console.log("Refetched user list");
  //       setModalMsg(true);
  //     },
  //   });

  //   const clearModal = () => {
  //     setTimeout(() => {
  //       setModalMsg(false);
  //     }, 3000);
  //   };

  //   const clearError = () => {
  //     setTimeout(() => {
  //       setErrorMsg(null);
  //     }, 5000);
  //   };
  //   return { product, errorMsg, clearError, clearModal };
  // };

  return { allResult, getOneProduct };
};
