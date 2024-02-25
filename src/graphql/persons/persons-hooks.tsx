import { useQuery } from "@apollo/client";
import {ALL_PRODUCTS} from './queries';



export const useProduct = () => {
  const result = useQuery(ALL_PRODUCTS);
  return result;
};

