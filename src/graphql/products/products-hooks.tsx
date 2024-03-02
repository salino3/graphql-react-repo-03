import { useQuery } from "@apollo/client";
import { ALL_PRODUCTS } from "./queries";

export const useProducts = () => {
  const allResult = useQuery(ALL_PRODUCTS);

  return { allResult };
};
