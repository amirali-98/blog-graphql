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
      post {
        id
        title
        slug
        cover {
          url
        }
      }
    }
  }
`;

export const GET_POSTS = gql`
  query {
    posts {
      id
      title
      slug
      cover {
        url
      }
      author {
        id
        slug
        firstName
        lastName
        avatar {
          url
        }
      }
    }
  }
`;

export const GET_POST = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      id
      slug
      title
      cover {
        url
      }
      content {
        html
      }
      author {
        id
        slug
        firstName
        lastName
        avatar {
          url
        }
      }
      comment {
        id
        fullName
        email
        content
      }
    }
  }
`;
