import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Container, Avatar, Box, Typography, Grid } from "@mui/material";
import dompurify from "dompurify";
import { GET_AUTHOR } from "../graphql/queries";
import AuthorRelatedPost from "../components/AuthorRelatedPost";

export default function Author() {
  const { slug } = useParams();
  const [author, setAuthor] = useState({});
  const response = useQuery(GET_AUTHOR, {
    variables: { slug },
  });

  useEffect(() => {
    setAuthor(response);
  }, [response]);

  console.log(author);
  return (
    <Container maxWidth="lg">
      <Box textAlign="center" sx={{ mb: 5 }}>
        <Avatar
          sx={{ mx: "auto", width: "200px", height: "200px" }}
          alt={author.data?.author.slug}
          src={author.data?.author.avatar.url}
        />
      </Box>
      <Typography
        textAlign="center"
        component="h2"
        fontSize="2rem"
        fontWeight="700"
        mb={5}
      >{`${author.data?.author.firstName} ${author.data?.author.lastName}`}</Typography>
      <Typography
        border="1px solid #ccc"
        padding={3}
        borderRadius={2}
        boxShadow="0 0 10px rgba(0,0,0,0.1)"
        bgcolor="#fff"
        mb={4}
        className="author-description"
        dangerouslySetInnerHTML={{
          __html: dompurify.sanitize(author.data?.author.description.html),
        }}
      />
      <Typography variant="h5" fontWeight="700" mb={2}>
        پست‌های این نویسنده:
      </Typography>
      <Grid container gap={2}>
        {author.data?.author.post.map(post => (
          <AuthorRelatedPost key={post.id} post={post} />
        ))}
      </Grid>
    </Container>
  );
}
