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

export const GET_AUTHOR = gql`
  query getAuthor($slug: String!) {
    author(where: { slug: $slug }) {
      firstName
      lastName
      email
      description {
        html
      }
      avatar {
        url
      }
    }
  }
`;
