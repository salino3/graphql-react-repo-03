import { gql } from "@apollo/client";

export const ALL_DATA = gql`
  query {
    allProducts {
      id
      name
      quantity
      code
      price
      company
    }
    allUsers {
      id
      name
      email
      phone
      gender
      age
    }
  }
`;
