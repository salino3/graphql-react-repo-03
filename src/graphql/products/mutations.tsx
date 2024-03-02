import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation createProduct(
    $name: String!
    $quantity: Int!
    $code: String!
    $price: Float!
    $company: String!
  ) {
    addProduct(
      name: $name
      quantity: $quantity
      code: $code
      price: $price
      company: $company
    ) {
      name
      quantity
      code
      price
      company
    }
  }
`;
