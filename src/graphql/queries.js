import { gql } from "@apollo/client";

export const GET_AUTHORS = gql`
  query {
    authors {
      id
      firstName
      lastName
      slug
      avatar {
        url
      }
    }
  }
`;
