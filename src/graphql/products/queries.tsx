import {gql} from '@apollo/client';

export const ALL_ARRAYS = gql`
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

