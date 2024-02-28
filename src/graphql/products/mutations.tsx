import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
    
  mutation createProduct(
    $name: String!
    $name: String!
    $code: String!
    $price: String!
    $company: String!
  ) {
    addProduct(
        name: $name,
         quantity: $quantity,
         code: $code,
         price: $price,
         company: $company
         )
         {
         name
         quantity
         code
         price
         company
         }
  }
`;
