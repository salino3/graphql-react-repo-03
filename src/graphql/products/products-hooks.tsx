import { useQuery } from "@apollo/client";
import { ALL_ARRAYS } from "./queries";



export const useProduct = () => {
  const result = useQuery(ALL_ARRAYS);
  return result;
};

