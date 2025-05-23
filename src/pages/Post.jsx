import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Container, Typography, Box } from "@mui/material";
import dompurify from "dompurify";
import { BounceLoader } from "react-spinners";
import { GET_POST } from "../graphql/queries";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";

export default function Post() {
  const [post, setPost] = useState({});
  const { slug } = useParams();
  const response = useQuery(GET_POST, {
    variables: { slug },
  });

  useEffect(() => {
    setPost({
      title: response.data?.post.title || "",
      cover: response.data?.post.cover.url,
      content: response.data?.post.content.html || "",
      slug: response.data?.post.slug,
      comments: response.data?.post.comment,
      loading: response.loading,
    });
  }, [response]);

  return (
    <Container maxWidth="lg">
      {post.loading ? (
        <Box
          height="80vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <BounceLoader color="#1976D2" size={200} />
        </Box>
      ) : (
        <>
          <Typography
            component="h1"
            variant="h5"
            fontWeight="700"
            color="#111827"
            mb={2}
          >
            {post.title}
          </Typography>
          <img
            style={{
              width: "100%",
              borderRadius: "16px",
              marginBottom: "16px",
            }}
            src={post.cover}
            alt={post.title}
          />
          <Typography
            className="post-content"
            dangerouslySetInnerHTML={{
              __html: dompurify.sanitize(post.content),
            }}
          />
          <CommentForm slug={slug} />
          <CommentList comments={post.comments} />
        </>
      )}
    </Container>
  );
}
