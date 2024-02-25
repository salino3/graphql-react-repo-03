import {gql} from '@apollo/client';

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

