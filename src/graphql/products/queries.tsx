import { gql } from "@apollo/client";

export const ALL_PRODUCTS = gql`
  query {
    allProducts {
      id
      name
      quantity
      code
      price
      company
    }
  }
`;

export const GET_PRODUCT = gql`
  query getProduct($id: String!) {
    product(id: $id) {
      id
      name
      quantity
      code
      price
      company
    }
  }
`;
