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
      id
      name
      quantity
      code
      price
      company
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: String!) {
    deleteProduct(id: $id) {
      id
      name
      quantity
      code
      price
      company
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $id: String!
    $name: String
    $quantity: Int
    $code: String
    $price: Float
    $company: String
  ) {
    updateProduct(
      id: $id
      name: $name
      quantity: $quantity
      code: $code
      price: $price
      company: $company
    ) {
      id
      name
      quantity
      code
      price
      company
    }
  }
`;
