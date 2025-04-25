import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation addComment(
    $fullName: String!
    $email: String!
    $content: String!
    $slug: String!
  ) {
    createComment(
      data: {
        fullName: $fullName
        email: $email
        content: $content
        post: { connect: { slug: $slug } }
      }
    ) {
      id
    }
  }
`;
