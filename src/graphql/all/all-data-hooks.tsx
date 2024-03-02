import { useQuery } from "@apollo/client";
import { ALL_DATA } from "./queries";

export const useAllData = () => {
  const result = useQuery(ALL_DATA);
  return result;
};
